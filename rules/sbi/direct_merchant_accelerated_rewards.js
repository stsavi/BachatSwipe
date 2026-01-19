import { EXPENSE_CATEGORIES, BENEFIT_TYPES, RULE_TYPES } from '../../config/bank_platforms.js';

/**
 * SBI Cards - Direct Merchant Accelerated Rewards
 * Reward point multipliers for direct merchant swipes
 * Data validated against: SBI Cards MITC, official product pages
 * Last updated: January 17, 2026
 */

export const sbiDirectAcceleratedRules = [
  // Vistara Prime - Vistara Spends (10X CV Points)
  {
    id: "sbi_vistara_prime_vistara_spends",
    bank: "SBI Card",
    rule_type: RULE_TYPES.DIRECT_MERCHANT_ACCELERATED,
    category: EXPENSE_CATEGORIES.TRAVEL,
    merchants: ["vistara"],
    platform: "direct",
    benefit_type: BENEFIT_TYPES.REWARD_MULTIPLIER,
    reward_multiplier_map: {
      "sbi_vistara_prime": 10
    },
    constraints: {
      merchant: "Vistara Airlines only"
    },
    cap: null,
    cap_period: null,
    min_transaction: 100,
    max_transaction: null,
    valid_from: "2023-01-01",
    valid_until: null,
    priority: 10,
    notes: "10X CV Points on Vistara flight bookings (direct or via website). Base 3 per ₹100 becomes 30 per ₹100."
  }
];

export default sbiDirectAcceleratedRules;
