// ============================================================================
// HDFC BANK — VOUCHER BOOSTER RULES (SMARTBUY → GYFTR)
// FINAL MODEL:
// - ALL eligible cards included (premium + cashback + entry)
// - benefit_type determines how engine computes benefit
// - Engine decides tie-breaking (simplicity > complexity)
// ============================================================================

const HDFC_VOUCHER_RULES = [

/* ============================================================================
   AMAZON
============================================================================ */

/* Premium reward cards */
{
    bank: "HDFC",
    platform: "smartbuy_gyftr",
    merchant: "amazon",

    applies_to_cards: [
        "hdfc_infinia_metal",
        "hdfc_diners_black_metal",
        "hdfc_diners_privilege",
        "hdfc_regalia_gold"
    ],

    benefit_type: "reward_multiplier",
    reward_multiplier: 5,
    discount_rate: null,

    cap: 10000,
    period: "monthly",

    wallet_load_allowed: true,
    notes: "5X reward points on Amazon vouchers via SmartBuy Gyftr"
},

/* Cashback / entry cards */
{
    bank: "HDFC",
    platform: "smartbuy_gyftr",
    merchant: "amazon",

    applies_to_cards: [
        "hdfc_millennia",
        "hdfc_moneyback_plus",
        "hdfc_freedom"
    ],

    benefit_type: "direct_discount",
    reward_multiplier: null,
    discount_rate: 0.05,

    cap: 5000,
    period: "monthly",

    wallet_load_allowed: true,
    notes: "5% instant discount on Amazon vouchers via SmartBuy Gyftr"
},

/* ============================================================================
   FLIPKART
============================================================================ */

{
    bank: "HDFC",
    platform: "smartbuy_gyftr",
    merchant: "flipkart",

    applies_to_cards: [
        "hdfc_infinia_metal",
        "hdfc_diners_black_metal",
        "hdfc_diners_privilege",
        "hdfc_regalia_gold"
    ],

    benefit_type: "reward_multiplier",
    reward_multiplier: 5,
    discount_rate: null,

    cap: 10000,
    period: "monthly",

    wallet_load_allowed: true,
    notes: "5X reward points on Flipkart vouchers via SmartBuy Gyftr"
},

{
    bank: "HDFC",
    platform: "smartbuy_gyftr",
    merchant: "flipkart",

    applies_to_cards: [
        "hdfc_millennia",
        "hdfc_moneyback_plus",
        "hdfc_freedom"
    ],

    benefit_type: "direct_discount",
    reward_multiplier: null,
    discount_rate: 0.05,

    cap: 5000,
    period: "monthly",

    wallet_load_allowed: true,
    notes: "5% instant discount on Flipkart vouchers via SmartBuy Gyftr"
},

/* ============================================================================
   SWIGGY
============================================================================ */

{
    bank: "HDFC",
    platform: "smartbuy_gyftr",
    merchant: "swiggy",

    applies_to_cards: [
        "hdfc_infinia_metal",
        "hdfc_diners_black_metal",
        "hdfc_diners_privilege"
    ],

    benefit_type: "reward_multiplier",
    reward_multiplier: 5,
    discount_rate: null,

    cap: 10000,
    period: "monthly",

    wallet_load_allowed: true,
    notes: "5X reward points on Swiggy vouchers via SmartBuy Gyftr"
},

{
    bank: "HDFC",
    platform: "smartbuy_gyftr",
    merchant: "swiggy",

    applies_to_cards: [
        "hdfc_millennia",
        "hdfc_moneyback_plus",
        "hdfc_freedom"
    ],

    benefit_type: "direct_discount",
    reward_multiplier: null,
    discount_rate: 0.05,

    cap: 5000,
    period: "monthly",

    wallet_load_allowed: true,
    notes: "5% instant discount on Swiggy vouchers via SmartBuy Gyftr"
},

/* ============================================================================
   GENERIC GYFTR MERCHANTS
============================================================================ */

{
    bank: "HDFC",
    platform: "smartbuy_gyftr",
    merchant: "generic",

    applies_to_cards: [
        // Premium
        "hdfc_infinia_metal",
        "hdfc_diners_black_metal",
        "hdfc_diners_privilege",
        "hdfc_regalia_gold",

        // Cashback / entry
        "hdfc_millennia",
        "hdfc_moneyback_plus",
        "hdfc_freedom"
    ],

    benefit_type: "direct_discount",
    reward_multiplier: null,
    discount_rate: 0.03,

    cap: 5000,
    period: "monthly",

    wallet_load_allowed: false,
    notes: "Up to 3% discount on select Gyftr vouchers"
}

];

export default HDFC_VOUCHER_RULES;
