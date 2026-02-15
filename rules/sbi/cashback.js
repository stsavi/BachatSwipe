import { EXPENSE_CATEGORIES, BENEFIT_TYPES, RULE_TYPES, CAP_PERIODS } from '../../config/bank_platforms.js';

/**
 * SBI Cards - Cashback Rules
 * Direct cashback and accelerated point offers
 * Data validated against: SBI Cards MITC, official product pages
 * Last updated: January 17, 2026
 */

export const sbiCashbackRules = [
  // SBI Cashback Card - All Online Categories (5% Wildcard)
  {
    id: "sbi_cashback_online_all",
    bank: "SBI Card",
    rule_type: RULE_TYPES.CASHBACK,
    category: "*", // Wildcard: matches all categories
    merchants: [],
    platform: null, // No platform constraint - applies to direct transactions
    benefit_type: BENEFIT_TYPES.CASHBACK,
    cashback_rate_map: {
      "sbi_cashback": 0.05
    },
    constraints: {
      transaction_type: "Online transactions only (not offline POS)"
    },
    cap: null, // Unlimited
    cap_period: null,
    min_transaction: 100,
    max_transaction: null,
    valid_from: "2023-01-01",
    valid_until: null,
    priority: 8, // Lower than specific category rules
    notes: "5% unlimited cashback on ALL online categories (shopping, dining, entertainment, etc.) except offline swipes and fuel. MAJOR EXCLUSIONS: wallet loads, rent, fuel, insurance, EMI, cash, railway, government, education, utility bills."
  },

  // SBI Cashback Card - Offline Shopping (1%)
  {
    id: "sbi_cashback_offline_shopping",
    bank: "SBI Card",
    rule_type: RULE_TYPES.CASHBACK,
    category: [EXPENSE_CATEGORIES.SHOPPING, EXPENSE_CATEGORIES.OFFLINE_SHOPPING],
    merchants: [],
    platform: "offline",
    benefit_type: BENEFIT_TYPES.CASHBACK,
    cashback_rate_map: {
      "sbi_cashback": 0.01
    },
    constraints: {},
    cap: null, // Unlimited
    cap_period: null,
    min_transaction: 100,
    max_transaction: null,
    valid_from: "2023-01-01",
    valid_until: null,
    priority: 9,
    notes: "1% cashback on all offline spends (physical POS swipes). Exclusions handled at card level."
  }
];

export default sbiCashbackRules;
