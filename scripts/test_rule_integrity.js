import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const RULES_DIR = path.resolve(__dirname, '../rules');

async function checkRules() {
    console.log("Starting Rule Integrity Check...");
    const banks = fs.readdirSync(RULES_DIR).filter(f => fs.statSync(path.join(RULES_DIR, f)).isDirectory());
    let hasErrors = false;

    for (const bank of banks) {
        const bankDir = path.join(RULES_DIR, bank);
        const files = fs.readdirSync(bankDir).filter(f => f.endsWith('.js'));

        for (const file of files) {
            const filePath = path.join(bankDir, file);
            // Handling Windows paths for import()
            const fileUrl = 'file:///' + filePath.split(path.sep).join('/');

            try {
                const module = await import(fileUrl);
                const exports = Object.values(module);
                let rulesFound = false;

                for (const exportVal of exports) {
                    if (Array.isArray(exportVal)) {
                        if (exportVal.length === 0) {
                            // Empty array is valid but warn
                            continue;
                        }
                        if (exportVal[0].id && exportVal[0].rule_type) {
                            rulesFound = true;
                            // Validate each rule
                            exportVal.forEach(rule => {
                                const hasMap = rule.reward_multiplier_map || rule.cashback_rate_map || rule.instant_discount_rate_map;
                                const hasDeprecatedArray = rule.reward_multipliers || rule.cashback_rates || rule.applies_to_cards;

                                // Strict check: Must have map, must NOT have array
                                if (hasDeprecatedArray) {
                                    console.error(`❌ Rule ${rule.id} in ${bank}/${file} uses DEPRECATED array format (reward_multipliers/applies_to_cards). Use maps.`);
                                    hasErrors = true;
                                }

                                if (!hasMap) {
                                    // Check if it's a placeholder rule or something valid without map? 
                                    // Generally all active rules need a map.
                                    // We verify if it has benefit type that requires one.
                                    if (rule.benefit_type) {
                                        console.error(`❌ Rule ${rule.id} in ${bank}/${file} is missing required rate/multiplier map.`);
                                        hasErrors = true;
                                    }
                                }

                                // Check for malformed map (e.g. if I messed up replacement and made it null or empty object)
                                if (hasMap && Object.keys(hasMap).length === 0) {
                                    console.warn(`⚠️ Rule ${rule.id} in ${bank}/${file} has an empty map.`);
                                }
                            });
                        }
                    }
                }

                if (!rulesFound) {
                    console.warn(`⚠️ No rule array found in ${bank}/${file}. Check if it exports a rule array.`);
                } else {
                    console.log(`✅ ${bank}/${file} passed integrity check.`);
                }

            } catch (err) {
                console.error(`❌ Failed to load ${bank}/${file}:`, err.message);
                hasErrors = true;
            }
        }
    }

    if (hasErrors) {
        console.error("FAILED: Rule integrity checks failed.");
        process.exit(1);
    } else {
        console.log("SUCCESS: All rules verified!");
    }
}

checkRules();
