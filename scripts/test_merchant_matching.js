// scripts/test_merchant_matching.js
/**
 * Test Plan: Merchant Matching Verification
 * Tests that merchant-specific rules correctly match transactions
 * Run this before any changes to merchant configuration or rules
 */

import { findMatchingRules } from '../engine/ruleMatcher.js';

// Import card data
import { HDFC_CARDS } from '../cards_data/hdfc_cards_data.js';
import { axisCardsData } from '../cards_data/axis_cards_data.js';

// Import rules
import { HDFC_CASHBACK_RULES } from '../rules/hdfc/cashback.js';
import { HDFC_DIRECT_ACCELERATED_RULES } from '../rules/hdfc/direct_merchant_accelerated_rewards.js';
import { axisCashbackRules } from '../rules/axis/cashback.js';

const allCards = [...HDFC_CARDS, ...axisCardsData];
const allRules = [...HDFC_CASHBACK_RULES, ...HDFC_DIRECT_ACCELERATED_RULES, ...axisCashbackRules];

/**
 * Merchant matching test scenarios
 */
const merchantTests = [
    {
        name: "Tata Neu - UPI Transaction Matching",
        cardId: "hdfc_tataneu_infinity",
        transaction: {
            merchant: "tata_neu",
            category: "upi",
            amount: 1000
        },
        method: "direct",
        expectedRuleId: "hdfc_tataneu_infinity_upi_1.5pct",
        shouldMatch: true
    },
    {
        name: "Tata Neu - Tata Brand Purchase",
        cardId: "hdfc_tataneu_infinity",
        transaction: {
            merchant: "tata_neu",
            category: "shopping",
            amount: 1000
        },
        method: "direct",
        expectedRuleId: "hdfc_tataneu_infinity_tata_brands_5pct",
        shouldMatch: true
    },
    {
        name: "Swiggy Card - Swiggy Orders",
        cardId: "hdfc_swiggy",
        transaction: {
            merchant: "swiggy",
            category: "dining",
            amount: 1000
        },
        method: "direct",
        expectedRuleId: "hdfc_swiggy_direct_10pct",
        shouldMatch: true
    },
    {
        name: "DCP - Swiggy 5X",
        cardId: "hdfc_dcp",
        transaction: {
            merchant: "swiggy",
            category: "dining",
            amount: 1000
        },
        method: "direct",
        expectedRuleId: "hdfc_dcp_zomato_swiggy_5x",
        shouldMatch: true
    },
    {
        name: "DCP - Zomato 5X",
        cardId: "hdfc_dcp",
        transaction: {
            merchant: "zomato",
            category: "dining",
            amount: 1000
        },
        method: "direct",
        expectedRuleId: "hdfc_dcp_zomato_swiggy_5x",
        shouldMatch: true
    },
    {
        name: "Millennia - Amazon 5%",
        cardId: "hdfc_millennia",
        transaction: {
            merchant: "amazon",
            category: "online_shopping",
            amount: 1000
        },
        method: "direct",
        expectedRuleId: "hdfc_millennia_direct_shopping_5pct",
        shouldMatch: true
    },
    {
        name: "Airtel Axis - Airtel Bill Payment 25%",
        cardId: "axis_airtel",
        transaction: {
            merchant: "airtel_thanks",
            category: "utilities",
            amount: 1000
        },
        method: "direct",
        expectedRuleId: "axis_airtel_bills_25pct",
        shouldMatch: true
    }
];

/**
 * Run merchant matching tests
 */
function runMerchantTests() {
    console.log("=".repeat(80));
    console.log("MERCHANT MATCHING TEST PLAN");
    console.log("=".repeat(80));
    console.log("");

    let passed = 0;
    let failed = 0;
    const failures = [];

    merchantTests.forEach((test, index) => {
        console.log(`Test ${index + 1}: ${test.name}`);
        console.log("-".repeat(80));

        // Find card
        const card = allCards.find(c => c.id === test.cardId);
        if (!card) {
            console.log(`❌ FAILED: Card "${test.cardId}" not found`);
            failed++;
            failures.push({ test: test.name, reason: "Card not found" });
            console.log("");
            return;
        }

        // Find matching rules
        const matchingRules = findMatchingRules(
            test.transaction,
            card,
            test.method,
            test.platform || null,
            allRules
        );

        // Check if expected rule is in matching rules
        const foundRule = matchingRules.find(r => r.id === test.expectedRuleId);
        const isMatch = !!foundRule;

        if (isMatch === test.shouldMatch) {
            console.log(`✅ PASSED`);
            console.log(`   Card:     ${card.name}`);
            console.log(`   Merchant: ${test.transaction.merchant || 'none'}`);
            console.log(`   Category: ${test.transaction.category}`);
            console.log(`   Rule:     ${test.expectedRuleId}`);
            console.log(`   Status:   ${isMatch ? 'Matched' : 'Not matched (as expected)'}`);
            passed++;
        } else {
            console.log(`❌ FAILED`);
            console.log(`   Card:     ${card.name}`);
            console.log(`   Merchant: ${test.transaction.merchant || 'none'}`);
            console.log(`   Category: ${test.transaction.category}`);
            console.log(`   Expected: ${test.shouldMatch ? 'Should match' : 'Should NOT match'}`);
            console.log(`   Actual:   ${isMatch ? 'Matched' : 'Not matched'}`);
            console.log(`   Rule:     ${test.expectedRuleId}`);

            if (matchingRules.length > 0) {
                console.log(`   Found rules: ${matchingRules.map(r => r.id).join(', ')}`);
            } else {
                console.log(`   Found rules: none`);
            }

            failed++;
            failures.push({
                test: test.name,
                expected: test.shouldMatch ? 'match' : 'no match',
                actual: isMatch ? 'match' : 'no match'
            });
        }

        console.log("");
    });

    // Summary
    console.log("=".repeat(80));
    console.log("TEST SUMMARY");
    console.log("=".repeat(80));
    console.log(`Total Tests: ${merchantTests.length}`);
    console.log(`Passed: ${passed} ✅`);
    console.log(`Failed: ${failed} ❌`);
    console.log("");

    if (failures.length > 0) {
        console.log("FAILURES:");
        failures.forEach((f, i) => {
            console.log(`${i + 1}. ${f.test}`);
            if (f.expected) {
                console.log(`   Expected: ${f.expected}, Actual: ${f.actual}`);
            } else {
                console.log(`   Reason: ${f.reason}`);
            }
        });
        console.log("");
        process.exit(1);
    } else {
        console.log("✅ ALL TESTS PASSED!");
        process.exit(0);
    }
}

// Run tests
runMerchantTests();
