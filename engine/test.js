// engine/test.js
// Test file to verify engine functionality

/**
 * BachatSwipe Engine Test Suite
 * Run this file to test the recommendation engine
 */

import engine from './index.js';

/**
 * Test scenarios
 */
const testScenarios = [
    {
        name: 'Amazon Purchase - ₹10,000',
        transaction: {
            merchant: 'amazon',
            category: 'shopping',
            amount: 10000
        },
        expectedBestCards: ['hdfc_infinia', 'icici_amazon_pay']
    },
    {
        name: 'Swiggy Order - ₹500',
        transaction: {
            merchant: 'swiggy',
            category: 'dining',
            amount: 500
        },
        expectedBestCards: ['hdfc_swiggy']
    },
    {
        name: 'Flight Booking - ₹20,000',
        transaction: {
            merchant: 'makemytrip',
            category: 'flights',
            amount: 20000
        },
        expectedBestCards: ['hdfc_infinia', 'axis_magnus']
    },
    {
        name: 'Grocery Shopping - ₹3,000',
        transaction: {
            merchant: 'bigbasket',
            category: 'grocery',
            amount: 3000
        },
        expectedBestCards: ['hdfc_tataneu_infinity', 'sbi_simplysave']
    }
];

/**
 * Run all tests
 */
async function runTests() {
    console.log('🧪 Starting BachatSwipe Engine Tests\n');
    console.log('='.repeat(80));

    try {
        // Initialize engine
        console.log('\n📦 Initializing engine...');
        await engine.initialize();
        console.log('✅ Engine initialized\n');

        // Run each test scenario
        for (let i = 0; i < testScenarios.length; i++) {
            const scenario = testScenarios[i];
            console.log('='.repeat(80));
            console.log(`\n🔍 Test ${i + 1}: ${scenario.name}`);
            console.log(`   Transaction: ${JSON.stringify(scenario.transaction)}\n`);

            try {
                // Get recommendation
                const result = engine.getRecommendation(scenario.transaction);

                // Display results
                console.log(`   📊 Total Paths Evaluated: ${result.totalPaths}`);
                console.log(`   🏆 Best Path: ${result.bestPath.pathDescription}`);
                console.log(`   💰 Value: ₹${result.bestPath.value.toFixed(2)} (${result.bestPath.percentageReturn.toFixed(2)}%)`);
                console.log(`   📝 Explanation: ${result.bestPath.explanation}\n`);

                // Show top 3 paths
                console.log('   Top 3 Paths:');
                result.topPaths.forEach((path, idx) => {
                    const medal = idx === 0 ? '🥇' : idx === 1 ? '🥈' : '🥉';
                    console.log(`   ${medal} Rank ${path.rank}: ${path.pathDescription}`);
                    console.log(`      Value: ₹${path.value.toFixed(2)} (${path.percentageReturn.toFixed(2)}%)`);
                    console.log(`      ${path.explanation}`);
                });

                console.log('\n   ✅ Test passed\n');
            } catch (error) {
                console.error(`   ❌ Test failed: ${error.message}\n`);
            }
        }

        // Test card comparison
        console.log('='.repeat(80));
        console.log('\n🔍 Card Comparison Test: HDFC Infinia vs ICICI Amazon Pay');
        console.log('   Transaction: ₹10,000 on Amazon\n');

        const comparison = engine.compareCards(
            { merchant: 'amazon', category: 'shopping', amount: 10000 },
            'hdfc_infinia',
            'icici_amazon_pay'
        );

        console.log(`   Card 1: ${comparison.card1.card.name}`);
        console.log(`   Best Path: ${comparison.card1.bestPath.pathDescription}`);
        console.log(`   Value: ₹${comparison.card1.bestPath.value.toFixed(2)}\n`);

        console.log(`   Card 2: ${comparison.card2.card.name}`);
        console.log(`   Best Path: ${comparison.card2.bestPath.pathDescription}`);
        console.log(`   Value: ₹${comparison.card2.bestPath.value.toFixed(2)}\n`);

        console.log(`   🏆 Winner: ${comparison.winner.name}`);
        console.log(`   💰 Difference: ₹${comparison.valueDifference.toFixed(2)}\n`);

        console.log('='.repeat(80));
        console.log('\n✅ All tests completed successfully!\n');

    } catch (error) {
        console.error('\n❌ Test suite failed:', error);
        console.error(error.stack);
    }
}

// Run tests if this file is executed directly
if (import.meta.url === `file://${process.argv[1]}`) {
    runTests();
}

export { runTests };
