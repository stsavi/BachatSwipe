// ============================================================================
// AXIS BANK — GRABDEALS PORTAL RULES (CONSERVATIVE, VERIFIED)
// - Only portal-specific accelerated/discounted paths included.
// - No empty/fallback entries: if a path is absent, engine falls back to base card.
// - benefit_type: "reward_multiplier" | "direct_discount"
// - Notes included where rules are promo-dependent or derived from T&Cs.
// ============================================================================

const AXIS_GRABDEALS_RULES = [

/* ============================================================================
   FLIGHTS — GRABDEALS
   - GrabDeals advertises up to 5% cashback on partner portals; premium cards may
     get EDGE points via card T&Cs for eligible spends. Use direct_discount for
     GrabDeals cashback; reward_multiplier only where T&C supports accelerated RPs.
============================================================================ */

{
  bank: "AXIS",
  portal: "grabdeals",
  category: "flights",

  applies_to_cards: [
    "axis_ace",
    "axis_flipkart",
    "axis_airtel",
    "axis_neo"
  ],

  benefit_type: "direct_discount",
  discount_rate: 0.05,   // up to 5% cashback via GrabDeals - merchant/offer dependent
  cap: null,
  period: "promo_based",

  notes:
    "GrabDeals lists up to 5% cashback on partner flight bookings for retail cashback cards; exact rates are merchant/offer dependent. Engine should treat as promotional and show notes to user."
},

{
  bank: "AXIS",
  portal: "grabdeals",
  category: "flights",

  applies_to_cards: [
    "axis_magnus",
    "axis_reserve",
    "axis_select",
    "axis_atlas"
  ],

  benefit_type: "reward_multiplier",
  reward_multiplier: 5,   // conservative mapping: premium cards often earn accelerated EDGE on eligible spends
  cap: 5000,
  period: "monthly",

  notes:
    "Premium cards (e.g., Magnus) have accelerated EDGE points on eligible spends per Magnus T&C; treat GrabDeals flight partner acceleration conservatively as reward_multiplier=5 and show T&C link to user. Partner-level caps/eligibility vary; verify live portal."
},

/* ============================================================================
   HOTELS — GRABDEALS
   - GrabDeals promotional pages show hotel offers; premium cards often get higher
     EDGE benefits on eligible spends per card T&Cs. Use direct_discount for mass-market.
============================================================================ */

{
  bank: "AXIS",
  portal: "grabdeals",
  category: "hotels",

  applies_to_cards: [
    "axis_ace",
    "axis_flipkart",
    "axis_airtel",
    "axis_neo"
  ],

  benefit_type: "direct_discount",
  discount_rate: 0.10,  // up to 10% cashback/off on select hotel deals via GrabDeals (promo-based)
  cap: null,
  period: "promo_based",

  notes:
    "GrabDeals advertises hotel discounts (sometimes up to 10%); rates vary by merchant/offer. Engine should surface partner details and caps."
},

{
  bank: "AXIS",
  portal: "grabdeals",
  category: "hotels",

  applies_to_cards: [
    "axis_magnus",
    "axis_reserve",
    "axis_select",
    "axis_atlas"
  ],

  benefit_type: "reward_multiplier",
  reward_multiplier: 10, // conservative premium mapping for hotels for premium cards (verify partner-level caps)
  cap: 10000,
  period: "monthly",

  notes:
    "Premium cards may earn higher EDGE reward acceleration on eligible hotel spends (per card T&Cs). This value is conservative — partner-specific T&Cs may differ."
},

/* ============================================================================
   SHOPPING — GRABDEALS (NON-TRAVEL)
   - GrabDeals shows up to ~5% cashback on big ecommerce partners. Premium cards
     can earn EDGE RPs on eligible spends; retail cashback cards get flat cashback.
============================================================================ */

{
  bank: "AXIS",
  portal: "grabdeals",
  category: "shopping",

  applies_to_cards: [
    "axis_ace",
    "axis_flipkart",
    "axis_airtel",
    "axis_neo"
  ],

  benefit_type: "direct_discount",
  discount_rate: 0.05,
  cap: null,
  period: "promo_based",

  notes:
    "Retail cashback cards get up to 5% cashback on select GrabDeals partner purchases (merchant dependent)."
},

{
  bank: "AXIS",
  portal: "grabdeals",
  category: "shopping",

  applies_to_cards: [
    "axis_magnus",
    "axis_reserve",
    "axis_select",
    "axis_privilege"
  ],

  benefit_type: "reward_multiplier",
  reward_multiplier: 5,
  cap: 5000,
  period: "monthly",

  notes:
    "Premium EDGE cards often earn accelerated points on eligible shopping spends per card T&Cs. Treat GrabDeals shopping acceleration as reward_multiplier=5 conservatively; verify partner-level inclusions."
}

];

export default AXIS_GRABDEALS_RULES;
