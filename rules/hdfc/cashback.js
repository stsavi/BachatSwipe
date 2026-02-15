import { EXPENSE_CATEGORIES, BENEFIT_TYPES, RULE_TYPES, CAP_PERIODS } from '../../config/bank_platforms.js';

/**
 * HDFC Bank - Cashback Rules
 * Direct cashback offers on various categories and merchants
 * Data validated against: HDFC Bank MITC, official product pages
 * Last updated: February 1, 2026
 */

export const HDFC_CASHBACK_RULES = [
    // MILLENNIA - 5% Cashback on preferred merchants
    {
        id: "hdfc_millennia_direct_shopping_5pct",
        bank: "HDFC",
        rule_type: RULE_TYPES.CASHBACK,
        category: [EXPENSE_CATEGORIES.ONLINE_SHOPPING, EXPENSE_CATEGORIES.ENTERTAINMENT, EXPENSE_CATEGORIES.DINING],
        merchants: ["amazon", "bookmyshow", "cult.fit", "flipkart", "myntra", "sony liv", "swiggy", "tata cliq", "uber", "zomato"],
        platform: "direct",
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
        notes: "5% cashback on online shopping towards preferred merchants (₹1000 cap/month)"
    },

    // MILLENNIA - 1% Cashback on other spends
    {
        id: "hdfc_millennia_direct_shopping_1pct",
        bank: "HDFC",
        rule_type: RULE_TYPES.CASHBACK,
        category: [],
        merchants: [],
        platform: "direct",
        benefit_type: BENEFIT_TYPES.CASHBACK,
        cashback_rate_map: {
            "hdfc_millennia": 0.01
        },
        constraints: {},
        cap: 1000,
        cap_period: CAP_PERIODS.MONTHLY,
        min_transaction: null,
        max_transaction: null,
        valid_from: "2024-01-01",
        valid_until: null,
        priority: 100,
        notes: "1% cashback on other shopping purchases (₹1000 cap/month)"
    },

    // SWIGGY HDFC - 10% on Swiggy orders
    {
        id: "hdfc_swiggy_direct_10pct",
        bank: "HDFC",
        rule_type: RULE_TYPES.CASHBACK,
        category: EXPENSE_CATEGORIES.DINING,
        merchants: ["swiggy"],
        platform: null,
        benefit_type: BENEFIT_TYPES.CASHBACK,
        cashback_rate_map: {
            "hdfc_swiggy": 0.10
        },
        constraints: {},
        cap: 1500,
        cap_period: CAP_PERIODS.MONTHLY,
        min_transaction: null,
        max_transaction: null,
        valid_from: "2024-01-01",
        valid_until: null,
        priority: 150,
        notes: "10% cashback on all Swiggy orders (₹1500 cap/month)"
    },

    // SWIGGY HDFC - 5% on online spends
    {
        id: "hdfc_swiggy_online_5pct",
        bank: "HDFC",
        rule_type: RULE_TYPES.CASHBACK,
        category: [],
        merchants: [],
        platform: null,
        benefit_type: BENEFIT_TYPES.CASHBACK,
        cashback_rate_map: {
            "hdfc_swiggy": 0.05
        },
        constraints: {
            exclude_category: [EXPENSE_CATEGORIES.OFFLINE_SHOPPING]
        },
        cap: 1500,
        cap_period: CAP_PERIODS.MONTHLY,
        min_transaction: null,
        max_transaction: null,
        valid_from: "2024-01-01",
        valid_until: null,
        priority: 100,
        notes: "5% cashback on all other online spends (₹1500 cap/month)"
    },

    // TATA NEU INFINITY - 5% NeuCoins on Tata brands
    {
        id: "hdfc_tataneu_infinity_tata_brands_5pct",
        bank: "HDFC",
        rule_type: RULE_TYPES.CASHBACK,
        category: [EXPENSE_CATEGORIES.SHOPPING, EXPENSE_CATEGORIES.GROCERY, EXPENSE_CATEGORIES.ELECTRONICS],
        merchants: ["tata_neu", "bigbasket", "tata_cliq", "1mg", "croma"],
        platform: null,
        benefit_type: BENEFIT_TYPES.CASHBACK,
        cashback_rate_map: {
            "hdfc_tataneu_infinity": 0.05
        },
        constraints: {},
        cap: null,
        cap_period: null,
        min_transaction: null,
        max_transaction: null,
        valid_from: "2024-01-01",
        valid_until: null,
        priority: 150,
        notes: "5% NeuCoins on Tata brand purchases (BigBasket, Tata CLiQ, 1mg, Croma, etc.)"
    },

    // TATA NEU INFINITY - 1.5% NeuCoins on UPI via Tata Neu
    {
        id: "hdfc_tataneu_infinity_upi_1.5pct",
        bank: "HDFC",
        rule_type: RULE_TYPES.CASHBACK,
        category: EXPENSE_CATEGORIES.UPI,
        merchants: ["tata_neu"],
        platform: null,
        benefit_type: BENEFIT_TYPES.CASHBACK,
        cashback_rate_map: {
            "hdfc_tataneu_infinity": 0.015
        },
        constraints: {},
        cap: 500,
        cap_period: CAP_PERIODS.MONTHLY,
        min_transaction: 100,
        max_transaction: null,
        valid_from: "2024-01-01",
        valid_until: null,
        priority: 150,
        notes: "1.5% NeuCoins on UPI transactions via Tata Neu app (₹500 cap/month, min ₹100 txn)"
    },

    // INDIANOIL - 5% cashback on fuel
    {
        id: "hdfc_indianoil_fuel_5pct",
        bank: "HDFC",
        rule_type: RULE_TYPES.CASHBACK,
        category: EXPENSE_CATEGORIES.FUEL,
        merchants: [],
        platform: null,
        benefit_type: BENEFIT_TYPES.CASHBACK,
        cashback_rate_map: {
            "hdfc_indianoil": 0.05
        },
        constraints: {},
        cap: 150,
        cap_period: CAP_PERIODS.MONTHLY,
        min_transaction: 400,
        max_transaction: null,
        valid_from: "2024-01-01",
        valid_until: null,
        priority: 100,
        notes: "5% cashback at IndianOil stations (₹150 cap/month, min ₹400 txn)"
    },

    // INDIANOIL - 5% cashback on grocery and utilities
    {
        id: "hdfc_indianoil_grocery_utilities_5pct",
        bank: "HDFC",
        rule_type: RULE_TYPES.CASHBACK,
        category: [EXPENSE_CATEGORIES.UTILITIES, EXPENSE_CATEGORIES.GROCERY],
        merchants: [],
        platform: null,
        benefit_type: BENEFIT_TYPES.CASHBACK,
        cashback_rate_map: {
            "hdfc_indianoil": 0.05
        },
        constraints: {},
        cap: 100,
        cap_period: CAP_PERIODS.MONTHLY,
        min_transaction: 150,
        max_transaction: null,
        valid_from: "2024-01-01",
        valid_until: null,
        priority: 100,
        notes: "5% cashback on grocery and utilities (₹100 cap/month, min ₹150 txn)"
    },

    // DCP - Buy 1 Get 1 on BookMyShow (represented as 50% cashback)
    {
        id: "hdfc_dcp_bookmyshow_discount",
        bank: "HDFC",
        rule_type: RULE_TYPES.CASHBACK,
        category: EXPENSE_CATEGORIES.ENTERTAINMENT,
        merchants: ["bookmyshow"],
        platform: null,
        benefit_type: BENEFIT_TYPES.CASHBACK,
        cashback_rate_map: {
            "hdfc_dcp": 0.50
        },
        constraints: {},
        cap: 500,
        cap_period: CAP_PERIODS.MONTHLY,
        min_transaction: 250,
        max_transaction: null,
        valid_from: "2024-01-01",
        valid_until: null,
        priority: 150,
        notes: "Buy 1 Get 1 on BookMyShow movie tickets (₹250 per transaction, ₹500 cap/month)"
    }
];

export default HDFC_CASHBACK_RULES;
