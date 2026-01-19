// engine/ruleMatcher.js
// Finds applicable rules for a given transaction and card

/**
 * Rule Matcher Module
 * Responsible for finding all rules that apply to a specific transaction
 */

/**
 * Find all rules that match the given criteria
 * @param {Object} transaction - Transaction details {merchant, category, amount}
 * @param {Object} card - Card object
 * @param {string} method - Payment method: 'direct', 'portal', 'voucher'
 * @param {string|null} platform - Platform name (e.g., 'SmartBuy', 'Travel Edge')
 * @param {Array} allRules - All available rules
 * @returns {Array} Array of matching rules, sorted by priority
 */
export function findMatchingRules(transaction, card, method, platform, allRules) {
    if (!transaction || !card || !allRules) {
        return [];
    }

    const matchingRules = allRules.filter(rule => {
        // 1. Check if rule applies to this card
        const isApplicable = (
            (rule.reward_multiplier_map && rule.reward_multiplier_map[card.id] !== undefined) ||
            (rule.cashback_rate_map && rule.cashback_rate_map[card.id] !== undefined) ||
            (rule.instant_discount_rate_map && rule.instant_discount_rate_map[card.id] !== undefined)
        );

        if (!isApplicable) {
            return false;
        }

        // 2. Check if rule matches the payment method
        if (method === 'direct' && rule.rule_type === 'portal') {
            return false; // Portal rules don't apply to direct swipes
        }
        if (method === 'direct' && rule.rule_type === 'voucher') {
            return false; // Voucher rules don't apply to direct swipes
        }
        if (method === 'portal' && rule.rule_type !== 'portal') {
            return false; // Only portal rules apply to portal transactions
        }
        if (method === 'voucher' && rule.rule_type !== 'voucher') {
            return false; // Only voucher rules apply to voucher purchases
        }

        // 3. Check platform match (for portal/voucher ONLY)
        // Direct transaction rules (cashback, direct_merchant_accelerated) should have platform: null
        // Only portal and voucher rules should have specific platform values
        if (method === 'portal' || method === 'voucher') {
            if (rule.platform && rule.platform !== platform) {
                return false;
            }
        } else {
            // For direct transactions, skip rules that have a portal/voucher platform
            // But allow rules with platform: null, "offline", "online", "direct"
            if (rule.platform && !['offline', 'online', 'direct', null].includes(rule.platform)) {
                return false; // This is a portal/voucher-specific rule
            }
        }

        // 4. Check category match
        if (rule.category) {
            // Wildcard support: "*" matches all categories except exclusions
            if (rule.category === "*") {
                // Check if transaction category is in exclusion list (only for wildcards)
                const excludedCategories = rule.constraints?.excluded_categories || [];
                if (excludedCategories.includes(transaction.category)) {
                    return false; // Category is explicitly excluded
                }
                // Wildcard matches - continue to other checks
            } else if (Array.isArray(rule.category)) {
                // If rule supports multiple categories (e.g., ["flights", "travel"])
                if (!rule.category.includes(transaction.category)) {
                    return false;
                }
            } else {
                // Single category string match
                if (rule.category !== transaction.category) {
                    return false;
                }
            }
        }

        // 5. Check merchant match (if specified in rule)
        if (rule.merchants && rule.merchants.length > 0) {
            const transMerchant = (transaction.merchant || '').toLowerCase();
            const matchingMerchant = rule.merchants.some(m =>
                (m || '').toLowerCase() === transMerchant
            );

            if (!matchingMerchant) {
                return false;
            }
        }

        // 6. Check minimum transaction amount
        if (rule.min_transaction && transaction.amount < rule.min_transaction) {
            return false;
        }

        // 7. Check validity period
        if (rule.valid_until) {
            const expiryDate = new Date(rule.valid_until);
            const now = new Date();
            if (now > expiryDate) {
                return false; // Rule expired
            }
        }

        // All checks passed
        return true;
    });

    // Sort by priority (higher priority first)
    return matchingRules.sort((a, b) => (b.priority || 0) - (a.priority || 0));
}

/**
 * Get all possible payment methods for a transaction
 * @param {Object} transaction - Transaction details
 * @param {Array} allRules - All available rules
 * @returns {Array} Array of possible methods: ['direct', 'portal', 'voucher']
 */
export function getPossibleMethods(transaction, allRules) {
    const methods = new Set(['direct']); // Direct swipe is always possible

    for (const rule of allRules) {
        // Check if this transaction could use portal
        if (rule.rule_type === 'portal' &&
            (!rule.category || rule.category === transaction.category)) {
            methods.add('portal');
        }

        // Check if this transaction could use voucher
        if (rule.rule_type === 'voucher') {
            const transMerchant = (transaction.merchant || '').toLowerCase();
            const matchesMerchant = !rule.merchants || rule.merchants.some(m =>
                (m || '').toLowerCase() === transMerchant
            );

            if (matchesMerchant) {
                methods.add('voucher');
            }
        }
    }

    return Array.from(methods);
}

/**
 * Get all possible platforms for a given method and bank
 * @param {string} method - Payment method
 * @param {string} bank - Bank name
 * @param {Array} allRules - All available rules
 * @returns {Array} Array of platform names
 */
export function getPossiblePlatforms(method, bank, allRules) {
    if (method === 'direct') {
        return [null]; // Direct swipe has no platform
    }

    const platforms = new Set();

    for (const rule of allRules) {
        if (rule.bank === bank && rule.rule_type === method && rule.platform) {
            platforms.add(rule.platform);
        }
    }

    return Array.from(platforms);
}

export default {
    findMatchingRules,
    getPossibleMethods,
    getPossiblePlatforms
};
