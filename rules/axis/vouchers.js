import { VOUCHER_MERCHANTS, BANK_PORTALS, CAP_PERIODS, BENEFIT_TYPES, RULE_TYPES } from '../../config/bank_platforms.js';

/**
 * Axis Bank - Voucher Rules (EDGE Rewards)
 * Gift voucher purchases via EDGE Rewards portal
 * Data validated against: EDGE Rewards portal, Axis MITC
 * Last updated: January 17, 2026
 */

export const axisVoucherRules = [
  // Magnus - Amazon/Flipkart Vouchers (5x)
  {
    id: "axis_magnus_amazon_flipkart_vouchers",
    bank: "Axis Bank",
    rule_type: RULE_TYPES.VOUCHER,
    category: "voucher",
    merchants: [VOUCHER_MERCHANTS.AMAZON, VOUCHER_MERCHANTS.FLIPKART],
    platform: BANK_PORTALS.AXIS_EDGE_REWARDS,
    benefit_type: BENEFIT_TYPES.REWARD_MULTIPLIER,
    reward_multipliers: [5], // 5x Edge Miles
    applies_to_cards: ["axis_magnus"],
    constraints: {
      platform: "EDGE Rewards portal only"
    },
    voucher_denominations: [100, 500, 1000, 2000, 5000, 10000],
    cap: 15000, // ₹15k worth/month
    cap_period: CAP_PERIODS.MONTHLY,
    min_transaction: 100,
    max_transaction: 10000,
    valid_from: "2023-01-01",
    valid_until: null,
    priority: 10,
    notes: "5x Edge Miles on Amazon/Flipkart vouchers. Base 12 per ₹200 becomes 60 per ₹200."
  },

  // Magnus - Dining Vouchers (Swiggy/Zomato) (5x)
  {
    id: "axis_magnus_dining_vouchers",
    bank: "Axis Bank",
    rule_type: RULE_TYPES.VOUCHER,
    category: "voucher",
    merchants: [VOUCHER_MERCHANTS.SWIGGY, VOUCHER_MERCHANTS.ZOMATO],
    platform: BANK_PORTALS.AXIS_EDGE_REWARDS,
    benefit_type: BENEFIT_TYPES.REWARD_MULTIPLIER,
    reward_multipliers: [5], // 5x Edge Miles
    applies_to_cards: ["axis_magnus"],
    constraints: {
      platform: "EDGE Rewards portal only"
    },
    voucher_denominations: [100, 500, 1000, 2000],
    cap: 10000, // ₹10k worth/month
    cap_period: CAP_PERIODS.MONTHLY,
    min_transaction: 100,
    max_transaction: 5000,
    valid_from: "2023-01-01",
    valid_until: null,
    priority: 10,
    notes: "5x Edge Miles on Swiggy/Zomato vouchers."
  },

  // Reserve - Amazon/Flipkart Vouchers (5x)
  {
    id: "axis_reserve_amazon_flipkart_vouchers",
    bank: "Axis Bank",
    rule_type: RULE_TYPES.VOUCHER,
    category: "voucher",
    merchants: [VOUCHER_MERCHANTS.AMAZON, VOUCHER_MERCHANTS.FLIPKART],
    platform: BANK_PORTALS.AXIS_EDGE_REWARDS,
    benefit_type: BENEFIT_TYPES.REWARD_MULTIPLIER,
    reward_multipliers: [5], // 5x Edge Miles
    applies_to_cards: ["axis_reserve"],
    constraints: {
      platform: "EDGE Rewards portal only"
    },
    voucher_denominations: [100, 500, 1000, 2000, 5000, 10000],
    cap: 20000, // ₹20k worth/month
    cap_period: CAP_PERIODS.MONTHLY,
    min_transaction: 100,
    max_transaction: 10000,
    valid_from: "2023-01-01",
    valid_until: null,
    priority: 10,
    notes: "5x Edge Miles on Amazon/Flipkart vouchers. Base 15 per ₹200 becomes 75 per ₹200."
  },

  // Reserve - Dining Vouchers (Swiggy/Zomato) (5x)
  {
    id: "axis_reserve_dining_vouchers",
    bank: "Axis Bank",
    rule_type: RULE_TYPES.VOUCHER,
    category: "voucher",
    merchants: [VOUCHER_MERCHANTS.SWIGGY, VOUCHER_MERCHANTS.ZOMATO],
    platform: BANK_PORTALS.AXIS_EDGE_REWARDS,
    benefit_type: BENEFIT_TYPES.REWARD_MULTIPLIER,
    reward_multipliers: [5], // 5x Edge Miles
    applies_to_cards: ["axis_reserve"],
    constraints: {
      platform: "EDGE Rewards portal only"
    },
    voucher_denominations: [100, 500, 1000, 2000],
    cap: 15000, // ₹15k worth/month
    cap_period: CAP_PERIODS.MONTHLY,
    min_transaction: 100,
    max_transaction: 5000,
    valid_from: "2023-01-01",
    valid_until: null,
    priority: 10,
    notes: "5x Edge Miles on Swiggy/Zomato vouchers."
  },

  // Atlas - All Vouchers (2x base)
  {
    id: "axis_atlas_all_vouchers",
    bank: "Axis Bank",
    rule_type: RULE_TYPES.VOUCHER,
    category: "voucher",
    merchants: [VOUCHER_MERCHANTS.AMAZON, VOUCHER_MERCHANTS.FLIPKART, VOUCHER_MERCHANTS.SWIGGY, VOUCHER_MERCHANTS.ZOMATO],
    platform: BANK_PORTALS.AXIS_EDGE_REWARDS,
    benefit_type: BENEFIT_TYPES.REWARD_MULTIPLIER,
    reward_multipliers: [2], // 2x Edge Miles
    applies_to_cards: ["axis_atlas"],
    constraints: {
      platform: "EDGE Rewards portal only"
    },
    voucher_denominations: [100, 500, 1000, 2000, 5000],
    cap: 5000, // ₹5k worth/month
    cap_period: CAP_PERIODS.MONTHLY,
    min_transaction: 100,
    max_transaction: 5000,
    valid_from: "2023-01-01",
    valid_until: null,
    priority: 9,
    notes: "2x Edge Miles on vouchers. Base 2 per ₹100 becomes 4 per ₹100."
  }
];

export default axisVoucherRules;
