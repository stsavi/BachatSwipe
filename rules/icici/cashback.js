import { EXPENSE_CATEGORIES, BENEFIT_TYPES, RULE_TYPES, CAP_PERIODS } from '../../config/bank_platforms.js';

/**
 * ICICI Bank - Cashback Rules
 * Direct cashback offers (statement credit or Amazon Pay balance)
 * Data validated against: ICICI Bank MITC, official product pages
 * Last updated: January 17, 2026
 */

export const iciciCashbackRules = [
  // Amazon Pay - Amazon (5% for Prime members, 3% for non-Prime)
  // NOTE: Calculator uses 5% rate. Users should manually check if they have Prime membership.
  {
    id: "icici_amazon_pay_amazon",
    bank: "ICICI Bank",
    rule_type: RULE_TYPES.CASHBACK,
    category: EXPENSE_CATEGORIES.ONLINE_SHOPPING,
    merchants: ["amazon"],
    platform: "direct",
    benefit_type: BENEFIT_TYPES.CASHBACK,
    cashback_rate_map: {
      "icici_amazon_pay": 0.05
    },
    constraints: {},
    cap: null, // Unlimited
    cap_period: null,
    min_transaction: 100,
    max_transaction: null,
    valid_from: "2023-01-01",
    valid_until: null,
    priority: 10,
    notes: "5% cashback for Prime members, 3% for non-Prime. Calculation assumes Prime rate. Credited as Amazon Pay balance."
  },

  // Amazon Pay - Bill Payments (2%)
  {
    id: "icici_amazon_pay_bill_payments",
    bank: "ICICI Bank",
    rule_type: RULE_TYPES.CASHBACK,
    category: EXPENSE_CATEGORIES.UTILITIES,
    merchants: [],
    platform: "amazon_pay",
    benefit_type: BENEFIT_TYPES.CASHBACK,
    cashback_rate_map: {
      "icici_amazon_pay": 0.02
    },
    constraints: {
      transaction_type: "Bill Payment via Amazon Pay"
    },
    cap: 1500, // ₹1500/month
    cap_period: CAP_PERIODS.MONTHLY,
    min_transaction: 100,
    max_transaction: null,
    valid_from: "2023-01-01",
    valid_until: null,
    priority: 8,
    notes: "2% cashback on bill payments via Amazon Pay. Capped at ₹1500/month."
  },

  // HPCL Card - Fuel (5% at HPCL)
  {
    id: "icici_hpcl_fuel",
    bank: "ICICI Bank",
    rule_type: RULE_TYPES.CASHBACK,
    category: EXPENSE_CATEGORIES.FUEL,
    merchants: ["hpcl"],
    platform: "direct",
    benefit_type: BENEFIT_TYPES.CASHBACK,
    cashback_rate_map: {
      "icici_hpcl": 0.05
    },
    constraints: {
      merchant: "HPCL petrol pumps only"
    },
    cap: 500, // ₹500/month
    cap_period: CAP_PERIODS.MONTHLY,
    min_transaction: 100,
    max_transaction: null,
    valid_from: "2023-01-01",
    valid_until: null,
    priority: 10,
    notes: "5% cashback at HPCL fuel stations. Capped at ₹500/month."
  },

  // Sapphiro - BookMyShow BOGO
  {
    id: "icici_sapphiro_bookmyshow",
    bank: "ICICI Bank",
    rule_type: RULE_TYPES.CASHBACK,
    category: EXPENSE_CATEGORIES.ENTERTAINMENT,
    merchants: ["bookmyshow"],
    platform: null, // No platform constraint - direct merchant transaction
    benefit_type: BENEFIT_TYPES.CASHBACK,
    cashback_rate_map: {
      "icici_sapphiro": 0.15
    },
    constraints: {
      merchant: "BookMyShow only",
      offer_type: "Buy 1 Get 1 on movie tickets"
    },
    cap: 500, // ₹500/month
    cap_period: CAP_PERIODS.MONTHLY,
    min_transaction: 200,
    max_transaction: null,
    valid_from: "2023-01-01",
    valid_until: null,
    priority: 9,
    notes: "Buy 1 Get 1 offer on BookMyShow movie tickets (effective ~15% discount, ₹500 cap/month)."
  },

  // Amazon Pay - Base Cashback (1% Wildcard)
  {
    id: "icici_amazon_pay_base_cashback_all",
    bank: "ICICI Bank",
    rule_type: RULE_TYPES.CASHBACK,
    category: "*", // Wildcard: matches all categories
    merchants: [],
    platform: null,
    benefit_type: BENEFIT_TYPES.CASHBACK,
    cashback_rate_map: {
      "icici_amazon_pay": 0.01
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
    notes: "1% base cashback on all categories. Specific rules (5% Amazon, 2% bill payments) take precedence."
  }
];

export default iciciCashbackRules;
