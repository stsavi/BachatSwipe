import { EXPENSE_CATEGORIES, BENEFIT_TYPES, RULE_TYPES, CAP_PERIODS } from '../../config/bank_platforms.js';

/**
 * HDFC Bank - Direct Merchant Accelerated Rewards
 * Reward point multipliers for direct merchant swipes
 * Data validated against: HDFC Bank MITC, official product pages
 * Last updated: February 1, 2026
 */

export const HDFC_DIRECT_ACCELERATED_RULES = [
    // SUPER PREMIUM CARDS - Dining Multiplier
    {
        id: "hdfc_infinia_dcb_dining_merchants",
        bank: "HDFC",
        rule_type: RULE_TYPES.DIRECT_MERCHANT_ACCELERATED,
        category: EXPENSE_CATEGORIES.DINING,
        merchants: [],
        platform: "direct",
        benefit_type: BENEFIT_TYPES.REWARD_MULTIPLIER,
        reward_multiplier_map: {
            "hdfc_infinia": 2,
            "hdfc_dcb_metal": 2
        },
        constraints: {},
        cap: null,
        cap_period: null,
        min_transaction: null,
        max_transaction: null,
        valid_from: "2024-01-01",
        valid_until: null,
        priority: 100,
        notes: "2x Reward Points on dining transactions (10 RP per ₹150 instead of 5 RP)"
    },

    // PREMIUM CARDS - Department Stores
    {
        id: "hdfc_regalia_dcp_department_stores",
        bank: "HDFC",
        rule_type: RULE_TYPES.DIRECT_MERCHANT_ACCELERATED,
        category: EXPENSE_CATEGORIES.SHOPPING,
        merchants: ["shoppers_stop", "lifestyle", "westside", "pantaloons"],
        platform: "direct",
        benefit_type: BENEFIT_TYPES.REWARD_MULTIPLIER,
        reward_multiplier_map: {
            "hdfc_regalia_gold": 2,
            "hdfc_dcp": 2
        },
        constraints: {},
        cap: null,
        cap_period: null,
        min_transaction: null,
        max_transaction: null,
        valid_from: "2024-01-01",
        valid_until: null,
        priority: 100,
        notes: "2x Reward Points on department store purchases (8 RP per ₹150)"
    },

    // INDIANOIL - Fuel Accelerated Points
    {
        id: "hdfc_indianoil_fuel_accelerated",
        bank: "HDFC",
        rule_type: RULE_TYPES.DIRECT_MERCHANT_ACCELERATED,
        category: EXPENSE_CATEGORIES.FUEL,
        merchants: ["indianoil"],
        platform: "direct",
        benefit_type: BENEFIT_TYPES.REWARD_MULTIPLIER,
        reward_multiplier_map: {
            "hdfc_indianoil": 6
        },
        constraints: {},
        cap: null,
        cap_period: null,
        min_transaction: 400,
        max_transaction: null,
        valid_from: "2024-01-01",
        valid_until: null,
        priority: 100,
        notes: "6x Reward Points on IndianOil fuel purchases (6 RP per ₹150, min ₹400 transaction)"
    },

    // DCP - Swiggy/Zomato 5X
    {
        id: "hdfc_dcp_zomato_swiggy_5x",
        bank: "HDFC",
        rule_type: RULE_TYPES.DIRECT_MERCHANT_ACCELERATED,
        category: EXPENSE_CATEGORIES.DINING,
        merchants: ["zomato", "swiggy"],
        platform: "direct",
        benefit_type: BENEFIT_TYPES.REWARD_MULTIPLIER,
        reward_multiplier_map: {
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
        notes: "5x Reward Points on Zomato and Swiggy orders (20 RP per ₹150 spent)"
    }
];

export default HDFC_DIRECT_ACCELERATED_RULES;
