import { VOUCHER_MERCHANTS, BANK_PORTALS, CAP_PERIODS, BENEFIT_TYPES, RULE_TYPES } from '../../config/bank_platforms.js';

/**
 * ICICI Bank - Voucher Rules (PayWith Rewards)
 * Gift voucher purchases via ICICI portals
 * Data validated against: PayWith Rewards portal, ICICI MITC
 * Last updated: January 17, 2026
 */

export const iciciVoucherRules = [
  // ICICI Emerald Private Metal - Vouchers (6x)
  {
    id: "icici_emeralde_private_metal_vouchers",
    bank: "ICICI Bank",
    rule_type: RULE_TYPES.VOUCHER,
    category: "voucher",
    merchants: [VOUCHER_MERCHANTS.SWIGGY, VOUCHER_MERCHANTS.ZOMATO],
    platform: BANK_PORTALS.ICICI_PAYWITH,
    benefit_type: BENEFIT_TYPES.REWARD_MULTIPLIER,
    reward_multiplier_map: {
      "icici_emeralde_private_metal": 6
    },
    cap: 18000, // 18k reward points/month
    cap_period: CAP_PERIODS.MONTHLY,
    min_transaction: 200,
    max_transaction: 18000,
    valid_from: "2023-01-01",
    valid_until: null,
    priority: 10,
    notes: "6x Reward Points on brand vouchers. Base 6 reward points per ₹200 becomes 36 points per ₹200."
  },

  // Other Cards - Vouchers (6x)
  {
    id: "icici_other_credit_cards_vouchers",
    bank: "ICICI Bank",
    rule_type: RULE_TYPES.VOUCHER,
    category: "voucher",
    merchants: ["*"],
    platform: BANK_PORTALS.ICICI_PAYWITH,
    benefit_type: BENEFIT_TYPES.REWARD_MULTIPLIER,
    reward_multiplier_map: {
      "icici_sapphiro": 6,
      "icici_coral": 6,
      "icici_hpcl_super_saver": 6
    },
    cap: 15000, // 15k reward points/month
    cap_period: CAP_PERIODS.MONTHLY,
    min_transaction: 100,
    max_transaction: 15000,
    valid_from: "2023-01-01",
    valid_until: null,
    priority: 10,
    notes: "6x Reward Points on brand vouchers. Base 2 reward points per ₹100 becomes 12 points per ₹100."
  }
];

export default iciciVoucherRules;
