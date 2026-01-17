import { EXPENSE_CATEGORIES, BENEFIT_TYPES, RULE_TYPES } from '../../config/bank_platforms.js';

/**
 * ICICI Bank - Direct Merchant Accelerated Rewards
 * Reward point multipliers for direct merchant swipes
 * Data validated against: ICICI Bank MITC, official product pages
 * Last updated: January 17, 2026
 */

export const iciciDirectAcceleratedRules = [
  // Sapphiro - Department Stores (2x)
  // Note: Dining 2x was removed as it was a temporary promo, not a standard benefit
  {
    id: "icici_sapphiro_department_stores",
    bank: "ICICI Bank",
    rule_type: RULE_TYPES.DIRECT_MERCHANT_ACCELERATED,
    category: EXPENSE_CATEGORIES.SHOPPING,
    merchants: [],
    platform: "direct",
    benefit_type: BENEFIT_TYPES.REWARD_MULTIPLIER,
    reward_multipliers: [2], // 2x Reward Points
    applies_to_cards: ["icici_sapphiro"],
    constraints: {
      merchant_type: "Department Stores",
      platform: "Direct swipe only"
    },
    cap: null,
    cap_period: null,
    min_transaction: 100,
    max_transaction: null,
    valid_from: "2023-01-01",
    valid_until: null,
    priority: 9,
    notes: "2x Reward Points on department stores. Base 6 per ₹200 becomes 12 per ₹200."
  }
];

export default iciciDirectAcceleratedRules;
