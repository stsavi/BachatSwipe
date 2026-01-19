import { EXPENSE_CATEGORIES, BANK_PORTALS, CAP_PERIODS, BENEFIT_TYPES, RULE_TYPES } from '../../config/bank_platforms.js';

/**
 * Axis Bank - Cashback Rules
 * Direct cashback offers (statement credit or instant)
 * Data validated against: Axis Bank MITC, official product pages
 * Last updated: January 17, 2026
 */

export const axisCashbackRules = [
  // Ace Card - Bill Payments (Primary benefit)
  {
    id: "axis_ace_bill_payment_gpay_phonepe",
    bank: "Axis Bank",
    rule_type: RULE_TYPES.CASHBACK,
    category: EXPENSE_CATEGORIES.UTILITIES,
    merchants: ["Google Pay", "PhonePe"],
    platform: "direct", // Bill payment via UPI apps
    benefit_type: BENEFIT_TYPES.CASHBACK,
    cashback_rate_map: {
      "axis_ace": 0.05
    },
    constraints: {
      transaction_type: "Bill Payment",
      platforms: ["Google Pay", "PhonePe"],
      excluded_billers: []
    },
    cap: null, // No cap
    cap_period: null,
    min_transaction: 100,
    max_transaction: null,
    valid_from: "2023-01-01",
    valid_until: null,
    priority: 10,
    notes: "5% unlimited cashback on bill payments via Google Pay and PhonePe. No upper limit."
  },

  // Ace Card - Utilities (2%)
  {
    id: "axis_ace_utilities",
    bank: "Axis Bank",
    rule_type: RULE_TYPES.CASHBACK,
    category: EXPENSE_CATEGORIES.UTILITIES,
    merchants: [],
    platform: "direct",
    benefit_type: BENEFIT_TYPES.CASHBACK,
    cashback_rate_map: {
      "axis_ace": 0.02
    },
    constraints: {
      transaction_type: "Direct Payment",
      excluded: ["bill_payments_via_gpay_phonepe"]
    },
    cap: null,
    cap_period: null,
    min_transaction: 100,
    max_transaction: null,
    valid_from: "2023-01-01",
    valid_until: null,
    priority: 9,
    notes: "2% cashback on direct utility payments (not via GPay/PhonePe which get 5%)"
  },

  // Airtel Card - Airtel Bills (25% for Airtel Black)
  {
    id: "axis_airtel_black_airtel_bills",
    bank: "Axis Bank",
    rule_type: RULE_TYPES.CASHBACK,
    category: EXPENSE_CATEGORIES.UTILITIES,
    merchants: ["Airtel"],
    platform: "direct",
    benefit_type: BENEFIT_TYPES.CASHBACK,
    cashback_rate_map: {
      "axis_airtel": 0.25
    },
    constraints: {
      customer_type: "Airtel Black",
      transaction_type: "Airtel Bill Payment"
    },
    cap: 500, // ₹500/month
    cap_period: CAP_PERIODS.MONTHLY,
    min_transaction: 100,
    max_transaction: null,
    valid_from: "2023-01-01",
    valid_until: null,
    priority: 10,
    notes: "25% cashback for Airtel Black customers on Airtel bills. Capped at ₹500/month."
  },

  // Airtel Card - Airtel Bills (10% for regular)
  {
    id: "axis_airtel_regular_airtel_bills",
    bank: "Axis Bank",
    rule_type: RULE_TYPES.CASHBACK,
    category: EXPENSE_CATEGORIES.UTILITIES,
    merchants: ["Airtel"],
    platform: "direct",
    benefit_type: BENEFIT_TYPES.CASHBACK,
    cashback_rate_map: {
      "axis_airtel": 0.10
    },
    constraints: {
      customer_type: "Regular",
      transaction_type: "Airtel Bill Payment"
    },
    cap: 300, // ₹300/month
    cap_period: CAP_PERIODS.MONTHLY,
    min_transaction: 100,
    max_transaction: null,
    valid_from: "2023-01-01",
    valid_until: null,
    priority: 9,
    notes: "10% cashback for regular Airtel customers on Airtel bills. Capped at ₹300/month."
  },

  // Airtel Card - Other Utilities (4%)
  {
    id: "axis_airtel_other_utilities",
    bank: "Axis Bank",
    rule_type: RULE_TYPES.CASHBACK,
    category: EXPENSE_CATEGORIES.UTILITIES,
    merchants: [],
    platform: "direct",
    benefit_type: BENEFIT_TYPES.CASHBACK,
    cashback_rate_map: {
      "axis_airtel": 0.04
    },
    constraints: {
      excluded_merchants: ["Airtel"]
    },
    cap: 250, // ₹250/month
    cap_period: CAP_PERIODS.MONTHLY,
    min_transaction: 100,
    max_transaction: null,
    valid_from: "2023-01-01",
    valid_until: null,
    priority: 8,
    notes: "4% cashback on other utility bills (excluding Airtel). Capped at ₹250/month."
  },

  // Flipkart Card - Flipkart/Myntra (5%)
  {
    id: "axis_flipkart_flipkart_myntra",
    bank: "Axis Bank",
    rule_type: RULE_TYPES.CASHBACK,
    category: EXPENSE_CATEGORIES.ONLINE_SHOPPING,
    merchants: ["Flipkart", "Myntra"],
    platform: "direct",
    benefit_type: BENEFIT_TYPES.CASHBACK,
    cashback_rate_map: {
      "axis_flipkart": 0.04
    },
    constraints: {
      platforms: ["Flipkart", "Myntra"]
    },
    cap: null, // Unlimited
    cap_period: null,
    min_transaction: 100,
    max_transaction: null,
    valid_from: "2023-01-01",
    valid_until: null,
    priority: 10,
    notes: "4% unlimited cashback on Flipkart and Myntra purchases. No upper limit."
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
  }
];

export default axisCashbackRules;
