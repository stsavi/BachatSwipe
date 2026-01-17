// engine/index.js
// Main engine entry point - orchestrates all modules

/**
 * BachatSwipe Recommendation Engine
 * Main orchestrator that ties all modules together
 */

import dataLoader from './dataLoader.js';
import { generatePaths } from './pathGenerator.js';
import { evaluateAllPaths, getBestPath, getTopPaths } from './pathEvaluator.js';

/**
 * Main recommendation engine class
 */
class BachatSwipeEngine {
    constructor() {
        this.initialized = false;
    }

    /**
     * Initialize the engine
     */
    async initialize() {
        if (this.initialized) {
            console.log('Engine already initialized');
            return;
        }

        console.log('🚀 Initializing BachatSwipe Engine...');

        try {
            await dataLoader.initialize();
            this.initialized = true;

            const stats = dataLoader.getStats();
            console.log('✅ Engine initialized successfully');
            console.log('📊 Stats:', stats);

            return stats;
        } catch (error) {
            console.error('❌ Engine initialization failed:', error);
            throw error;
        }
    }

    /**
     * Get recommendation for a transaction
     * @param {Object} transaction - {merchant, category, amount}
     * @param {Array} userCardIds - Array of card IDs the user owns
     * @param {Object} options - Additional options
     * @returns {Object} Recommendation results
     */
    getRecommendation(transaction, userCardIds = null, options = {}) {
        if (!this.initialized) {
            throw new Error('Engine not initialized. Call initialize() first.');
        }

        // Validate transaction
        if (!transaction || !transaction.amount || transaction.amount <= 0) {
            throw new Error('Invalid transaction: amount is required and must be positive');
        }

        // Get user's cards (or all cards if not specified)
        let userCards;
        if (userCardIds && userCardIds.length > 0) {
            userCards = userCardIds
                .map(id => dataLoader.getCardById(id))
                .filter(card => card !== undefined);

            if (userCards.length === 0) {
                throw new Error('No valid cards found for the provided IDs');
            }
        } else {
            // Use all cards if no specific cards provided
            userCards = dataLoader.getAllCards();
        }

        // Get all rules
        const allRules = dataLoader.getAllRules();

        // Generate all possible paths
        const paths = generatePaths(transaction, userCards, allRules);

        if (paths.length === 0) {
            return {
                transaction,
                results: [],
                bestPath: null,
                message: 'No valid payment paths found for this transaction'
            };
        }

        // Evaluate all paths
        const results = evaluateAllPaths(paths, allRules);

        // Get best path
        const bestPath = getBestPath(results);

        // Get top 3 paths
        const topPaths = getTopPaths(results, options.topN || 3);

        return {
            transaction,
            totalPaths: results.length,
            results: options.showAll ? results : topPaths,
            bestPath,
            topPaths,
            stats: {
                highestValue: bestPath?.value || 0,
                lowestValue: results[results.length - 1]?.value || 0,
                averageValue: results.reduce((sum, r) => sum + r.value, 0) / results.length
            }
        };
    }

    /**
     * Compare two specific cards for a transaction
     */
    compareCards(transaction, cardId1, cardId2) {
        const card1 = dataLoader.getCardById(cardId1);
        const card2 = dataLoader.getCardById(cardId2);

        if (!card1 || !card2) {
            throw new Error('One or both card IDs are invalid');
        }

        const result1 = this.getRecommendation(transaction, [cardId1]);
        const result2 = this.getRecommendation(transaction, [cardId2]);

        return {
            transaction,
            card1: {
                card: card1,
                bestPath: result1.bestPath
            },
            card2: {
                card: card2,
                bestPath: result2.bestPath
            },
            winner: result1.bestPath.value > result2.bestPath.value ? card1 : card2,
            valueDifference: Math.abs(result1.bestPath.value - result2.bestPath.value)
        };
    }

    /**
     * Get all cards
     */
    getAllCards() {
        return dataLoader.getAllCards();
    }

    /**
     * Get card by ID
     */
    getCardById(cardId) {
        return dataLoader.getCardById(cardId);
    }

    /**
     * Get statistics
     */
    getStats() {
        return dataLoader.getStats();
    }
}

// Export singleton instance
export const engine = new BachatSwipeEngine();
export default engine;
