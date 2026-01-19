// rules/hdfc/vouchers.js
// HDFC Bank - SmartBuy Voucher Purchase Rules
// Validated as of January 2026 from SmartBuy (GyFTR) platform
// Allowed merchants: amazon, flipkart, swiggy, zomato, tata_neu, bigbasket

export const HDFC_VOUCHER_RULES = [

    // ============================================================
    // SUPER PREMIUM - AMAZON/FLIPKART VOUCHERS 5X (Infinia)
    // ============================================================
    {
        id: "hdfc_smartbuy_amazon_flipkart_voucher_infinia_5x",
        bank: "HDFC",
        rule_type: "voucher",

        platform: "SmartBuy (GyFTR)",
        category: "voucher",
        merchants: ["amazon", "flipkart"],

        benefit_type: "reward_multiplier",
        reward_multiplier_map: {
            "hdfc_infinia": 5
        },

        cap: 15000,
        cap_period: "monthly",
        min_transaction: 1000,
        max_transaction: 10000,

        valid_from: "2024-01-01",
        valid_until: null,

        notes: "5x Reward Points when buying Amazon/Flipkart vouchers via SmartBuy (25 RP per ₹150 for Infinia)",
        priority: 150,

        voucher_denominations: [100, 500, 1000, 2000, 5000, 10000],
        discount_on_voucher: 0
    },

    // ============================================================
    // SUPER PREMIUM - AMAZON/FLIPKART VOUCHERS 3X (DCB Metal)
    // ============================================================
    {
        id: "hdfc_smartbuy_amazon_flipkart_voucher_dcb_3x",
        bank: "HDFC",
        rule_type: "voucher",

        platform: "SmartBuy (GyFTR)",
        category: "voucher",
        merchants: ["amazon", "flipkart"],

        benefit_type: "reward_multiplier",
        reward_multiplier_map: {
            "hdfc_dcb_metal": 3
        },

        cap: 10000,
        cap_period: "monthly",
        min_transaction: 1000,
        max_transaction: 10000,

        valid_from: "2024-01-01",
        valid_until: null,

        notes: "3x Reward Points when buying Amazon/Flipkart vouchers via SmartBuy (15 RP per ₹150 for DCB)",
        priority: 150,

        voucher_denominations: [100, 500, 1000, 2000, 5000, 10000],
        discount_on_voucher: 0
    },

    // ============================================================
    // SUPER PREMIUM - SWIGGY/ZOMATO VOUCHERS 3X
    // ============================================================
    {
        id: "hdfc_smartbuy_swiggy_zomato_voucher_infinia_dcb_3x",
        bank: "HDFC",
        rule_type: "voucher",

        platform: "SmartBuy (GyFTR)",
        category: "voucher",
        merchants: ["swiggy", "zomato"],

        benefit_type: "reward_multiplier",
        reward_multiplier_map: {
            "hdfc_infinia": 3,
            "hdfc_dcb_metal": 3
        },

        cap: 10000,
        cap_period: "monthly",
        min_transaction: 500,
        max_transaction: 10000,

        valid_from: "2024-01-01",
        valid_until: null,

        notes: "3x Reward Points when buying Swiggy/Zomato vouchers via SmartBuy",
        priority: 150,

        voucher_denominations: [100, 250, 500, 1000, 2000, 5000],
        discount_on_voucher: 0
    },

    // ============================================================
    // SUPER PREMIUM - BIGBASKET VOUCHERS 3X
    // ============================================================
    {
        id: "hdfc_smartbuy_bigbasket_voucher_infinia_dcb_3x",
        bank: "HDFC",
        rule_type: "voucher",

        platform: "SmartBuy (GyFTR)",
        category: "voucher",
        merchants: ["bigbasket"],

        benefit_type: "reward_multiplier",
        reward_multiplier_map: {
            "hdfc_infinia": 3,
            "hdfc_dcb_metal": 3
        },

        cap: 10000,
        cap_period: "monthly",
        min_transaction: 500,
        max_transaction: 5000,

        valid_from: "2024-01-01",
        valid_until: null,

        notes: "3x Reward Points when buying BigBasket vouchers via SmartBuy",
        priority: 150,

        voucher_denominations: [100, 250, 500, 1000, 2000, 5000],
        discount_on_voucher: 0
    },

    // ============================================================
    // PREMIUM - AMAZON/FLIPKART VOUCHERS 5X (Regalia/DCP)
    // ============================================================
    {
        id: "hdfc_smartbuy_amazon_flipkart_voucher_regalia_dcp_5x",
        bank: "HDFC",
        rule_type: "voucher",

        platform: "SmartBuy (GyFTR)",
        category: "voucher",
        merchants: ["amazon", "flipkart"],

        benefit_type: "reward_multiplier",
        reward_multiplier_map: {
            "hdfc_regalia_gold": 5,
            "hdfc_dcp": 5
        },

        cap: 4000,
        cap_period: "monthly",
        min_transaction: 1000,
        max_transaction: 10000,

        valid_from: "2024-01-01",
        valid_until: null,

        notes: "5x Reward Points when buying Amazon/Flipkart vouchers via SmartBuy (20 RP per ₹150, ₹4k cap/month)",
        priority: 150,

        voucher_denominations: [100, 500, 1000, 2000, 5000, 10000],
        discount_on_voucher: 0
    },

    // ============================================================
    // MILLENNIA - AMAZON/FLIPKART VOUCHERS 5% CASHBACK
    // ============================================================
    {
        id: "hdfc_smartbuy_amazon_flipkart_voucher_millennia_5pct",
        bank: "HDFC",
        rule_type: "voucher",

        platform: "SmartBuy (GyFTR)",
        category: "voucher",
        merchants: ["amazon", "flipkart"],

        benefit_type: "cashback",
        cashback_rate_map: {
            "hdfc_millennia": 0.05
        },

        cap: 1000,
        cap_period: "monthly",
        min_transaction: 1000,
        max_transaction: 10000,

        valid_from: "2024-01-01",
        valid_until: null,

        notes: "5% cashback when buying Amazon/Flipkart vouchers via SmartBuy (₹1000 cap/month)",
        priority: 150,

        voucher_denominations: [100, 500, 1000, 2000, 5000, 10000],
        discount_on_voucher: 0
    },

    // ============================================================
    // MILLENNIA - SWIGGY/ZOMATO VOUCHERS 5% CASHBACK
    // ============================================================
    {
        id: "hdfc_smartbuy_swiggy_zomato_voucher_millennia_5pct",
        bank: "HDFC",
        rule_type: "voucher",

        platform: "SmartBuy (GyFTR)",
        category: "voucher",
        merchants: ["swiggy", "zomato"],

        benefit_type: "cashback",
        cashback_rate_map: {
            "hdfc_millennia": 0.05
        },

        cap: 1000,
        cap_period: "monthly",
        min_transaction: 500,
        max_transaction: 5000,

        valid_from: "2024-01-01",
        valid_until: null,

        notes: "5% cashback when buying Swiggy/Zomato vouchers via SmartBuy (₹1000 cap/month)",
        priority: 150,

        voucher_denominations: [100, 250, 500, 1000, 2000, 5000],
        discount_on_voucher: 0
    },

    // ============================================================
    // TATA NEU - TATA BRAND VOUCHERS (No multiplier, regular NeuCoins)
    // ============================================================
    {
        id: "hdfc_tataneu_tata_brand_vouchers_base",
        bank: "HDFC",
        rule_type: "voucher",

        platform: "Tata Neu App",
        category: "voucher",
        merchants: ["tata_neu", "bigbasket"],

        benefit_type: "reward_multiplier",
        reward_multiplier_map: {
            "hdfc_tataneu_infinity": 1,
            "hdfc_tataneu_plus": 1
        },

        cap: null,
        cap_period: null,
        min_transaction: null,
        max_transaction: null,

        valid_from: "2024-01-01",
        valid_until: null,

        notes: "Base NeuCoins rate when buying Tata brand vouchers (no additional multiplier)",
        priority: 50,  // Lower priority - base rate only

        voucher_denominations: [100, 500, 1000, 2000, 5000],
        discount_on_voucher: 0
    }
];
