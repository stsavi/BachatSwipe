import { CARD_TIERS, REWARD_TYPES, REDEMPTION_TYPES, LOUNGE_ACCESS_TYPES } from '../config/bank_platforms.js';

/**
 * Axis Bank Credit Cards Data
 * Data validated against: Axis Bank official product pages, MITC documents, Travel Edge portal
 * Last updated: January 31, 2026
 */

export const axisCardsData = [
  {
    id: "axis_reserve",
    name: "Axis Bank Reserve",
    bank: "Axis Bank",
    card_tier: CARD_TIERS.SUPER_PREMIUM,
    reward_type: REWARD_TYPES.EDGE_MILES,
    base_rate: 0.075, // 15 Edge Points per ₹200 = 0.075 miles per ₹1
    earning_display: "15 Edge Points per ₹200",
    value_per_unit: 0.72, // Optimized for Accor (2.5 Mile = 1 Accor Points @ 5:2 ratio, 1 Accor Point = ₹1.8)
    redemption_ease_score: 2,
    redemption_types: [REDEMPTION_TYPES.TRAVEL_PORTAL, REDEMPTION_TYPES.VOUCHERS, REDEMPTION_TYPES.MILES_TRANSFER],
    annual_fee: 50000, // ₹50k
    fee_waiver_criteria: "Spend ₹35L in a year",
    joining_bonus: "15,000 Edge Reward Points on credit card activation",
    lounge: {
      domestic: LOUNGE_ACCESS_TYPES.UNLIMITED,
      international: LOUNGE_ACCESS_TYPES.UNLIMITED,
      guest_access: true
    },
    network: ["Visa"],
    supports_upi: false,
    base_exclusions: ["fuel", "wallet_loads", "rent", "insurance", "utilities", "government", "education", "emi"],
    features: ["Premium concierge", "Complimentary night stays", "Spa access", "Golf worldwide"]
  },
  {
    id: "axis_magnus",
    name: "Axis Bank Magnus",
    bank: "Axis Bank",
    card_tier: CARD_TIERS.SUPER_PREMIUM,
    reward_type: REWARD_TYPES.EDGE_MILES,
    base_rate: 0.06, // 12 Edge Points per ₹200 = 0.06 miles per ₹1
    earning_display: "12 Edge Points per ₹200",
    value_per_unit: 0.72, // Optimized for Accor (2.5 Mile = 1 Accor Points @ 5:2 ratio, 1 Accor Point = ₹1.8)
    redemption_ease_score: 2, // Portal redemption
    redemption_types: [REDEMPTION_TYPES.TRAVEL_PORTAL, REDEMPTION_TYPES.VOUCHERS, REDEMPTION_TYPES.MILES_TRANSFER],
    annual_fee: 12500, // ₹10k + GST
    fee_waiver_criteria: "Spend ₹25L in a year to get annual fee waived as Edge Miles",
    joining_bonus: "25,000 Edge Miles on ₹1L spend in first 45 days",
    lounge: {
      domestic: LOUNGE_ACCESS_TYPES.UNLIMITED,
      international: LOUNGE_ACCESS_TYPES.UNLIMITED,
      guest_access: true
    },
    network: ["Visa"],
    supports_upi: false,
    base_exclusions: ["fuel", "wallet_loads", "rent", "insurance", "utilities", "government", "education", "emi"],
    features: ["Complimentary Priority Pass", "Golf privileges", "Concierge services", "Milestone benefits"]
  },

  //Need to verify the details after Vistara-Air India merger. Not very clear from Axis website.
  //Removing this for now.
  /*
  {
    id: "axis_vistara_infinite",
    name: "Axis Bank Vistara Infinite",
    bank: "Axis Bank",
    card_tier: CARD_TIERS.TRAVEL,
    reward_type: REWARD_TYPES.CV_POINTS, // CV Points (Club Vistara)
    base_rate: 0.03, // 6 Maharaja Points per ₹200
    earning_display: "6 CV Points per ₹200",
    value_per_unit: 0.2, // ₹0.2 per CV Point (can be redeemed for flights)
    redemption_ease_score: 3, // Miles transfer required
    redemption_types: [REDEMPTION_TYPES.MILES_TRANSFER],
    annual_fee: 10000, // ₹10k + GST
    fee_waiver_criteria: "Spend ₹4L in a year",
    joining_bonus: "Club Vistara Gold Tier on approval",
    lounge: {
      domestic: LOUNGE_ACCESS_TYPES.UNLIMITED,
      international: LOUNGE_ACCESS_TYPES.LIMITED_4,
      guest_access: false
    },
    network: ["Visa"],
    supports_upi: true,
    base_exclusions: ["fuel", "wallet_loads", "rent", "insurance", "utilities", "government", "education"],
    features: ["Vistara Gold tier", "Free Vistara tickets on milestones", "Complimentary Priority Pass"]
  },
  */

  //Atlas has either been discontinued or is not available for new applications.
  //Removing this for now.
  /*
  {
    id: "axis_atlas",
    name: "Axis Bank Atlas",
    bank: "Axis Bank",
    card_tier: CARD_TIERS.TRAVEL,
    reward_type: REWARD_TYPES.EDGE_MILES,
    base_rate: 0.02, // 2 Edge Points per ₹100 = 0.02 miles per ₹1
    earning_display: "2 Edge Points per ₹100",
    value_per_unit: 0.72, // Optimized for Accor (2.5 Mile = 1 Accor Points = ₹1.8)
    redemption_ease_score: 2,
    redemption_types: [REDEMPTION_TYPES.TRAVEL_PORTAL, REDEMPTION_TYPES.VOUCHERS],
    annual_fee: 5000, // ₹5k + GST (₹5,900 total)
    fee_waiver_criteria: "Spend ₹5L in a year",
    joining_bonus: "8,000 Edge Miles on first transaction",
    lounge: {
      domestic: LOUNGE_ACCESS_TYPES.UNLIMITED,
      international: LOUNGE_ACCESS_TYPES.LIMITED_4,
      guest_access: false
    },
    network: ["Visa"],
    supports_upi: true,
    base_exclusions: ["fuel", "wallet_loads", "rent", "insurance", "utilities", "government", "education"],
    features: ["Priority Pass", "1% fuel surcharge waiver", "Airport meet & greet"]
  },
  */

  {
    id: "axis_ace",
    name: "Axis Bank Ace",
    bank: "Axis Bank",
    card_tier: CARD_TIERS.CASHBACK,
    reward_type: REWARD_TYPES.CASHBACK,
    base_rate: 0.015, // 1.5% on other spends
    earning_display: "5% Cashback on bill payments through Google Pay (electricity, water, gas, LPG, broadband, DTH, mobile recharges), 4% on Swiggy/Zomato/Ola spends and 1.5% on other spends",
    value_per_unit: 1.00, // ₹1 per ₹1 cashback
    redemption_ease_score: 1, // Direct cashback
    redemption_types: [REDEMPTION_TYPES.STATEMENT_CREDIT],
    annual_fee: 499, // ₹499 (waived on annual spends)
    fee_waiver_criteria: "Spend ₹2L in a year",
    joining_bonus: "₹500 cashback via Amazon voucher on ₹10k spend in first 45 days",
    lounge: {
      domestic: LOUNGE_ACCESS_TYPES.COMPLIMENTARY,
      international: LOUNGE_ACCESS_TYPES.NONE,
      guest_access: false,
      notes: "Up to 4 complimentary domestic airport lounge access per year on spending minimum Rs. 50,000 during the previous 3 months."
    },
    network: ["Visa"],
    supports_upi: false,
    base_exclusions: ["fuel", "rent", "insurance", "wallet_loads", "emi", "government", "education", "utilities"],
    features: ["5% cashback on bill payments via Google Pay", "4% on Swiggy/Zomato/Ola spends", "1.5% on other spends"]
  },
  {
    id: "axis_airtel",
    name: "Axis Bank Airtel",
    bank: "Axis Bank",
    card_tier: CARD_TIERS.CASHBACK,
    reward_type: REWARD_TYPES.CASHBACK,
    base_rate: 0.01, // 1% base cashback
    earning_display: "25% cashback on Airtel bill payments, 10% cashback on gas, electricity, water, other utility bill payments, Zomato, Swiggy & BigBasket merchants. 1% cashback on other eligible spends",
    value_per_unit: 1.00,
    redemption_ease_score: 1,
    redemption_types: [REDEMPTION_TYPES.STATEMENT_CREDIT],
    annual_fee: 500,
    fee_waiver_criteria: "Spend ₹2L annually",
    joining_bonus: null,
    lounge: {
      domestic: LOUNGE_ACCESS_TYPES.COMPLIMENTARY,
      international: LOUNGE_ACCESS_TYPES.NONE,
      guest_access: false,
      notes: "Up to 4 complimentary domestic airport lounge access per year on spending minimum Rs. 50,000 during the previous 3 months."
    },
    network: ["Visa"],
    supports_upi: false,
    base_exclusions: ["fuel", "wallet_loads", "rent", "insurance", "government", "education"],
    features: ["25% cashback on Airtel bills", "10% cashback on gas, electricity, water, other utility bill payments, Zomato, Swiggy & BigBasket merchants", "1% cashback on other eligible spends"]
  },
  {
    id: "axis_flipkart",
    name: "Axis Bank Flipkart",
    bank: "Axis Bank",
    card_tier: CARD_TIERS.CASHBACK,
    reward_type: REWARD_TYPES.CASHBACK,
    base_rate: 0.01, // 1% base on non-Flipkart spends
    earning_display: "5% on Flipkart/Cleartrip, 7.5% on Myntra, 4% on Preferred Merchants and  1% elsewhere",
    value_per_unit: 1.00,
    redemption_ease_score: 1,
    redemption_types: [REDEMPTION_TYPES.STATEMENT_CREDIT],
    annual_fee: 500, // ₹500
    fee_waiver_criteria: "Spend ₹3.5L in a year",
    joining_bonus: "₹500 cashback via Flipkart voucher",
    lounge: {
      domestic: LOUNGE_ACCESS_TYPES.NONE,
      international: LOUNGE_ACCESS_TYPES.NONE,
      guest_access: false
    },
    network: ["Visa"],
    supports_upi: false,
    base_exclusions: ["fuel", "wallet_loads", "rent", "insurance", "emi", "government", "education", "utilities"],
    features: ["5% unlimited on Flipkart/Cleartrip", "7.5% on Myntra", "4% on Preferred Merchants and  1% elsewhere"]
  },

  //Fuel Cards
  {
    id: "axis_indian_oil",
    name: "Axis Bank IndianOil Credit Card",
    bank: "Axis Bank",
    card_tier: CARD_TIERS.FUEL,
    reward_type: REWARD_TYPES.POINTS,
    base_rate: 0.01, // 1 Edge Point per Rs. 100 spent.
    earning_display: "20 Edge Points per Rs. 100 spent on fuel at IndianOil outlets. 5 Edge Points per Rs. 100 spent on online spends. 1 Edge Point per Rs. 100 spent on other spends.",
    value_per_unit: 0.2,  //Can be converted to amazon pay/other vouchers from the Edge Rewards portal
    redemption_ease_score: 1,
    redemption_types: [REDEMPTION_TYPES.STATEMENT_CREDIT],
    annual_fee: 500,
    fee_waiver_criteria: "Spend ₹3.5L annually",
    joining_bonus: null,
    lounge: {
      domestic: LOUNGE_ACCESS_TYPES.NONE,
      international: LOUNGE_ACCESS_TYPES.NONE,
      guest_access: false,
    },
    network: ["Rupay"],
    supports_upi: false,
    base_exclusions: ["fuel", "wallet_loads", "rent", "insurance", "government", "education"],
    features: ["20 Edge Points per Rs. 100 spent on fuel at IndianOil outlets", "5 Edge Points per Rs. 100 spent on online spends", "1 Edge Point per Rs. 100 spent on other spends", "10% discount on BookyMyShow bookings"]
  }
];

export default axisCardsData;