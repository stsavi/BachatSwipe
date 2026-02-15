import { EXPENSE_CATEGORIES, BENEFIT_TYPES, RULE_TYPES, CAP_PERIODS } from '../../config/bank_platforms.js';

/**
 * HDFC Bank - SmartBuy Voucher Purchase Rules
 * Voucher purchases via SmartBuy (GyFTR) platform
 * Data validated against: SmartBuy portal, HDFC Bank MITC
 * Last updated: February 1, 2026
 * Allowed merchants: amazon, flipkart, swiggy, zomato, tata_neu, bigbasket, airtel_thanks
 */

export const HDFC_VOUCHER_RULES = [
    // Infinia - Amazon/Flipkart Vouchers 5X
    {
        id: "hdfc_smartbuy_amazon_flipkart_voucher_infinia_5x",
        bank: "HDFC",
        rule_type: RULE_TYPES.VOUCHER,
        platform: "SmartBuy (GyFTR)",
        category: EXPENSE_CATEGORIES.VOUCHER,
        merchants: ["amazon", "flipkart"],
        benefit_type: BENEFIT_TYPES.REWARD_MULTIPLIER,
        reward_multiplier_map: {
            "hdfc_infinia": 5
        },
        constraints: {},
        cap: 15000,
        cap_period: CAP_PERIODS.MONTHLY,
        min_transaction: 1000,
        max_transaction: 10000,
        valid_from: "2024-01-01",
        valid_until: null,
        priority: 150,
        notes: "5x Reward Points when buying Amazon/Flipkart vouchers via SmartBuy (25 RP per ₹150 for Infinia)"
    },

    // DCB Metal - Amazon/Flipkart Vouchers 3X
    {
        id: "hdfc_smartbuy_amazon_flipkart_voucher_dcb_3x",
        bank: "HDFC",
        rule_type: RULE_TYPES.VOUCHER,
        platform: "SmartBuy (GyFTR)",
        category: EXPENSE_CATEGORIES.VOUCHER,
        merchants: ["amazon", "flipkart"],
        benefit_type: BENEFIT_TYPES.REWARD_MULTIPLIER,
        reward_multiplier_map: {
            "hdfc_dcb_metal": 3
        },
        constraints: {},
        cap: 10000,
        cap_period: CAP_PERIODS.MONTHLY,
        min_transaction: 1000,
        max_transaction: 10000,
        valid_from: "2024-01-01",
        valid_until: null,
        priority: 150,
        notes: "3x Reward Points when buying Amazon/Flipkart vouchers via SmartBuy (15 RP per ₹150 for DCB)"
    },

    // Infinia/DCB - Swiggy/Zomato Vouchers 3X
    {
        id: "hdfc_smartbuy_swiggy_zomato_voucher_infinia_dcb_3x",
        bank: "HDFC",
        rule_type: RULE_TYPES.VOUCHER,
        platform: "SmartBuy (GyFTR)",
        category: EXPENSE_CATEGORIES.VOUCHER,
        merchants: ["swiggy", "zomato"],
        benefit_type: BENEFIT_TYPES.REWARD_MULTIPLIER,
        reward_multiplier_map: {
            "hdfc_infinia": 3,
            "hdfc_dcb_metal": 3
        },
        constraints: {},
        cap: 10000,
        cap_period: CAP_PERIODS.MONTHLY,
        min_transaction: 500,
        max_transaction: 10000,
        valid_from: "2024-01-01",
        valid_until: null,
        priority: 150,
        notes: "3x Reward Points when buying Swiggy/Zomato vouchers via SmartBuy"
    },

    // Infinia/DCB - BigBasket Vouchers 3X
    {
        id: "hdfc_smartbuy_bigbasket_voucher_infinia_dcb_3x",
        bank: "HDFC",
        rule_type: RULE_TYPES.VOUCHER,
        platform: "SmartBuy (GyFTR)",
        category: EXPENSE_CATEGORIES.VOUCHER,
        merchants: ["bigbasket"],
        benefit_type: BENEFIT_TYPES.REWARD_MULTIPLIER,
        reward_multiplier_map: {
            "hdfc_infinia": 3,
            "hdfc_dcb_metal": 3
        },
        constraints: {},
        cap: 10000,
        cap_period: CAP_PERIODS.MONTHLY,
        min_transaction: 500,
        max_transaction: 5000,
        valid_from: "2024-01-01",
        valid_until: null,
        priority: 150,
        notes: "3x Reward Points when buying BigBasket vouchers via SmartBuy"
    },

    // Regalia/DCP - Amazon/Flipkart Vouchers 5X
    {
        id: "hdfc_smartbuy_amazon_flipkart_voucher_regalia_dcp_5x",
        bank: "HDFC",
        rule_type: RULE_TYPES.VOUCHER,
        platform: "SmartBuy (GyFTR)",
        category: EXPENSE_CATEGORIES.VOUCHER,
        merchants: ["amazon", "flipkart"],
        benefit_type: BENEFIT_TYPES.REWARD_MULTIPLIER,
        reward_multiplier_map: {
            "hdfc_regalia_gold": 5,
            "hdfc_dcp": 5
        },
        constraints: {},
        cap: 4000,
        cap_period: CAP_PERIODS.MONTHLY,
        min_transaction: 1000,
        max_transaction: 10000,
        valid_from: "2024-01-01",
        valid_until: null,
        priority: 150,
        notes: "5x Reward Points when buying Amazon/Flipkart vouchers via SmartBuy (20 RP per ₹150, ₹4k cap/month)"
    },

    // Millennia - Swiggy/Zomato Vouchers 5% Cashback
    {
        id: "hdfc_smartbuy_swiggy_zomato_voucher_millennia_5pct",
        bank: "HDFC",
        rule_type: RULE_TYPES.VOUCHER,
        platform: "SmartBuy (GyFTR)",
        category: EXPENSE_CATEGORIES.VOUCHER,
        merchants: ["swiggy", "zomato"],
        benefit_type: BENEFIT_TYPES.CASHBACK,
        cashback_rate_map: {
            "hdfc_millennia": 0.05
        },
        constraints: {},
        cap: 1000,
        cap_period: CAP_PERIODS.MONTHLY,
        min_transaction: 500,
        max_transaction: 5000,
        valid_from: "2024-01-01",
        valid_until: null,
        priority: 150,
        notes: "5% cashback when buying Swiggy/Zomato vouchers via SmartBuy (₹1000 cap/month)"
    }
];

export default HDFC_VOUCHER_RULES;
