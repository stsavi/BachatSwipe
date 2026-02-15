import { EXPENSE_CATEGORIES, BENEFIT_TYPES, RULE_TYPES, CAP_PERIODS } from '../../config/bank_platforms.js';

/**
 * ICICI Bank - Direct Merchant Accelerated Rewards
 * Reward point multipliers for direct merchant swipes
 * Data validated against: ICICI Bank MITC, official product pages
 * Last updated: January 17, 2026
 */

export const iciciDirectAcceleratedRules = [

  //HPCL Super Saver - 20 reward points per Rs. 100 on departmental stores, mobile bills & electricity bills
  {
    id: "icici_hpcl_super_saver_accelerated",
    bank: "ICICI Bank",
    rule_type: RULE_TYPES.DIRECT_MERCHANT_ACCELERATED,
    category: [EXPENSE_CATEGORIES.GROCERY, EXPENSE_CATEGORIES.UTILITIES],
    merchants: [],
    platform: "direct",
    benefit_type: BENEFIT_TYPES.REWARD_MULTIPLIER,
    reward_multiplier_map: {
      "icici_hpcl_super_saver": 10
    },
    cap: 100,
    cap_period: CAP_PERIODS.MONTHLY,
    min_transaction: 100,
    max_transaction: null,
    valid_from: "2023-01-01",
    valid_until: null,
    priority: 10,
    notes: "20 reward points per Rs. 100 on departmental stores, mobile bills & electricity bills. Capped at ₹100/month."
  }
];

export default iciciDirectAcceleratedRules;
