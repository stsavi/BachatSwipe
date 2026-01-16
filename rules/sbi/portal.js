import { EXPENSE_CATEGORIES, BANK_PORTALS, CAP_PERIODS, BENEFIT_TYPES, RULE_TYPES } from '../../config/bank_platforms.js';

/**
 * SBI Cards - Portal Rules (SBI Rewardz)
 * Flight & Hotel bookings via SBI portals
 * Data validated against: SBI Rewardz portal, SBI Cards MITC
 * Last updated: January 17, 2026
 */

export const sbiPortalRules = [
  // Note: SBI Cards primarily focus on cashback/accelerated rewards rather than portal bookings
  // Minimal portal offerings compared to HDFC/Axis/ICICI
  
  // SimplyCLICK - Travel Partners (Limited)
  {
    id: "sbi_simplyclick_cleartrip",
    bank: "SBI Card",
    rule_type: RULE_TYPES.PORTAL,
    category: EXPENSE_CATEGORIES.TRAVEL,
    merchants: ["Cleartrip"],
    platform: "Cleartrip",
    benefit_type: BENEFIT_TYPES.REWARD_MULTIPLIER,
    reward_multipliers: [10], // 10X reward points
    applies_to_cards: ["sbi_simplyclick"],
    constraints: {
      booking_platform: "Cleartrip only"
    },
    cap: null,
    cap_period: null,
    min_transaction: 1000,
    max_transaction: null,
    valid_from: "2023-01-01",
    valid_until: null,
    priority: 10,
    notes: "10X Reward Points on Cleartrip bookings. Base 1 per ₹100 becomes 10 per ₹100."
  }
];

export default sbiPortalRules;
