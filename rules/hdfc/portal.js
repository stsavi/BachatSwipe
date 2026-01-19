// rules/hdfc/portal.js
// HDFC Bank - SmartBuy Portal Rules (Flights & Hotels ONLY)
// Validated as of January 2026 from https://offers.smartbuy.hdfcbank.com/

export const HDFC_PORTAL_RULES = [

    // ============================================================
    // SMARTBUY HOTELS - 10X REWARD MULTIPLIER
    // ============================================================
    {
        id: "hdfc_smartbuy_hotels_10x",
        bank: "HDFC",
        rule_type: "portal",

        platform: "SmartBuy",
        category: "hotels",
        merchants: [],  // All hotels via SmartBuy

        benefit_type: "reward_multiplier",
        reward_multiplier_map: {
            "hdfc_infinia": 10,
            "hdfc_dcb_metal": 10,
            "hdfc_regalia_gold": 10,
            "hdfc_dcp": 10
        },
        cashback_rates: null,

        cap: null,
        cap_period: null,
        min_transaction: null,

        valid_from: "2024-01-01",
        valid_until: null,

        notes: "10x Reward Points on hotel bookings via SmartBuy. Infinia/DCB get 50 RP per ₹150, Regalia/DCP get 40 RP per ₹150.",
        priority: 150
    },

    // ============================================================
    // SMARTBUY FLIGHTS - 5X REWARD MULTIPLIER
    // ============================================================
    {
        id: "hdfc_smartbuy_flights_5x",
        bank: "HDFC",
        rule_type: "portal",

        platform: "SmartBuy",
        category: ["flights", "travel"],
        merchants: [],

        benefit_type: "reward_multiplier",
        reward_multiplier_map: {
            "hdfc_infinia": 5,
            "hdfc_dcb_metal": 5,
            "hdfc_regalia_gold": 5,
            "hdfc_dcp": 5
        },
        cashback_rates: null,

        cap: null,
        cap_period: null,
        min_transaction: null,

        valid_from: "2024-01-01",
        valid_until: null,

        notes: "5x Reward Points on flight bookings via SmartBuy. Infinia/DCB get 25 RP per ₹150, Regalia/DCP get 20 RP per ₹150.",
        priority: 150
    },

    // ============================================================
    // MILLENNIA - SMARTBUY HOTELS 5% CASHBACK
    // ============================================================
    {
        id: "hdfc_smartbuy_hotels_millennia_5pct",
        bank: "HDFC",
        rule_type: "portal",

        platform: "SmartBuy",
        category: "hotels",
        merchants: [],

        benefit_type: "cashback",
        reward_multipliers: null,
        cashback_rate_map: {
            "hdfc_millennia": 0.05
        },

        cap: 1000,
        cap_period: "monthly",
        min_transaction: null,

        valid_from: "2024-01-01",
        valid_until: null,

        notes: "5% cashback on hotel bookings via SmartBuy (₹1000 cap/month)",
        priority: 150
    },

    // ============================================================
    // MILLENNIA - SMARTBUY FLIGHTS 5% CASHBACK
    // ============================================================
    {
        id: "hdfc_smartbuy_flights_millennia_5pct",
        bank: "HDFC",
        rule_type: "portal",

        platform: "SmartBuy",
        category: "flights",
        merchants: [],

        benefit_type: "cashback",
        reward_multipliers: null,
        cashback_rate_map: {
            "hdfc_millennia": 0.05
        },

        cap: 1000,
        cap_period: "monthly",
        min_transaction: null,

        valid_from: "2024-01-01",
        valid_until: null,

        notes: "5% cashback on flight bookings via SmartBuy (₹1000 cap/month)",
        priority: 150
    }
];
