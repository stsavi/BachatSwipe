import { EXPENSE_CATEGORIES, BANK_PORTALS, CAP_PERIODS, BENEFIT_TYPES, RULE_TYPES } from '../../config/bank_platforms.js';

/**
 * Axis Bank - Cashback Rules
 * Direct cashback offers (statement credit or instant)
 * Data validated against: Axis Bank MITC, official product pages
 * Last updated: January 17, 2026
 */

export const axisCashbackRules = [

  //Axis Reserve - BookMyShow Offer
  {
    id: "axis_reserve_bookmyshow",
    bank: "Axis Bank",
    rule_type: RULE_TYPES.CASHBACK,
    category: EXPENSE_CATEGORIES.ENTERTAINMENT,
    merchants: ["BookMyShow"],
    platform: "direct",
    benefit_type: BENEFIT_TYPES.CASHBACK,
    cashback_rate_map: {
      "axis_reserve": 0.50
    },
    constraints: {
      transaction_type: "Direct Payment",
      platforms: ["BookMyShow"]
    },
    cap: 1000,
    cap_period: CAP_PERIODS.MONTHLY,
    min_transaction: 100,
    max_transaction: null,
    valid_from: "2023-01-01",
    valid_until: null,
    priority: 10,
    notes: "Buy 1 Get 1 free movie ticket, up to Rs. 500 off on 2nd, can be availed 5 times a month. Buy 1 Get 1 free non-movie ticket and get up to Rs. 1000 off on the 2nd, can be availed 5 times a month."
  },

  // Ace Card - (5% on Utilitybill payments via Google Pay)
  {
    id: "axis_ace_utility_gpay",
    bank: "Axis Bank",
    rule_type: RULE_TYPES.CASHBACK,
    category: EXPENSE_CATEGORIES.UTILITIES,
    merchants: ["Google Pay"],
    platform: "direct", // Bill payment via UPI apps
    benefit_type: BENEFIT_TYPES.CASHBACK,
    cashback_rate_map: {
      "axis_ace": 0.05
    },
    constraints: {
      transaction_type: "Utility Bill Payment",
      platforms: ["Google Pay"],
      excluded_billers: ["Any Platform other than Google Pay"]
    },
    cap: null, // No cap
    cap_period: null,
    min_transaction: 100,
    max_transaction: null,
    valid_from: "2023-01-01",
    valid_until: null,
    priority: 10,
    notes: "5% Cashback on bill payments through Google Pay (electricity, water, gas, LPG, broadband, DTH, mobile recharges)"
  },

  // Ace Card - (4% on Swiggy/Zomato/Ola)
  {
    id: "axis_ace_swiggy_zomato_ola",
    bank: "Axis Bank",
    rule_type: RULE_TYPES.CASHBACK,
    category: EXPENSE_CATEGORIES.DINING,
    merchants: ["Swiggy", "Zomato", "Ola"],
    platform: "direct",
    benefit_type: BENEFIT_TYPES.CASHBACK,
    cashback_rate_map: {
      "axis_ace": 0.04
    },
    constraints: {
      transaction_type: "Direct Payment",
      platforms: ["Swiggy", "Zomato", "Ola"]
    },
    cap: null,
    cap_period: null,
    min_transaction: 100,
    max_transaction: null,
    valid_from: "2023-01-01",
    valid_until: null,
    priority: 9,
    notes: "4% Cashback on Swiggy/Zomato/Ola spends"
  },

  // Airtel Card - 25% for Airtel bills
  {
    id: "axis_airtel_bills_25pct",
    bank: "Axis Bank",
    rule_type: RULE_TYPES.CASHBACK,
    category: EXPENSE_CATEGORIES.UTILITIES,
    merchants: ["airtel_thanks"],
    platform: "direct",
    benefit_type: BENEFIT_TYPES.CASHBACK,
    cashback_rate_map: {
      "axis_airtel": 0.25
    },
    constraints: {
      transaction_type: "Airtel Bill Payments"
    },
    cap: 250, // ₹250/month
    cap_period: CAP_PERIODS.MONTHLY,
    min_transaction: 100,
    max_transaction: null,
    valid_from: "2023-01-01",
    valid_until: null,
    priority: 10,
    notes: "25% cashback on Airtel bills via Airtel Thanks app. Capped at ₹250/month."
  },

  // Airtel Card - 10% for Utility bills.
  {
    id: "axis_airtel_utility_bills_10pct",
    bank: "Axis Bank",
    rule_type: RULE_TYPES.CASHBACK,
    category: EXPENSE_CATEGORIES.UTILITIES,
    merchants: ["airtel_thanks"],
    platform: "direct",
    benefit_type: BENEFIT_TYPES.CASHBACK,
    cashback_rate_map: {
      "axis_airtel": 0.10
    },
    constraints: {
      transaction_type: "Utility Bill Payments"
    },
    cap: 250, // ₹250/month
    cap_period: CAP_PERIODS.MONTHLY,
    min_transaction: 100,
    max_transaction: null,
    valid_from: "2023-01-01",
    valid_until: null,
    priority: 9,
    notes: "10% cashback on Utility bill payments via Airtel Thanks app. Capped at ₹250/month."
  },

  // Airtel Card - 10% for Zomato, Swiggy and BigBasket.
  {
    id: "axis_airtel_preferred_merchants",
    bank: "Axis Bank",
    rule_type: RULE_TYPES.CASHBACK,
    category: [EXPENSE_CATEGORIES.DINING, EXPENSE_CATEGORIES.GROCERIES],
    merchants: ["Zomato", "Swiggy", "BigBasket"],
    platform: "direct",
    benefit_type: BENEFIT_TYPES.CASHBACK,
    cashback_rate_map: {
      "axis_airtel": 0.10
    },
    constraints: {
      transaction_type: "Preferred Merchant Payments"
    },
    cap: 500, // ₹500/month
    cap_period: CAP_PERIODS.MONTHLY,
    min_transaction: 100,
    max_transaction: null,
    valid_from: "2023-01-01",
    valid_until: null,
    priority: 9,
    notes: "10% cashback on Zomato, Swiggy and BigBasket. Capped at ₹500/month."
  },

  // Flipkart Card - Flipkart/Cleartrip (5%)
  {
    id: "axis_flipkart_flipkart_cleartrip",
    bank: "Axis Bank",
    rule_type: RULE_TYPES.CASHBACK,
    category: EXPENSE_CATEGORIES.ONLINE_SHOPPING,
    merchants: ["Flipkart", "Cleartrip"],
    platform: "direct",
    benefit_type: BENEFIT_TYPES.CASHBACK,
    cashback_rate_map: {
      "axis_flipkart": 0.05
    },
    constraints: {
      platforms: ["Flipkart", "Cleartrip"]
    },
    cap: 4000, //₹4000/statement cycle
    cap_period: CAP_PERIODS.MONTHLY,
    min_transaction: 100,
    max_transaction: null,
    valid_from: "2023-01-01",
    valid_until: null,
    priority: 10,
    notes: "5% cashback on Flipkart and Cleartrip purchases. Capped at ₹4000/statement cycle."
  },

  // Flipkart Card - Myntra (7.5%)
  {
    id: "axis_flipkart_myntra",
    bank: "Axis Bank",
    rule_type: RULE_TYPES.CASHBACK,
    category: EXPENSE_CATEGORIES.ONLINE_SHOPPING,
    merchants: ["Myntra"],
    platform: "direct",
    benefit_type: BENEFIT_TYPES.CASHBACK,
    cashback_rate_map: {
      "axis_flipkart": 0.075
    },
    constraints: {
      platforms: ["Myntra"]
    },
    cap: 4000, //₹4000/statement cycle
    cap_period: CAP_PERIODS.MONTHLY,
    min_transaction: 100,
    max_transaction: null,
    valid_from: "2023-01-01",
    valid_until: null,
    priority: 10,
    notes: "7.5% cashback on Myntra purchases. Capped at ₹4000/statement cycle."
  },

  // Flipkart Card - Preferred Merchants (4%)
  {
    id: "axis_flipkart_preferred_merchants",
    bank: "Axis Bank",
    rule_type: RULE_TYPES.CASHBACK,
    category: [EXPENSE_CATEGORIES.ONLINE_SHOPPING, EXPENSE_CATEGORIES.DINING, EXPENSE_CATEGORIES.ENTERTAINMENT],
    merchants: ["Swiggy", "Uber", "PVR", "Cult.fit"],
    platform: "direct",
    benefit_type: BENEFIT_TYPES.CASHBACK,
    cashback_rate_map: {
      "axis_flipkart": 0.04
    },
    constraints: {
      platforms: ["Swiggy", "Uber", "PVR", "Cult.fit"]
    },
    cap: null, //Unlimited
    cap_period: null,
    min_transaction: 100,
    max_transaction: null,
    valid_from: "2023-01-01",
    valid_until: null,
    priority: 10,
    notes: "4% cashback on Swiggy, Uber, PVR, Cult.fit purchases. Unlimited."
  },

  // Ace Card - Base Cashback (1% Wildcard)
  {
    id: "axis_ace_base_cashback_all",
    bank: "Axis Bank",
    rule_type: RULE_TYPES.CASHBACK,
    category: "*", // Wildcard: matches all categories
    merchants: [],
    platform: null,
    benefit_type: BENEFIT_TYPES.CASHBACK,
    cashback_rate_map: {
      "axis_ace": 0.01
    },
    constraints: {
      excluded_categories: ["fuel", "offline_shopping"],
      exclusions: "Excludes fuel, wallet loads, rent, insurance, government, EMI, education"
    },
    cap: null,
    cap_period: null,
    min_transaction: 100,
    max_transaction: null,
    valid_from: "2023-01-01",
    valid_until: null,
    priority: 5,
    notes: "1% base cashback on all categories. Specific rules (5% bill payments, 2% utilities) take precedence."
  },

  // Flipkart Card - Base Cashback (1.5% Wildcard)
  {
    id: "axis_flipkart_base_cashback_all",
    bank: "Axis Bank",
    rule_type: RULE_TYPES.CASHBACK,
    category: "*", // Wildcard: matches all categories
    merchants: [],
    platform: null,
    benefit_type: BENEFIT_TYPES.CASHBACK,
    cashback_rate_map: {
      "axis_flipkart": 0.015
    },
    constraints: {
      excluded_categories: ["fuel", "offline_shopping"],
      exclusions: "Excludes fuel, wallet loads, rent, insurance, government, EMI, education"
    },
    cap: null,
    cap_period: null,
    min_transaction: 100,
    max_transaction: null,
    valid_from: "2023-01-01",
    valid_until: null,
    priority: 5,
    notes: "1.5% base cashback on all non-Flipkart spends. 4% on Flipkart/Myntra takes precedence."
  },

  //Axis IndianOil - 10% discount on BookMyShow bookings
  {
    id: "axis_indianoil_bookmyshow",
    bank: "Axis Bank",
    rule_type: RULE_TYPES.CASHBACK,
    category: EXPENSE_CATEGORIES.ENTERTAINMENT,
    merchants: ["BookMyShow"],
    platform: "direct",
    benefit_type: BENEFIT_TYPES.CASHBACK,
    cashback_rate_map: {
      "axis_indianoil": 0.10
    },
    constraints: {
      platforms: ["BookMyShow"]
    },
    cap: 100,
    cap_period: CAP_PERIODS.MONTHLY,
    min_transaction: 100,
    max_transaction: null,
    valid_from: "2023-01-01",
    valid_until: null,
    priority: 10,
    notes: "10% discount on BookMyShow bookings."
  }
];

export default axisCashbackRules;
