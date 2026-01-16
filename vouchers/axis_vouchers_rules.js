// ============================================================================
// AXIS BANK — VOUCHER RULES (GrabDeals / GiftEdge / GyFTR)
// - Models voucher discounts and GyFTR coin earning where Axis advertises them
// - Treat GyFTR coin earn separately from EDGE points (different currency)
// - Only include merchants with documented/advertised benefits
// ============================================================================

const AXIS_VOUCHER_RULES = [

/* ============================================================================
   AMAZON VOUCHERS (GrabDeals / GiftEdge / GyFTR)
   - Axis GiftEdge / GyFTR pages advertise voucher discounts & GyFTR coin earn.
   - Represent as direct_discount (instant voucher discount) + notes about GyFTR coins.
============================================================================ */

{
  bank: "AXIS",
  platform: "grabdeals_vouchers",
  merchant: "amazon",

  applies_to_cards: [
    "axis_magnus",
    "axis_reserve",
    "axis_select",
    "axis_privilege",
    "axis_ace",
    "axis_flipkart",
    "axis_airtel"
  ],

  benefit_type: "direct_discount",
  discount_rate: 0.05,   // common advertised voucher discounts / cashback via GrabDeals/GiftEdge (promo dependent)
  cap: null,
  period: "promo_based",

  notes:
    "Axis GiftEdge / GyFTR lists voucher discounts and 'GyFTR coin' earn (up to advertised percentages). GyFTR coins are a separate loyalty currency — engine must handle GyFTR valuation separately. See GiftEdge/GyFTR pages."
},

/* ============================================================================
   FLIPKART VOUCHERS
============================================================================ */

{
  bank: "AXIS",
  platform: "grabdeals_vouchers",
  merchant: "flipkart",

  applies_to_cards: [
    "axis_magnus",
    "axis_reserve",
    "axis_select",
    "axis_privilege",
    "axis_ace",
    "axis_flipkart"
  ],

  benefit_type: "direct_discount",
  discount_rate: 0.05,
  cap: null,
  period: "promo_based",

  notes:
    "Flipkart voucher discounts via GrabDeals/GiftEdge may be offered to Axis cardholders (offer dependent)."
},

/* ============================================================================
   SWIGGY / ZOMATO VOUCHERS
============================================================================ */

{
  bank: "AXIS",
  platform: "grabdeals_vouchers",
  merchant: "swiggy",

  applies_to_cards: [
    "axis_magnus",
    "axis_reserve",
    "axis_select",
    "axis_ace"
  ],

  benefit_type: "direct_discount",
  discount_rate: 0.05,
  cap: null,
  period: "promo_based",

  notes:
    "Swiggy vouchers sometimes carry gift-platform discounts and GyFTR coin earn; check live GrabDeals/GyFTR availability."
},

{
  bank: "AXIS",
  platform: "grabdeals_vouchers",
  merchant: "zomato",

  applies_to_cards: [
    "axis_magnus",
    "axis_reserve",
    "axis_select",
    "axis_ace"
  ],

  benefit_type: "direct_discount",
  discount_rate: 0.05,
  cap: null,
  period: "promo_based",

  notes:
    "Zomato vouchers may be available with voucher discounts; check live portal."
},

/* ============================================================================
   GENERIC VOUCHERS (GiftEdge / GyFTR)
============================================================================ */

{
  bank: "AXIS",
  platform: "giftedge_gyftr",
  merchant: "generic_voucher",

  applies_to_cards: [
    "axis_magnus",
    "axis_reserve",
    "axis_select",
    "axis_privilege",
    "axis_ace",
    "axis_flipkart",
    "axis_airtel"
  ],

  benefit_type: "direct_discount",
  discount_rate: 0.03,  // conservative baseline for generic voucher discounts / GyFTR coin earn
  cap: null,
  period: "promo_based",

  notes:
    "GyFTR/GiftEdge often advertises up to 10% GyFTR coin earn on select vouchers; treat as promo-conditional. Engine should surface 'GyFTR coin' notes and compute separately if you add GyFTR coin valuation."
}

];

export default AXIS_VOUCHER_RULES;
