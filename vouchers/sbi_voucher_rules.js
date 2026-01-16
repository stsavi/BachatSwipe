// ============================================================================
// SBI CARD — VOUCHER RULES (via Rewards Portal / Gyftr partnerships)
// - Includes Amazon / Flipkart / Swiggy / Zomato / generic voucher flows
// - benefit_type: "reward_multiplier" | "direct_discount"
// - Only include voucher rules where SBI portal / partners list accelerated benefit
// - Engine will fall back to base card rewards otherwise
// ============================================================================

const SBI_VOUCHER_RULES = [

    /* ============================================================================
       AMAZON VOUCHERS (Gyftr & SBI catalogue)
       - Gyftr / SBI portal pages show bundle/discount promotions for Amazon Pay vouchers;
         portal redemptions often provide accelerated reward points (or partner discounts).
       - Represent both premium reward_multiplier and direct_discount possibilities.
       - Source: Gyftr (SBI brand pages) & SBICard rewards portal. :contentReference[oaicite:12]{index=12}
    ============================================================================ */

    /* Premium reward-card path (points accelerated on portal voucher redemption) */
    {
        bank: "SBI",
        platform: "sbi_rewards_gyftr",
        merchant: "amazon",
        applies_to_cards: [
            "sbi_elite",
            "sbi_aurum",
            "sbi_miles_prime",
            "sbi_miles",
            "sbi_prime"
        ],
        benefit_type: "reward_multiplier",
        cap: null,
        reward_multiplier: 5,
        period: "promo_based",
        notes: "Higher multipliers may apply on select partners during promotions"
    },

    /* Non-premium / SimplyCLICK / Prime / entry cards — voucher portal baseline */
    {
        bank: "SBI",
        platform: "sbi_rewards_gyftr",
        merchant: "amazon",
        applies_to_cards: [
            "sbi_simplyclick",
            "sbi_simplysave",
            "sbi_cashback",
            "sbi_pulse",
            "sbi_bpcl",
            "sbi_bpcl_octane"
        ],
        benefit_type: "reward_multiplier",
        reward_multiplier: 5,    // baseline portal voucher multiplier for many cards (post-Apr-2025)
        cap: null,
        period: "monthly",
        notes:
            "5X reward points on Amazon vouchers via SBI portal for mass-market cards; availability and caps vary by partner/stock on portal."
    },

    /* ============================================================================
       FLIPKART VOUCHERS
       - SBI portal / partner listings show similar voucher availability for Flipkart.
    ============================================================================ */
    ,
    {
        bank: "SBI",
        platform: "sbi_rewards_gyftr",
        merchant: "flipkart",
        applies_to_cards: [
            "sbi_elite",
            "sbi_aurum",
            "sbi_miles_prime",
            "sbi_miles",
            "sbi_prime",
            "sbi_simplyclick"
        ],
        benefit_type: "reward_multiplier",
        reward_multiplier: 5,
        cap: null,
        period: "monthly",
        notes: "Up to 5X portal voucher redemption on Flipkart via SBI rewards; partner stock & promos vary."
    }

    /* ============================================================================
       SWIGGY / ZOMATO VOUCHERS
    ============================================================================ */
    ,
    {
        bank: "SBI",
        platform: "sbi_rewards_gyftr",
        merchant: "swiggy",
        applies_to_cards: [
            "sbi_elite",
            "sbi_aurum",
            "sbi_miles",
            "sbi_miles_prime",
            "sbi_prime",
            "sbi_simplyclick"
        ],
        benefit_type: "reward_multiplier",
        reward_multiplier: 5,
        cap: null,
        period: "monthly",
        notes: "Portal voucher redemptions for Swiggy usually carry portal accelerators (baseline 5X)."
    },
    {
        bank: "SBI",
        platform: "sbi_rewards_gyftr",
        merchant: "zomato",
        applies_to_cards: [
            "sbi_elite",
            "sbi_aurum",
            "sbi_miles",
            "sbi_miles_prime",
            "sbi_prime",
            "sbi_simplyclick"
        ],
        benefit_type: "reward_multiplier",
        reward_multiplier: 5,
        cap: null,
        period: "monthly",
        notes: "Portal voucher redemptions for Zomato usually carry portal accelerators (baseline 5X)."
    }

    /* ============================================================================
       GENERIC VOUCHER (other partner vouchers on the SBI portal)
    ============================================================================ */
    ,
    {
        bank: "SBI",
        platform: "sbi_rewards_gyftr",
        merchant: "generic_voucher",
        applies_to_cards: [
            "sbi_elite",
            "sbi_aurum",
            "sbi_miles_prime",
            "sbi_miles",
            "sbi_prime",
            "sbi_simplyclick",
            "sbi_simplysave"
        ],
        benefit_type: "reward_multiplier",
        reward_multiplier: 3,
        cap: null,
        period: "monthly",
        notes: "3X portal voucher redemptions on other merchant vouchers; availability varies by partner and stock on the portal."
    }

];

export default SBI_VOUCHER_RULES;
