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
    redemption_types: [REDEMPTION_TYPES.PORTAL],
    annual_fee: 12500, // ₹12,499 + GST
    fee_waiver_criteria: "Spend ₹10L in a year",
    joining_bonus: "12,500 Reward Points on fee payment",
    lounge: {
      domestic: LOUNGE_ACCESS_TYPES.UNLIMITED,
      international: LOUNGE_ACCESS_TYPES.UNLIMITED,
      network: ["Dreamfolks"],
      guest_access: false
    },
    network: ["Visa"],
    supports_upi: false,
    base_exclusions: ["fuel", "wallet_loads", "rent", "government"],
    features: ["Fuel surcharge waiver", "Low forex markup", "Unlimited Golf privileges", "Taj Epicure membership"]
  },
  {
    id: "icici_sapphiro",
    name: "ICICI Bank Sapphiro",
    bank: "ICICI Bank",
    card_tier: CARD_TIERS.SUPER_PREMIUM,
    reward_type: REWARD_TYPES.POINTS,
    base_rate: 0.02, // On International Spends: 4 reward points on every Rs. 100 spent. On Domestic Spends: 2 reward points on every Rs. 100 spent
    earning_display: "2 Reward Points per ₹100",
    value_per_unit: 0.25, // ₹0.25 per point (1 RP = ₹0.25 for statement credit)
    redemption_ease_score: 2, // Portal/voucher redemption
    redemption_types: [REDEMPTION_TYPES.STATEMENT_CREDIT],
    annual_fee: 6500, // ₹6500 + GST
    fee_waiver_criteria: "Spend ₹6L in a year",
    joining_bonus: "Brand vouchers upto ₹5000 received within 45 days",
    lounge: {
      domestic: LOUNGE_ACCESS_TYPES.LIMITED_4,
      international: LOUNGE_ACCESS_TYPES.LIMITED_2,
      network: ["Priority Pass", "Dreamfolks"],
      notes: "2 international + 4 complimentary domestic lounge visits per calendar year on reaching Rs. 75,000 quarterly spends."
    },
    network: ["Visa", "Mastercard", "Rupay", "American Express"],
    supports_upi: true,
    base_exclusions: ["fuel", "wallet_loads", "rent", "insurance", "utilities", "government", "education"],
    features: ["Fuel surcharge waiver", "Golf privileges", "BookMyShow BOGO offer"]
  },
  {
    id: "icici_coral",
    name: "ICICI Bank Coral",
    bank: "ICICI Bank",
    card_tier: CARD_TIERS.PREMIUM,
    reward_type: REWARD_TYPES.POINTS,
    base_rate: 0.02, // 2 Reward Points per ₹100 = 0.02 points per ₹1
    earning_display: "2 Reward Points per ₹100",
    value_per_unit: 0.25, // ₹0.25 per point
    redemption_ease_score: 2,
    redemption_types: [REDEMPTION_TYPES.STATEMENT_CREDIT],
    annual_fee: 500, // ₹500
    fee_waiver_criteria: "Spend ₹1.5L in a year",
    joining_bonus: "Vouchers worth more than Rs. 5,000 from top brands",
    lounge: {
      domestic: LOUNGE_ACCESS_TYPES.LIMITED_2,
      international: LOUNGE_ACCESS_TYPES.NONE,
      network: ["Visa/Mastercard lounges"],
      notes: "2 complimentary lounge visits per calendar year on reaching Rs. 75,000 quarterly spends.",
      guest_access: false
    },
    network: ["Visa", "Mastercard", "Rupay"],
    supports_upi: true,
    base_exclusions: ["fuel", "wallet_loads", "rent", "government", "education"],
    features: ["Movie offers", "Dining benefits", "Retail vouchers"]
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
    network: ["Visa"],
    supports_upi: false,
    base_exclusions: ["fuel", "wallet_loads", "rent", "emi", "government", "education"],
    features: ["5% unlimited on Amazon", "2% on bill payments", "1% everywhere else"]
  },
  {
    id: "icici_hpcl_super_saver",
    name: "HPCL Super Saver",
    bank: "ICICI Bank",
    card_tier: CARD_TIERS.FUEL,
    reward_type: REWARD_TYPES.POINTS,
    base_rate: 0.02, // 2 points per ₹100
    earning_display: "2 points per ₹100",
    value_per_unit: 0.25, // ₹0.25 per point
    redemption_ease_score: 1, // Direct point redemption
    redemption_types: [REDEMPTION_TYPES.STATEMENT_CREDIT],
    annual_fee: 500, // ₹500
    fee_waiver_criteria: "Spend ₹1.5L in a year",
    joining_bonus: "2000 reward points",
    lounge: {
      domestic: LOUNGE_ACCESS_TYPES.NONE,
      international: LOUNGE_ACCESS_TYPES.NONE,
      network: [],
      guest_access: false
    },
    network: ["Visa"],
    supports_upi: false,
    base_exclusions: ["wallet_loads", "rent", "education"],
    features: ["5% cashback on HPCL fuel", "Fuel-focused benefits"]
  }
];

export default iciciCardsData;