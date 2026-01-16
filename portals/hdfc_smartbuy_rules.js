// ============================================================================
// HDFC SMARTBUY — PORTAL BOOSTER RULES (FINAL, ENGINE-SAFE)
// Rules:
// - reward_multiplier → multiplies base rewards
// - direct_discount   → ignores base reward completely
// - ONLY eligible cards included
// ============================================================================

const HDFC_SMARTBUY_RULES = [

/* ============================================================================
   HOTELS — SMARTBUY
============================================================================ */

/* Premium cards — reward acceleration */
{
    bank: "HDFC",
    portal: "smartbuy",
    category: "hotels",

    applies_to_cards: [
        "hdfc_infinia_metal",
        "hdfc_diners_black_metal",
        "hdfc_diners_privilege",
        "hdfc_regalia_gold"
    ],

    benefit_type: "reward_multiplier",
    reward_multiplier: 10,
    discount_rate: null,

    cap: 10000,
    period: "monthly",
    notes: "10X reward points on hotel bookings via SmartBuy"
},

/* Cashback cards — direct discount */
{
    bank: "HDFC",
    portal: "smartbuy",
    category: "hotels",

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
    notes: "5% instant discount on hotel bookings via SmartBuy"
},

/* ============================================================================
   FLIGHTS — SMARTBUY
============================================================================ */

/* Premium cards */
{
    bank: "HDFC",
    portal: "smartbuy",
    category: "flights",

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
    notes: "5X reward points on flight bookings via SmartBuy"
},

/* Cashback cards */
{
    bank: "HDFC",
    portal: "smartbuy",
    category: "flights",

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
    notes: "5% instant discount on flight bookings via SmartBuy"
},

/* ============================================================================
   SHOPPING / ELECTRONICS / FASHION — SMARTBUY
============================================================================ */

/* Cashback-focused SmartBuy category */
{
    bank: "HDFC",
    portal: "smartbuy",
    category: "shopping",

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
    notes: "5% SmartBuy discount on shopping partners"
}

];

export default HDFC_SMARTBUY_RULES;
