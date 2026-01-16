// rules/hdfc/direct_merchant_accelerated_rewards.js
// HDFC Bank - Direct Merchant Accelerated Reward Points
// Validated as of January 2026

export const HDFC_DIRECT_ACCELERATED_RULES = [
    
    // ============================================================
    // SUPER PREMIUM CARDS - DINING MULTIPLIER
    // ============================================================
    {
        id: "hdfc_infinia_dcb_dining_merchants",
        bank: "HDFC",
        rule_type: "direct_merchant_accelerated",
        
        category: "dining",
        merchants: [],  // All dining merchants
        
        applies_to_cards: ["hdfc_infinia", "hdfc_dcb_metal"],
        reward_multipliers: [2, 2],  // 2x on dining (validated from HDFC MITC)
        
        cap: null,
        cap_period: null,
        min_transaction: null,
        
        valid_from: "2024-01-01",
        valid_until: null,
        
        notes: "2x Reward Points on dining transactions (10 RP per ₹150 instead of 5 RP)",
        priority: 100
    },
    
    // ============================================================
    // PREMIUM CARDS - DEPARTMENT STORES
    // ============================================================
    {
        id: "hdfc_regalia_dcp_department_stores",
        bank: "HDFC",
        rule_type: "direct_merchant_accelerated",
        
        category: "shopping",
        merchants: ["shoppers_stop", "lifestyle", "westside", "pantaloons"],
        
        applies_to_cards: ["hdfc_regalia_gold", "hdfc_dcp"],
        reward_multipliers: [2, 2],  // 2x on department stores
        
        cap: null,
        cap_period: null,
        min_transaction: null,
        
        valid_from: "2024-01-01",
        valid_until: null,
        
        notes: "2x Reward Points on department store purchases (8 RP per ₹150)",
        priority: 100
    },
    
    // ============================================================
    // INDIANOIL - FUEL ACCELERATED POINTS
    // ============================================================
    {
        id: "hdfc_indianoil_fuel_accelerated",
        bank: "HDFC",
        rule_type: "direct_merchant_accelerated",
        
        category: "fuel",
        merchants: ["indianoil"],
        
        applies_to_cards: ["hdfc_indianoil"],
        reward_multipliers: [6],  // 6x on IndianOil fuel (6 FP per ₹150 instead of 1)
        
        cap: null,
        cap_period: null,
        min_transaction: 400,
        
        valid_from: "2024-01-01",
        valid_until: null,
        
        notes: "6x Fuel Points on IndianOil fuel purchases (6 FP per ₹150, min ₹400 transaction)",
        priority: 100
    }
];
