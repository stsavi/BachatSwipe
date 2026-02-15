import { CARD_TIERS, REWARD_TYPES, REDEMPTION_TYPES, LOUNGE_ACCESS_TYPES } from '../config/bank_platforms.js';

/**
 * HDFC Bank Credit Cards Data
 * Data validated against: HDFC Bank official product pages, MITC documents, SmartBuy portal
 * Last updated: February 1, 2026
 */

export const HDFC_CARDS = [
    // SUPER PREMIUM CARDS
    {
        id: "hdfc_infinia",
        name: "HDFC Infinia Metal",
        bank: "HDFC",
        card_tier: CARD_TIERS.SUPER_PREMIUM,
        reward_type: REWARD_TYPES.POINTS,
        base_rate: 0.0333, // 5 RP per ₹150
        earning_display: "5 RP per ₹150",
        value_per_unit: 1.0, // ₹1 per RP on SmartBuy flights/hotels
        redemption_ease_score: 2,
        redemption_types: [REDEMPTION_TYPES.PORTAL],
        annual_fee: 12500,
        fee_waiver_criteria: "Spend ₹10L in a year",
        joining_bonus: null,
        lounge: {
            domestic: LOUNGE_ACCESS_TYPES.COMPLIMENTARY,
            international: LOUNGE_ACCESS_TYPES.COMPLIMENTARY,
            guest_access: true,
            notes: "Unlimited complimentary lounge access globally for primary and add-on cardholders"
        },
        network: ["Visa", "Mastercard"],
        supports_upi: false,
        base_exclusions: ["fuel", "wallet", "wallet_loads", "rent", "government", "emi", "education"],
        features: ["5 RP per ₹150 base earning", "10 RP per ₹150 on SmartBuy", "1 RP = ₹1 on SmartBuy flights/hotels", "Unlimited lounge access"]
    },
    {
        id: "hdfc_dcb_metal",
        name: "HDFC Diners Black Metal",
        bank: "HDFC",
        card_tier: CARD_TIERS.SUPER_PREMIUM,
        reward_type: REWARD_TYPES.POINTS,
        base_rate: 0.0333, // 5 RP per ₹150
        earning_display: "5 RP per ₹150",
        value_per_unit: 1.0,
        redemption_ease_score: 2,
        redemption_types: [REDEMPTION_TYPES.PORTAL],
        annual_fee: 10000,
        fee_waiver_criteria: "Spend ₹8L in a year",
        joining_bonus: null,
        lounge: {
            domestic: LOUNGE_ACCESS_TYPES.COMPLIMENTARY,
            international: LOUNGE_ACCESS_TYPES.COMPLIMENTARY,
            guest_access: true,
            notes: "Unlimited complimentary Diners Club and Priority Pass lounge access"
        },
        network: ["Diners Club"],
        supports_upi: false,
        base_exclusions: ["fuel", "wallet", "wallet_loads", "rent", "government", "emi", "education"],
        features: ["5 RP per ₹150 base earning", "10 RP per ₹150 on SmartBuy", "1 RP = ₹1 on SmartBuy flights/hotels", "Unlimited lounge access"]
    },

    // PREMIUM / LIFESTYLE CARDS
    {
        id: "hdfc_regalia_gold",
        name: "HDFC Regalia Gold",
        bank: "HDFC",
        card_tier: CARD_TIERS.PREMIUM,
        reward_type: REWARD_TYPES.POINTS,
        base_rate: 0.0267, // 4 RP per ₹150
        earning_display: "4 RP per ₹150",
        value_per_unit: 0.50, // ₹0.50 per RP on SmartBuy
        redemption_ease_score: 2,
        redemption_types: [REDEMPTION_TYPES.PORTAL, REDEMPTION_TYPES.VOUCHERS],
        annual_fee: 2500,
        fee_waiver_criteria: "Spend ₹4L in a year",
        joining_bonus: null,
        lounge: {
            domestic: LOUNGE_ACCESS_TYPES.COMPLIMENTARY,
            international: LOUNGE_ACCESS_TYPES.COMPLIMENTARY,
            guest_access: false,
            notes: "12 domestic and 6 international lounge visits per year"
        },
        network: ["Visa", "Mastercard"],
        supports_upi: false,
        base_exclusions: ["fuel", "wallet", "wallet_loads", "rent", "government", "emi", "education"],
        features: ["4 RP per ₹150 base earning", "8 RP per ₹150 on SmartBuy", "1 RP = ₹0.50 on SmartBuy", "12 domestic + 6 international lounge visits/year"]
    },
    {
        id: "hdfc_dcp",
        name: "HDFC Diners Privilege",
        bank: "HDFC",
        card_tier: CARD_TIERS.PREMIUM,
        reward_type: REWARD_TYPES.POINTS,
        base_rate: 0.0267, // 4 RP per ₹150
        earning_display: "4 RP per ₹150",
        value_per_unit: 0.50,
        redemption_ease_score: 2,
        redemption_types: [REDEMPTION_TYPES.PORTAL, REDEMPTION_TYPES.VOUCHERS],
        annual_fee: 2500,
        fee_waiver_criteria: "Spend ₹3L in a year",
        joining_bonus: null,
        lounge: {
            domestic: LOUNGE_ACCESS_TYPES.SPEND_BASED,
            international: LOUNGE_ACCESS_TYPES.SPEND_BASED,
            guest_access: false,
            notes: "2 domestic and 2 international visits per quarter on spending ₹15k in previous quarter (8 visits/year total)"
        },
        network: ["Diners Club"],
        supports_upi: false,
        base_exclusions: ["fuel", "wallet", "wallet_loads", "rent", "government", "emi", "education"],
        features: ["4 RP per ₹150 base earning", "5X on Swiggy/Zomato", "Buy 1 Get 1 on BookMyShow", "Spend-based lounge access"]
    },

    // CASHBACK / MID-RANGE CARDS
    {
        id: "hdfc_millennia",
        name: "HDFC Millennia",
        bank: "HDFC",
        card_tier: CARD_TIERS.CASHBACK,
        reward_type: REWARD_TYPES.CASHBACK,
        base_rate: 0.01, // 1% base cashback
        earning_display: "1% Cashback",
        value_per_unit: 1.0,
        redemption_ease_score: 1,
        redemption_types: [REDEMPTION_TYPES.STATEMENT_CREDIT],
        annual_fee: 1000,
        fee_waiver_criteria: "Spend ₹1L in a year",
        joining_bonus: null,
        lounge: {
            domestic: LOUNGE_ACCESS_TYPES.NONE,
            international: LOUNGE_ACCESS_TYPES.NONE,
            network: [],
            guest_access: false,
            notes: "No lounge access"
        },
        network: ["Visa", "Mastercard", "Rupay", "Diners Club"],
        supports_upi: false,
        base_exclusions: ["fuel", "wallet", "wallet_loads", "rent", "government", "emi", "education"],
        features: ["5% cashback on preferred merchants (Amazon, Flipkart, etc.)", "1% cashback on other spends", "₹1000 cap/month"]
    },
    {
        id: "hdfc_swiggy",
        name: "Swiggy HDFC Bank Credit Card",
        bank: "HDFC",
        card_tier: CARD_TIERS.CASHBACK,
        reward_type: REWARD_TYPES.CASHBACK,
        base_rate: 0.01, // 1% base
        earning_display: "1% Cashback",
        value_per_unit: 1.0,
        redemption_ease_score: 1,
        redemption_types: [REDEMPTION_TYPES.STATEMENT_CREDIT],
        annual_fee: 500,
        fee_waiver_criteria: "Spend ₹2L in a year",
        joining_bonus: null,
        lounge: {
            domestic: LOUNGE_ACCESS_TYPES.NONE,
            international: LOUNGE_ACCESS_TYPES.NONE,
            network: [],
            guest_access: false,
            notes: "No lounge access provided"
        },
        network: ["Visa", "Mastercard"],
        supports_upi: false,
        base_exclusions: ["fuel", "wallet", "wallet_loads", "rent", "government", "emi", "jewellery", "education"],
        features: ["10% cashback on Swiggy orders", "5% cashback on online spends", "₹1500 cap/month"]
    },

    // UPI / CO-BRANDED CARDS
    {
        id: "hdfc_tataneu_infinity",
        name: "Tata Neu Infinity HDFC Bank Credit Card",
        bank: "HDFC",
        card_tier: CARD_TIERS.UPI,
        reward_type: REWARD_TYPES.CASHBACK, // NeuCoins treated as cashback
        base_rate: 0.015, // 1.5% NeuCoins
        earning_display: "1.5% NeuCoins",
        value_per_unit: 1.0, // 1 NeuCoin = ₹1
        redemption_ease_score: 1,
        redemption_types: [REDEMPTION_TYPES.CASH],
        annual_fee: 1499,
        fee_waiver_criteria: "Spend ₹3L in a year",
        joining_bonus: null,
        lounge: {
            domestic: LOUNGE_ACCESS_TYPES.SPEND_BASED,
            international: LOUNGE_ACCESS_TYPES.SPEND_BASED,
            network: ["Visa", "RuPay"],
            guest_access: false,
            notes: "2 domestic visits per quarter (8/year) + 1 international visit per quarter (4/year) on ₹50k spend"
        },
        network: ["Visa", "RuPay"],
        supports_upi: true,
        base_exclusions: ["fuel", "wallet", "wallet_loads", "rent", "government", "emi", "education"],
        features: ["5% NeuCoins on Tata brands", "1.5% NeuCoins on UPI via Tata Neu", "Spend-based lounge access"]
    },

    // FUEL CARDS
    {
        id: "hdfc_indianoil",
        name: "IndianOil HDFC Bank Credit Card",
        bank: "HDFC",
        card_tier: CARD_TIERS.FUEL,
        reward_type: REWARD_TYPES.POINTS, // Reward Points (not fuel points)
        base_rate: 0.0067, // 1 RP per ₹150
        earning_display: "1 Reward Point per ₹150",
        value_per_unit: 0.96, // 1 RP = 3 XRP, 1 XRP = ₹0.32, so 1 RP = ₹0.96
        redemption_ease_score: 2,
        redemption_types: [REDEMPTION_TYPES.CASH],
        annual_fee: 500,
        fee_waiver_criteria: "Spend ₹50k in a year",
        joining_bonus: "2000 Reward Points",
        lounge: {
            domestic: LOUNGE_ACCESS_TYPES.NONE,
            international: LOUNGE_ACCESS_TYPES.NONE,
            guest_access: false,
            notes: "No lounge access provided"
        },
        network: ["RuPay"],
        supports_upi: true,
        base_exclusions: ["rent", "education", "government", "wallet", "wallet_loads", "emi", "insurance"],
        features: ["5% cashback on fuel at IndianOil", "5% cashback on grocery/utilities", "UPI enabled"]
    }
];

export default HDFC_CARDS;