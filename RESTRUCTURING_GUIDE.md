# BachatSwipe Architecture Restructuring Guide

**Date:** January 17, 2026  
**Purpose:** Complete overhaul of card data and rules architecture for maintainability and accuracy

---

## 🎯 Objectives

1. **Standardize card data schema** - Consistent earning/redemption representation
2. **Separate rules by benefit type** - Clean separation of cashback vs reward multipliers
3. **Validate all data against bank sources** - Accurate as of Jan 2026
4. **Add platform constants** - Easy maintenance when banks add new portals
5. **Support tie-breaking logic** - Prefer easiest redemption method

---

## 📁 New Directory Structure

```
BachatSwipe/
├── config/
│   └── bank_platforms.js           # NEW: Platform names, categories, voucher merchants
│
├── cards_data/                     # UPDATED SCHEMA
│   ├── hdfc_cards_data.js          # 10 cards (validated)
│   ├── axis_cards_data.js          # 8 cards (to validate)
│   ├── icici_cards_data.js         # 7 cards (to validate)
│   └── sbi_cards_data.js           # 6 cards (to validate)
│
└── rules/                          # RESTRUCTURED
    ├── hdfc/
    │   ├── cashback.js             # Direct cashback offers
    │   ├── direct_merchant_accelerated_rewards.js
    │   ├── portal.js               # Flights/Hotels (multipliers OR cashback)
    │   └── vouchers.js             # 6 merchants only
    │
    ├── axis/
    │   └── (same 4 files)
    ├── icici/
    │   └── (same 4 files)
    └── sbi/
        └── (same 4 files)
```

---

## 📋 Card Schema (Final)

### Core Fields

```javascript
{
    // IDENTITY
    id: "bank_cardname",
    name: "Display Name",
    bank: "BANK_NAME",
    
    // CLASSIFICATION
    card_tier: "super_premium|premium|cashback|travel|lifestyle|upi|fuel|entry",
    reward_type: "points|cashback|miles|edge_miles|neucoins",
    
    // EARNING (Standardized)
    base_rate: 0.0333,              // ALWAYS per ₹1
    earning_display: "5 RP per ₹150", // Human-readable
    reward_currency: "RP|CB|Miles",
    
    // REDEMPTION
    value_per_unit: 1.0,            // ₹ value of 1 reward unit (optimal)
    optimal_redemption: {
        method: "SmartBuy Flights",
        redemption_type: "portal|transfer|cash|statement_credit",
        annotation: "Detailed explanation"
    },
    redemption_ease_score: 1|2|3,   // 1=easiest, 3=complex
    
    // FEES
    joining_fee: 12500,
    annual_fee: 12500,
    fee_waiver: {
        spend_threshold: 1000000,
        period: "annual",
        notes: "Details"
    },
    
    // BENEFITS
    lounge: {
        domestic: "Unlimited" | number,
        international: "Unlimited" | number,
        access_type: "complimentary|spend_based|none",
        spend_threshold: 0,
        network: ["Priority Pass"],
        notes: "Details"
    },
    
    // FEATURES
    supports_upi: true|false,
    base_exclusions: ["fuel", "wallet", "rent", "gov", "emi"]
}
```

### Redemption Ease Score Logic

- **Score 1 (Easiest):** Direct cashback, statement credit, wallet credit
  - Examples: Cashback cards, NeuCoins
- **Score 2 (Moderate):** Portal redemption, vouchers, shopping
  - Examples: SmartBuy redemption, Travel Edge
- **Score 3 (Complex):** Miles transfer, limited partners, manual booking
  - Examples: Vistara/Accor transfer, airline partners

---

## 📋 Rules Schema by Type

### 1. Cashback Rules (`cashback.js`)

**Purpose:** Direct swipe cashback on specific categories/merchants

```javascript
{
    id: "bank_category_merchant_cb",
    bank: "BANK",
    rule_type: "cashback",
    category: "dining|shopping|grocery",
    merchants: ["zomato", "swiggy"] | [],
    platform: null,  // null for direct swipe
    applies_to_cards: ["card_id_1", "card_id_2"],
    
    // BENEFIT (only one field)
    cashback_rates: [0.05, 0.10],  // 5%, 10%
    
    // CONSTRAINTS
    cap: 1000 | null,
    cap_period: "monthly|quarterly|annual|per_transaction" | null,
    min_transaction: 500 | null,
    
    // VALIDITY
    valid_from: "2024-01-01",
    valid_until: null | "2026-12-31",
    
    // METADATA
    notes: "Description",
    priority: 100  // Higher = preferred
}
```

### 2. Direct Merchant Accelerated Rewards (`direct_merchant_accelerated_rewards.js`)

**Purpose:** Reward multipliers on specific categories/merchants (direct swipe)

```javascript
{
    id: "bank_category_merchant_accel",
    bank: "BANK",
    rule_type: "direct_merchant_accelerated",
    category: "dining|shopping|travel",
    merchants: ["zomato", "swiggy"] | [],
    applies_to_cards: ["card_id_1"],
    
    // BENEFIT (only one field)
    reward_multipliers: [5],  // 5x base rate
    
    // CONSTRAINTS
    cap: null,
    cap_period: null,
    min_transaction: null,
    
    // VALIDITY
    valid_from: "2024-01-01",
    valid_until: null,
    
    // METADATA
    notes: "5x RP on dining",
    priority: 100
}
```

### 3. Portal Rules (`portal.js`)

**Purpose:** Flight & hotel bookings via bank portals

**IMPORTANT:** Portal rules can provide EITHER reward multipliers OR cashback (depends on card)

```javascript
{
    id: "bank_portal_category",
    bank: "BANK",
    rule_type: "portal",
    platform: "SmartBuy|Travel Edge",
    category: "flights|hotels",  // ONLY these two
    merchants: [],  // Always empty
    applies_to_cards: ["card_id_1", "card_id_2"],
    
    // BENEFIT (use ONE of these)
    benefit_type: "reward_multiplier|cashback",
    
    // If benefit_type = "reward_multiplier"
    reward_multipliers: [10, 5] | null,
    
    // If benefit_type = "cashback"
    cashback_rates: [0.05, 0.05] | null,
    
    // CONSTRAINTS
    cap: null,
    cap_period: null,
    min_transaction: null,
    
    // VALIDITY
    valid_from: "2024-01-01",
    valid_until: null,
    
    // METADATA
    notes: "10x RP on hotels via portal",
    priority: 100
}
```

### 4. Voucher Rules (`vouchers.js`)

**Purpose:** Buying vouchers via bank portals

**Allowed merchants ONLY:** amazon, flipkart, swiggy, zomato, tata_neu, bigbasket

```javascript
{
    id: "bank_merchant_voucher",
    bank: "BANK",
    rule_type: "voucher",
    platform: "SmartBuy (GyFTR)|EDGE Rewards",
    category: "voucher",  // Always "voucher"
    merchants: ["amazon", "flipkart"],  // Restricted list
    applies_to_cards: ["card_id_1", "card_id_2"],
    
    // BENEFIT (use ONE)
    benefit_type: "reward_multiplier|cashback|instant_discount",
    
    reward_multipliers: [3, 3] | null,
    cashback_rates: [0.05, 0.05] | null,
    instant_discount_rates: [0.10, 0.10] | null,
    
    // CONSTRAINTS
    cap: 10000,
    cap_period: "monthly",
    min_transaction: 1000,
    max_transaction: 10000,  // Max voucher size
    
    // VALIDITY
    valid_from: "2024-01-01",
    valid_until: null,
    
    // METADATA
    notes: "3x RP on Amazon vouchers",
    priority: 100,
    
    // VOUCHER SPECIFICS
    voucher_denominations: [100, 500, 1000, 5000, 10000],
    discount_on_voucher: 0  // If sold at discount (rare)
}
```

---

## 🔍 Data Validation Sources

### HDFC Bank (Priority)
1. **Official Product Pages:**
   - https://www.hdfcbank.com/personal/pay/cards/credit-cards
   - Individual card benefit pages

2. **MITC Documents:**
   - Most Important Terms & Conditions PDFs
   - Check: Reward rates, exclusions, caps

3. **SmartBuy Portal:**
   - https://offers.smartbuy.hdfcbank.com/
   - Current multipliers for flights/hotels/vouchers

4. **Key Cards to Validate:**
   - Infinia Metal: 5 RP/₹150, 10x hotels, 5x flights, 3x vouchers
   - Diners Black Metal: Same as Infinia
   - Regalia Gold: 4 RP/₹150, 10x hotels, 5x flights, 2x vouchers
   - Diners Privilege: 4 RP/₹150, 10x hotels, 5x flights
   - Millennia: 1% base, 5% SmartBuy, 5% Amazon/Flipkart vouchers
   - Swiggy HDFC: 10% on Swiggy, 1% elsewhere
   - Tata Neu Infinity: 1.5% base, 5% Tata brands
   - Tata Neu Plus: 1% base, 5% Tata brands
   - IndianOil HDFC: Fuel rewards

### Axis Bank
1. **Product Pages:** https://www.axisbank.com/retail/cards/credit-card
2. **EDGE Rewards:** Check Travel Edge portal multipliers
3. **Key Cards:**
   - Magnus: 12 Edge RP/₹200, 5x Travel Edge
   - Vistara Infinite: 4 CV Points/₹200
   - Ace: 5% cashback categories

### ICICI Bank
1. **Product Pages:** https://www.icicibank.com/personal-banking/cards/credit-card
2. **PayWith Rewards Portal**
3. **Key Cards:**
   - Sapphiro: 2 RP/₹100
   - Coral: 2 RP/₹100
   - Amazon Pay: 5% Amazon, 2% elsewhere

### SBI Cards
1. **Product Pages:** https://www.sbicard.com/
2. **SBI Rewardz Portal**
3. **Key Cards:**
   - SimplyCLICK: 10x on online shopping
   - Cashback: 5% fuel, 1% elsewhere

---

## 🎯 Implementation Sequence

### Phase 1: Setup & Config ✅
- [ ] Create `config/bank_platforms.js`
- [ ] Define all constants (categories, merchants, platforms)

### Phase 2: HDFC Bank (Complete Reference)
- [ ] Update `cards_data/hdfc_cards_data.js` (10 cards)
- [ ] Create `rules/hdfc/cashback.js`
- [ ] Create `rules/hdfc/direct_merchant_accelerated_rewards.js`
- [ ] Create `rules/hdfc/portal.js`
- [ ] Create `rules/hdfc/vouchers.js`

### Phase 3: Other Banks (Axis, ICICI, SBI)
- [ ] Validate each bank's data against sources
- [ ] Implement same 4-file structure per bank

### Phase 4: Validation & Testing
- [ ] Cross-check all reward rates
- [ ] Verify exclusions
- [ ] Confirm caps and validity periods

---

## ⚠️ Critical Validation Points

### 1. Base Rate Calculation
**Always convert to per ₹1:**
- "5 RP per ₹150" → 5/150 = 0.0333
- "12 Edge RP per ₹200" → 12/200 = 0.06
- "5% cashback" → 0.05

### 2. Redemption Value (value_per_unit)
**Critical for accurate comparison:**
- HDFC Infinia/DCB: 1 RP = ₹1 (SmartBuy flights/hotels)
- HDFC Regalia: 1 RP = ₹0.50 (SmartBuy)
- Axis Magnus: 1 Edge RP = ₹1 (Travel Edge transfers)
- Cashback: Always 1.0 (₹1 = ₹1)

### 3. Portal vs Direct Multipliers
**Common mistake:** Mixing portal and direct accelerated rewards
- Portal: Must specify platform name
- Direct: platform = null

### 4. Voucher Merchant Restriction
**Only allow:** amazon, flipkart, swiggy, zomato, tata_neu, bigbasket
- No other merchants get voucher-specific rules

### 5. Exclusions
**Standard exclusions (most cards):**
- fuel, wallet, rent, gov, emi, utility

**Check MITC for card-specific variations**

---

## 📊 Tie-Breaking Priority (When Multiple Paths Match)

**Sorting Logic:**
1. **Primary:** Highest monetary value
2. **Secondary (tie):** Lowest redemption_ease_score (easier = better)

**Example:**
- Path A: ₹500 value, score 2 (portal)
- Path B: ₹500 value, score 1 (cashback)
- **Winner:** Path B (same value, easier redemption)

---

## 🔄 Migration Notes

### What Changes
1. `type` → `card_tier`
2. `reward_currency` → stays, but `base_rate` always per ₹1
3. `optimal_redemption.value_per_unit` → moves to top level
4. New: `redemption_ease_score`
5. New: `earning_display`

### What's Removed
1. No separate counters (redundant with base_rate)
2. `expense_category` in rules (use only `category`)
3. Dual vectors in rules (type-specific only)

### What's Added
1. `config/bank_platforms.js`
2. `valid_from`, `valid_until` in rules
3. `priority` in rules
4. `redemption_ease_score` in cards

---

## 📝 Validation Checklist Per Bank

- [ ] All card base_rates verified against MITC
- [ ] All redemption values verified (portal/transfer rates)
- [ ] All exclusions checked
- [ ] All portal multipliers current (as of Jan 2026)
- [ ] All voucher rules validated
- [ ] All cashback offers confirmed active
- [ ] All caps and periods verified
- [ ] Fee waiver thresholds correct

---

## 🚀 Post-Implementation

1. **Update engine (index.html)** to use new schema
2. **Add data validation tests** (optional)
3. **Document API changes** for any external consumers
4. **Archive old structure** for reference

---

**End of Restructuring Guide**
