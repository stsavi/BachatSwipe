// ============================================================================
// ICICI iSHOP REWARD RULES (Travel Categories)
// Only portal-specific accelerated reward paths are included.
// Engine falls back to base card rewards otherwise.
// ============================================================================

const ICICI_ISHOP_RULES = [

    /* ============================================================================
       FLIGHTS — iShop
    ============================================================================ */

    {
        bank: "ICICI",
        platform: "ishop",
        category: "flights",
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
        notes: "6X reward points on flight bookings via iShop for reward-earning ICICI cards (promo/partner-dependent)."
    },


    /* ============================================================================
       HOTELS — iShop
    ============================================================================ */

    {
        bank: "ICICI",
        platform: "ishop",
        category: "hotels",
        applies_to_cards: [
            "icici_emeralde_private_metal",
            "icici_emeralde",
            "icici_sapphiro",
            "icici_rubyx",
            "icici_coral",
            "icici_platinum_chip"
        ],
        benefit_type: "reward_multiplier",
        reward_multiplier: 12,
        cap: null,
        period: "monthly",
        notes: "12X reward points on hotel bookings via iShop for reward-earning ICICI cards (promo/partner-dependent)."
    }

];

export default ICICI_ISHOP_RULES;
