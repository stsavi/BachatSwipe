// ============================================================================
// AXIS BANK — CREDIT CARD DATABASE (ACTIVE CARDS ONLY)
// Segments: Premium | Lifestyle | Cashback | Travel | Co-branded | Business
// Notes:
// - Raw benefits only
// - No reward computation
// ============================================================================

const AXIS_CARDS = [

    /* ============================================================================
       SUPER PREMIUM / PREMIUM
    ============================================================================ */

    {
        id: "axis_magnus",
        name: "Axis Bank Magnus Credit Card",
        bank: "AXIS",
        card_segment: "premium",
        network: ["Visa"],
        variant: "retail",

        joining_fee: 10000,
        annual_fee: 10000,
        fee_waiver: {
            spend_threshold: 1500000,
            period: "annual",
            notes: "Fee waived on ₹15L spends"
        },

        reward_type: "points",
        base_earn: {
            rate: 12 / 200,
            unit: "per_rupee",
            notes: "12 EDGE Reward points per ₹200"
        },
        reward_value: {
            per_unit_inr: null,
            notes: "EDGE Rewards value varies by redemption"
        },

        supports_upi: false,
        upi_notes: null,
        supports_vouchers: true,

        base_exclusions: ["fuel", "wallet", "rent", "gov", "emi"],

        lounge: {
            domestic: "Unlimited",
            international: "Unlimited",
            access_type: "complimentary",
            spend_threshold: null,
            network: ["Priority Pass"],
            notes: "Unlimited for primary & add-ons"
        },

        rules: [
            {
                type: "portal",
                platform: "grabdeals",
                merchants: [],
                category: "shopping",
                multiplier: 5,
                fixed_reward: null,
                cap: null,
                period: null,
                spend_threshold: null,
                notes: "Accelerated rewards via GrabDeals"
            }
        ],

        status: "active"
    },

    {
        id: "axis_reserve",
        name: "Axis Bank Reserve Credit Card",
        bank: "AXIS",
        card_segment: "premium",
        network: ["Visa"],
        variant: "invite_only",

        joining_fee: 50000,
        annual_fee: 50000,
        fee_waiver: {
            spend_threshold: null,
            period: null,
            notes: "No spend-based waiver"
        },

        reward_type: "points",
        base_earn: {
            rate: 15 / 200,
            unit: "per_rupee",
            notes: "15 EDGE Reward points per ₹200"
        },
        reward_value: {
            per_unit_inr: null,
            notes: null
        },

        supports_upi: false,
        upi_notes: null,
        supports_vouchers: true,

        base_exclusions: ["fuel", "wallet", "rent", "gov", "emi"],

        lounge: {
            domestic: "Unlimited",
            international: "Unlimited",
            access_type: "complimentary",
            spend_threshold: null,
            network: ["Priority Pass"],
            notes: "Unlimited worldwide lounge access"
        },

        rules: [],

        status: "active"
    },

    /* ============================================================================
       LIFESTYLE / TRAVEL
    ============================================================================ */

    {
        id: "axis_atlas",
        name: "Axis Bank Atlas Credit Card",
        bank: "AXIS",
        card_segment: "travel",
        network: ["Visa"],
        variant: "retail",

        joining_fee: 5000,
        annual_fee: 5000,
        fee_waiver: {
            spend_threshold: 700000,
            period: "annual",
            notes: "Fee waived on ₹7L spends"
        },

        reward_type: "miles",
        base_earn: {
            rate: 2 / 100,
            unit: "per_rupee",
            notes: "2 EDGE Miles per ₹100"
        },
        reward_value: {
            per_unit_inr: null,
            notes: "Best used for airline/hotel partners"
        },

        supports_upi: false,
        upi_notes: null,
        supports_vouchers: true,

        base_exclusions: ["fuel", "wallet", "rent", "gov", "emi"],

        lounge: {
            domestic: 8,
            international: 4,
            access_type: "complimentary",
            spend_threshold: null,
            network: ["Priority Pass"],
            notes: "Annual limits"
        },

        rules: [
            {
                type: "direct",
                platform: null,
                merchants: ["airlines", "hotels"],
                category: "travel",
                multiplier: null,
                fixed_reward: null,
                cap: null,
                period: null,
                spend_threshold: null,
                notes: "Accelerated miles on travel spends"
            }
        ],

        status: "active"
    },

    {
        id: "axis_vistara_infinite",
        name: "Axis Bank Vistara Infinite Credit Card",
        bank: "AXIS",
        card_segment: "travel",
        network: ["Visa"],
        variant: "co_branded",

        joining_fee: 10000,
        annual_fee: 10000,
        fee_waiver: {
            spend_threshold: null,
            period: null,
            notes: "No spend-based waiver"
        },

        reward_type: "miles",
        base_earn: {
            rate: 6 / 200,
            unit: "per_rupee",
            notes: "6 CV Points per ₹200"
        },
        reward_value: {
            per_unit_inr: null,
            notes: "Redeemable on Vistara"
        },

        supports_upi: false,
        upi_notes: null,
        supports_vouchers: false,

        base_exclusions: ["fuel", "wallet", "rent", "gov", "emi"],

        lounge: {
            domestic: "Unlimited",
            international: null,
            access_type: "complimentary",
            spend_threshold: null,
            network: ["Vistara"],
            notes: "Vistara lounge access"
        },

        rules: [],

        status: "active"
    },

    /* ============================================================================
       CORE RETAIL
    ============================================================================ */

    {
        id: "axis_my_zone",
        name: "Axis Bank MY ZONE Credit Card",
        bank: "AXIS",
        card_segment: "lifestyle",
        network: ["Visa"],
        variant: "retail",

        joining_fee: 500,
        annual_fee: 500,
        fee_waiver: {
            spend_threshold: 200000,
            period: "annual",
            notes: "Fee waived on ₹2L spends"
        },

        reward_type: "points",
        base_earn: {
            rate: 4 / 200,
            unit: "per_rupee",
            notes: "4 EDGE points per ₹200"
        },
        reward_value: {
            per_unit_inr: null,
            notes: null
        },

        supports_upi: false,
        upi_notes: null,
        supports_vouchers: false,

        base_exclusions: ["fuel", "wallet", "rent", "gov", "emi"],

        lounge: {
            domestic: 4,
            international: null,
            access_type: "complimentary",
            spend_threshold: null,
            network: ["Visa"],
            notes: "Domestic lounges only"
        },

        rules: [],

        status: "active"
    },

    /* ============================================================================
       CASHBACK
    ============================================================================ */

    {
        id: "axis_ace",
        name: "Axis Bank ACE Credit Card",
        bank: "AXIS",
        card_segment: "cashback",
        network: ["Visa"],
        variant: "co_branded",

        joining_fee: 499,
        annual_fee: 499,
        fee_waiver: {
            spend_threshold: 200000,
            period: "annual",
            notes: "Fee waived on ₹2L spends"
        },

        reward_type: "cashback",
        base_earn: {
            rate: 0.01,
            unit: "per_rupee",
            notes: "1% cashback on all spends"
        },
        reward_value: {
            per_unit_inr: 1,
            notes: "Statement credit"
        },

        supports_upi: true,
        upi_notes: "UPI supported on RuPay variant",
        supports_vouchers: false,

        base_exclusions: ["fuel", "wallet", "rent", "gov", "emi"],

        lounge: {
            domestic: 4,
            international: null,
            access_type: "spend_based",
            spend_threshold: 200000,
            network: ["Visa"],
            notes: "Quarterly lounge on spend condition"
        },

        rules: [
            {
                type: "direct",
                platform: null,
                merchants: ["google_pay"],
                category: "utilities",
                multiplier: null,
                fixed_reward: 0.05,
                cap: 500,
                period: "monthly",
                spend_threshold: null,
                notes: "5% cashback on Google Pay bill payments"
            }
        ],

        status: "active"
    },

    {
        id: "axis_flipkart",
        name: "Flipkart Axis Bank Credit Card",
        bank: "AXIS",
        card_segment: "cashback",
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
            notes: "Statement credit"
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
                platform: "flipkart",
                merchants: ["flipkart"],
                category: "shopping",
                multiplier: null,
                fixed_reward: 0.05,
                cap: null,
                period: null,
                spend_threshold: null,
                notes: "5% cashback on Flipkart"
            },
            {
                type: "direct",
                platform: null,
                merchants: ["swiggy", "uber", "pvr"],
                category: "lifestyle",
                multiplier: null,
                fixed_reward: 0.04,
                cap: 1500,
                period: "monthly",
                spend_threshold: null,
                notes: "4% cashback on preferred partners"
            }
        ],

        status: "active"
    },

    {
        id: "axis_airtel",
        name: "Airtel Axis Bank Credit Card",
        bank: "AXIS",
        card_segment: "cashback",
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
            rate: 0.0025,
            unit: "per_rupee",
            notes: "0.25% cashback on other spends"
        },
        reward_value: {
            per_unit_inr: 1,
            notes: "Statement credit"
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
                platform: "airtel",
                merchants: ["airtel"],
                category: "telecom",
                multiplier: null,
                fixed_reward: 0.25,
                cap: 300,
                period: "monthly",
                spend_threshold: null,
                notes: "25% cashback on Airtel recharges & bills"
            },
            {
                type: "direct",
                platform: null,
                merchants: ["utilities"],
                category: "utilities",
                multiplier: null,
                fixed_reward: 0.10,
                cap: 300,
                period: "monthly",
                spend_threshold: null,
                notes: "10% cashback on utility bill payments"
            }
        ],

        status: "active"
    },

    /* ============================================================================
       LIFESTYLE / CORE
    ============================================================================ */

    {
        id: "axis_select",
        name: "Axis Bank Select Credit Card",
        bank: "AXIS",
        card_segment: "lifestyle",
        network: ["Visa"],
        variant: "retail",

        joining_fee: 3000,
        annual_fee: 3000,
        fee_waiver: {
            spend_threshold: 300000,
            period: "annual",
            notes: "Fee waived on ₹3L spends"
        },

        reward_type: "points",
        base_earn: {
            rate: 10 / 200,
            unit: "per_rupee",
            notes: "10 EDGE points per ₹200"
        },
        reward_value: {
            per_unit_inr: null,
            notes: null
        },

        supports_upi: false,
        upi_notes: null,
        supports_vouchers: true,

        base_exclusions: ["fuel", "wallet", "rent", "gov", "emi"],

        lounge: {
            domestic: 8,
            international: 4,
            access_type: "complimentary",
            spend_threshold: null,
            network: ["Priority Pass"],
            notes: "Annual limits"
        },

        rules: [
            {
                type: "portal",
                platform: "grabdeals",
                merchants: [],
                category: "shopping",
                multiplier: 5,
                fixed_reward: null,
                cap: null,
                period: null,
                spend_threshold: null,
                notes: "Accelerated rewards via GrabDeals"
            }
        ],

        status: "active"
    },

    {
        id: "axis_privilege",
        name: "Axis Bank Privilege Credit Card",
        bank: "AXIS",
        card_segment: "lifestyle",
        network: ["Visa"],
        variant: "retail",

        joining_fee: 1500,
        annual_fee: 1500,
        fee_waiver: {
            spend_threshold: 250000,
            period: "annual",
            notes: "Fee waived on ₹2.5L spends"
        },

        reward_type: "points",
        base_earn: {
            rate: 10 / 200,
            unit: "per_rupee",
            notes: "10 EDGE points per ₹200"
        },
        reward_value: {
            per_unit_inr: null,
            notes: null
        },

        supports_upi: false,
        upi_notes: null,
        supports_vouchers: true,

        base_exclusions: ["fuel", "wallet", "rent", "gov", "emi"],

        lounge: {
            domestic: 4,
            international: null,
            access_type: "complimentary",
            spend_threshold: null,
            network: ["Visa"],
            notes: "Domestic lounges only"
        },

        rules: [],

        status: "active"
    },

    /* ============================================================================
       ENTRY / LIFESTYLE
    ============================================================================ */

    {
        id: "axis_neo",
        name: "Axis Bank NEO Credit Card",
        bank: "AXIS",
        card_segment: "entry_level",
        network: ["Visa"],
        variant: "co_branded",

        joining_fee: 250,
        annual_fee: 250,
        fee_waiver: {
            spend_threshold: 50000,
            period: "annual",
            notes: "Fee waived on ₹50k spends"
        },

        reward_type: "points",
        base_earn: {
            rate: 2 / 200,
            unit: "per_rupee",
            notes: "2 EDGE points per ₹200"
        },
        reward_value: {
            per_unit_inr: null,
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
            notes: "Movie & food offers only"
        },

        rules: [],

        status: "active"
    },

    /* ============================================================================
       FUEL
    ============================================================================ */

    {
        id: "axis_iocl",
        name: "Axis Bank IndianOil Credit Card",
        bank: "AXIS",
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
            rate: 4 / 200,
            unit: "per_rupee",
            notes: "4 EDGE points per ₹200 on non-fuel"
        },
        reward_value: {
            per_unit_inr: null,
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
                merchants: ["indian_oil"],
                category: "fuel",
                multiplier: null,
                fixed_reward: null,
                cap: 200,
                period: "monthly",
                spend_threshold: null,
                notes: "Fuel surcharge waiver + reward points at IOCL"
            }
        ],

        status: "active"
    },

    {
        id: "axis_iocl_premium",
        name: "Axis Bank IndianOil Premium Credit Card",
        bank: "AXIS",
        card_segment: "fuel",
        network: ["Visa"],
        variant: "co_branded",

        joining_fee: 1000,
        annual_fee: 1000,
        fee_waiver: {
            spend_threshold: 200000,
            period: "annual",
            notes: "Fee waived on ₹2L spends"
        },

        reward_type: "points",
        base_earn: {
            rate: 5 / 200,
            unit: "per_rupee",
            notes: "5 EDGE points per ₹200 on non-fuel"
        },
        reward_value: {
            per_unit_inr: null,
            notes: null
        },

        supports_upi: false,
        upi_notes: null,
        supports_vouchers: false,

        base_exclusions: ["wallet", "rent", "gov", "emi"],

        lounge: {
            domestic: 4,
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
                merchants: ["indian_oil"],
                category: "fuel",
                multiplier: null,
                fixed_reward: null,
                cap: 400,
                period: "monthly",
                spend_threshold: null,
                notes: "Higher fuel benefits at IOCL"
            }
        ],

        status: "active"
    },

    /* ============================================================================
       TRAVEL
    ============================================================================ */

    {
        id: "axis_vistara_signature",
        name: "Axis Bank Vistara Signature Credit Card",
        bank: "AXIS",
        card_segment: "travel",
        network: ["Visa"],
        variant: "co_branded",

        joining_fee: 3000,
        annual_fee: 3000,
        fee_waiver: {
            spend_threshold: null,
            period: null,
            notes: "No spend-based waiver"
        },

        reward_type: "miles",
        base_earn: {
            rate: 4 / 200,
            unit: "per_rupee",
            notes: "4 CV Points per ₹200"
        },
        reward_value: {
            per_unit_inr: null,
            notes: "Redeemable on Vistara"
        },

        supports_upi: false,
        upi_notes: null,
        supports_vouchers: false,

        base_exclusions: ["fuel", "wallet", "rent", "gov", "emi"],

        lounge: {
            domestic: 2,
            international: null,
            access_type: "complimentary",
            spend_threshold: null,
            network: ["Vistara"],
            notes: "Vistara lounge access"
        },

        rules: [],

        status: "active"
    },

    /* ============================================================================
       BUSINESS CARDS (HEADERS ONLY — DETAILS LATER)
    ============================================================================ */

    {
        id: "axis_biz_grow",
        name: "Axis Bank Biz Grow Credit Card",
        bank: "AXIS",
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
        id: "axis_biz_power",
        name: "Axis Bank Biz Power Credit Card",
        bank: "AXIS",
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
    }

];
