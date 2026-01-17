// engine/calculator.js
// Core value calculation logic

/**
 * Value Calculator Module
 * Handles all reward/cashback value calculations
 */

/**
 * Calculate the monetary value for a given card and transaction
 * @param {Object} card - Card object
 * @param {Array} rules - Array of applicable rules
 * @param {number} amount - Transaction amount in ₹
 * @param {Object} options - Additional options (e.g., current spend for cap tracking)
 * @returns {Object} Calculation result with value and breakdown
 */
export function calculateValue(card, rules, amount, options = {}) {
    if (!card || !amount || amount <= 0) {
        return {
            value: 0,
            breakdown: [],
            cappedValue: 0,
            explanation: 'Invalid input'
        };
    }

    let breakdown = [];
    let finalValue = 0;
    let isCapped = false;

    // Step 1: Check Exclusions
    let baseRate = card.base_rate;
    // If the transaction category is in the card's exclusion list, base earning is 0
    if (card.base_exclusions && card.base_exclusions.includes(options.category || '')) {
        baseRate = 0;
    }

    // Step 2: Calculate base earning
    const baseEarning = amount * baseRate;
    const baseValue = baseEarning * card.value_per_unit;

    // Log exclusion if applied
    if (baseRate === 0) {
        breakdown.push({
            step: 'Base Earning',
            calculation: `Excluded Category: ${options.category || 'Unknown'}`,
            value: 0
        });
    } else {
        breakdown.push({
            step: 'Base Earning',
            calculation: `₹${amount} × ${card.base_rate} × ₹${card.value_per_unit}`,
            value: baseValue
        });
    }

    // Step 2: Apply rules (if any)
    if (!rules || rules.length === 0) {
        // No rules, use base value
        finalValue = baseValue;
        breakdown.push({
            step: 'Final Value',
            calculation: 'No applicable rules',
            value: finalValue
        });
    } else {
        // Apply the highest priority rule
        const sortedRules = [...rules].sort((a, b) => (b.priority || 0) - (a.priority || 0));
        const primaryRule = sortedRules[0];

        // Find card index in rule's applies_to_cards array
        const cardIndex = primaryRule.applies_to_cards.indexOf(card.id);

        if (cardIndex === -1) {
            // Card not in rule, use base value
            finalValue = baseValue;
            breakdown.push({
                step: 'Final Value',
                calculation: 'Card not applicable to rule',
                value: finalValue
            });
        } else {
            // Apply rule benefit
            if (primaryRule.benefit_type === 'reward_multiplier' || primaryRule.reward_multipliers) {
                // Multiplier-based rule
                const multiplier = primaryRule.reward_multipliers[cardIndex];
                const multipliedEarning = baseEarning * multiplier;
                const multipliedValue = multipliedEarning * card.value_per_unit;

                breakdown.push({
                    step: 'Apply Multiplier',
                    calculation: `${baseEarning.toFixed(2)} ${card.reward_currency} × ${multiplier}x = ${multipliedEarning.toFixed(2)} ${card.reward_currency}`,
                    value: multipliedValue
                });

                finalValue = multipliedValue;
            } else if (primaryRule.benefit_type === 'cashback' || primaryRule.cashback_rates) {
                // Cashback-based rule (overrides base rate)
                const cashbackRate = primaryRule.cashback_rates[cardIndex];
                const cashbackValue = amount * cashbackRate;

                breakdown.push({
                    step: 'Apply Cashback',
                    calculation: `₹${amount} × ${(cashbackRate * 100).toFixed(2)}% = ₹${cashbackValue.toFixed(2)}`,
                    value: cashbackValue
                });

                finalValue = cashbackValue;
            } else if (primaryRule.benefit_type === 'instant_discount' || primaryRule.instant_discount_rates) {
                // Instant discount (for vouchers)
                const discountRate = primaryRule.instant_discount_rates[cardIndex];
                const discountValue = amount * discountRate;

                breakdown.push({
                    step: 'Apply Instant Discount',
                    calculation: `₹${amount} × ${(discountRate * 100).toFixed(2)}% = ₹${discountValue.toFixed(2)}`,
                    value: discountValue
                });

                finalValue = discountValue;
            }

            // Step 3: Apply cap if exists
            if (primaryRule.cap && finalValue > primaryRule.cap) {
                breakdown.push({
                    step: 'Apply Cap',
                    calculation: `Capped at ₹${primaryRule.cap} (${primaryRule.cap_period || 'per transaction'})`,
                    value: primaryRule.cap
                });

                finalValue = primaryRule.cap;
                isCapped = true;
            }
        }
    }

    return {
        value: finalValue,
        breakdown,
        cappedValue: isCapped ? finalValue : null,
        explanation: generateExplanation(card, rules, finalValue, breakdown),
        percentageReturn: (finalValue / amount) * 100
    };
}

/**
 * Generate human-readable explanation
 */
function generateExplanation(card, rules, finalValue, breakdown) {
    if (!rules || rules.length === 0) {
        return `Base earning on ${card.name}: ${card.earning_display}`;
    }

    const primaryRule = rules[0];
    let explanation = `Using ${card.name} `;

    if (primaryRule.platform) {
        explanation += `via ${primaryRule.platform} `;
    }

    if (primaryRule.rule_type === 'voucher') {
        explanation += `(buying voucher) `;
    }

    explanation += `→ ₹${finalValue.toFixed(2)} value`;

    return explanation;
}

/**
 * Compare two calculation results for sorting
 * Primary: Higher value wins
 * Secondary: Lower redemption_ease_score wins (easier redemption)
 */
export function compareResults(resultA, resultB) {
    // Primary sort: value (descending)
    if (resultA.value !== resultB.value) {
        return resultB.value - resultA.value;
    }

    // Secondary sort: ease_score (ascending - lower is better)
    return resultA.card.redemption_ease_score - resultB.card.redemption_ease_score;
}

export default {
    calculateValue,
    compareResults
};
