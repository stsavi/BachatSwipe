import { EXPENSE_CATEGORIES, BENEFIT_TYPES, RULE_TYPES, CAP_PERIODS } from '../../config/bank_platforms.js';

/**
 * SBI Cards - Direct Merchant Accelerated Rewards
 * Reward point multipliers for direct merchant swipes
 * Data validated against: SBI Cards MITC, official product pages
 * Last updated: January 17, 2026
 */

export const sbiDirectAcceleratedRules = [
  /*
  // Vistara Prime - Vistara Spends (10X CV Points)
  {
    id: "sbi_vistara_prime_vistara_spends",
    bank: "SBI Card",
    rule_type: RULE_TYPES.DIRECT_MERCHANT_ACCELERATED,
    category: EXPENSE_CATEGORIES.TRAVEL,
    merchants: ["vistara"],
    platform: "direct",
    benefit_type: BENEFIT_TYPES.REWARD_MULTIPLIER,
    reward_multiplier_map: {
      "sbi_vistara_prime": 10
    },
    constraints: {
      merchant: "Vistara Airlines only"
    },
    cap: null,
    cap_period: null,
    min_transaction: 100,
    max_transaction: null,
    valid_from: "2023-01-01",
    valid_until: null,
    priority: 10,
    notes: "10X CV Points on Vistara flight bookings (direct or via website). Base 3 per ₹100 becomes 30 per ₹100."
  },
  */

  // SBI Card PRIME - Dining, Groceries and Movies Spends (5X Reward Points)
  {
    id: "sbi_prime_dining_groceries_movies_spends",
    bank: "SBI Card",
    rule_type: RULE_TYPES.DIRECT_MERCHANT_ACCELERATED,
    category: [EXPENSE_CATEGORIES.DINING, EXPENSE_CATEGORIES.GROCERY, EXPENSE_CATEGORIES.ENTERTAINMENT],
    merchants: [],
    platform: "direct",
    benefit_type: BENEFIT_TYPES.REWARD_MULTIPLIER,
    reward_multiplier_map: {
      "sbi_prime": 5
    },
    constraints: {
    },
    cap: null,
    cap_period: null,
    min_transaction: 100,
    max_transaction: null,
    valid_from: "2023-01-01",
    valid_until: null,
    priority: 10,
    notes: "10 Reward Points per Rs. 100 on dining, groceries and movies spends. Base 2 Reward Points per Rs. 100 becomes 10 per Rs. 100."
  },

  //SBI PhonePe Select Black Card - PhonePe Spends (10X Reward Points on Recharges, Utilities, Bill Payments, Insurance and Travel thorugh PhonePe)
  {
    id: "sbi_phonepe_select_black_phonepe_spends",
    bank: "SBI Card",
    rule_type: RULE_TYPES.DIRECT_MERCHANT_ACCELERATED,
    category: [EXPENSE_CATEGORIES.UTILITIES],
    merchants: ["phonepe"],
    platform: "direct",
    benefit_type: BENEFIT_TYPES.REWARD_MULTIPLIER,
    reward_multiplier_map: {
      "sbi_phonepe_select_black": 10
    },
    constraints: {
    },
    cap: null,
    cap_period: null,
    min_transaction: 100,
    max_transaction: null,
    valid_from: "2023-01-01",
    valid_until: null,
    priority: 10,
    notes: "10 Reward Points per Rs. 100 on Recharges, Utilities, Bill Payments, Insurance and Travel through PhonePe. Base 1 per Rs. 100 becomes 10 per Rs. 100."
  },

  //SBI PhonePe Select Black Card - Online Spends (5X Reward Points)
  {
    id: "sbi_phonepe_select_black_online_spends",
    bank: "SBI Card",
    rule_type: RULE_TYPES.DIRECT_MERCHANT_ACCELERATED,
    category: [EXPENSE_CATEGORIES.ONLINE_SHOPPING],
    merchants: [],
    platform: "direct",
    benefit_type: BENEFIT_TYPES.REWARD_MULTIPLIER,
    reward_multiplier_map: {
      "sbi_phonepe_select_black": 5
    },
    constraints: {
    },
    cap: null,
    cap_period: null,
    min_transaction: 100,
    max_transaction: null,
    valid_from: "2023-01-01",
    valid_until: null,
    priority: 10,
    notes: "5 Reward Points per Rs. 100 on online spends. Base 1 per Rs. 100 becomes 5 per Rs. 100."
  },

  // SBI Card BPCL -Dining, Groceries and Movies Spends (5X Reward Points)
  {
    id: "sbi_bpcl_dining_groceries_movies_spends",
    bank: "SBI Card",
    rule_type: RULE_TYPES.DIRECT_MERCHANT_ACCELERATED,
    category: [EXPENSE_CATEGORIES.DINING, EXPENSE_CATEGORIES.GROCERY, EXPENSE_CATEGORIES.ENTERTAINMENT],
    merchants: [],
    platform: "direct",
    benefit_type: BENEFIT_TYPES.REWARD_MULTIPLIER,
    reward_multiplier_map: {
      "sbi_bpcl": 5
    },
    constraints: {
    },
    cap: 1300, // 1300 points per month max (from search results)
    cap_period: CAP_PERIODS.MONTHLY,
    min_transaction: 100,
    max_transaction: null,
    valid_from: "2023-01-01",
    valid_until: null,
    priority: 10,
    notes: "5X Reward Points on spends on dining, groceries and movies."
  },

  // SBI Card BPCL -Fuel Spends (13X Reward Points)
  {
    id: "sbi_bpcl_fuel_spends",
    bank: "SBI Card",
    rule_type: RULE_TYPES.DIRECT_MERCHANT_ACCELERATED,
    category: [EXPENSE_CATEGORIES.FUEL],
    merchants: [], //BPCL petrol pumps only
    platform: "direct",
    benefit_type: BENEFIT_TYPES.REWARD_MULTIPLIER,
    reward_multiplier_map: {
      "sbi_bpcl": 13
    },
    constraints: {
    },
    cap: 1300, // 1300 points per month max (from search results)
    cap_period: CAP_PERIODS.MONTHLY,
    min_transaction: 100,
    max_transaction: null,
    valid_from: "2023-01-01",
    valid_until: null,
    priority: 10,
    notes: "13X Reward Points on spends on fuel."
  },

  //SBI SimplyCLICK - Dining, Groceries and Movies Spends (10X Reward Points)
  {
    id: "sbi_simplyclick_dining_groceries_movies_spends",
    bank: "SBI Card",
    rule_type: RULE_TYPES.DIRECT_MERCHANT_ACCELERATED,
    category: [EXPENSE_CATEGORIES.DINING, EXPENSE_CATEGORIES.GROCERY, EXPENSE_CATEGORIES.ENTERTAINMENT],
    merchants: ["apollo 24x7", "bookmyshow", "cleartrip", "dominos", "igp", "myntra", "netmeds", "yatra"],
    platform: "direct",
    benefit_type: BENEFIT_TYPES.REWARD_MULTIPLIER,
    reward_multiplier_map: {
      "sbi_simplyclick": 10
    },
    constraints: {
    },
    cap: null,
    cap_period: null,
    min_transaction: 100,
    max_transaction: null,
    valid_from: "2023-01-01",
    valid_until: null,
    priority: 10,
    notes: "10X Reward Points on spends on dining, groceries and movies."
  },

  //SBI SimplyCLICK - Online Spends (5X Reward Points)
  {
    id: "sbi_simplyclick_online_spends",
    bank: "SBI Card",
    rule_type: RULE_TYPES.DIRECT_MERCHANT_ACCELERATED,
    category: [EXPENSE_CATEGORIES.ONLINE_SHOPPING],
    merchants: [],
    platform: "direct",
    benefit_type: BENEFIT_TYPES.REWARD_MULTIPLIER,
    reward_multiplier_map: {
      "sbi_simplyclick": 5
    },
    constraints: {
    },
    cap: null,
    cap_period: null,
    min_transaction: 100,
    max_transaction: null,
    valid_from: "2023-01-01",
    valid_until: null,
    priority: 10,
    notes: "5X Reward Points on spends on online shopping."
  }
];

export default sbiDirectAcceleratedRules;
