import { VOUCHER_MERCHANTS, BANK_PORTALS, CAP_PERIODS, BENEFIT_TYPES, RULE_TYPES } from '../../config/bank_platforms.js';

/**
 * Axis Bank - Voucher Rules (EDGE Rewards)
 * Gift voucher purchases via EDGE Rewards portal
 * Data validated against: EDGE Rewards portal, Axis MITC
 * Last updated: January 17, 2026
 */

export const axisVoucherRules = [
  //Amazon/Flipkart Vouchers (5x)
  {
    id: "axis_magnus_amazon_flipkart_vouchers",
    bank: "Axis Bank",
    rule_type: RULE_TYPES.VOUCHER,
    category: "voucher",
    merchants: [VOUCHER_MERCHANTS.AMAZON, VOUCHER_MERCHANTS.FLIPKART],
    platform: BANK_PORTALS.AXIS_EDGE_REWARDS,
    benefit_type: BENEFIT_TYPES.REWARD_MULTIPLIER,
    reward_multiplier_map: {
      "axis_magnus": 5,
      "axis_reserve": 5
    },
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

  //Dining Vouchers (Swiggy/Zomato) (5x)
  {
    id: "axis_magnus_dining_vouchers",
    bank: "Axis Bank",
    rule_type: RULE_TYPES.VOUCHER,
    category: "voucher",
    merchants: [VOUCHER_MERCHANTS.SWIGGY, VOUCHER_MERCHANTS.ZOMATO],
    platform: BANK_PORTALS.AXIS_EDGE_REWARDS,
    benefit_type: BENEFIT_TYPES.REWARD_MULTIPLIER,
    reward_multiplier_map: {
      "axis_magnus": 5,
      "axis_reserve": 5
    },
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
  }
];

export default axisVoucherRules;
