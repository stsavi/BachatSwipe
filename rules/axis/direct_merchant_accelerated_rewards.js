import { EXPENSE_CATEGORIES, BENEFIT_TYPES, RULE_TYPES } from '../../config/bank_platforms.js';

/**
 * Axis Bank - Direct Merchant Accelerated Rewards
 * Reward point multipliers for direct merchant swipes
 * Data validated against: Axis Bank MITC, official product pages
 * Last updated: January 17, 2026
 */

export const axisDirectAcceleratedRules = [
  // Magnus/Reserve - Dining (5x on Travel Edge, 1x base)
  // Note: Magnus gets 12 Edge Miles per ₹200 base, so Travel Edge multiplier makes it effective 60 miles per ₹200
  // But direct dining at non-Travel Edge is just base rate
  {
    id: "axis_magnus_reserve_dining_direct",
    bank: "Axis Bank",
    rule_type: RULE_TYPES.DIRECT_ACCELERATED,
    category: EXPENSE_CATEGORIES.DINING,
    merchants: [],
    platform: "direct",
    benefit_type: BENEFIT_TYPES.REWARD_MULTIPLIER,
    reward_multipliers: [2, 2], // 2x on dining (12 miles becomes 24 per ₹200)
    applies_to_cards: ["axis_magnus", "axis_reserve"],
    constraints: {
      platform: "Direct merchant swipe (not via Travel Edge)"
    },
    cap: null,
    cap_period: null,
    min_transaction: 100,
    max_transaction: null,
    valid_from: "2023-01-01",
    valid_until: null,
    priority: 8,
    notes: "2x Edge Miles on dining for Magnus/Reserve. Direct swipe only."
  },

  // Vistara Infinite - Vistara Spends (10x CV Points)
  {
    id: "axis_vistara_infinite_vistara_spends",
    bank: "Axis Bank",
    rule_type: RULE_TYPES.DIRECT_ACCELERATED,
    category: EXPENSE_CATEGORIES.TRAVEL,
    merchants: ["Vistara"],
    platform: "direct",
    benefit_type: BENEFIT_TYPES.REWARD_MULTIPLIER,
    reward_multipliers: [5], // 5x on Vistara (4 CV Points becomes 20 per ₹200)
    applies_to_cards: ["axis_vistara_infinite"],
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
    notes: "5x CV Points on Vistara flight bookings (direct or via website)"
  }
];

export default axisDirectAcceleratedRules;
