// engine/pathGenerator.js
// Generates all possible payment paths for a transaction

/**
 * Path Generator Module
 * Creates all possible payment paths (card + method + platform combinations)
 */

import { getPossibleMethods, getPossiblePlatforms } from './ruleMatcher.js';

/**
 * Check if a transaction category is excluded by the card's base exclusions
 * @param {Object} card - Card object with base_exclusions array
 * @param {string} category - Transaction category
 * @returns {boolean} True if excluded, false if allowed
 */
function isCardExcluded(card, category) {
    // Special case: UPI category requires card.supports_upi = true
    if (category === 'upi' && !card.supports_upi) {
        return true; // Card doesn't support UPI
    }

    if (!card.base_exclusions || card.base_exclusions.length === 0) {
        return false; // No exclusions means all categories allowed
    }

    // Check if category matches any exclusion
    // Handle both exact matches and common variations
    return card.base_exclusions.some(exclusion => {
        const normalizedExclusion = exclusion.toLowerCase().replace(/_/g, '');
        const normalizedCategory = category.toLowerCase().replace(/_/g, '');
        return normalizedExclusion === normalizedCategory ||
            normalizedExclusion.includes(normalizedCategory) ||
            normalizedCategory.includes(normalizedExclusion);
    });
}

/**
 * Generate all possible payment paths for a transaction
 * @param {Object} transaction - Transaction details {merchant, category, amount}
 * @param {Array} userCards - Array of card objects (user's wallet)
 * @param {Array} allRules - All available rules
 * @returns {Array} Array of path objects
 */
export function generatePaths(transaction, userCards, allRules) {
    const paths = [];

    for (const card of userCards) {
        // CRITICAL: Check card-level exclusions FIRST before generating any paths
        if (isCardExcluded(card, transaction.category)) {
            // Skip this card entirely - category is in base_exclusions
            continue;
        }

        // Get possible methods for this transaction
        const methods = getPossibleMethods(transaction, allRules);

        for (const method of methods) {
            if (method === 'direct') {
                // Direct swipe path
                paths.push({
                    card,
                    method: 'direct',
                    platform: null,
                    transaction,
                    pathId: `${card.id}_direct`
                });
            } else {
                // Portal or voucher - need to check platforms
                const platforms = getPossiblePlatforms(method, card.bank, allRules);

                if (platforms.length === 0) {
                    // No platform available for this bank/method
                    continue;
                }

                for (const platform of platforms) {
                    paths.push({
                        card,
                        method,
                        platform,
                        transaction,
                        pathId: `${card.id}_${method}_${platform || 'none'}`
                    });
                }
            }
        }
    }

    return paths;
}

/**
 * Generate paths for a specific card only
 * Useful for "What if I use this card?" scenarios
 */
export function generatePathsForCard(transaction, card, allRules) {
    return generatePaths(transaction, [card], allRules);
}

/**
 * Get human-readable path description
 */
export function getPathDescription(path) {
    let description = '';

    if (path.method === 'direct') {
        description = 'Direct Swipe';
    } else if (path.method === 'portal') {
        description = `via ${path.platform}`;
    } else if (path.method === 'voucher') {
        description = `Buy Voucher via ${path.platform}`;
    }

    return description;
}

export default {
    generatePaths,
    generatePathsForCard,
    getPathDescription
};
