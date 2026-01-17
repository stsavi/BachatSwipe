# 📚 BachatSwipe Engine API Documentation

## Overview
The BachatSwipe engine provides a recommendation system for optimizing credit card usage across different payment methods.

## Installation & Setup

```javascript
import engine from './engine/index.js';

// Initialize the engine (loads all cards and rules)
await engine.initialize();
```

---

## Core API

### `engine.getRecommendation(transaction, userCardIds, options)`

Get optimized payment recommendations for a transaction.

**Parameters:**
- `transaction` (Object) - **Required**
  - `merchant` (string) - Merchant identifier (e.g., 'amazon', 'swiggy')
  - `category` (string) - Category (e.g., 'shopping', 'dining', 'flights')
  - `amount` (number) - Transaction amount in ₹
  
- `userCardIds` (Array) - Optional. Array of card IDs user owns. If null, evaluates all cards.

- `options` (Object) - Optional
  - `topN` (number) - Number of top results to return (default: 3)
  - `showAll` (boolean) - Return all paths instead of just top N (default: false)

**Returns:**
```javascript
{
  transaction: {...},
  totalPaths: 45,
  results: [...],  // Top N or all results
  bestPath: {...}, // Highest value path
  topPaths: [...], // Top 3 paths
  stats: {
    highestValue: 999,
    lowestValue: 50,
    averageValue: 300
  }
}
```

**Example:**
```javascript
const result = engine.getRecommendation(
  { merchant: 'amazon', category: 'shopping', amount: 10000 },
  ['hdfc_infinia', 'icici_amazon_pay']
);

console.log(`Best: ${result.bestPath.pathDescription}`);
console.log(`Value: ₹${result.bestPath.value}`);
```

---

### `engine.compareCards(transaction, cardId1, cardId2)`

Compare two specific cards for a transaction.

**Parameters:**
- `transaction` (Object) - Transaction details
- `cardId1` (string) - First card ID
- `cardId2` (string) - Second card ID

**Returns:**
```javascript
{
  transaction: {...},
  card1: { card: {...}, bestPath: {...} },
  card2: { card: {...}, bestPath: {...} },
  winner: {...},  // Card object
  valueDifference: 499
}
```

**Example:**
```javascript
const comparison = engine.compareCards(
  { merchant: 'swiggy', category: 'dining', amount: 500 },
  'hdfc_swiggy',
  'axis_ace'
);

console.log(`Winner: ${comparison.winner.name}`);
console.log(`Better by: ₹${comparison.valueDifference}`);
```

---

### `engine.getAllCards()`

Get all available cards.

**Returns:** Array of card objects

**Example:**
```javascript
const cards = engine.getAllCards();
console.log(`Total cards: ${cards.length}`);
```

---

### `engine.getCardById(cardId)`

Get a specific card by ID.

**Parameters:**
- `cardId` (string) - Card identifier

**Returns:** Card object or `undefined`

**Example:**
```javascript
const card = engine.getCardById('hdfc_infinia');
console.log(card.name); // "HDFC Infinia Metal"
```

---

### `engine.getStats()`

Get engine statistics.

**Returns:**
```javascript
{
  totalCards: 31,
  totalRules: 70,
  cardsByBank: {
    HDFC: 10,
    'Axis Bank': 8,
    'ICICI Bank': 7,
    'SBI Card': 6
  },
  rulesByType: {
    cashback: 28,
    direct_merchant_accelerated: 8,
    portal: 17,
    voucher: 17
  }
}
```

---

## Result Object Structure

Each path result contains:

```javascript
{
  rank: 1,
  path: {...},
  card: {...},
  method: 'voucher',  // 'direct', 'portal', 'voucher'
  platform: 'SmartBuy',
  value: 999,
  percentageReturn: 9.99,
  breakdown: [
    { step: 'Base Earning', calculation: '...', value: 333 },
    { step: 'Apply Multiplier', calculation: '...', value: 999 }
  ],
  explanation: 'Using HDFC Infinia via SmartBuy (buying voucher) → ₹999.00 value',
  matchingRules: ['hdfc_smartbuy_amazon_voucher'],
  pathDescription: 'HDFC Infinia Metal (Buy Voucher via SmartBuy)',
  isCapped: false,
  cappedValue: null,
  redemptionEase: 2,
  redemptionMethod: 'SmartBuy Flights/Hotels'
}
```

---

## Usage Examples

### Example 1: Simple Recommendation
```javascript
const result = engine.getRecommendation({
  merchant: 'amazon',
  category: 'shopping',
  amount: 5000
});

console.log(`Best option: ${result.bestPath.pathDescription}`);
console.log(`You'll get: ₹${result.bestPath.value.toFixed(2)}`);
```

### Example 2: User's Card Portfolio
```javascript
const myCards = ['hdfc_millennia', 'axis_ace', 'icici_amazon_pay'];

const result = engine.getRecommendation(
  { merchant: 'swiggy', category: 'dining', amount: 800 },
  myCards
);

// Show all options
result.results.forEach(path => {
  console.log(`${path.pathDescription}: ₹${path.value}`);
});
```

### Example 3: Show All Paths
```javascript
const result = engine.getRecommendation(
  { merchant: 'makemytrip', category: 'flights', amount: 20000 },
  null,
  { showAll: true }
);

console.log(`Evaluated ${result.totalPaths} paths`);
```

---

## Error Handling

```javascript
try {
  const result = engine.getRecommendation({
    merchant: 'amazon',
    category: 'shopping',
    amount: -100  // Invalid
  });
} catch (error) {
  console.error('Error:', error.message);
  // "Invalid transaction: amount is required and must be positive"
}
```

---

## Testing

Run the test suite:
```bash
node engine/test.js
```

---

## Performance Notes

- **Initialization:** ~100-200ms (one-time)
- **Recommendation:** ~5-20ms per transaction
- **Memory:** ~5-10MB for all data

---

**Last Updated:** January 17, 2026
