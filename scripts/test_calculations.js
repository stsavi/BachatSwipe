// scripts/test_calculations.js
/**
 * Test Plan: Calculation Engine Verification
 * Tests cashback vs reward multiplier behavior with real card scenarios
 * Run this before any changes to card data or calculation engine
 */

import { calculateValue } from '../engine/calculator.js';
import { findMatchingRules } from '../engine/ruleMatcher.js';

// Import card data
import { HDFC_CARDS } from '../cards_data/hdfc_cards_data.js';
import { sbiCardsData } from '../cards_data/sbi_cards_data.js';
import { axisCardsData } from '../cards_data/axis_cards_data.js';

// Import rules
import { HDFC_CASHBACK_RULES } from '../rules/hdfc/cashback.js';
import { HDFC_DIRECT_ACCELERATED_RULES } from '../rules/hdfc/direct_merchant_accelerated_rewards.js';
import { sbiCashbackRules } from '../rules/sbi/cashback.js';
import { sbiDirectAcceleratedRules } from '../rules/sbi/direct_merchant_accelerated_rewards.js';
import { axisCashbackRules } from '../rules/axis/cashback.js';

const allCards = [...HDFC_CARDS, ...sbiCardsData, ...axisCardsData];
const allRules = [
    ...HDFC_CASHBACK_RULES,
    ...HDFC_DIRECT_ACCELERATED_RULES,
    ...sbiCashbackRules,
    ...sbiDirectAcceleratedRules,
    ...axisCashbackRules
];

/**
 * Test scenarios with expected results
 */
const testScenarios = [
    {
        name: "HDFC IndianOil - Fuel Transaction (Cashback Override)",
        cardId: "hdfc_indianoil",
        transaction: {
            merchant: null,
            category: "fuel",
            amount: 1000
        },
        method: "direct",
        platform: null,
        expected: {
            value: 50, // 5% of 1000 = 50 (NOT base rate + 5%)
            behavior: "cashback_override",
            description: "Should earn ONLY 5% cashback (₹50), base rate ignored"
        }
    },
    {
        name: "HDFC IndianOil - Grocery Transaction (Cashback Override)",
        cardId: "hdfc_indianoil",
        transaction: {
            merchant: null,
            category: "grocery",
            amount: 1000
        },
        method: "direct",
        platform: null,
        expected: {
            value: 50, // 5% of 1000 = 50
            behavior: "cashback_override",
            description: "Should earn ONLY 5% cashback (₹50), base rate ignored"
        }
    },
    {
        name: "HDFC DCP - Swiggy 5X (Reward Multiplier)",
        cardId: "hdfc_dcp",
        transaction: {
            merchant: "swiggy",
            category: "dining",
            amount: 1500 // ₹1500 = 10 transactions of ₹150
        },
        method: "direct",
        platform: null,
        expected: {
            value: 100, // Base: 40 RP (4 per ₹150 × 10) × 5 = 200 RP × ₹0.50 = ₹100
            behavior: "reward_multiplier",
            description: "Should multiply base rate: 4 RP/₹150 × 5 = 20 RP/₹150"
        }
    },
    {
        name: "SBI BPCL - Fuel 13X (Reward Multiplier)",
        cardId: "sbi_bpcl",
        transaction: {
            merchant: null,
            category: "fuel",
            amount: 1000 // ₹1000 = 10 transactions of ₹100
        },
        method: "direct",
        platform: null,
        expected: {
            value: 32.5, // Base: 10 RP (1 per ₹100 × 10) × 13 = 130 RP × ₹0.25 = ₹32.50
            behavior: "reward_multiplier",
            description: "Should multiply base rate: 1 RP/₹100 × 13 = 13 RP/₹100"
        }
    },
    {
        name: "SBI Cashback - Online Shopping (Cashback Override)",
        cardId: "sbi_cashback",
        transaction: {
            merchant: "amazon",
            category: "online_shopping",
            amount: 1000
        },
        method: "direct",
        platform: null,
        expected: {
            value: 50, // 5% of 1000 = 50
            behavior: "cashback_override",
            description: "Should earn ONLY 5% cashback (₹50), base 1% ignored"
        }
    },
    {
        name: "HDFC Millennia - Amazon 5% (Cashback)",
        cardId: "hdfc_millennia",
        transaction: {
            merchant: "amazon",
            category: "online_shopping",
            amount: 1000
        },
        method: "direct",
        platform: null,
        expected: {
            value: 50, // 5% of 1000 = 50
            behavior: "cashback_override",
            description: "Should earn 5% cashback on preferred merchant"
        }
    },
    {
        name: "HDFC Tata Neu - UPI via Tata Neu App",
        cardId: "hdfc_tataneu_infinity",
        transaction: {
            merchant: "tata_neu",
            category: "upi",
            amount: 1000
        },
        method: "direct",
        platform: null,
        expected: {
            value: 15, // 1.5% of 1000 = 15
            behavior: "cashback_override",
            description: "Should earn 1.5% NeuCoins on UPI via Tata Neu"
        }
    },
    {
        name: "HDFC Swiggy - Swiggy Orders 10%",
        cardId: "hdfc_swiggy",
        transaction: {
            merchant: "swiggy",
            category: "dining",
            amount: 1000
        },
        method: "direct",
        platform: null,
        expected: {
            value: 100, // 10% of 1000 = 100
            behavior: "cashback_override",
            description: "Should earn 10% cashback on Swiggy orders"
        }
    },
    {
        name: "Axis Airtel - Airtel Bill Payment 25%",
        cardId: "axis_airtel",
        transaction: {
            merchant: "airtel_thanks",
            category: "utilities",
            amount: 1000
        },
        method: "direct",
        platform: null,
        expected: {
            value: 250, // 25% of 1000 = 250
            behavior: "cashback_override",
            description: "Should earn 25% cashback on Airtel bill payments"
        }
    }
];

/**
 * Run all test scenarios
 */
function runTests() {
    console.log("=".repeat(80));
    console.log("CALCULATION ENGINE TEST PLAN");
    console.log("=".repeat(80));
    console.log("");

    let passed = 0;
    let failed = 0;
    const failures = [];

    testScenarios.forEach((scenario, index) => {
        console.log(`Test ${index + 1}: ${scenario.name}`);
        console.log("-".repeat(80));

        // Find card
        const card = allCards.find(c => c.id === scenario.cardId);
        if (!card) {
            console.log(`❌ FAILED: Card "${scenario.cardId}" not found`);
            failed++;
            failures.push({ scenario: scenario.name, reason: "Card not found" });
            console.log("");
            return;
        }

        // Find matching rules
        const matchingRules = findMatchingRules(
            scenario.transaction,
            card,
            scenario.method,
            scenario.platform,
            allRules
        );

        // Calculate value
        const result = calculateValue(
            card,
            matchingRules,
            scenario.transaction.amount,
            { category: scenario.transaction.category }
        );

        // Check result
        const tolerance = 0.5; // Allow ₹0.50 difference for rounding
        const valueDiff = Math.abs(result.value - scenario.expected.value);
        const isPass = valueDiff <= tolerance;

        if (isPass) {
            console.log(`✅ PASSED`);
            console.log(`   Expected: ₹${scenario.expected.value.toFixed(2)}`);
            console.log(`   Actual:   ₹${result.value.toFixed(2)}`);
            console.log(`   Behavior: ${scenario.expected.behavior}`);
            console.log(`   Note:     ${scenario.expected.description}`);
            passed++;
        } else {
            console.log(`❌ FAILED`);
            console.log(`   Expected: ₹${scenario.expected.value.toFixed(2)}`);
            console.log(`   Actual:   ₹${result.value.toFixed(2)}`);
            console.log(`   Diff:     ₹${valueDiff.toFixed(2)}`);
            console.log(`   Note:     ${scenario.expected.description}`);
            failed++;
            failures.push({
                scenario: scenario.name,
                expected: scenario.expected.value,
                actual: result.value,
                diff: valueDiff
            });
        }

        console.log("");
    });

    // Summary
    console.log("=".repeat(80));
    console.log("TEST SUMMARY");
    console.log("=".repeat(80));
    console.log(`Total Tests: ${testScenarios.length}`);
    console.log(`Passed: ${passed} ✅`);
    console.log(`Failed: ${failed} ❌`);
    console.log("");

    if (failures.length > 0) {
        console.log("FAILURES:");
        failures.forEach((f, i) => {
            console.log(`${i + 1}. ${f.scenario}`);
            if (f.expected !== undefined) {
                console.log(`   Expected: ₹${f.expected.toFixed(2)}, Actual: ₹${f.actual.toFixed(2)}, Diff: ₹${f.diff.toFixed(2)}`);
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
runTests();
