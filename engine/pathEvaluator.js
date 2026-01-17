// engine/pathEvaluator.js
// Evaluates and ranks all payment paths

/**
 * Path Evaluator Module
 * Evaluates all paths and returns ranked results with explanations
 */

import { findMatchingRules } from './ruleMatcher.js';
import { calculateValue, compareResults } from './calculator.js';
import { getPathDescription } from './pathGenerator.js';

/**
 * Evaluate all payment paths and return ranked results
 * @param {Array} paths - Array of path objects from pathGenerator
 * @param {Array} allRules - All available rules
 * @returns {Array} Ranked array of evaluation results
 */
export function evaluateAllPaths(paths, allRules) {
    const results = [];

    for (const path of paths) {
        const result = evaluatePath(path, allRules);
        results.push(result);
    }

    // Sort by value (descending), then by ease_score (ascending)
    results.sort(compareResults);

    // Add rank
    results.forEach((result, index) => {
        result.rank = index + 1;
    });

    return results;
}

/**
 * Evaluate a single payment path
 * @param {Object} path - Path object
 * @param {Array} allRules - All available rules
 * @returns {Object} Evaluation result
 */
export function evaluatePath(path, allRules) {
    const { card, method, platform, transaction } = path;

    // Find matching rules for this path
    // IMPORTANT: When evaluating a voucher path, we treat the transaction category as 'voucher'
    // so it matches the specific voucher rules (which have category: 'voucher')
    let evalTransaction = { ...transaction };
    if (method === 'voucher') {
        evalTransaction.category = 'voucher';
    }

    const matchingRules = findMatchingRules(
        evalTransaction,
        card,
        method,
        platform,
        allRules
    );

    // Calculate value
    const calculation = calculateValue(card, matchingRules, transaction.amount, {
        category: transaction.category
    });

    // Build result object
    return {
        path,
        card,
        method,
        platform,
        value: calculation.value,
        percentageReturn: calculation.percentageReturn,
        breakdown: calculation.breakdown,
        explanation: calculation.explanation,
        matchingRules: matchingRules.map(r => r.id),
        pathDescription: getPathDescription(path),
        isCapped: calculation.cappedValue !== null,
        cappedValue: calculation.cappedValue,
        redemptionEase: card.redemption_ease_score,
        redemptionMethod: card.optimal_redemption?.method || 'Unknown'
    };
}

/**
 * Get the best path (highest value)
 */
export function getBestPath(results) {
    if (!results || results.length === 0) {
        return null;
    }
    return results[0]; // Already sorted
}

/**
 * Get top N paths
 */
export function getTopPaths(results, n = 3) {
    return results.slice(0, n);
}

/**
 * Filter paths by minimum value threshold
 */
export function filterByMinValue(results, minValue) {
    return results.filter(result => result.value >= minValue);
}

/**
 * Group results by card
 */
export function groupByCard(results) {
    const grouped = new Map();

    for (const result of results) {
        const cardId = result.card.id;
        if (!grouped.has(cardId)) {
            grouped.set(cardId, []);
        }
        grouped.get(cardId).push(result);
    }

    return grouped;
}

/**
 * Get comparison summary between two paths
 */
export function comparePaths(pathA, pathB) {
    const valueDiff = pathA.value - pathB.value;
    const percentageDiff = pathA.percentageReturn - pathB.percentageReturn;

    return {
        betterPath: valueDiff > 0 ? pathA : pathB,
        valueDifference: Math.abs(valueDiff),
        percentageDifference: Math.abs(percentageDiff),
        summary: valueDiff > 0
            ? `${pathA.pathDescription} is better by ₹${valueDiff.toFixed(2)}`
            : `${pathB.pathDescription} is better by ₹${Math.abs(valueDiff).toFixed(2)}`
    };
}

export default {
    evaluateAllPaths,
    evaluatePath,
    getBestPath,
    getTopPaths,
    filterByMinValue,
    groupByCard,
    comparePaths
};
