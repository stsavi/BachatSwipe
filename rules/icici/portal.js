import { EXPENSE_CATEGORIES, BANK_PORTALS, CAP_PERIODS, BENEFIT_TYPES, RULE_TYPES } from '../../config/bank_platforms.js';

/**
 * ICICI Bank - Portal Rules (PayWith Rewards, iShop)
 * Flight & Hotel bookings via ICICI portals
 * Data validated against: PayWith Rewards portal, iShop portal, ICICI MITC
 * Last updated: January 17, 2026
 */

export const iciciPortalRules = [
  // PayWith Rewards - Hotels (10x for Sapphiro, 5x for Coral/Rubyx)
  {
    id: "icici_paywith_hotels",
    bank: "ICICI Bank",
    rule_type: RULE_TYPES.PORTAL,
    category: EXPENSE_CATEGORIES.HOTELS,
    merchants: [],
    platform: BANK_PORTALS.ICICI_PAYWITH,
    benefit_type: BENEFIT_TYPES.REWARD_MULTIPLIER,
    reward_multiplier_map: {
      "icici_sapphiro": 10,
      "icici_coral": 5,
      "icici_rubyx": 5
    },
    constraints: {
      booking_platform: "PayWith Rewards only"
    },
    cap: 15000, // ₹15k reward points/month (Sapphiro), ₹5k for Coral/Rubyx
    cap_period: CAP_PERIODS.MONTHLY,
    min_transaction: 1000,
    max_transaction: null,
    valid_from: "2023-01-01",
    valid_until: null,
    priority: 10,
    notes: "PayWith hotel bookings: Sapphiro 10x (60/₹200), Coral/Rubyx 5x (20/₹200)."
  },

  // PayWith Rewards - Flights (5x for Sapphiro, 3x for Coral/Rubyx)
  {
    id: "icici_paywith_flights",
    bank: "ICICI Bank",
    rule_type: RULE_TYPES.PORTAL,
    category: EXPENSE_CATEGORIES.FLIGHTS,
    merchants: [],
    platform: BANK_PORTALS.ICICI_PAYWITH,
    benefit_type: BENEFIT_TYPES.REWARD_MULTIPLIER,
    reward_multiplier_map: {
      "icici_sapphiro": 5,
      "icici_coral": 3,
      "icici_rubyx": 3
    },
    constraints: {
      booking_platform: "PayWith Rewards only"
    },
    cap: 10000, // ₹10k reward points/month (Sapphiro), ₹3k for Coral/Rubyx
    cap_period: CAP_PERIODS.MONTHLY,
    min_transaction: 1000,
    max_transaction: null,
    valid_from: "2023-01-01",
    valid_until: null,
    priority: 10,
    notes: "PayWith flight bookings: Sapphiro 5x (30/₹200), Coral/Rubyx 3x (12/₹200)."
  },

  // ============================================================
  // iSHOP PORTAL - Alternative Rewards Platform
  // ============================================================

  // Sapphiro - iShop Hotels (8x)
  {
    id: "icici_sapphiro_ishop_hotels",
    bank: "ICICI Bank",
    rule_type: RULE_TYPES.PORTAL,
    category: EXPENSE_CATEGORIES.HOTELS,
    merchants: [],
    platform: "iShop",
    benefit_type: BENEFIT_TYPES.REWARD_MULTIPLIER,
    reward_multiplier_map: {
      "icici_sapphiro": 8
    },
    constraints: {
      booking_platform: "iShop portal only"
    },
    cap: 10000, // ₹10k reward points/month
    cap_period: CAP_PERIODS.MONTHLY,
    min_transaction: 1000,
    max_transaction: null,
    valid_from: "2023-01-01",
    valid_until: null,
    priority: 10,
    notes: "8x Reward Points on hotel bookings via iShop. Base 6 per ₹200 becomes 48 per ₹200."
  },

  // Sapphiro - iShop Flights (4x)
  {
    id: "icici_sapphiro_ishop_flights",
    bank: "ICICI Bank",
    rule_type: RULE_TYPES.PORTAL,
    category: EXPENSE_CATEGORIES.FLIGHTS,
    merchants: [],
    platform: "iShop",
    benefit_type: BENEFIT_TYPES.REWARD_MULTIPLIER,
    reward_multiplier_map: {
      "icici_sapphiro": 4
    },
    constraints: {
      booking_platform: "iShop portal only"
    },
    cap: 8000, // ₹8k reward points/month
    cap_period: CAP_PERIODS.MONTHLY,
    min_transaction: 1000,
    max_transaction: null,
    valid_from: "2023-01-01",
    valid_until: null,
    priority: 10,
    notes: "4x Reward Points on flight bookings via iShop. Base 6 per ₹200 becomes 24 per ₹200."
  }
];

export default iciciPortalRules;
