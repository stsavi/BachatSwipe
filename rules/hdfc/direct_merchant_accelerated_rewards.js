// rules/hdfc/direct_merchant_accelerated_rewards.js
// HDFC Bank - Direct Merchant Accelerated Reward Points
// Validated as of January 2026

export const HDFC_DIRECT_ACCELERATED_RULES = [

    // ============================================================
    // SUPER PREMIUM CARDS - DINING MULTIPLIER
    // ============================================================
    {
        id: "hdfc_infinia_dcb_dining_merchants",
        bank: "HDFC",
        rule_type: "direct_merchant_accelerated",

        category: "dining",
        merchants: [],  // All dining merchants

        benefit_type: "reward_multiplier",
        reward_multiplier_map: {
            "hdfc_infinia": 2,
            "hdfc_dcb_metal": 2
        },

        cap: null,
        cap_period: null,
        min_transaction: null,

        valid_from: "2024-01-01",
        valid_until: null,

        notes: "2x Reward Points on dining transactions (10 RP per ₹150 instead of 5 RP)",
        priority: 100
    },

    // ============================================================
    // PREMIUM CARDS - DEPARTMENT STORES
    // ============================================================
    {
        id: "hdfc_regalia_dcp_department_stores",
        bank: "HDFC",
        rule_type: "direct_merchant_accelerated",

        category: "shopping",
        merchants: ["shoppers_stop", "lifestyle", "westside", "pantaloons"],

        benefit_type: "reward_multiplier",
        reward_multiplier_map: {
            "hdfc_regalia_gold": 2,
            "hdfc_dcp": 2
        },

        cap: null,
        cap_period: null,
        min_transaction: null,

        valid_from: "2024-01-01",
        valid_until: null,

        notes: "2x Reward Points on department store purchases (8 RP per ₹150)",
        priority: 100
    },

    // ============================================================
    // INDIANOIL - FUEL ACCELERATED POINTS
    // ============================================================
    {
        id: "hdfc_indianoil_fuel_accelerated",
        bank: "HDFC",
        rule_type: "direct_merchant_accelerated",

        category: "fuel",
        merchants: ["indianoil"],

        benefit_type: "reward_multiplier",
        reward_multiplier_map: {
            "hdfc_indianoil": 6
        },

        cap: null,
        cap_period: null,
        min_transaction: 400,

        valid_from: "2024-01-01",
        valid_until: null,

        notes: "6x Fuel Points on IndianOil fuel purchases (6 FP per ₹150, min ₹400 transaction)",
        priority: 100
    },
    // ============================================================
    // BOOKMYSHOW - BOGO OFFERS
    // ============================================================
    {
        id: "hdfc_dcp_bookmyshow_bogo",
        bank: "HDFC",
        rule_type: "direct_merchant_accelerated",

        category: "entertainment",
        merchants: ["bookmyshow"],

        benefit_type: "cashback",
        cashback_rate_map: {
            "hdfc_dcp": 0.25
        },

        cap: 250,
        cap_period: "monthly",
        min_transaction: null,

        valid_from: "2024-01-01",
        valid_until: null,

        notes: "Buy 1 Get 1 on BookMyShow (up to ₹250 off). Represented as 25% cashback for calculation.",
        priority: 150
    }
];
