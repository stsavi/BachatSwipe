// scripts/validate_card_data.js

/**
 * Validation script for card data modules.
 * Loads all files under ./cards_data/*_cards_data.js and checks:
 *  - base_rate matches earning_display
 *  - value_per_unit is expressed in INR and is optimal
 *  - no duplicate card ids across banks
 *  - base_exclusions contain only known categories
 *  - annual_fee and fee_waiver_criteria are logical
 */

const fs = require('fs');
const path = require('path');

const CARD_DATA_DIR = path.resolve(__dirname, '..', 'cards_data');
const KNOWN_EXCLUSIONS = [
    'fuel', 'wallet_loads', 'rent', 'insurance', 'utilities', 'utility', 'government',
    'emi', 'jewellery', 'wallet', 'wallet_load', 'wallet_loads',
    'cash_withdrawal', 'railway_tickets', 'government_payments', 'education', 'utility_bills'
];

function loadCardModules() {
    const modules = [];
    const files = fs.readdirSync(CARD_DATA_DIR);
    files.forEach((file) => {
        if (file.endsWith('_cards_data.js')) {
            const modulePath = path.join(CARD_DATA_DIR, file);
            // Use require to load the exported array
            const data = require(modulePath);
            // The exported name varies (e.g., axisCardsData, iciciCardsData)
            const cards = data.default || data[Object.keys(data)[0]];
            modules.push({ file, cards });
        }
    });
    return modules;
}

function parseEarningDisplay(display) {
    // Handles various formats like:
    //   "12 Edge Miles per ₹200"
    //   "4 CV Points per ₹200"
    //   "5% Cashback"
    //   "2% on bill payments, 5% on select categories"
    //   "10X on select partners, 5X on online shopping"
    const lower = display.toLowerCase();
    // Direct pattern with unit and per amount (e.g., Edge Miles, CV Points)
    const match = lower.match(/([\d.]+)\s*([a-z\s%]+?)\s*per\s*₹?(\d+)/);
    if (match) {
        const amount = parseFloat(match[1]);
        const unit = match[2].trim();
        const per = parseInt(match[3], 10);
        return { amount, unit, per };
    }
    // Simple percentage cashback
    const simple = lower.match(/([\d.]+)%\s*cashback/);
    if (simple) {
        return { amount: parseFloat(simple[1]), unit: '%', per: 100 };
    }
    // Generic percentage (e.g., "1.5% elsewhere")
    const genericPct = lower.match(/([\d.]+)%\s*elsewhere/);
    if (genericPct) {
        return { amount: parseFloat(genericPct[1]), unit: '%', per: 100 };
    }
    // Composite percentages (first percentage as estimate)
    const composite = lower.match(/([\d.]+)%/);
    if (composite) {
        return { amount: parseFloat(composite[1]), unit: '%', per: 100 };
    }
    // If none matched, return null
    return null;
}

function validate() {
    const modules = loadCardModules();
    const seenIds = new Set();
    const errors = [];

    modules.forEach(({ file, cards }) => {
        cards.forEach((card) => {
            const {
                id, name, base_rate, earning_display, value_per_unit,
                reward_type, fee_waiver_criteria, annual_fee, base_exclusions
            } = card;

            // Duplicate ID check
            if (seenIds.has(id)) {
                errors.push(`${file}: Duplicate card id "${id}"`);
            } else {
                seenIds.add(id);
            }

            // Base rate vs earning display consistency
            const parsed = parseEarningDisplay(earning_display);
            if (parsed) {
                const expectedRate = parsed.amount / parsed.per;
                const diff = Math.abs(expectedRate - base_rate);
                if (diff > 0.001) {
                    errors.push(`${file} (${name}): base_rate ${base_rate} does not match earning_display "${earning_display}"`);
                }
            } else {
                errors.push(`${file} (${name}): Unable to parse earning_display "${earning_display}"`);
            }

            // value_per_unit optimal INR check
            if (/cashback|cash/.test(reward_type.toLowerCase())) {
                if (value_per_unit !== 1.0) {
                    errors.push(`${file} (${name}): Cashback value_per_unit should be 1.0 (INR) but is ${value_per_unit}`);
                }
            } else {
                if (typeof value_per_unit !== 'number' || value_per_unit <= 0) {
                    errors.push(`${file} (${name}): value_per_unit should be positive number, got ${value_per_unit}`);
                }
            }

            // base_exclusions validation
            if (Array.isArray(base_exclusions)) {
                base_exclusions.forEach((ex) => {
                    if (!KNOWN_EXCLUSIONS.includes(ex)) {
                        errors.push(`${file} (${name}): unknown exclusion "${ex}"`);
                    }
                });
            }

            // fee waiver criteria logical check
            if (fee_waiver_criteria) {
                const spendMatch = fee_waiver_criteria.match(/₹?([\d,]+)\s*L/);
                if (!spendMatch) {
                    const numMatch = fee_waiver_criteria.match(/₹?([\d,]+)/);
                    if (!numMatch) {
                        errors.push(`${file} (${name}): fee_waiver_criteria "${fee_waiver_criteria}" does not contain a spend amount`);
                    }
                }
            }

            // annual fee logical check
            if (typeof annual_fee !== 'number' || annual_fee < 0) {
                errors.push(`${file} (${name}): annual_fee should be non‑negative number, got ${annual_fee}`);
            }
        });
    });

    if (errors.length === 0) {
        console.log('Card data validation passed – no issues found.');
    } else {
        console.log('Card data validation found issues:');
        errors.forEach((e) => console.log('- ' + e));
        process.exit(1);
    }
}

validate();
