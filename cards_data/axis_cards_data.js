import { CARD_TIERS, REWARD_TYPES, REDEMPTION_TYPES, LOUNGE_ACCESS_TYPES } from '../config/bank_platforms.js';

/**
 * Axis Bank Credit Cards Data
 * Data validated against: Axis Bank official product pages, MITC documents, Travel Edge portal
 * Last updated: January 17, 2026
 */

export const axisCardsData = [
  {
    id: "axis_magnus",
    name: "Axis Bank Magnus",
    bank: "Axis Bank",
    card_tier: CARD_TIERS.SUPER_PREMIUM,
    reward_type: REWARD_TYPES.EDGE_MILES,
    base_rate: 0.06, // 12 Edge Miles per ₹200 = 0.06 miles per ₹1
    earning_display: "12 Edge Miles per ₹200",
    value_per_unit: 1.00, // ₹1 per Edge Mile
    redemption_ease_score: 2, // Portal redemption
    redemption_types: [REDEMPTION_TYPES.TRAVEL_PORTAL, REDEMPTION_TYPES.VOUCHERS, REDEMPTION_TYPES.MILES_TRANSFER],
    annual_fee: 12500, // ₹10k + GST
    fee_waiver_criteria: "Spend ₹25L in a year to get annual fee waived as Edge Miles",
    joining_bonus: "25,000 Edge Miles on ₹1L spend in first 45 days",
    lounge: {
      domestic: LOUNGE_ACCESS_TYPES.UNLIMITED,
      international: LOUNGE_ACCESS_TYPES.UNLIMITED,
      network: ["Priority Pass", "Dreamfolks"],
      guest_access: true
    },
    supports_upi: true,
    base_exclusions: ["fuel", "wallet_loads", "rent", "insurance", "utilities", "government"],
    features: ["Complimentary Priority Pass", "Golf privileges", "Concierge services", "Milestone benefits"]
  },
  {
    id: "axis_reserve",
    name: "Axis Bank Reserve",
    bank: "Axis Bank",
    card_tier: CARD_TIERS.SUPER_PREMIUM,
    reward_type: REWARD_TYPES.EDGE_MILES,
    base_rate: 0.075, // 15 Edge Miles per ₹200 = 0.075 miles per ₹1
    earning_display: "15 Edge Miles per ₹200",
    value_per_unit: 1.00, // ₹1 per Edge Mile
    redemption_ease_score: 2,
    redemption_types: [REDEMPTION_TYPES.TRAVEL_PORTAL, REDEMPTION_TYPES.VOUCHERS, REDEMPTION_TYPES.MILES_TRANSFER],
    annual_fee: 50000, // ₹50k (non-waivable)
    fee_waiver_criteria: null,
    joining_bonus: "1,00,000 Edge Miles on card issuance",
    lounge: {
      domestic: LOUNGE_ACCESS_TYPES.UNLIMITED,
      international: LOUNGE_ACCESS_TYPES.UNLIMITED,
      network: ["Priority Pass", "Dreamfolks", "LoungeKey"],
      guest_access: true
    },
    supports_upi: true,
    base_exclusions: ["fuel", "wallet_loads", "rent", "insurance", "utilities", "government"],
    features: ["Premium concierge", "Complimentary night stays", "Spa access", "Golf worldwide"]
  },
  {
    id: "axis_vistara_infinite",
    name: "Axis Bank Vistara Infinite",
    bank: "Axis Bank",
    card_tier: CARD_TIERS.TRAVEL,
    reward_type: REWARD_TYPES.POINTS, // CV Points (Club Vistara)
    base_rate: 0.04, // 4 CV Points per ₹200 = 0.02 points per ₹1, but 1 CV Point ≈ ₹2, so 0.04
    earning_display: "4 CV Points per ₹200",
    value_per_unit: 2.00, // ₹2 per CV Point (when transferred to Vistara)
    redemption_ease_score: 3, // Miles transfer required
    redemption_types: [REDEMPTION_TYPES.MILES_TRANSFER],
    annual_fee: 10000, // ₹10k + GST
    fee_waiver_criteria: "Spend ₹4L in a year",
    joining_bonus: "Club Vistara Gold Tier on approval",
    lounge: {
      domestic: LOUNGE_ACCESS_TYPES.UNLIMITED,
      international: LOUNGE_ACCESS_TYPES.LIMITED_4,
      network: ["Priority Pass", "Club Vistara Lounges"],
      guest_access: false
    },
    supports_upi: true,
    base_exclusions: ["fuel", "wallet_loads", "rent", "insurance", "utilities"],
    features: ["Vistara Gold tier", "Free Vistara tickets on milestones", "Complimentary Priority Pass"]
  },
  {
    id: "axis_atlas",
    name: "Axis Bank Atlas",
    bank: "Axis Bank",
    card_tier: CARD_TIERS.TRAVEL,
    reward_type: REWARD_TYPES.EDGE_MILES,
    base_rate: 0.02, // 2 Edge Miles per ₹100 = 0.02 miles per ₹1
    earning_display: "2 Edge Miles per ₹100",
    value_per_unit: 1.00, // ₹1 per Edge Mile
    redemption_ease_score: 2,
    redemption_types: [REDEMPTION_TYPES.TRAVEL_PORTAL, REDEMPTION_TYPES.VOUCHERS],
    annual_fee: 5000, // ₹5k + GST (₹5,900 total)
    fee_waiver_criteria: "Spend ₹5L in a year",
    joining_bonus: "8,000 Edge Miles on first transaction",
    lounge: {
      domestic: LOUNGE_ACCESS_TYPES.UNLIMITED,
      international: LOUNGE_ACCESS_TYPES.LIMITED_4,
      network: ["Priority Pass"],
      guest_access: false
    },
    supports_upi: true,
    base_exclusions: ["fuel", "wallet_loads", "rent", "insurance", "utilities"],
    features: ["Priority Pass", "1% fuel surcharge waiver", "Airport meet & greet"]
  },
  {
    id: "axis_ace",
    name: "Axis Bank Ace",
    bank: "Axis Bank",
    card_tier: CARD_TIERS.CASHBACK,
    reward_type: REWARD_TYPES.CASHBACK,
    base_rate: 0.01, // 1% on other spends (excluding base_exclusions)
    earning_display: "2% on bill payments, 5% on select categories",
    value_per_unit: 1.00, // ₹1 per ₹1 cashback
    redemption_ease_score: 1, // Direct cashback
    redemption_types: [REDEMPTION_TYPES.STATEMENT_CREDIT],
    annual_fee: 499, // ₹499 (waived on annual spends)
    fee_waiver_criteria: "Spend ₹2L in a year",
    joining_bonus: "₹500 cashback via Amazon voucher on ₹10k spend in first 45 days",
    lounge: {
      domestic: LOUNGE_ACCESS_TYPES.NONE,
      international: LOUNGE_ACCESS_TYPES.NONE,
      network: [],
      guest_access: false
    },
    supports_upi: true,
    base_exclusions: ["fuel", "rent", "insurance", "wallet_loads", "emi"],
    features: ["5% cashback on bill payments via Google Pay, PhonePe", "2% on utilities", "No upper cap"]
  },
  {
    id: "axis_airtel",
    name: "Axis Bank Airtel",
    bank: "Axis Bank",
    card_tier: CARD_TIERS.CASHBACK,
    reward_type: REWARD_TYPES.CASHBACK,
    base_rate: 0.01, // 1% base cashback
    earning_display: "10% on Airtel, 25% on Airtel Black, 1% elsewhere",
    value_per_unit: 1.00,
    redemption_ease_score: 1,
    redemption_types: [REDEMPTION_TYPES.STATEMENT_CREDIT],
    annual_fee: 500, // ₹500 (waived if Airtel Black customer)
    fee_waiver_criteria: "Free for Airtel Black customers, or spend ₹2L annually",
    joining_bonus: null,
    lounge: {
      domestic: LOUNGE_ACCESS_TYPES.NONE,
      international: LOUNGE_ACCESS_TYPES.NONE,
      network: [],
      guest_access: false
    },
    supports_upi: true,
    base_exclusions: ["fuel", "wallet_loads", "rent", "insurance"],
    features: ["10% cashback on Airtel bills", "25% cashback for Airtel Black", "4% on utilities"]
  },
  {
    id: "axis_flipkart",
    name: "Axis Bank Flipkart",
    bank: "Axis Bank",
    card_tier: CARD_TIERS.CASHBACK,
    reward_type: REWARD_TYPES.CASHBACK,
    base_rate: 0.015, // 1.5% base on non-Flipkart spends
    earning_display: "4% on Flipkart/Myntra, 1.5% elsewhere",
    value_per_unit: 1.00,
    redemption_ease_score: 1,
    redemption_types: [REDEMPTION_TYPES.STATEMENT_CREDIT],
    annual_fee: 500, // ₹500
    fee_waiver_criteria: "Spend ₹3L in a year",
    joining_bonus: "₹500 cashback via Flipkart voucher",
    lounge: {
      domestic: LOUNGE_ACCESS_TYPES.NONE,
      international: LOUNGE_ACCESS_TYPES.NONE,
      network: [],
      guest_access: false
    },
    supports_upi: true,
    base_exclusions: ["fuel", "wallet_loads", "rent", "insurance", "emi"],
    features: ["4% unlimited on Flipkart/Myntra", "1.5% everywhere else", "No upper limit"]
  },
  {
    id: "axis_neo",
    name: "Axis Bank Neo",
    bank: "Axis Bank",
    card_tier: CARD_TIERS.ENTRY,
    reward_type: REWARD_TYPES.CASHBACK,
    base_rate: 0.01, // 1% base (as Edge Rewards that can be redeemed)
    earning_display: "1% Edge Rewards on all spends",
    value_per_unit: 1.00,
    redemption_ease_score: 1,
    redemption_types: [REDEMPTION_TYPES.STATEMENT_CREDIT, REDEMPTION_TYPES.VOUCHERS],
    annual_fee: 250, // ₹250
    fee_waiver_criteria: "Spend ₹50k in a year",
    joining_bonus: null,
    lounge: {
      domestic: LOUNGE_ACCESS_TYPES.NONE,
      international: LOUNGE_ACCESS_TYPES.NONE,
      network: [],
      guest_access: false
    },
    supports_upi: true,
    base_exclusions: ["fuel", "wallet_loads", "rent", "insurance"],
    features: ["1% Edge Rewards", "Low annual fee", "Entry-level card"]
  }
];

export default axisCardsData;