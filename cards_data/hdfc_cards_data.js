// cards_data/hdfc_cards_data.js
// HDFC Bank Credit Cards - Validated as of January 2026

export const HDFC_CARDS = [
    // ============================================================
    // SUPER PREMIUM (2 Cards)
    // ============================================================
    {
        // IDENTITY
        id: "hdfc_infinia",
        name: "HDFC Infinia Metal",
        bank: "HDFC",
        
        // CLASSIFICATION
        card_tier: "super_premium",
        reward_type: "points",
        
        // EARNING (Validated: 5 RP per ₹150 on non-SmartBuy spends)
        base_rate: 0.0333,  // 5/150 = 0.0333 per ₹1
        earning_display: "5 RP per ₹150",
        reward_currency: "RP",
        
        // REDEMPTION (Validated: 1 RP = ₹1 on SmartBuy flights/hotels)
        value_per_unit: 1.0,
        optimal_redemption: {
            method: "SmartBuy Flights/Hotels",
            redemption_type: "portal",
            annotation: "Best value: Redeem on SmartBuy for flights/hotels at 1 RP = ₹1. Alternate: Apple products at 1 RP = ₹0.50, statement adjustment at 1 RP = ₹0.30."
        },
        redemption_ease_score: 2,  // Moderate (portal booking required)
        
        // FEES (Validated)
        joining_fee: 12500,
        annual_fee: 12500,
        fee_waiver: {
            spend_threshold: 1000000,
            period: "annual",
            notes: "Annual fee waived on ₹10L+ annual spends."
        },
        
        // BENEFITS (Validated)
        lounge: {
            domestic: "Unlimited",
            international: "Unlimited",
            access_type: "complimentary",
            spend_threshold: 0,
            network: ["Priority Pass", "Diners Club", "Visa/Mastercard"],
            notes: "Unlimited complimentary lounge access globally for primary and add-on cardholders."
        },
        
        // FEATURES
        supports_upi: false,
        
        // EXCLUSIONS (Validated from HDFC MITC)
        base_exclusions: ["fuel", "wallet", "rent", "government", "emi", "utility"]
    },
    {
        // IDENTITY
        id: "hdfc_dcb_metal",
        name: "HDFC Diners Black Metal",
        bank: "HDFC",
        
        // CLASSIFICATION
        card_tier: "super_premium",
        reward_type: "points",
        
        // EARNING (Validated: Same as Infinia)
        base_rate: 0.0333,
        earning_display: "5 RP per ₹150",
        reward_currency: "RP",
        
        // REDEMPTION (Validated: Same as Infinia)
        value_per_unit: 1.0,
        optimal_redemption: {
            method: "SmartBuy Flights/Hotels",
            redemption_type: "portal",
            annotation: "Best value: Redeem on SmartBuy for flights/hotels at 1 RP = ₹1."
        },
        redemption_ease_score: 2,
        
        // FEES (Validated)
        joining_fee: 10000,
        annual_fee: 10000,
        fee_waiver: {
            spend_threshold: 800000,
            period: "annual",
            notes: "Annual fee waived on ₹8L+ annual spends."
        },
        
        // BENEFITS (Validated)
        lounge: {
            domestic: "Unlimited",
            international: "Unlimited",
            access_type: "complimentary",
            spend_threshold: 0,
            network: ["Diners Club", "Priority Pass"],
            notes: "Unlimited complimentary Diners Club and Priority Pass lounge access."
        },
        
        // FEATURES
        supports_upi: false,
        
        // EXCLUSIONS
        base_exclusions: ["fuel", "wallet", "rent", "government", "emi", "utility"]
    },

    // ============================================================
    // PREMIUM / LIFESTYLE (2 Cards)
    // ============================================================
    {
        // IDENTITY
        id: "hdfc_regalia_gold",
        name: "HDFC Regalia Gold",
        bank: "HDFC",
        
        // CLASSIFICATION
        card_tier: "premium",
        reward_type: "points",
        
        // EARNING (Validated: 4 RP per ₹150)
        base_rate: 0.0267,  // 4/150 = 0.0267
        earning_display: "4 RP per ₹150",
        reward_currency: "RP",
        
        // REDEMPTION (Validated: Lower redemption value than Infinia)
        value_per_unit: 0.50,
        optimal_redemption: {
            method: "SmartBuy Flights/Hotels",
            redemption_type: "portal",
            annotation: "Best value: Redeem on SmartBuy for flights/hotels at 1 RP = ₹0.50. Statement adjustment at 1 RP = ₹0.30."
        },
        redemption_ease_score: 2,
        
        // FEES (Validated)
        joining_fee: 2500,
        annual_fee: 2500,
        fee_waiver: {
            spend_threshold: 400000,
            period: "annual",
            notes: "Annual fee waived on ₹4L+ annual spends."
        },
        
        // BENEFITS (Validated)
        lounge: {
            domestic: 12,
            international: 6,
            access_type: "complimentary",
            spend_threshold: 0,
            network: ["Priority Pass", "Visa/Mastercard"],
            notes: "12 domestic and 6 international lounge visits per year."
        },
        
        // FEATURES
        supports_upi: false,
        
        // EXCLUSIONS
        base_exclusions: ["fuel", "wallet", "rent", "government", "emi"]
    },
    {
        // IDENTITY
        id: "hdfc_dcp",
        name: "HDFC Diners Privilege",
        bank: "HDFC",
        
        // CLASSIFICATION
        card_tier: "premium",
        reward_type: "points",
        
        // EARNING (Validated: 4 RP per ₹150)
        base_rate: 0.0267,
        earning_display: "4 RP per ₹150",
        reward_currency: "RP",
        
        // REDEMPTION (Validated: Same as Regalia)
        value_per_unit: 0.50,
        optimal_redemption: {
            method: "SmartBuy Flights/Hotels",
            redemption_type: "portal",
            annotation: "Best value: Redeem on SmartBuy for flights/hotels at 1 RP = ₹0.50."
        },
        redemption_ease_score: 2,
        
        // FEES (Validated)
        joining_fee: 2500,
        annual_fee: 2500,
        fee_waiver: {
            spend_threshold: 300000,
            period: "annual",
            notes: "Annual fee waived on ₹3L+ annual spends."
        },
        
        // BENEFITS (Validated: Spend-based lounge)
        lounge: {
            domestic: 8,
            international: 8,
            access_type: "spend_based",
            spend_threshold: 15000,
            network: ["Diners Club"],
            notes: "2 domestic and 2 international visits per quarter on spending ₹15k in previous quarter (8 visits/year total)."
        },
        
        // FEATURES
        supports_upi: false,
        
        // EXCLUSIONS
        base_exclusions: ["fuel", "wallet", "rent", "government", "emi"]
    },

    // ============================================================
    // CASHBACK / MID-RANGE (2 Cards)
    // ============================================================
    {
        // IDENTITY
        id: "hdfc_millennia",
        name: "HDFC Millennia",
        bank: "HDFC",
        
        // CLASSIFICATION
        card_tier: "cashback",
        reward_type: "cashback",
        
        // EARNING (Validated: 1% base cashback = 1 per ₹100)
        base_rate: 0.01,
        earning_display: "1% Cashback",
        reward_currency: "Cashback",
        
        // REDEMPTION (Validated: Cashback = direct money)
        value_per_unit: 1.0,
        optimal_redemption: {
            method: "Statement Credit",
            redemption_type: "statement_credit",
            annotation: "Cashback automatically credited as statement credit. 1 cashback unit = ₹1."
        },
        redemption_ease_score: 1,  // Easiest - automatic statement credit
        
        // FEES (Validated)
        joining_fee: 1000,
        annual_fee: 1000,
        fee_waiver: {
            spend_threshold: 100000,
            period: "annual",
            notes: "Annual fee waived on ₹1L+ annual spends."
        },
        
        // BENEFITS (Validated)
        lounge: {
            domestic: 4,
            international: 0,
            access_type: "spend_based",
            spend_threshold: 100000,
            network: ["Visa/Mastercard"],
            notes: "1 domestic lounge visit per quarter on spending ₹1L in previous quarter (4 visits/year total)."
        },
        
        // FEATURES
        supports_upi: false,
        
        // EXCLUSIONS
        base_exclusions: ["fuel", "wallet", "rent", "government", "emi"]
    },
    {
        // IDENTITY
        id: "hdfc_swiggy",
        name: "Swiggy HDFC Bank Credit Card",
        bank: "HDFC",
        
        // CLASSIFICATION
        card_tier: "cashback",
        reward_type: "cashback",
        
        // EARNING (Validated: 1% base as Swiggy Money)
        base_rate: 0.01,
        earning_display: "1% Swiggy Money",
        reward_currency: "Swiggy Money",
        
        // REDEMPTION (Validated: Swiggy Money = usable on Swiggy)
        value_per_unit: 1.0,
        optimal_redemption: {
            method: "Swiggy Wallet",
            redemption_type: "cash",
            annotation: "Cashback credited to Swiggy Money wallet. 1 unit = ₹1 on Swiggy platform."
        },
        redemption_ease_score: 1,  // Easiest - automatic wallet credit
        
        // FEES (Validated)
        joining_fee: 500,
        annual_fee: 500,
        fee_waiver: {
            spend_threshold: 200000,
            period: "annual",
            notes: "Annual fee waived on ₹2L+ annual spends."
        },
        
        // BENEFITS (Validated: No lounge access)
        lounge: {
            domestic: 0,
            international: 0,
            access_type: "none",
            spend_threshold: 0,
            network: [],
            notes: "No lounge access provided."
        },
        
        // FEATURES
        supports_upi: false,
        
        // EXCLUSIONS (Validated: Broader exclusions)
        base_exclusions: ["fuel", "wallet", "rent", "government", "emi", "jewellery"]
    },

    // ============================================================
    // UPI / CO-BRANDED (2 Cards)
    // ============================================================
    {
        // IDENTITY
        id: "hdfc_tataneu_infinity",
        name: "Tata Neu Infinity HDFC Bank Credit Card",
        bank: "HDFC",
        
        // CLASSIFICATION
        card_tier: "upi",
        reward_type: "neucoins",
        
        // EARNING (Validated: 1.5% base NeuCoins)
        base_rate: 0.015,
        earning_display: "1.5% NeuCoins",
        reward_currency: "NeuCoins",
        
        // REDEMPTION (Validated: 1 NeuCoin = ₹1 on Tata Neu)
        value_per_unit: 1.0,
        optimal_redemption: {
            method: "Tata Neu App",
            redemption_type: "cash",
            annotation: "Redeem on Tata Neu ecosystem (BigBasket, Tata CLiQ, 1mg, etc.). 1 NeuCoin = ₹1."
        },
        redemption_ease_score: 1,  // Easiest - direct ecosystem wallet
        
        // FEES (Validated)
        joining_fee: 1499,
        annual_fee: 1499,
        fee_waiver: {
            spend_threshold: 300000,
            period: "annual",
            notes: "Annual fee waived on ₹3L+ annual spends."
        },
        
        // BENEFITS (Validated)
        lounge: {
            domestic: 8,
            international: 4,
            access_type: "complimentary",
            spend_threshold: 0,
            network: ["Visa/RuPay", "Priority Pass"],
            notes: "2 domestic visits per quarter (8/year) + 4 international visits per year via Priority Pass."
        },
        
        // FEATURES (Validated: Supports UPI)
        supports_upi: true,
        
        // EXCLUSIONS
        base_exclusions: ["fuel", "wallet", "rent", "government", "emi"]
    },
    {
        // IDENTITY
        id: "hdfc_tataneu_plus",
        name: "Tata Neu Plus HDFC Bank Credit Card",
        bank: "HDFC",
        
        // CLASSIFICATION
        card_tier: "upi",
        reward_type: "neucoins",
        
        // EARNING (Validated: 1% base NeuCoins)
        base_rate: 0.01,
        earning_display: "1% NeuCoins",
        reward_currency: "NeuCoins",
        
        // REDEMPTION (Validated: Same as Infinity)
        value_per_unit: 1.0,
        optimal_redemption: {
            method: "Tata Neu App",
            redemption_type: "cash",
            annotation: "Redeem on Tata Neu ecosystem. 1 NeuCoin = ₹1."
        },
        redemption_ease_score: 1,
        
        // FEES (Validated)
        joining_fee: 499,
        annual_fee: 499,
        fee_waiver: {
            spend_threshold: 100000,
            period: "annual",
            notes: "Annual fee waived on ₹1L+ annual spends."
        },
        
        // BENEFITS (Validated)
        lounge: {
            domestic: 4,
            international: 0,
            access_type: "complimentary",
            spend_threshold: 0,
            network: ["Visa/RuPay"],
            notes: "1 domestic lounge visit per quarter (4 visits/year total)."
        },
        
        // FEATURES
        supports_upi: true,
        
        // EXCLUSIONS
        base_exclusions: ["fuel", "wallet", "rent", "government", "emi"]
    },
    
    // ============================================================
    // FUEL CARDS (1 Card)
    // ============================================================
    {
        // IDENTITY
        id: "hdfc_indianoil",
        name: "IndianOil HDFC Bank Credit Card",
        bank: "HDFC",
        
        // CLASSIFICATION
        card_tier: "fuel",
        reward_type: "fuel_points",
        
        // EARNING (Validated: 1 Fuel Point per ₹150)
        base_rate: 0.0067,  // 1/150 = 0.0067
        earning_display: "1 Fuel Point per ₹150",
        reward_currency: "Fuel Points",
        
        // REDEMPTION (Validated: 1 FP = ₹0.96 at IOCL)
        value_per_unit: 0.96,
        optimal_redemption: {
            method: "Fuel at IndianOil Stations",
            redemption_type: "cash",
            annotation: "Redeem for free fuel at IndianOil outlets. 1 Fuel Point = ₹0.96 worth of fuel."
        },
        redemption_ease_score: 2,  // Moderate - need to redeem at IOCL
        
        // FEES (Validated)
        joining_fee: 500,
        annual_fee: 500,
        fee_waiver: {
            spend_threshold: 50000,
            period: "annual",
            notes: "Annual fee waived on ₹50k+ annual spends."
        },
        
        // BENEFITS (Validated: No lounge)
        lounge: {
            domestic: 0,
            international: 0,
            access_type: "none",
            spend_threshold: 0,
            network: [],
            notes: "No lounge access provided."
        },
        
        // FEATURES
        supports_upi: false,
        
        // EXCLUSIONS (Validated: Minimal exclusions for fuel card)
        base_exclusions: ["wallet"]
    }
];