import { VOUCHER_MERCHANTS, BANK_PORTALS, CAP_PERIODS, BENEFIT_TYPES, RULE_TYPES } from '../../config/bank_platforms.js';

/**
 * ICICI Bank - Voucher Rules (PayWith Rewards)
 * Gift voucher purchases via ICICI portals
 * Data validated against: PayWith Rewards portal, ICICI MITC
 * Last updated: January 17, 2026
 */

export const iciciVoucherRules = [
  // Sapphiro - Amazon/Flipkart Vouchers (5x)
  {
    id: "icici_sapphiro_amazon_flipkart_vouchers",
    bank: "ICICI Bank",
    rule_type: RULE_TYPES.VOUCHER,
    category: "voucher",
    merchants: [VOUCHER_MERCHANTS.AMAZON, VOUCHER_MERCHANTS.FLIPKART],
    platform: BANK_PORTALS.ICICI_PAYWITH,
    benefit_type: BENEFIT_TYPES.REWARD_MULTIPLIER,
    reward_multipliers: [5], // 5x Reward Points
    applies_to_cards: ["icici_sapphiro"],
    constraints: {
      platform: "PayWith Rewards portal only"
    },
    voucher_denominations: [100, 500, 1000, 2000, 5000],
    cap: 10000, // ₹10k worth/month
    cap_period: CAP_PERIODS.MONTHLY,
    min_transaction: 100,
    max_transaction: 10000,
    valid_from: "2023-01-01",
    valid_until: null,
    priority: 10,
    notes: "5x Reward Points on Amazon/Flipkart vouchers. Base 6 per ₹200 becomes 30 per ₹200."
  },

  // Sapphiro - Dining Vouchers (Swiggy/Zomato) (5x)
  {
    id: "icici_sapphiro_dining_vouchers",
    bank: "ICICI Bank",
    rule_type: RULE_TYPES.VOUCHER,
    category: "voucher",
    merchants: [VOUCHER_MERCHANTS.SWIGGY, VOUCHER_MERCHANTS.ZOMATO],
    platform: BANK_PORTALS.ICICI_PAYWITH,
    benefit_type: BENEFIT_TYPES.REWARD_MULTIPLIER,
    reward_multipliers: [5], // 5x Reward Points
    applies_to_cards: ["icici_sapphiro"],
    constraints: {
      platform: "PayWith Rewards portal only"
    },
    voucher_denominations: [100, 500, 1000, 2000],
    cap: 5000, // ₹5k worth/month
    cap_period: CAP_PERIODS.MONTHLY,
    min_transaction: 100,
    max_transaction: 5000,
    valid_from: "2023-01-01",
    valid_until: null,
    priority: 10,
    notes: "5x Reward Points on Swiggy/Zomato vouchers."
  },

  // Coral/Rubyx - Amazon/Flipkart Vouchers (3x)
  {
    id: "icici_coral_rubyx_amazon_flipkart_vouchers",
    bank: "ICICI Bank",
    rule_type: RULE_TYPES.VOUCHER,
    category: "voucher",
    merchants: [VOUCHER_MERCHANTS.AMAZON, VOUCHER_MERCHANTS.FLIPKART],
    platform: BANK_PORTALS.ICICI_PAYWITH,
    benefit_type: BENEFIT_TYPES.REWARD_MULTIPLIER,
    reward_multipliers: [3, 3], // 3x Reward Points
    applies_to_cards: ["icici_coral", "icici_rubyx"],
    constraints: {
      platform: "PayWith Rewards portal only"
    },
    voucher_denominations: [100, 500, 1000, 2000, 5000],
    cap: 5000, // ₹5k worth/month
    cap_period: CAP_PERIODS.MONTHLY,
    min_transaction: 100,
    max_transaction: 5000,
    valid_from: "2023-01-01",
    valid_until: null,
    priority: 9,
    notes: "3x Reward Points on Amazon/Flipkart vouchers. Base 4 per ₹200 becomes 12 per ₹200."
  },

  // Coral/Rubyx - Dining Vouchers (Swiggy/Zomato) (3x)
  {
    id: "icici_coral_rubyx_dining_vouchers",
    bank: "ICICI Bank",
    rule_type: RULE_TYPES.VOUCHER,
    category: "voucher",
    merchants: [VOUCHER_MERCHANTS.SWIGGY, VOUCHER_MERCHANTS.ZOMATO],
    platform: BANK_PORTALS.ICICI_PAYWITH,
    benefit_type: BENEFIT_TYPES.REWARD_MULTIPLIER,
    reward_multipliers: [3, 3], // 3x Reward Points
    applies_to_cards: ["icici_coral", "icici_rubyx"],
    constraints: {
      platform: "PayWith Rewards portal only"
    },
    voucher_denominations: [100, 500, 1000, 2000],
    cap: 3000, // ₹3k worth/month
    cap_period: CAP_PERIODS.MONTHLY,
    min_transaction: 100,
    max_transaction: 3000,
    valid_from: "2023-01-01",
    valid_until: null,
    priority: 9,
    notes: "3x Reward Points on Swiggy/Zomato vouchers."
  }
];

export default iciciVoucherRules;
