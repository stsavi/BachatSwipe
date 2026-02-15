import { EXPENSE_CATEGORIES, BANK_PORTALS, CAP_PERIODS, BENEFIT_TYPES, RULE_TYPES } from '../../config/bank_platforms.js';

/**
 * ICICI Bank - Portal Rules (iShop)
 * Flight & Hotel bookings via ICICI portals
 * Last updated: January 17, 2026
 */

export const iciciPortalRules = [
  //ICICI Emerald Private Metal - iShop Hotels (12x)
  {
    id: "icici_emeralde_private_metal_ishop_hotels",
    bank: "ICICI Bank",
    rule_type: RULE_TYPES.PORTAL,
    category: EXPENSE_CATEGORIES.HOTELS,
    merchants: [],
    platform: "iShop",
    benefit_type: BENEFIT_TYPES.REWARD_MULTIPLIER,
    reward_multiplier_map: {
      "icici_emeralde_private_metal": 12
    },
    cap: 18000, // 18k reward points/month
    cap_period: CAP_PERIODS.MONTHLY,
    min_transaction: 200,
    max_transaction: null,
    valid_from: "2023-01-01",
    valid_until: null,
    priority: 10,
    notes: "12x Reward Points on hotel bookings via iShop."
  },

  // Other Credit Cards - iShop Hotels (12x)
  {
    id: "icici_other_credit_cards_ishop_hotels",
    bank: "ICICI Bank",
    rule_type: RULE_TYPES.PORTAL,
    category: EXPENSE_CATEGORIES.HOTELS,
    merchants: [],
    platform: "iShop",
    benefit_type: BENEFIT_TYPES.REWARD_MULTIPLIER,
    reward_multiplier_map: {
      "icici_sapphiro": 12,
      "icici_coral": 12,
      "icici_hpcl_super_saver": 12
    },
    cap: 15000, // 15k reward points/month
    cap_period: CAP_PERIODS.MONTHLY,
    min_transaction: 100,
    max_transaction: null,
    valid_from: "2023-01-01",
    valid_until: null,
    priority: 10,
    notes: "12x Reward Points on hotel bookings via iShop."
  },

  //ICICI Emerald Private Metal - iShop Flights (6x)
  {
    id: "icici_emeralde_private_metal_ishop_flights",
    bank: "ICICI Bank",
    rule_type: RULE_TYPES.PORTAL,
    category: EXPENSE_CATEGORIES.FLIGHTS,
    merchants: [],
    platform: "iShop",
    benefit_type: BENEFIT_TYPES.REWARD_MULTIPLIER,
    reward_multiplier_map: {
      "icici_emeralde_private_metal": 6
    },
    cap: 18000, // 18k reward points/month
    cap_period: CAP_PERIODS.MONTHLY,
    min_transaction: 200,
    max_transaction: null,
    valid_from: "2023-01-01",
    valid_until: null,
    priority: 10,
    notes: "6x Reward Points on flight bookings via iShop."
  },

  // Other Cards - iShop Flights (6x)
  {
    id: "icici_other_credit_cards_ishop_flights",
    bank: "ICICI Bank",
    rule_type: RULE_TYPES.PORTAL,
    category: EXPENSE_CATEGORIES.FLIGHTS,
    merchants: [],
    platform: "iShop",
    benefit_type: BENEFIT_TYPES.REWARD_MULTIPLIER,
    reward_multiplier_map: {
      "icici_sapphiro": 6,
      "icici_coral": 6,
      "icici_hpcl_super_saver": 6
    },
    cap: 15000, // 15k reward points/month
    cap_period: CAP_PERIODS.MONTHLY,
    min_transaction: 100,
    max_transaction: null,
    valid_from: "2023-01-01",
    valid_until: null,
    priority: 10,
    notes: "6x Reward Points on flight bookings via iShop."
  }
];

export default iciciPortalRules;
