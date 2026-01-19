import { CARD_TIERS, REWARD_TYPES, REDEMPTION_TYPES, LOUNGE_ACCESS_TYPES } from '../config/bank_platforms.js';

/**
 * ICICI Bank Credit Cards Data
 * Data validated against: ICICI Bank official product pages, MITC documents, PayWith portal
 * Last updated: January 17, 2026
 */

export const iciciCardsData = [
  {
    id: "icici_emeralde_private_metal",
    name: "ICICI Bank Emeralde Private Metal",
    bank: "ICICI Bank",
    card_tier: CARD_TIERS.SUPER_PREMIUM,
    reward_type: REWARD_TYPES.POINTS,
    base_rate: 0.03, // 6 points per ₹200
    earning_display: "6 points per ₹200",
    value_per_unit: 1.00, // 1 Reward Point = 1 Re
    redemption_ease_score: 2,
    redemption_types: [REDEMPTION_TYPES.STATEMENT_CREDIT, REDEMPTION_TYPES.VOUCHERS, REDEMPTION_TYPES.TRAVEL_PORTAL],
    annual_fee: 12500, // ₹12,499 + GST
    fee_waiver_criteria: "Spend ₹10L in a year",
    joining_bonus: "12,500 Reward Points on fee payment",
    lounge: {
      domestic: LOUNGE_ACCESS_TYPES.UNLIMITED,
      international: LOUNGE_ACCESS_TYPES.UNLIMITED,
      network: ["Priority Pass", "Dreamfolks"],
      guest_access: true
    },
    supports_upi: false,
    base_exclusions: ["fuel", "wallet_loads", "rent", "insurance", "utilities", "government", "education"],
    features: ["Unlimited lounge access", "Low forex markup", "Golf privileges", "Taj Epicure membership"]
  },
  {
    id: "icici_emeralde",
    name: "ICICI Bank Emeralde",
    bank: "ICICI Bank",
    card_tier: CARD_TIERS.SUPER_PREMIUM,
    reward_type: REWARD_TYPES.POINTS,
    base_rate: 0.01, // 1% general reward rate
    earning_display: "1% on all spends",
    value_per_unit: 1.00, // 1 Reward Point = 1 Re
    redemption_ease_score: 2,
    redemption_types: [REDEMPTION_TYPES.STATEMENT_CREDIT, REDEMPTION_TYPES.VOUCHERS, REDEMPTION_TYPES.TRAVEL_PORTAL],
    annual_fee: 12000,
    fee_waiver_criteria: "Spend ₹15L in a year",
    joining_bonus: null,
    lounge: {
      domestic: LOUNGE_ACCESS_TYPES.UNLIMITED,
      international: LOUNGE_ACCESS_TYPES.UNLIMITED,
      network: ["Priority Pass", "Dreamfolks"],
      guest_access: true
    },
    supports_upi: false,
    base_exclusions: ["fuel", "wallet_loads", "rent", "insurance", "utilities", "government", "education"],
    features: ["Unlimited lounge access", "Golf privileges", "Concierge"]
  },
  {
    id: "icici_sapphiro",
    name: "ICICI Bank Sapphiro",
    bank: "ICICI Bank",
    card_tier: CARD_TIERS.SUPER_PREMIUM,
    reward_type: REWARD_TYPES.POINTS,
    base_rate: 0.03, // 6 Reward Points per ₹200 = 0.03 points per ₹1
    earning_display: "6 Reward Points per ₹200",
    value_per_unit: 0.25, // ₹0.25 per point (1 RP = ₹0.25 for statement credit)
    redemption_ease_score: 2, // Portal/voucher redemption
    redemption_types: [REDEMPTION_TYPES.STATEMENT_CREDIT, REDEMPTION_TYPES.VOUCHERS, REDEMPTION_TYPES.TRAVEL_PORTAL],
    annual_fee: 12500, // ₹10k + GST
    fee_waiver_criteria: "Spend ₹10L in a year",
    joining_bonus: "15,000 Reward Points on ₹1L spend in first 90 days",
    lounge: {
      domestic: LOUNGE_ACCESS_TYPES.UNLIMITED,
      international: LOUNGE_ACCESS_TYPES.UNLIMITED,
      network: ["Priority Pass", "Dreamfolks"],
      guest_access: true
    },
    supports_upi: false,
    base_exclusions: ["fuel", "wallet_loads", "rent", "insurance", "utilities", "government", "education"],
    features: ["Complimentary Priority Pass", "Golf privileges", "Concierge services", "Airport transfers"]
  },
  {
    id: "icici_coral",
    name: "ICICI Bank Coral",
    bank: "ICICI Bank",
    card_tier: CARD_TIERS.PREMIUM,
    reward_type: REWARD_TYPES.POINTS,
    base_rate: 0.02, // 4 Reward Points per ₹200 = 0.02 points per ₹1
    earning_display: "4 Reward Points per ₹200",
    value_per_unit: 0.25, // ₹0.25 per point
    redemption_ease_score: 2,
    redemption_types: [REDEMPTION_TYPES.STATEMENT_CREDIT, REDEMPTION_TYPES.VOUCHERS],
    annual_fee: 1000, // ₹1000
    fee_waiver_criteria: "Spend ₹3L in a year",
    joining_bonus: "2,000 Reward Points on first transaction",
    lounge: {
      domestic: LOUNGE_ACCESS_TYPES.LIMITED_4,
      international: LOUNGE_ACCESS_TYPES.LIMITED_2,
      network: ["Visa/Mastercard lounges"],
      guest_access: false
    },
    supports_upi: true,
    base_exclusions: ["fuel", "wallet_loads", "rent", "insurance", "government", "education"],
    features: ["Movie offers", "Dining benefits", "Retail vouchers"]
  },
  {
    id: "icici_rubyx",
    name: "ICICI Bank Rubyx",
    bank: "ICICI Bank",
    card_tier: CARD_TIERS.PREMIUM,
    reward_type: REWARD_TYPES.POINTS,
    base_rate: 0.02, // 4 Reward Points per ₹200 = 0.02 points per ₹1
    earning_display: "4 Reward Points per ₹200",
    value_per_unit: 0.25, // ₹0.25 per point
    redemption_ease_score: 2,
    redemption_types: [REDEMPTION_TYPES.STATEMENT_CREDIT, REDEMPTION_TYPES.VOUCHERS],
    annual_fee: 3000, // ₹3000
    fee_waiver_criteria: "Spend ₹4L in a year",
    joining_bonus: "4,000 Reward Points on ₹50k spend in first 60 days",
    lounge: {
      domestic: LOUNGE_ACCESS_TYPES.LIMITED_8,
      international: LOUNGE_ACCESS_TYPES.LIMITED_4,
      network: ["Visa/Mastercard lounges"],
      guest_access: false
    },
    supports_upi: true,
    base_exclusions: ["fuel", "wallet_loads", "rent", "insurance", "government", "education"],
    features: ["8 lounge visits/year", "Movie offers", "Golf access"]
  },
  {
    id: "icici_amazon_pay",
    name: "ICICI Amazon Pay",
    bank: "ICICI Bank",
    card_tier: CARD_TIERS.CASHBACK,
    reward_type: REWARD_TYPES.CASHBACK,
    base_rate: 0.01, // 1% base on all other spends
    earning_display: "1% on all other spends",
    value_per_unit: 1.00, // ₹1 per ₹1 cashback
    redemption_ease_score: 1, // Direct cashback
    redemption_types: [REDEMPTION_TYPES.STATEMENT_CREDIT],
    annual_fee: 500, // ₹500 (often LTF)
    fee_waiver_criteria: "Free for Prime members or ₹50k annual spend",
    joining_bonus: "₹500 Amazon voucher",
    lounge: {
      domestic: LOUNGE_ACCESS_TYPES.NONE,
      international: LOUNGE_ACCESS_TYPES.NONE,
      network: [],
      guest_access: false
    },
    supports_upi: true,
    base_exclusions: ["fuel", "wallet_loads", "rent", "emi", "government", "education"],
    features: ["5% unlimited on Amazon", "2% on bill payments", "1% everywhere else"]
  },
  {
    id: "icici_platinum",
    name: "ICICI Bank Platinum",
    bank: "ICICI Bank",
    card_tier: CARD_TIERS.ENTRY,
    reward_type: REWARD_TYPES.POINTS,
    base_rate: 0.01, // 2 Reward Points per ₹200 = 0.01 points per ₹1
    earning_display: "2 Reward Points per ₹200",
    value_per_unit: 0.25, // ₹0.25 per point
    redemption_ease_score: 2,
    redemption_types: [REDEMPTION_TYPES.VOUCHERS],
    annual_fee: 500, // ₹500
    fee_waiver_criteria: "Spend ₹1L in a year",
    joining_bonus: null,
    lounge: {
      domestic: LOUNGE_ACCESS_TYPES.NONE,
      international: LOUNGE_ACCESS_TYPES.NONE,
      network: [],
      guest_access: false
    },
    supports_upi: true,
    base_exclusions: ["fuel", "wallet_loads", "rent", "government", "education"],
    features: ["Basic entry card", "Retail offers", "EMI options"]
  },
  {
    id: "icici_hpcl",
    name: "ICICI HPCL",
    bank: "ICICI Bank",
    card_tier: CARD_TIERS.FUEL,
    reward_type: REWARD_TYPES.FUEL_POINTS,
    base_rate: 0.0025, // 0.5 fuel points per ₹200 = 0.0025 per ₹1
    earning_display: "0.5 Fuel Points per ₹200",
    value_per_unit: 1.00, // ₹1 per fuel point
    redemption_ease_score: 1, // Direct fuel redemption
    redemption_types: [REDEMPTION_TYPES.STATEMENT_CREDIT],
    annual_fee: 500, // ₹500
    fee_waiver_criteria: "Spend ₹50k in a year",
    joining_bonus: "₹500 fuel points",
    lounge: {
      domestic: LOUNGE_ACCESS_TYPES.NONE,
      international: LOUNGE_ACCESS_TYPES.NONE,
      network: [],
      guest_access: false
    },
    supports_upi: false,
    base_exclusions: ["wallet_loads", "rent", "government", "education"],
    features: ["5% cashback on HPCL fuel", "1% surcharge waiver", "Fuel-focused benefits"]
  }
];

export default iciciCardsData;