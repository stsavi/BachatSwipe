// rules/hdfc/portal.js
// HDFC Bank - SmartBuy Portal Rules (Flights & Hotels ONLY)
// Validated as of January 2026 from https://offers.smartbuy.hdfcbank.com/

export const HDFC_PORTAL_RULES = [
    
    // ============================================================
    // SMARTBUY HOTELS - 10X REWARD MULTIPLIER
    // ============================================================
    {
        id: "hdfc_smartbuy_hotels_10x",
        bank: "HDFC",
        rule_type: "portal",
        
        platform: "SmartBuy",
        category: "hotels",
        merchants: [],  // All hotels via SmartBuy
        
        applies_to_cards: ["hdfc_infinia", "hdfc_dcb_metal", "hdfc_regalia_gold", "hdfc_dcp"],
        
        benefit_type: "reward_multiplier",
        reward_multipliers: [10, 10, 10, 10],  // 10x RP for all these cards
        cashback_rates: null,
        
        cap: null,
        cap_period: null,
        min_transaction: null,
        
        valid_from: "2024-01-01",
        valid_until: null,
        
        notes: "10x Reward Points on hotel bookings via SmartBuy. Infinia/DCB get 50 RP per ₹150, Regalia/DCP get 40 RP per ₹150.",
        priority: 150
    },
    
    // ============================================================
    // SMARTBUY FLIGHTS - 5X REWARD MULTIPLIER
    // ============================================================
    {
        id: "hdfc_smartbuy_flights_5x",
        bank: "HDFC",
        rule_type: "portal",
        
        platform: "SmartBuy",
        category: "flights",
        merchants: [],
        
        applies_to_cards: ["hdfc_infinia", "hdfc_dcb_metal", "hdfc_regalia_gold", "hdfc_dcp"],
        
        benefit_type: "reward_multiplier",
        reward_multipliers: [5, 5, 5, 5],  // 5x RP for all these cards
        cashback_rates: null,
        
        cap: null,
        cap_period: null,
        min_transaction: null,
        
        valid_from: "2024-01-01",
        valid_until: null,
        
        notes: "5x Reward Points on flight bookings via SmartBuy. Infinia/DCB get 25 RP per ₹150, Regalia/DCP get 20 RP per ₹150.",
        priority: 150
    },
    
    // ============================================================
    // MILLENNIA - SMARTBUY HOTELS 5% CASHBACK
    // ============================================================
    {
        id: "hdfc_smartbuy_hotels_millennia_5pct",
        bank: "HDFC",
        rule_type: "portal",
        
        platform: "SmartBuy",
        category: "hotels",
        merchants: [],
        
        applies_to_cards: ["hdfc_millennia"],
        
        benefit_type: "cashback",
        reward_multipliers: null,
        cashback_rates: [0.05],  // 5% cashback
        
        cap: 1000,
        cap_period: "monthly",
        min_transaction: null,
        
        valid_from: "2024-01-01",
        valid_until: null,
        
        notes: "5% cashback on hotel bookings via SmartBuy (₹1000 cap/month)",
        priority: 150
    },
    
    // ============================================================
    // MILLENNIA - SMARTBUY FLIGHTS 5% CASHBACK
    // ============================================================
    {
        id: "hdfc_smartbuy_flights_millennia_5pct",
        bank: "HDFC",
        rule_type: "portal",
        
        platform: "SmartBuy",
        category: "flights",
        merchants: [],
        
        applies_to_cards: ["hdfc_millennia"],
        
        benefit_type: "cashback",
        reward_multipliers: null,
        cashback_rates: [0.05],  // 5% cashback
        
        cap: 1000,
        cap_period: "monthly",
        min_transaction: null,
        
        valid_from: "2024-01-01",
        valid_until: null,
        
        notes: "5% cashback on flight bookings via SmartBuy (₹1000 cap/month)",
        priority: 150
    }
];
