// ============================================================================
// ICICI VOUCHER RULES (VIA iShop)
// Only vouchers with accelerated rewards are included.
// Engine will fall back to base reward if no rule.
// ============================================================================

const ICICI_VOUCHER_RULES = [

    /* ============================================================================
       AMAZON VOUCHERS
    ============================================================================ */

    {
        bank: "ICICI",
        platform: "ishop",
        merchant: "amazon",
        applies_to_cards: [
            "icici_emeralde_private_metal",
            "icici_emeralde",
            "icici_sapphiro",
            "icici_rubyx",
            "icici_coral",
            "icici_platinum_chip"
        ],
        benefit_type: "reward_multiplier",
        reward_multiplier: 6,
        cap: null,
        period: "promo_based",
        notes: "Voucher acceleration via iShop is merchant & promotion dependent. Show live availability; baseline iShop tables list 6X for eligible reward cards."
    },

    /* ============================================================================
       FLIPKART VOUCHERS
    ============================================================================ */

    {
        bank: "ICICI",
        platform: "ishop",
        merchant: "flipkart",

        applies_to_cards: [
            "icici_emeralde_private_metal",
            "icici_emeralde",
            "icici_sapphiro",
            "icici_rubyx",
            "icici_coral",
            "icici_platinum_chip"
        ],

        benefit_type: "reward_multiplier",
        reward_multiplier: 6,
        cap: null,
        period: "monthly",

        notes: "6X reward points on Flipkart vouchers via iShop"
    },

    /* ============================================================================
       SWIGGY VOUCHERS
    ============================================================================ */

    {
        bank: "ICICI",
        platform: "ishop",
        merchant: "swiggy",

        applies_to_cards: [
            "icici_emeralde_private_metal",
            "icici_emeralde",
            "icici_sapphiro",
            "icici_rubyx"
        ],

        benefit_type: "reward_multiplier",
        reward_multiplier: 6,
        cap: null,
        period: "monthly",

        notes: "6X reward points on Swiggy vouchers via iShop"
    },

    /* ============================================================================
       ZOMATO VOUCHERS
    ============================================================================ */

    {
        bank: "ICICI",
        platform: "ishop",
        merchant: "zomato",

        applies_to_cards: [
            "icici_emeralde_private_metal",
            "icici_emeralde",
            "icici_sapphiro",
            "icici_rubyx"
        ],

        benefit_type: "reward_multiplier",
        reward_multiplier: 6,
        cap: null,
        period: "monthly",

        notes: "6X reward points on Zomato vouchers via iShop"
    },

    /* ============================================================================
       GENERIC / OTHER VOUCHERS
    ============================================================================ */

    {
        bank: "ICICI",
        platform: "ishop",
        category: "vouchers",
        applies_to_cards: [
            "icici_emeralde_private_metal",
            "icici_emeralde",
            "icici_sapphiro"
        ],
        benefit_type: "reward_multiplier",
        reward_multiplier: 3,
        cap: null,
        period: "promo_based",
        notes: "Voucher acceleration via iShop is merchant/promo dependent; baseline lower multiplier used"
    }

];

export default ICICI_VOUCHER_RULES;
