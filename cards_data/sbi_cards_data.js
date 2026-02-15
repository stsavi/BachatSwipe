import { CARD_TIERS, REWARD_TYPES, REDEMPTION_TYPES, LOUNGE_ACCESS_TYPES } from '../config/bank_platforms.js';

/**
 * SBI Cards Data
 * Data validated against: SBI Cards official product pages, MITC documents, SBI Rewardz portal
 * Last updated: January 17, 2026
 */

export const sbiCardsData = [
  //Need to verify the details after Vistara-Air India merger. Not very clear from Axis website.
  //Removing this for now.
  /*
  {
    id: "sbi_vistara_prime",
    name: "SBI Card Vistara Prime",
    bank: "SBI Card",
    card_tier: CARD_TIERS.TRAVEL,
    reward_type: REWARD_TYPES.POINTS, // CV Points (Club Vistara)
    base_rate: 0.03, // 3 CV Points per ₹100 = 0.03 points per ₹1
    earning_display: "3 CV Points per ₹100",
    value_per_unit: 2.00, // ₹2 per CV Point (when transferred to Vistara)
    redemption_ease_score: 3, // Miles transfer required
    redemption_types: [REDEMPTION_TYPES.MILES_TRANSFER],
    annual_fee: 3000, // ₹3000
    fee_waiver_criteria: "Spend ₹4L in a year",
    joining_bonus: "Club Vistara Silver Tier on approval",
    lounge: {
      domestic: LOUNGE_ACCESS_TYPES.LIMITED_8,
      international: LOUNGE_ACCESS_TYPES.LIMITED_4,
      network: ["Club Vistara Lounges", "Priority Pass"],
      guest_access: false
    },
    supports_upi: true,
    base_exclusions: ["fuel", "wallet_loads", "rent", "insurance", "government", "education"],
    features: ["Vistara Silver tier", "Free checked baggage", "Priority check-in"]
  },
  */

  //Premium Cards
  {
    id: "sbi_prime",
    name: "SBI Card PRIME",
    bank: "SBI Card",
    card_tier: CARD_TIERS.PREMIUM,
    reward_type: REWARD_TYPES.POINTS,
    base_rate: 0.02, // 2 Reward Points per ₹100
    earning_display: "2 Reward Points per ₹100",
    value_per_unit: 0.25, // ₹0.25 per point
    redemption_ease_score: 2,
    redemption_types: [REDEMPTION_TYPES.VOUCHERS],
    annual_fee: 3000, // ₹3000
    fee_waiver_criteria: "Spend 3L in a year",
    joining_bonus: null,
    lounge: {
      domestic: LOUNGE_ACCESS_TYPES.COMPLIMENTARY,
      international: LOUNGE_ACCESS_TYPES.COMPLIMENTARY,
      guest_access: false,
      notes: "4 complimentary International Priority Pass Lounge visits (outside India) per calendar year (max. 2 visits per quarter). 8 complimentary to Domestic Lounges visits per calendar year in India (max. 2 visit per quarter)"
    },
    network: ["Visa", "Mastercard", "American Express", "Rupay"],
    supports_upi: false,
    base_exclusions: ["fuel", "wallet_loads", "rent", "government", "education"],
    features: ["5X Reward Points on dining, groceries and movies", "1% fuel surcharge waiver"]
  },

  //UPI / Co-branded Cards
  {
    id: "sbi_phonepe_select_black",
    name: "SBI Card PhonePe SELECT BLACK",
    bank: "SBI Card",
    card_tier: CARD_TIERS.UPI, // UPI/Co-branded card
    reward_type: REWARD_TYPES.POINTS, // Reward Points, not direct cashback
    base_rate: 0.01, // 1 Reward Point per ₹100
    earning_display: "1 Reward Point per ₹100",
    value_per_unit: 1.00, // ₹1 per point (special 1:1 redemption for this card)
    redemption_ease_score: 2, // Points-based redemption
    redemption_types: [REDEMPTION_TYPES.STATEMENT_CREDIT, REDEMPTION_TYPES.VOUCHERS],
    annual_fee: 1499, // ₹1499
    fee_waiver_criteria: "Spend ₹3L in a year",
    joining_bonus: "₹1500 PhonePe Gift Card within 45 days of realization of Joining Fee",
    lounge: {
      domestic: LOUNGE_ACCESS_TYPES.COMPLIMENTARY,
      international: LOUNGE_ACCESS_TYPES.COMPLIMENTARY,
      guest_access: false,
      notes: "Complimentary membership to Priority Pass Program worth $99 for first two years of Cardholder Membership, 4 Complimentary Domestic Lounge visits every year(max. 1 per quarter)"
    },
    network: ["Visa", "Rupay"],
    supports_upi: true,
    base_exclusions: ["fuel", "wallet_loads", "rent", "emi", "cash_withdrawal", "government_payments", "education"],
    features: ["10 Reward Points per Rs 100 on eligible PhonePe spends", "5 Reward Points per Rs 100 on eligible online spends"]
  },

  //Cashback Cards

  {
    id: "sbi_cashback",
    name: "SBI Cashback Card",
    bank: "SBI Card",
    card_tier: CARD_TIERS.CASHBACK,
    reward_type: REWARD_TYPES.CASHBACK,
    base_rate: 0.01, // 1% base cashback
    earning_display: "1% on offline shopping",
    value_per_unit: 1.00, // ₹1 per ₹1 cashback
    redemption_ease_score: 1, // Direct cashback
    redemption_types: [REDEMPTION_TYPES.STATEMENT_CREDIT],
    annual_fee: 999, // ₹999
    fee_waiver_criteria: "Spend ₹2L in a year",
    joining_bonus: "₹2000 cashback on ₹1L spend in first 60 days",
    lounge: {
      domestic: LOUNGE_ACCESS_TYPES.NONE,
      international: LOUNGE_ACCESS_TYPES.NONE,
      guest_access: false
    },
    network: ["Visa"],
    supports_upi: false,
    base_exclusions: ["fuel", "wallet_loads", "rent", "insurance", "emi", "cash_withdrawal", "railway_tickets", "government_payments", "education"],
    features: ["5% unlimited on online shopping (with exclusions)", "1% on offline shopping", "Major exclusions apply"]
  },
  {
    id: "sbi_simplyclick",
    name: "SBI Card SimplyCLICK",
    bank: "SBI Card",
    card_tier: CARD_TIERS.LIFESTYLE,
    reward_type: REWARD_TYPES.POINTS,
    base_rate: 0.01, // 1 Reward Point per ₹100
    earning_display: "1 Reward Point per ₹100",
    value_per_unit: 0.25, // ₹0.25 per point
    redemption_ease_score: 2,
    redemption_types: [REDEMPTION_TYPES.STATEMENT_CREDIT, REDEMPTION_TYPES.VOUCHERS],
    annual_fee: 500, // ₹500
    fee_waiver_criteria: "Spend ₹1L in a year",
    joining_bonus: "₹500 voucher on payment of Annual Fee of Rs. 499 +taxes",
    lounge: {
      domestic: LOUNGE_ACCESS_TYPES.NONE,
      international: LOUNGE_ACCESS_TYPES.NONE,
      guest_access: false
    },
    network: ["Visa"],
    supports_upi: false,
    base_exclusions: ["fuel", "wallet_loads", "rent", "government", "education", "utility"],
    features: ["10X Reward Points on online spends with exclusive partners.", "5X Reward Points on online spends.", "1% fuel surcharge waiver"]
  },

  //Fuel Card
  {
    id: "sbi_bpcl",
    name: "SBI Card BPCL",
    bank: "SBI Card",
    card_tier: CARD_TIERS.FUEL,
    reward_type: REWARD_TYPES.POINTS, // Regular SBI Reward Points, not special fuel points
    base_rate: 0.01, // 1 Reward Point per ₹100
    earning_display: "1 Reward Point per ₹100",
    value_per_unit: 0.25, // ₹0.25 per point
    redemption_ease_score: 1, // Direct redemption at BPCL petrol pumps.
    redemption_types: [REDEMPTION_TYPES.STATEMENT_CREDIT],
    annual_fee: 500, // ₹500
    fee_waiver_criteria: "Spend ₹50k in a year",
    joining_bonus: "2000 Reward Points",
    lounge: {
      domestic: LOUNGE_ACCESS_TYPES.NONE,
      international: LOUNGE_ACCESS_TYPES.NONE,
      guest_access: false
    },
    network: ["Visa"],
    supports_upi: false,
    base_exclusions: ["wallet_loads", "rent", "government", "education"],
    features: ["13X Reward Points on fuel purchases at BPCL petrol pumps.", "5X Reward Points on groceries/dining"]
  }
];

export default sbiCardsData;