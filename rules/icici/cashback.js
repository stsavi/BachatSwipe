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
    merchants: ["Amazon"],
    platform: "direct",
    benefit_type: BENEFIT_TYPES.CASHBACK,
    cashback_rates: [0.05], // 5% cashback (Prime members)
    applies_to_cards: ["icici_amazon_pay"],
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
    cashback_rates: [0.02], // 2% cashback
    applies_to_cards: ["icici_amazon_pay"],
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
    merchants: ["HPCL"],
    platform: "direct",
    benefit_type: BENEFIT_TYPES.CASHBACK,
    cashback_rates: [0.05], // 5% cashback
    applies_to_cards: ["icici_hpcl"],
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

  // Sapphiro - BookMyShow Discount
  {
    id: "icici_sapphiro_bookmyshow",
    bank: "ICICI Bank",
    rule_type: RULE_TYPES.CASHBACK,
    category: EXPENSE_CATEGORIES.ENTERTAINMENT,
    merchants: ["BookMyShow"],
    platform: "online",
    benefit_type: BENEFIT_TYPES.CASHBACK,
    cashback_rates: [0.15], // Effective 15% discount
    applies_to_cards: ["icici_sapphiro"],
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
  }
];

export default iciciCashbackRules;
