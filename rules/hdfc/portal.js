import { EXPENSE_CATEGORIES, BENEFIT_TYPES, RULE_TYPES, CAP_PERIODS } from '../../config/bank_platforms.js';

/**
 * HDFC Bank - SmartBuy Portal Rules
 * Flight & Hotel bookings via SmartBuy portal
 * Data validated against: SmartBuy portal, HDFC Bank MITC
 * Last updated: February 1, 2026
 */

export const HDFC_PORTAL_RULES = [
    // SmartBuy Hotels - 10X Reward Multiplier
    {
        id: "hdfc_smartbuy_hotels_10x",
        bank: "HDFC",
        rule_type: RULE_TYPES.PORTAL,
        platform: "SmartBuy",
        category: EXPENSE_CATEGORIES.HOTELS,
        merchants: [],
        benefit_type: BENEFIT_TYPES.REWARD_MULTIPLIER,
        reward_multiplier_map: {
            "hdfc_infinia": 10,
            "hdfc_dcb_metal": 10,
            "hdfc_regalia_gold": 10,
            "hdfc_dcp": 10
        },
        constraints: {},
        cap: null,
        cap_period: null,
        min_transaction: null,
        max_transaction: null,
        valid_from: "2024-01-01",
        valid_until: null,
        priority: 150,
        notes: "10x Reward Points on hotel bookings via SmartBuy. Infinia/DCB get 50 RP per ₹150, Regalia/DCP get 40 RP per ₹150"
    },

    // SmartBuy Flights - 5X Reward Multiplier
    {
        id: "hdfc_smartbuy_flights_5x",
        bank: "HDFC",
        rule_type: RULE_TYPES.PORTAL,
        platform: "SmartBuy",
        category: [EXPENSE_CATEGORIES.FLIGHTS, EXPENSE_CATEGORIES.TRAVEL],
        merchants: [],
        benefit_type: BENEFIT_TYPES.REWARD_MULTIPLIER,
        reward_multiplier_map: {
            "hdfc_infinia": 5,
            "hdfc_dcb_metal": 5,
            "hdfc_regalia_gold": 5,
            "hdfc_dcp": 5
        },
        constraints: {},
        cap: null,
        cap_period: null,
        min_transaction: null,
        max_transaction: null,
        valid_from: "2024-01-01",
        valid_until: null,
        priority: 150,
        notes: "5x Reward Points on flight bookings via SmartBuy. Infinia/DCB get 25 RP per ₹150, Regalia/DCP get 20 RP per ₹150"
    },

    // Millennia - SmartBuy Hotels 5% Cashback
    {
        id: "hdfc_smartbuy_hotels_millennia_5pct",
        bank: "HDFC",
        rule_type: RULE_TYPES.PORTAL,
        platform: "SmartBuy",
        category: EXPENSE_CATEGORIES.HOTELS,
        merchants: [],
        benefit_type: BENEFIT_TYPES.CASHBACK,
        cashback_rate_map: {
            "hdfc_millennia": 0.05
        },
        constraints: {},
        cap: 1000,
        cap_period: CAP_PERIODS.MONTHLY,
        min_transaction: null,
        max_transaction: null,
        valid_from: "2024-01-01",
        valid_until: null,
        priority: 150,
        notes: "5% cashback on hotel bookings via SmartBuy (₹1000 cap/month)"
    },

    // Millennia - SmartBuy Flights 5% Cashback
    {
        id: "hdfc_smartbuy_flights_millennia_5pct",
        bank: "HDFC",
        rule_type: RULE_TYPES.PORTAL,
        platform: "SmartBuy",
        category: EXPENSE_CATEGORIES.FLIGHTS,
        merchants: [],
        benefit_type: BENEFIT_TYPES.CASHBACK,
        cashback_rate_map: {
            "hdfc_millennia": 0.05
        },
        constraints: {},
        cap: 1000,
        cap_period: CAP_PERIODS.MONTHLY,
        min_transaction: null,
        max_transaction: null,
        valid_from: "2024-01-01",
        valid_until: null,
        priority: 150,
        notes: "5% cashback on flight bookings via SmartBuy (₹1000 cap/month)"
    }
];

export default HDFC_PORTAL_RULES;
