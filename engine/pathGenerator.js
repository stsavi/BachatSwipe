// engine/pathGenerator.js
// Generates all possible payment paths for a transaction

/**
 * Path Generator Module
 * Creates all possible payment paths (card + method + platform combinations)
 */

import { getPossibleMethods, getPossiblePlatforms } from './ruleMatcher.js';

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
    let description = `${path.card.name}`;

    if (path.method === 'direct') {
        description += ' (Direct Swipe)';
    } else if (path.method === 'portal') {
        description += ` via ${path.platform}`;
    } else if (path.method === 'voucher') {
        description += ` (Buy Voucher via ${path.platform})`;
    }

    return description;
}

export default {
    generatePaths,
    generatePathsForCard,
    getPathDescription
};
