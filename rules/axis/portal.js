import { EXPENSE_CATEGORIES, BANK_PORTALS, CAP_PERIODS, BENEFIT_TYPES, RULE_TYPES } from '../../config/bank_platforms.js';

/**
 * Axis Bank - Portal Rules (Travel Edge, EDGE Rewards)
 * Flight & Hotel bookings via Axis portals
 * Data validated against: Travel Edge portal, Axis MITC
 * Last updated: January 17, 2026
 */

export const axisPortalRules = [
  // Travel Edge Hotels - 10x Edge Miles
  {
    id: "axis_travel_edge_hotels_10x",
    bank: "Axis Bank",
    rule_type: RULE_TYPES.PORTAL,
    category: EXPENSE_CATEGORIES.HOTELS,
    merchants: [],
    platform: BANK_PORTALS.AXIS_TRAVEL_EDGE,
    benefit_type: BENEFIT_TYPES.REWARD_MULTIPLIER,
    reward_multiplier_map: {
      "axis_magnus": 10,
      "axis_reserve": 10,
      "axis_atlas": 10
    },
    constraints: {
      booking_platform: "Travel Edge only"
    },
    cap: null,
    cap_period: null,
    min_transaction: 1000,
    max_transaction: null,
    valid_from: "2023-01-01",
    valid_until: null,
    priority: 10,
    notes: "10x Edge Miles on hotel bookings via Travel Edge. Magnus: 120/₹200, Reserve: 150/₹200, Atlas: 20/₹100."
  },

  // Travel Edge Flights - 5x Edge Miles
  {
    id: "axis_travel_edge_flights_5x",
    bank: "Axis Bank",
    rule_type: RULE_TYPES.PORTAL,
    category: EXPENSE_CATEGORIES.FLIGHTS,
    merchants: [],
    platform: BANK_PORTALS.AXIS_TRAVEL_EDGE,
    benefit_type: BENEFIT_TYPES.REWARD_MULTIPLIER,
    reward_multiplier_map: {
      "axis_magnus": 5,
      "axis_reserve": 5,
      "axis_atlas": 5
    },
    constraints: {
      booking_platform: "Travel Edge only"
    },
    cap: null,
    cap_period: null,
    min_transaction: 1000,
    max_transaction: null,
    valid_from: "2023-01-01",
    valid_until: null,
    priority: 10,
    notes: "5x Edge Miles on flight bookings via Travel Edge. Magnus: 60/₹200, Reserve: 75/₹200, Atlas: 10/₹100."
  }
];

export default axisPortalRules;
