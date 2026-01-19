// rules/hdfc/cashback.js
// HDFC Bank - Direct Cashback Rules
// Validated as of January 2026

export const HDFC_CASHBACK_RULES = [

    // ============================================================
    // MILLENNIA - SMARTBUY PORTAL CASHBACK
    // ============================================================
    {
        id: "hdfc_millennia_smartbuy_shopping_5pct",
        bank: "HDFC",
        rule_type: "cashback",

        category: "online_shopping",
        merchants: ["amazon", "flipkart"],
        platform: "SmartBuy",

        cashback_rate_map: {
            "hdfc_millennia": 0.05
        },

        cap: 1000,
        cap_period: "monthly",
        min_transaction: null,

        valid_from: "2024-01-01",
        valid_until: null,

        notes: "5% cashback on Amazon/Flipkart purchases via HDFC SmartBuy portal (₹1000 cap/month)",
        priority: 150  // Higher than base
    },

    {
        id: "hdfc_millennia_smartbuy_dining_5pct",
        bank: "HDFC",
        rule_type: "cashback",

        category: "dining",
        merchants: ["swiggy", "zomato"],
        platform: "SmartBuy",

        cashback_rate_map: {
            "hdfc_millennia": 0.05
        },

        cap: 1000,
        cap_period: "monthly",
        min_transaction: null,

        valid_from: "2024-01-01",
        valid_until: null,

        notes: "5% cashback on Swiggy/Zomato orders via SmartBuy portal (₹1000 cap/month)",
        priority: 150
    },

    // ============================================================
    // SWIGGY HDFC - DIRECT MERCHANT CASHBACK
    // ============================================================
    {
        id: "hdfc_swiggy_direct_10pct",
        bank: "HDFC",
        rule_type: "cashback",

        category: "dining",
        merchants: ["swiggy"],
        platform: null,  // Direct swipe

        cashback_rate_map: {
            "hdfc_swiggy": 0.10
        },

        cap: null,
        cap_period: null,
        min_transaction: null,

        valid_from: "2024-01-01",
        valid_until: null,

        notes: "10% Swiggy Money on all Swiggy orders (direct payment)",
        priority: 150
    },

    {
        id: "hdfc_swiggy_dining_5pct",
        bank: "HDFC",
        rule_type: "cashback",

        category: "dining",
        merchants: [],  // All dining merchants
        platform: null,

        cashback_rate_map: {
            "hdfc_swiggy": 0.05
        },

        cap: null,
        cap_period: null,
        min_transaction: null,

        valid_from: "2024-01-01",
        valid_until: null,

        notes: "5% Swiggy Money on all other dining merchants (restaurants, food delivery)",
        priority: 100
    },

    // ============================================================
    // TATA NEU CARDS - TATA BRAND CASHBACK
    // ============================================================
    {
        id: "hdfc_tataneu_infinity_tata_brands_5pct",
        bank: "HDFC",
        rule_type: "cashback",

        category: ["shopping", "grocery", "electronics", "pharmacy", "medicine"],
        merchants: ["tata_neu", "bigbasket", "tata_cliq", "1mg", "croma"],
        platform: null,

        cashback_rate_map: {
            "hdfc_tataneu_infinity": 0.05
        },

        cap: null,
        cap_period: null,
        min_transaction: null,

        valid_from: "2024-01-01",
        valid_until: null,

        notes: "5% NeuCoins on Tata brand purchases (BigBasket, Tata CLiQ, 1mg, Croma, etc.)",
        priority: 150
    },

    {
        id: "hdfc_tataneu_plus_tata_brands_5pct",
        bank: "HDFC",
        rule_type: "cashback",

        category: ["shopping", "grocery", "electronics", "pharmacy", "medicine"],
        merchants: ["tata_neu", "bigbasket", "tata_cliq", "1mg", "croma"],
        platform: null,

        cashback_rate_map: {
            "hdfc_tataneu_plus": 0.05
        },

        cap: null,
        cap_period: null,
        min_transaction: null,

        valid_from: "2024-01-01",
        valid_until: null,

        notes: "5% NeuCoins on Tata brand purchases",
        priority: 150
    },

    {
        id: "hdfc_tataneu_cards_upi_5pct",
        bank: "HDFC",
        rule_type: "cashback",

        category: "upi",
        merchants: [],  // All UPI
        platform: null,

        cashback_rate_map: {
            "hdfc_tataneu_infinity": 0.05,
            "hdfc_tataneu_plus": 0.05
        },

        cap: 250,
        cap_period: "monthly",
        min_transaction: null,

        valid_from: "2024-01-01",
        valid_until: null,

        notes: "5% NeuCoins on UPI transactions (₹250 cap/month)",
        priority: 150
    },

    // ============================================================
    // INDIANOIL - FUEL CASHBACK
    // ============================================================
    {
        id: "hdfc_indianoil_fuel_surcharge_waiver",
        bank: "HDFC",
        rule_type: "cashback",

        category: "fuel",
        merchants: ["indianoil"],
        platform: null,

        cashback_rate_map: {
            "hdfc_indianoil": 0.01
        },

        cap: 250,
        cap_period: "monthly",
        min_transaction: 400,

        valid_from: "2024-01-01",
        valid_until: null,

        notes: "1% fuel surcharge waiver at IndianOil stations (₹250 cap/month, min ₹400 txn)",
        priority: 100
    },

    // ============================================================
    // DCP (DINERS PRIVILEGE) - FOOD DELIVERY 5X
    // ============================================================
    {
        id: "hdfc_dcp_zomato_swiggy_5x",
        bank: "HDFC",
        rule_type: "cashback",

        category: "dining",
        merchants: ["zomato", "swiggy"],
        platform: null,

        benefit_type: "reward_multiplier",
        reward_multiplier_map: {
            "hdfc_dcp": 5
        },
        cashback_rates: null,

        cap: null,
        cap_period: null,
        min_transaction: null,

        valid_from: "2024-01-01",
        valid_until: null,

        notes: "5x Reward Points on Zomato and Swiggy orders (20 RP per ₹150 spent)",
        priority: 150
    },

    // ============================================================
    // DCP (DINERS PRIVILEGE) - BOOKMYSHOW DISCOUNT
    // ============================================================
    {
        id: "hdfc_dcp_bookmyshow_discount",
        bank: "HDFC",
        rule_type: "cashback",

        category: "entertainment",
        merchants: ["bookmyshow"],
        platform: null,

        cashback_rate_map: {
            "hdfc_dcp": 0.25
        },

        cap: 500,
        cap_period: "monthly",
        min_transaction: 250,

        valid_from: "2024-01-01",
        valid_until: null,

        notes: "Buy 1 Get 1 on BookMyShow movie tickets (effective 20% discount, ₹500 cap/month)",
        priority: 150
    },

    // ============================================================
    // MILLENNIA - BASE CASHBACK (1% WILDCARD)
    // ============================================================
    {
        id: "hdfc_millennia_base_cashback_all",
        bank: "HDFC",
        rule_type: "cashback",

        category: "*", // Wildcard: matches all categories

        cashback_rate_map: {
            "hdfc_millennia": 0.01
        },

        constraints: {
            excluded_categories: [], // No category exclusions
            exclusions: "Excludes fuel, wallet loads, rent, government, EMI, education"
        },

        cap: null,
        cap_period: null,
        min_transaction: null,

        valid_from: "2024-01-01",
        valid_until: null,

        notes: "1% base cashback on all categories. Specific rules (5% SmartBuy) take precedence.",
        priority: 5 // Lower than all specific rules
    }
];
