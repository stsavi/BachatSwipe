// rules/hdfc/vouchers.js
// HDFC Bank - SmartBuy Voucher Purchase Rules
// Validated as of January 2026 from SmartBuy (GyFTR) platform
// Allowed merchants: amazon, flipkart, swiggy, zomato, tata_neu, bigbasket

export const HDFC_VOUCHER_RULES = [
    
    // ============================================================
    // SUPER PREMIUM - AMAZON/FLIPKART VOUCHERS 3X
    // ============================================================
    {
        id: "hdfc_smartbuy_amazon_flipkart_voucher_infinia_dcb_3x",
        bank: "HDFC",
        rule_type: "voucher",
        
        platform: "SmartBuy (GyFTR)",
        category: "voucher",
        merchants: ["amazon", "flipkart"],
        
        applies_to_cards: ["hdfc_infinia", "hdfc_dcb_metal"],
        
        benefit_type: "reward_multiplier",
        reward_multipliers: [3, 3],  // 3x RP
        cashback_rates: null,
        instant_discount_rates: null,
        
        cap: 10000,
        cap_period: "monthly",
        min_transaction: 1000,
        max_transaction: 10000,
        
        valid_from: "2024-01-01",
        valid_until: null,
        
        notes: "3x Reward Points when buying Amazon/Flipkart vouchers via SmartBuy (15 RP per ₹150, ₹10k cap/month)",
        priority: 150,
        
        voucher_denominations: [100, 500, 1000, 2000, 5000, 10000],
        discount_on_voucher: 0
    },
    
    // ============================================================
    // SUPER PREMIUM - SWIGGY/ZOMATO VOUCHERS 3X
    // ============================================================
    {
        id: "hdfc_smartbuy_swiggy_zomato_voucher_infinia_dcb_3x",
        bank: "HDFC",
        rule_type: "voucher",
        
        platform: "SmartBuy (GyFTR)",
        category: "voucher",
        merchants: ["swiggy", "zomato"],
        
        applies_to_cards: ["hdfc_infinia", "hdfc_dcb_metal"],
        
        benefit_type: "reward_multiplier",
        reward_multipliers: [3, 3],
        cashback_rates: null,
        instant_discount_rates: null,
        
        cap: 10000,
        cap_period: "monthly",
        min_transaction: 500,
        max_transaction: 10000,
        
        valid_from: "2024-01-01",
        valid_until: null,
        
        notes: "3x Reward Points when buying Swiggy/Zomato vouchers via SmartBuy",
        priority: 150,
        
        voucher_denominations: [100, 250, 500, 1000, 2000, 5000],
        discount_on_voucher: 0
    },
    
    // ============================================================
    // SUPER PREMIUM - BIGBASKET VOUCHERS 3X
    // ============================================================
    {
        id: "hdfc_smartbuy_bigbasket_voucher_infinia_dcb_3x",
        bank: "HDFC",
        rule_type: "voucher",
        
        platform: "SmartBuy (GyFTR)",
        category: "voucher",
        merchants: ["bigbasket"],
        
        applies_to_cards: ["hdfc_infinia", "hdfc_dcb_metal"],
        
        benefit_type: "reward_multiplier",
        reward_multipliers: [3, 3],
        cashback_rates: null,
        instant_discount_rates: null,
        
        cap: 10000,
        cap_period: "monthly",
        min_transaction: 500,
        max_transaction: 5000,
        
        valid_from: "2024-01-01",
        valid_until: null,
        
        notes: "3x Reward Points when buying BigBasket vouchers via SmartBuy",
        priority: 150,
        
        voucher_denominations: [100, 250, 500, 1000, 2000, 5000],
        discount_on_voucher: 0
    },
    
    // ============================================================
    // PREMIUM - AMAZON/FLIPKART VOUCHERS 2X
    // ============================================================
    {
        id: "hdfc_smartbuy_amazon_flipkart_voucher_regalia_dcp_2x",
        bank: "HDFC",
        rule_type: "voucher",
        
        platform: "SmartBuy (GyFTR)",
        category: "voucher",
        merchants: ["amazon", "flipkart"],
        
        applies_to_cards: ["hdfc_regalia_gold", "hdfc_dcp"],
        
        benefit_type: "reward_multiplier",
        reward_multipliers: [2, 2],  // 2x RP
        cashback_rates: null,
        instant_discount_rates: null,
        
        cap: 5000,
        cap_period: "monthly",
        min_transaction: 1000,
        max_transaction: 10000,
        
        valid_from: "2024-01-01",
        valid_until: null,
        
        notes: "2x Reward Points when buying Amazon/Flipkart vouchers via SmartBuy (8 RP per ₹150, ₹5k cap/month)",
        priority: 150,
        
        voucher_denominations: [100, 500, 1000, 2000, 5000, 10000],
        discount_on_voucher: 0
    },
    
    // ============================================================
    // MILLENNIA - AMAZON/FLIPKART VOUCHERS 5% CASHBACK
    // ============================================================
    {
        id: "hdfc_smartbuy_amazon_flipkart_voucher_millennia_5pct",
        bank: "HDFC",
        rule_type: "voucher",
        
        platform: "SmartBuy (GyFTR)",
        category: "voucher",
        merchants: ["amazon", "flipkart"],
        
        applies_to_cards: ["hdfc_millennia"],
        
        benefit_type: "cashback",
        reward_multipliers: null,
        cashback_rates: [0.05],  // 5% cashback
        instant_discount_rates: null,
        
        cap: 1000,
        cap_period: "monthly",
        min_transaction: 1000,
        max_transaction: 10000,
        
        valid_from: "2024-01-01",
        valid_until: null,
        
        notes: "5% cashback when buying Amazon/Flipkart vouchers via SmartBuy (₹1000 cap/month)",
        priority: 150,
        
        voucher_denominations: [100, 500, 1000, 2000, 5000, 10000],
        discount_on_voucher: 0
    },
    
    // ============================================================
    // MILLENNIA - SWIGGY/ZOMATO VOUCHERS 5% CASHBACK
    // ============================================================
    {
        id: "hdfc_smartbuy_swiggy_zomato_voucher_millennia_5pct",
        bank: "HDFC",
        rule_type: "voucher",
        
        platform: "SmartBuy (GyFTR)",
        category: "voucher",
        merchants: ["swiggy", "zomato"],
        
        applies_to_cards: ["hdfc_millennia"],
        
        benefit_type: "cashback",
        reward_multipliers: null,
        cashback_rates: [0.05],
        instant_discount_rates: null,
        
        cap: 1000,
        cap_period: "monthly",
        min_transaction: 500,
        max_transaction: 5000,
        
        valid_from: "2024-01-01",
        valid_until: null,
        
        notes: "5% cashback when buying Swiggy/Zomato vouchers via SmartBuy (₹1000 cap/month)",
        priority: 150,
        
        voucher_denominations: [100, 250, 500, 1000, 2000, 5000],
        discount_on_voucher: 0
    },
    
    // ============================================================
    // TATA NEU - TATA BRAND VOUCHERS (No multiplier, regular NeuCoins)
    // ============================================================
    {
        id: "hdfc_tataneu_tata_brand_vouchers_base",
        bank: "HDFC",
        rule_type: "voucher",
        
        platform: "Tata Neu App",
        category: "voucher",
        merchants: ["tata_neu", "bigbasket"],
        
        applies_to_cards: ["hdfc_tataneu_infinity", "hdfc_tataneu_plus"],
        
        benefit_type: "reward_multiplier",
        reward_multipliers: [1, 1],  // 1x (base rate, no multiplier)
        cashback_rates: null,
        instant_discount_rates: null,
        
        cap: null,
        cap_period: null,
        min_transaction: null,
        max_transaction: null,
        
        valid_from: "2024-01-01",
        valid_until: null,
        
        notes: "Base NeuCoins rate when buying Tata brand vouchers (no additional multiplier)",
        priority: 50,  // Lower priority - base rate only
        
        voucher_denominations: [100, 500, 1000, 2000, 5000],
        discount_on_voucher: 0
    }
];
