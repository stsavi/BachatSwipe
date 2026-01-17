import { CARD_TIERS, REWARD_TYPES, REDEMPTION_TYPES, LOUNGE_ACCESS_TYPES } from '../config/bank_platforms.js';

/**
 * SBI Cards Data
 * Data validated against: SBI Cards official product pages, MITC documents, SBI Rewardz portal
 * Last updated: January 17, 2026
 */

export const sbiCardsData = [
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
  {
    id: "sbi_simplyclick",
    name: "SBI Card SimplyCLICK",
    bank: "SBI Card",
    card_tier: CARD_TIERS.CASHBACK,
    reward_type: REWARD_TYPES.POINTS,
    base_rate: 0.01, // 1 Reward Point per ₹100
    earning_display: "1 Reward Point per ₹100",
    value_per_unit: 0.25, // ₹0.25 per point
    redemption_ease_score: 2,
    redemption_types: [REDEMPTION_TYPES.STATEMENT_CREDIT, REDEMPTION_TYPES.VOUCHERS],
    annual_fee: 500, // ₹500
    fee_waiver_criteria: "Spend ₹1L in a year",
    joining_bonus: "₹500 Amazon voucher",
    lounge: {
      domestic: LOUNGE_ACCESS_TYPES.NONE,
      international: LOUNGE_ACCESS_TYPES.NONE,
      network: [],
      guest_access: false
    },
    supports_upi: true,
    base_exclusions: ["fuel", "wallet_loads", "rent", "government", "education", "utility"],
    features: ["10X on Cleartrip/BookMyShow/Lenskart", "5X online shopping", "Movie ticket offers"]
  },
  {
    id: "sbi_simplysave",
    name: "SBI Card SimplySAVE",
    bank: "SBI Card",
    card_tier: CARD_TIERS.CASHBACK,
    reward_type: REWARD_TYPES.POINTS,
    base_rate: 0.01, // 1 Reward Point per ₹100
    earning_display: "1 Reward Point per ₹100",
    value_per_unit: 0.25, // ₹0.25 per point
    redemption_ease_score: 2,
    redemption_types: [REDEMPTION_TYPES.STATEMENT_CREDIT, REDEMPTION_TYPES.VOUCHERS],
    annual_fee: 500, // ₹500
    fee_waiver_criteria: "Spend ₹1L in a year",
    joining_bonus: "₹500 voucher",
    lounge: {
      domestic: LOUNGE_ACCESS_TYPES.NONE,
      international: LOUNGE_ACCESS_TYPES.NONE,
      network: [],
      guest_access: false
    },
    supports_upi: true,
    base_exclusions: ["fuel", "wallet_loads", "rent", "government", "education", "utility"],
    features: ["10X on dining, groceries, movies", "1% fuel surcharge waiver"]
  },
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
      network: [],
      guest_access: false
    },
    supports_upi: true,
    base_exclusions: ["fuel", "wallet_loads", "rent", "insurance", "emi", "cash_withdrawal", "railway_tickets", "government_payments", "education", "utility_bills"],
    features: ["5% unlimited on online shopping (with exclusions)", "1% on offline shopping", "Major exclusions apply"]
  },
  {
    id: "sbi_prime",
    name: "SBI Card PRIME",
    bank: "SBI Card",
    card_tier: CARD_TIERS.ENTRY,
    reward_type: REWARD_TYPES.POINTS,
    base_rate: 0.02, // 2 Reward Points per ₹100
    earning_display: "2 Reward Points per ₹100",
    value_per_unit: 0.25, // ₹0.25 per point
    redemption_ease_score: 2,
    redemption_types: [REDEMPTION_TYPES.VOUCHERS],
    annual_fee: 500, // ₹500
    fee_waiver_criteria: "Spend ₹90k in a year",
    joining_bonus: null,
    lounge: {
      domestic: LOUNGE_ACCESS_TYPES.NONE,
      international: LOUNGE_ACCESS_TYPES.NONE,
      network: [],
      guest_access: false
    },
    supports_upi: true,
    base_exclusions: ["fuel", "wallet_loads", "rent", "government", "education"],
    features: ["Basic entry card", "1% fuel surcharge waiver", "Movie & dining offers"]
  },
  {
    id: "sbi_bpcl",
    name: "SBI Card BPCL",
    bank: "SBI Card",
    card_tier: CARD_TIERS.FUEL,
    reward_type: REWARD_TYPES.FUEL_POINTS,
    base_rate: 0.01, // 1 Reward Point per ₹100
    earning_display: "1 Reward Point per ₹100",
    value_per_unit: 0.40, // ₹0.40 per fuel point (when redeemed at BPCL)
    redemption_ease_score: 1, // Direct fuel redemption
    redemption_types: [REDEMPTION_TYPES.STATEMENT_CREDIT],
    annual_fee: 500, // ₹500
    fee_waiver_criteria: "Spend ₹50k in a year",
    joining_bonus: "₹250 fuel points",
    lounge: {
      domestic: LOUNGE_ACCESS_TYPES.NONE,
      international: LOUNGE_ACCESS_TYPES.NONE,
      network: [],
      guest_access: false
    },
    supports_upi: false,
    base_exclusions: ["wallet_loads", "rent", "government", "education"],
    features: ["25X at BPCL fuel stations", "5X on groceries/dining", "1% surcharge waiver"]
  }
];

export default sbiCardsData;