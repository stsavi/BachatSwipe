// ============================================================================
// HDFC BANK — CREDIT CARD DATABASE (ACTIVE CARDS ONLY)
// Segments: Premium | Lifestyle | Cashback | Co-branded | RuPay | Business
// Notes:
// - No reward computation logic
// - No inferred values
// - All fields explicitly present
// ============================================================================

const HDFC_CARDS = [

    /* ============================================================================
       PREMIUM / SUPER-PREMIUM
    ============================================================================ */

    {
        id: "hdfc_infinia_metal",
        name: "HDFC Infinia Metal",
        bank: "HDFC",
        card_segment: "premium",
        network: ["Visa", "Mastercard"],
        variant: "invite_only",

        joining_fee: 12500,
        annual_fee: 12500,
        fee_waiver: {
            spend_threshold: 1000000,
            period: "annual",
            notes: "Fee waived on spends of ₹10L in previous year"
        },

        reward_type: "points",
        base_earn: {
            rate: 5 / 150,
            unit: "per_rupee",
            notes: "5 Reward Points per ₹150 spent"
        },
        reward_value: {
            per_unit_inr: 1,
            notes: "1 RP = ₹1 for flights/hotels via SmartBuy"
        },

        supports_upi: false,
        upi_notes: null,
        supports_vouchers: true,

        base_exclusions: ["fuel", "wallet", "rent", "gov", "emi", "utility"],

        lounge: {
            domestic: "Unlimited",
            international: "Unlimited",
            access_type: "complimentary",
            spend_threshold: null,
            network: ["Priority Pass"],
            notes: "Unlimited for primary + add-on"
        },

        rules: [
            {
                type: "portal",
                platform: "smartbuy",
                merchants: [],
                category: "travel",
                multiplier: 5,
                fixed_reward: null,
                cap: 15000,
                period: "monthly",
                spend_threshold: null,
                notes: "5X RP on flights & hotels via SmartBuy"
            },
            {
                type: "voucher",
                platform: "smartbuy_gyftr",
                merchants: ["amazon", "flipkart", "myntra", "swiggy", "zomato"],
                category: "shopping",
                multiplier: 3,
                fixed_reward: null,
                cap: 15000,
                period: "monthly",
                spend_threshold: null,
                notes: "3X RP on gift vouchers via SmartBuy Gyftr"
            }
        ],

        status: "active"
    },

    {
        id: "hdfc_diners_black_metal",
        name: "HDFC Diners Club Black Metal",
        bank: "HDFC",
        card_segment: "premium",
        network: ["Diners Club"],
        variant: "invite_only",

        joining_fee: 10000,
        annual_fee: 10000,
        fee_waiver: {
            spend_threshold: 800000,
            period: "annual",
            notes: "Fee waived on ₹8L spends"
        },

        reward_type: "points",
        base_earn: {
            rate: 5 / 150,
            unit: "per_rupee",
            notes: "5 RP per ₹150"
        },
        reward_value: {
            per_unit_inr: 1,
            notes: "Best value via travel & vouchers"
        },

        supports_upi: false,
        upi_notes: null,
        supports_vouchers: true,

        base_exclusions: ["fuel", "wallet", "rent", "gov", "emi", "utility"],

        lounge: {
            domestic: "Unlimited",
            international: "Unlimited",
            access_type: "complimentary",
            spend_threshold: null,
            network: ["Diners Club", "Priority Pass"],
            notes: "Unlimited domestic & international"
        },

        rules: [
            {
                type: "portal",
                platform: "smartbuy",
                merchants: [],
                category: "travel",
                multiplier: 5,
                fixed_reward: null,
                cap: 10000,
                period: "monthly",
                spend_threshold: null,
                notes: "5X RP via SmartBuy on travel"
            },
            {
                type: "voucher",
                platform: "smartbuy_gyftr",
                merchants: ["amazon", "flipkart", "swiggy", "zomato"],
                category: "shopping",
                multiplier: 3,
                fixed_reward: null,
                cap: 10000,
                period: "monthly",
                spend_threshold: null,
                notes: "3X RP on vouchers via Gyftr"
            }
        ],

        status: "active"
    },

    /* ============================================================================
       LIFESTYLE / TRAVEL
    ============================================================================ */

    {
        id: "hdfc_regalia_gold",
        name: "HDFC Regalia Gold",
        bank: "HDFC",
        card_segment: "lifestyle",
        network: ["Visa", "Mastercard"],
        variant: "retail",

        joining_fee: 2500,
        annual_fee: 2500,
        fee_waiver: {
            spend_threshold: 400000,
            period: "annual",
            notes: "Fee waiver on ₹4L spends"
        },

        reward_type: "points",
        base_earn: {
            rate: 4 / 150,
            unit: "per_rupee",
            notes: "4 RP per ₹150"
        },
        reward_value: {
            per_unit_inr: 0.5,
            notes: "1 RP = ₹0.5"
        },

        supports_upi: false,
        upi_notes: null,
        supports_vouchers: true,

        base_exclusions: ["fuel", "wallet", "rent", "gov", "emi"],

        lounge: {
            domestic: 12,
            international: 6,
            access_type: "complimentary",
            spend_threshold: null,
            network: ["Priority Pass"],
            notes: "Per year limits"
        },

        rules: [
            {
                type: "portal",
                platform: "smartbuy",
                merchants: [],
                category: "travel",
                multiplier: 5,
                fixed_reward: null,
                cap: 4000,
                period: "monthly",
                spend_threshold: null,
                notes: "5X RP via SmartBuy"
            },
            {
                type: "voucher",
                platform: "smartbuy_gyftr",
                merchants: ["amazon", "flipkart", "myntra", "bigbasket"],
                category: "shopping",
                multiplier: 5,
                fixed_reward: null,
                cap: 4000,
                period: "monthly",
                spend_threshold: null,
                notes: "5X RP via SmartBuy Gyftr"
            }
        ],

        status: "active"
    },

    /* ============================================================================
       CASHBACK / EVERYDAY
    ============================================================================ */

    {
        id: "hdfc_millennia",
        name: "HDFC Millennia",
        bank: "HDFC",
        card_segment: "cashback",
        network: ["Visa", "Mastercard"],
        variant: "retail",

        joining_fee: 1000,
        annual_fee: 1000,
        fee_waiver: {
            spend_threshold: 100000,
            period: "annual",
            notes: "Fee waived on ₹1L spends"
        },

        reward_type: "cashback",
        base_earn: {
            rate: 0.01,
            unit: "per_rupee",
            notes: "1% base cashback"
        },
        reward_value: {
            per_unit_inr: 1,
            notes: null
        },

        supports_upi: false,
        upi_notes: null,
        supports_vouchers: false,

        base_exclusions: ["fuel", "wallet", "rent", "gov", "emi"],

        lounge: {
            domestic: 4,
            international: null,
            access_type: "spend_based",
            spend_threshold: 100000,
            network: ["Visa"],
            notes: "1 per quarter on ₹1L spend"
        },

        rules: [
            {
                type: "direct",
                platform: null,
                merchants: [
                    "amazon", "flipkart", "myntra", "swiggy",
                    "zomato", "uber", "bookmyshow", "tata_cliq"
                ],
                category: "shopping",
                multiplier: null,
                fixed_reward: 0.05,
                cap: 1000,
                period: "monthly",
                spend_threshold: null,
                notes: "5% cashback on select merchants"
            }
        ],

        status: "active"
    },

    /* ============================================================================
       MID-TIER / ENTRY LEVEL
    ============================================================================ */

    {
        id: "hdfc_diners_privilege",
        name: "HDFC Diners Club Privilege",
        bank: "HDFC",
        card_segment: "lifestyle",
        network: ["Diners Club"],
        variant: "retail",

        joining_fee: 2500,
        annual_fee: 2500,
        fee_waiver: {
            spend_threshold: 300000,
            period: "annual",
            notes: "Fee waiver on ₹3L spends"
        },

        reward_type: "points",
        base_earn: {
            rate: 4 / 150,
            unit: "per_rupee",
            notes: "4 RP per ₹150"
        },
        reward_value: {
            per_unit_inr: 0.5,
            notes: null
        },

        supports_upi: false,
        upi_notes: null,
        supports_vouchers: true,

        base_exclusions: ["fuel", "wallet", "rent", "gov", "emi"],

        lounge: {
            domestic: 12,
            international: null,
            access_type: "complimentary",
            spend_threshold: null,
            network: ["Diners Club"],
            notes: "Domestic lounges only"
        },

        rules: [
            {
                type: "voucher",
                platform: "smartbuy_gyftr",
                merchants: ["amazon", "flipkart", "myntra", "swiggy", "zomato"],
                category: "shopping",
                multiplier: 5,
                fixed_reward: null,
                cap: 3000,
                period: "monthly",
                spend_threshold: null,
                notes: "5X RP via SmartBuy Gyftr"
            }
        ],

        status: "active"
    },

    {
        id: "hdfc_moneyback_plus",
        name: "HDFC MoneyBack+",
        bank: "HDFC",
        card_segment: "entry_level",
        network: ["Visa", "Mastercard"],
        variant: "retail",

        joining_fee: 500,
        annual_fee: 500,
        fee_waiver: {
            spend_threshold: 50000,
            period: "annual",
            notes: "Fee waived on ₹50k spends"
        },

        reward_type: "points",
        base_earn: {
            rate: 2 / 150,
            unit: "per_rupee",
            notes: "2 RP per ₹150"
        },
        reward_value: {
            per_unit_inr: 0.25,
            notes: "1 RP = ₹0.25"
        },

        supports_upi: false,
        upi_notes: null,
        supports_vouchers: false,

        base_exclusions: ["fuel", "wallet", "rent", "gov", "emi"],

        lounge: {
            domestic: null,
            international: null,
            access_type: "none",
            spend_threshold: null,
            network: [],
            notes: null
        },

        rules: [
            {
                type: "direct",
                platform: null,
                merchants: ["amazon", "flipkart"],
                category: "shopping",
                multiplier: null,
                fixed_reward: 0.10,
                cap: 500,
                period: "monthly",
                spend_threshold: null,
                notes: "10X RP on Amazon & Flipkart"
            }
        ],

        status: "active"
    },

    {
        id: "hdfc_freedom",
        name: "HDFC Freedom Card",
        bank: "HDFC",
        card_segment: "entry_level",
        network: ["Visa", "Mastercard"],
        variant: "retail",

        joining_fee: 500,
        annual_fee: 500,
        fee_waiver: {
            spend_threshold: 50000,
            period: "annual",
            notes: "Fee waived on ₹50k spends"
        },

        reward_type: "points",
        base_earn: {
            rate: 1 / 150,
            unit: "per_rupee",
            notes: "1 RP per ₹150"
        },
        reward_value: {
            per_unit_inr: 0.25,
            notes: null
        },

        supports_upi: false,
        upi_notes: null,
        supports_vouchers: false,

        base_exclusions: ["fuel", "wallet", "rent", "gov", "emi"],

        lounge: {
            domestic: null,
            international: null,
            access_type: "none",
            spend_threshold: null,
            network: [],
            notes: null
        },

        rules: [],

        status: "active"
    },

    /* ============================================================================
       CO-BRANDED CARDS
    ============================================================================ */

    {
        id: "hdfc_tata_neu_plus",
        name: "Tata Neu Plus HDFC Card",
        bank: "HDFC",
        card_segment: "co_branded",
        network: ["RuPay", "Visa"],
        variant: "co_branded",

        joining_fee: 499,
        annual_fee: 499,
        fee_waiver: {
            spend_threshold: 100000,
            period: "annual",
            notes: "Fee waiver on ₹1L spends"
        },

        reward_type: "coins",
        base_earn: {
            rate: 0.01,
            unit: "per_rupee",
            notes: "1% NeuCoins"
        },
        reward_value: {
            per_unit_inr: 1,
            notes: "1 NeuCoin = ₹1"
        },

        supports_upi: true,
        upi_notes: "UPI available on RuPay variant only",
        supports_vouchers: false,

        base_exclusions: ["fuel", "wallet", "rent", "gov", "emi"],

        lounge: {
            domestic: null,
            international: null,
            access_type: "none",
            spend_threshold: null,
            network: [],
            notes: null
        },

        rules: [
            {
                type: "direct",
                platform: null,
                merchants: ["tata_neu"],
                category: "shopping",
                multiplier: null,
                fixed_reward: 0.05,
                cap: null,
                period: null,
                spend_threshold: null,
                notes: "5% NeuCoins on Tata Neu spends"
            }
        ],

        status: "active"
    },

    {
        id: "hdfc_tata_neu_infinity",
        name: "Tata Neu Infinity HDFC Card",
        bank: "HDFC",
        card_segment: "co_branded",
        network: ["RuPay", "Visa"],
        variant: "co_branded",

        joining_fee: 1499,
        annual_fee: 1499,
        fee_waiver: {
            spend_threshold: 300000,
            period: "annual",
            notes: "Fee waived on ₹3L spends"
        },

        reward_type: "coins",
        base_earn: {
            rate: 0.015,
            unit: "per_rupee",
            notes: "1.5% NeuCoins"
        },
        reward_value: {
            per_unit_inr: 1,
            notes: null
        },

        supports_upi: true,
        upi_notes: "UPI available on RuPay variant only",
        supports_vouchers: false,

        base_exclusions: ["fuel", "wallet", "rent", "gov", "emi"],

        lounge: {
            domestic: 8,
            international: null,
            access_type: "complimentary",
            spend_threshold: null,
            network: ["Visa"],
            notes: "Domestic lounges only"
        },

        rules: [
            {
                type: "direct",
                platform: null,
                merchants: ["tata_neu"],
                category: "shopping",
                multiplier: null,
                fixed_reward: 0.10,
                cap: null,
                period: null,
                spend_threshold: null,
                notes: "10% NeuCoins on Tata Neu spends"
            }
        ],

        status: "active"
    },

    {
        id: "hdfc_swiggy",
        name: "Swiggy HDFC Bank Credit Card",
        bank: "HDFC",
        card_segment: "co_branded",
        network: ["Visa"],
        variant: "co_branded",

        joining_fee: 500,
        annual_fee: 500,
        fee_waiver: {
            spend_threshold: 200000,
            period: "annual",
            notes: "Fee waived on ₹2L spends"
        },

        reward_type: "cashback",
        base_earn: {
            rate: 0.01,
            unit: "per_rupee",
            notes: "1% cashback on other spends"
        },
        reward_value: {
            per_unit_inr: 1,
            notes: null
        },

        supports_upi: false,
        upi_notes: null,
        supports_vouchers: false,

        base_exclusions: ["fuel", "wallet", "rent", "gov", "emi"],

        lounge: {
            domestic: null,
            international: null,
            access_type: "none",
            spend_threshold: null,
            network: [],
            notes: null
        },

        rules: [
            {
                type: "direct",
                platform: null,
                merchants: ["swiggy"],
                category: "dining",
                multiplier: null,
                fixed_reward: 0.10,
                cap: 1500,
                period: "monthly",
                spend_threshold: null,
                notes: "10% cashback on Swiggy"
            },
            {
                type: "direct",
                platform: null,
                merchants: ["amazon", "flipkart", "myntra"],
                category: "shopping",
                multiplier: null,
                fixed_reward: 0.05,
                cap: 1500,
                period: "monthly",
                spend_threshold: null,
                notes: "5% cashback on select merchants"
            }
        ],

        status: "active"
    },

    /* ============================================================================
       TRAVEL / TRANSPORT
    ============================================================================ */

    {
        id: "hdfc_indigo_6e_rewards_xl",
        name: "IndiGo 6E Rewards XL HDFC Bank Credit Card",
        bank: "HDFC",
        card_segment: "travel",
        network: ["Visa"],
        variant: "co_branded",

        joining_fee: 1500,
        annual_fee: 1500,
        fee_waiver: {
            spend_threshold: 300000,
            period: "annual",
            notes: "Fee waived on ₹3L spends"
        },

        reward_type: "points",
        base_earn: {
            rate: 6 / 150,
            unit: "per_rupee",
            notes: "6 6E Rewards per ₹150"
        },
        reward_value: {
            per_unit_inr: null,
            notes: "Redeemable for IndiGo bookings"
        },

        supports_upi: false,
        upi_notes: null,
        supports_vouchers: false,

        base_exclusions: ["fuel", "wallet", "rent", "gov", "emi"],

        lounge: {
            domestic: 8,
            international: null,
            access_type: "complimentary",
            spend_threshold: null,
            network: ["Visa"],
            notes: "Domestic lounges only"
        },

        rules: [
            {
                type: "direct",
                platform: null,
                merchants: ["indigo"],
                category: "travel",
                multiplier: null,
                fixed_reward: null,
                cap: null,
                period: null,
                spend_threshold: null,
                notes: "Accelerated rewards on IndiGo bookings"
            }
        ],

        status: "active"
    },

    {
        id: "hdfc_irctc",
        name: "IRCTC HDFC Bank Credit Card",
        bank: "HDFC",
        card_segment: "travel",
        network: ["Visa"],
        variant: "co_branded",

        joining_fee: 500,
        annual_fee: 500,
        fee_waiver: {
            spend_threshold: 100000,
            period: "annual",
            notes: "Fee waived on ₹1L spends"
        },

        reward_type: "points",
        base_earn: {
            rate: 1 / 100,
            unit: "per_rupee",
            notes: "1 RP per ₹100"
        },
        reward_value: {
            per_unit_inr: 0.25,
            notes: null
        },

        supports_upi: false,
        upi_notes: null,
        supports_vouchers: false,

        base_exclusions: ["fuel", "wallet", "rent", "gov", "emi"],

        lounge: {
            domestic: null,
            international: null,
            access_type: "none",
            spend_threshold: null,
            network: [],
            notes: null
        },

        rules: [
            {
                type: "direct",
                platform: "irctc",
                merchants: ["irctc"],
                category: "travel",
                multiplier: null,
                fixed_reward: 0.05,
                cap: null,
                period: null,
                spend_threshold: null,
                notes: "5% value back on IRCTC bookings"
            }
        ],

        status: "active"
    },

    /* ============================================================================
       FUEL
    ============================================================================ */

    {
        id: "hdfc_iocl",
        name: "HDFC Bank IOCL Credit Card",
        bank: "HDFC",
        card_segment: "fuel",
        network: ["Visa"],
        variant: "co_branded",

        joining_fee: 500,
        annual_fee: 500,
        fee_waiver: {
            spend_threshold: 50000,
            period: "annual",
            notes: "Fee waived on ₹50k spends"
        },

        reward_type: "points",
        base_earn: {
            rate: 1 / 150,
            unit: "per_rupee",
            notes: "1 RP per ₹150"
        },
        reward_value: {
            per_unit_inr: 0.25,
            notes: null
        },

        supports_upi: false,
        upi_notes: null,
        supports_vouchers: false,

        base_exclusions: ["wallet", "rent", "gov", "emi"],

        lounge: {
            domestic: null,
            international: null,
            access_type: "none",
            spend_threshold: null,
            network: [],
            notes: null
        },

        rules: [
            {
                type: "direct",
                platform: null,
                merchants: ["iocl"],
                category: "fuel",
                multiplier: null,
                fixed_reward: null,
                cap: 250,
                period: "monthly",
                spend_threshold: null,
                notes: "Fuel surcharge waiver + reward points at IOCL"
            }
        ],

        status: "active"
    },

    /* ============================================================================
       BUSINESS CARDS (HEADERS ONLY — DETAILS TO BE ADDED LATER)
    ============================================================================ */

    {
        id: "hdfc_biz_first",
        name: "HDFC Biz First Credit Card",
        bank: "HDFC",
        card_segment: "business",
        network: [],
        variant: "business",

        joining_fee: null,
        annual_fee: null,
        fee_waiver: { spend_threshold: null, period: null, notes: null },

        reward_type: null,
        base_earn: { rate: null, unit: null, notes: null },
        reward_value: { per_unit_inr: null, notes: null },

        supports_upi: false,
        upi_notes: null,
        supports_vouchers: false,

        base_exclusions: [],

        lounge: {
            domestic: null,
            international: null,
            access_type: "none",
            spend_threshold: null,
            network: [],
            notes: "To be added"
        },

        rules: [],

        status: "active"
    },

    {
        id: "hdfc_biz_grow",
        name: "HDFC Biz Grow Credit Card",
        bank: "HDFC",
        card_segment: "business",
        network: [],
        variant: "business",
        joining_fee: null,
        annual_fee: null,
        fee_waiver: { spend_threshold: null, period: null, notes: null },
        reward_type: null,
        base_earn: { rate: null, unit: null, notes: null },
        reward_value: { per_unit_inr: null, notes: null },
        supports_upi: false,
        upi_notes: null,
        supports_vouchers: false,
        base_exclusions: [],
        lounge: { domestic: null, international: null, access_type: "none", spend_threshold: null, network: [], notes: "To be added" },
        rules: [],
        status: "active"
    },

    {
        id: "hdfc_biz_power",
        name: "HDFC Biz Power Credit Card",
        bank: "HDFC",
        card_segment: "business",
        network: [],
        variant: "business",
        joining_fee: null,
        annual_fee: null,
        fee_waiver: { spend_threshold: null, period: null, notes: null },
        reward_type: null,
        base_earn: { rate: null, unit: null, notes: null },
        reward_value: { per_unit_inr: null, notes: null },
        supports_upi: false,
        upi_notes: null,
        supports_vouchers: false,
        base_exclusions: [],
        lounge: { domestic: null, international: null, access_type: "none", spend_threshold: null, network: [], notes: "To be added" },
        rules: [],
        status: "active"
    },

    {
        id: "hdfc_biz_black",
        name: "HDFC Biz Black Credit Card",
        bank: "HDFC",
        card_segment: "business",
        network: [],
        variant: "business",
        joining_fee: null,
        annual_fee: null,
        fee_waiver: { spend_threshold: null, period: null, notes: null },
        reward_type: null,
        base_earn: { rate: null, unit: null, notes: null },
        reward_value: { per_unit_inr: null, notes: null },
        supports_upi: false,
        upi_notes: null,
        supports_vouchers: false,
        base_exclusions: [],
        lounge: { domestic: null, international: null, access_type: "none", spend_threshold: null, network: [], notes: "To be added" },
        rules: [],
        status: "active"
    }

];
