import { EXPENSE_CATEGORIES, BENEFIT_TYPES, RULE_TYPES, CAP_PERIODS } from '../../config/bank_platforms.js';

/**
 * SBI Cards - Cashback Rules
 * Direct cashback and accelerated point offers
 * Data validated against: SBI Cards MITC, official product pages
 * Last updated: January 17, 2026
 */

export const sbiCashbackRules = [
  // SBI Cashback Card - All Online Categories (5% Wildcard)
  {
    id: "sbi_cashback_online_all",
    bank: "SBI Card",
    rule_type: RULE_TYPES.CASHBACK,
    category: "*", // Wildcard: matches all categories
    merchants: [],
    platform: null, // No platform constraint - applies to direct transactions
    benefit_type: BENEFIT_TYPES.CASHBACK,
    cashback_rate_map: {
      "sbi_cashback": 0.05
    },
    constraints: {
      transaction_type: "Online transactions only (not offline POS)"
    },
    cap: null, // Unlimited
    cap_period: null,
    min_transaction: 100,
    max_transaction: null,
    valid_from: "2023-01-01",
    valid_until: null,
    priority: 8, // Lower than specific category rules
    notes: "5% unlimited cashback on ALL online categories (shopping, dining, entertainment, etc.) except offline swipes and fuel. MAJOR EXCLUSIONS: wallet loads, rent, fuel, insurance, EMI, cash, railway, government, education, utility bills."
  },

  // SBI Cashback Card - Offline Shopping (1%)
  {
    id: "sbi_cashback_offline_shopping",
    bank: "SBI Card",
    rule_type: RULE_TYPES.CASHBACK,
    category: [EXPENSE_CATEGORIES.SHOPPING, EXPENSE_CATEGORIES.OFFLINE_SHOPPING],
    merchants: [],
    platform: "offline",
    benefit_type: BENEFIT_TYPES.CASHBACK,
    cashback_rate_map: {
      "sbi_cashback": 0.01
    },
    constraints: {},
    cap: null, // Unlimited
    cap_period: null,
    min_transaction: 100,
    max_transaction: null,
    valid_from: "2023-01-01",
    valid_until: null,
    priority: 9,
    notes: "1% cashback on all offline spends (physical POS swipes). Exclusions handled at card level."
  },

  // SimplySAVE - Dining (10X = 10 RP per ₹100, worth ₹2.5)
  {
    id: "sbi_simplysave_dining",
    bank: "SBI Card",
    rule_type: RULE_TYPES.CASHBACK,
    category: EXPENSE_CATEGORIES.DINING,
    merchants: [],
    platform: "direct",
    benefit_type: BENEFIT_TYPES.REWARD_MULTIPLIER,
    reward_multiplier_map: {
      "sbi_simplysave": 10
    },
    constraints: {},
    cap: null,
    cap_period: null,
    min_transaction: 100,
    max_transaction: null,
    valid_from: "2023-01-01",
    valid_until: null,
    priority: 10,
    notes: "10X Reward Points on dining. Base 1 per ₹100 becomes 10 per ₹100."
  },

  // SimplySAVE - Groceries (10X)
  {
    id: "sbi_simplysave_groceries",
    bank: "SBI Card",
    rule_type: RULE_TYPES.CASHBACK,
    category: EXPENSE_CATEGORIES.GROCERY,
    merchants: [],
    platform: "direct",
    benefit_type: BENEFIT_TYPES.REWARD_MULTIPLIER,
    reward_multiplier_map: {
      "sbi_simplysave": 10
    },
    constraints: {},
    cap: null,
    cap_period: null,
    min_transaction: 100,
    max_transaction: null,
    valid_from: "2023-01-01",
    valid_until: null,
    priority: 10,
    notes: "10X Reward Points on groceries. Base 1 per ₹100 becomes 10 per ₹100."
  },

  // SimplySAVE - Movies (10X)
  {
    id: "sbi_simplysave_movies",
    bank: "SBI Card",
    rule_type: RULE_TYPES.CASHBACK,
    category: EXPENSE_CATEGORIES.ENTERTAINMENT,
    merchants: [],
    platform: "direct",
    benefit_type: BENEFIT_TYPES.REWARD_MULTIPLIER,
    reward_multiplier_map: {
      "sbi_simplysave": 10
    },
    constraints: {
      merchant_type: "Movie Theaters"
    },
    cap: null,
    cap_period: null,
    min_transaction: 100,
    max_transaction: null,
    valid_from: "2023-01-01",
    valid_until: null,
    priority: 10,
    notes: "10X Reward Points on movie tickets. Base 1 per ₹100 becomes 10 per ₹100."
  },

  // SimplyCLICK - Online Shopping (5X)
  {
    id: "sbi_simplyclick_online_shopping",
    bank: "SBI Card",
    rule_type: RULE_TYPES.CASHBACK,
    category: EXPENSE_CATEGORIES.ONLINE_SHOPPING,
    merchants: [],
    platform: "online",
    benefit_type: BENEFIT_TYPES.REWARD_MULTIPLIER,
    reward_multiplier_map: {
      "sbi_simplyclick": 5
    },
    constraints: {},
    cap: null,
    cap_period: null,
    min_transaction: 100,
    max_transaction: null,
    valid_from: "2023-01-01",
    valid_until: null,
    priority: 9,
    notes: "5X Reward Points on online shopping. Base 1 per ₹100 becomes 5 per ₹100."
  },

  // SimplyCLICK - Partner Sites (10X)
  {
    id: "sbi_simplyclick_partners",
    bank: "SBI Card",
    rule_type: RULE_TYPES.CASHBACK,
    category: EXPENSE_CATEGORIES.ONLINE_SHOPPING,
    merchants: ["cleartrip", "bookmyshow", "lenskart", "apollo 24/7", "dominos", "myntra", "netmeds", "yatra", "swiggy"],
    platform: "online",
    benefit_type: BENEFIT_TYPES.REWARD_MULTIPLIER,
    reward_multiplier_map: {
      "sbi_simplyclick": 10
    },
    constraints: {
      platforms: ["Cleartrip", "BookMyShow", "Lenskart", "Apollo 24/7", "Domino's", "Myntra", "Netmeds", "Yatra", "Swiggy"]
    },
    cap: null,
    cap_period: null,
    min_transaction: 100,
    max_transaction: null,
    valid_from: "2023-01-01",
    valid_until: null,
    priority: 10,
    notes: "10X Reward Points on exclusive partners (Cleartrip, BookMyShow, Lenskart, Apollo 24/7, Domino's, Myntra, Netmeds, Yatra, Swiggy)."
  },

  // BPCL Card - Fuel (25X = 25 fuel points per ₹100)
  {
    id: "sbi_bpcl_fuel",
    bank: "SBI Card",
    rule_type: RULE_TYPES.CASHBACK,
    category: EXPENSE_CATEGORIES.FUEL,
    merchants: ["BPCL"],
    platform: "direct",
    benefit_type: BENEFIT_TYPES.REWARD_MULTIPLIER,
    reward_multiplier_map: {
      "sbi_bpcl": 13
    },
    constraints: {
      merchant: "BPCL petrol pumps only"
    },
    cap: 1300, // 1300 points per month max (from search results)
    cap_period: CAP_PERIODS.MONTHLY,
    min_transaction: 100,
    max_transaction: null,
    valid_from: "2023-01-01",
    valid_until: null,
    priority: 10,
    notes: "13X fuel points at BPCL. 13 points per ₹100. Value: 13 * 0.25 = ₹3.25 (3.25%) + 1% surcharge waiver = 4.25% total."
  }
];

export default sbiCashbackRules;
