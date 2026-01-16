// ============================================================================
// ICICI BANK — CREDIT CARD DATABASE (ACTIVE CARDS ONLY)
// Segments: Premium | Lifestyle | Cashback | Co-branded | Travel
// Notes:
// - No reward computation logic
// - Raw benefits only (as per ICICI portals)
// ============================================================================

const ICICI_CARDS = [

    /* ============================================================================
       SUPER PREMIUM / PREMIUM
    ============================================================================ */

    {
        id: "icici_emeralde_private_metal",
        name: "ICICI Bank Emeralde Private Metal Credit Card",
        bank: "ICICI",
        card_segment: "premium",
        network: ["Visa", "Mastercard"],
        variant: "invite_only",

        joining_fee: 12000,
        annual_fee: 12000,
        fee_waiver: {
            spend_threshold: null,
            period: null,
            notes: "No spend-based waiver"
        },

        reward_type: "points",
        base_earn: {
            rate: 4 / 100,
            unit: "per_rupee",
            notes: "4 Reward Points per ₹100"
        },
        reward_value: {
            per_unit_inr: 0.25,
            notes: "Redemption value varies by category"
        },

        supports_upi: false,
        upi_notes: null,
        supports_vouchers: false,

        base_exclusions: ["fuel", "wallet", "rent", "gov", "emi"],

        lounge: {
            domestic: "Unlimited",
            international: "Unlimited",
            access_type: "complimentary",
            spend_threshold: null,
            network: ["Priority Pass"],
            notes: "Unlimited for primary & add-ons"
        },

        rules: [],

        status: "active"
    },

    {
        id: "icici_emeralde",
        name: "ICICI Bank Emeralde Credit Card",
        bank: "ICICI",
        card_segment: "premium",
        network: ["Visa", "Mastercard"],
        variant: "retail",

        joining_fee: 12000,
        annual_fee: 12000,
        fee_waiver: {
            spend_threshold: null,
            period: null,
            notes: "No fee waiver"
        },

        reward_type: "points",
        base_earn: {
            rate: 4 / 100,
            unit: "per_rupee",
            notes: "4 RP per ₹100"
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
            domestic: "Unlimited",
            international: 6,
            access_type: "complimentary",
            spend_threshold: null,
            network: ["Priority Pass"],
            notes: "International limited per year"
        },

        rules: [],

        status: "active"
    },

    /* ============================================================================
       LIFESTYLE / MID-TIER
    ============================================================================ */

    {
        id: "icici_sapphiro",
        name: "ICICI Bank Sapphiro Credit Card",
        bank: "ICICI",
        card_segment: "lifestyle",
        network: ["Visa", "Mastercard", "Amex"],
        variant: "retail",

        joining_fee: 6500,
        annual_fee: 3500,
        fee_waiver: {
            spend_threshold: 600000,
            period: "annual",
            notes: "Fee waived on ₹6L spends"
        },

        reward_type: "points",
        base_earn: {
            rate: 2 / 100,
            unit: "per_rupee",
            notes: "2 RP per ₹100"
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
            domestic: 4,
            international: 2,
            access_type: "complimentary",
            spend_threshold: null,
            network: ["Dreamfolks", "Priority Pass"],
            notes: "Annual limits"
        },

        rules: [],

        status: "active"
    },

    {
        id: "icici_rubyx",
        name: "ICICI Bank Rubyx Credit Card",
        bank: "ICICI",
        card_segment: "lifestyle",
        network: ["Visa", "Mastercard", "Amex"],
        variant: "retail",

        joining_fee: 3000,
        annual_fee: 2000,
        fee_waiver: {
            spend_threshold: 300000,
            period: "annual",
            notes: "Fee waived on ₹3L spends"
        },

        reward_type: "points",
        base_earn: {
            rate: 2 / 100,
            unit: "per_rupee",
            notes: "2 RP per ₹100"
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
            domestic: 4,
            international: null,
            access_type: "complimentary",
            spend_threshold: null,
            network: ["Dreamfolks"],
            notes: "Domestic lounges only"
        },

        rules: [],

        status: "active"
    },

    /* ============================================================================
       ENTRY / CORE RETAIL
    ============================================================================ */

    {
        id: "icici_coral",
        name: "ICICI Bank Coral Credit Card",
        bank: "ICICI",
        card_segment: "entry_level",
        network: ["Visa", "Mastercard", "RuPay"],
        variant: "retail",

        joining_fee: 500,
        annual_fee: 500,
        fee_waiver: {
            spend_threshold: 100000,
            period: "annual",
            notes: "Fee waived on ₹1L spends"
        },

        reward_type: "points",
        base_earn: {
            rate: 2 / 100,
            unit: "per_rupee",
            notes: "2 RP per ₹100"
        },
        reward_value: {
            per_unit_inr: 0.25,
            notes: null
        },

        supports_upi: true,
        upi_notes: "UPI supported on RuPay variant",
        supports_vouchers: false,

        base_exclusions: ["fuel", "wallet", "rent", "gov", "emi"],

        lounge: {
            domestic: 1,
            international: null,
            access_type: "complimentary",
            spend_threshold: 75000,
            network: ["RuPay", "Visa"],
            notes: "Quarterly lounge on spend condition"
        },

        rules: [],

        status: "active"
    },

    {
        id: "icici_platinum_chip",
        name: "ICICI Bank Platinum Chip Credit Card",
        bank: "ICICI",
        card_segment: "entry_level",
        network: ["Visa", "Mastercard"],
        variant: "retail",

        joining_fee: 0,
        annual_fee: 0,
        fee_waiver: {
            spend_threshold: null,
            period: null,
            notes: "Lifetime free"
        },

        reward_type: "points",
        base_earn: {
            rate: 2 / 100,
            unit: "per_rupee",
            notes: "2 RP per ₹100"
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
       CASHBACK / CO-BRANDED
    ============================================================================ */

    {
        id: "icici_amazon_pay",
        name: "Amazon Pay ICICI Bank Credit Card",
        bank: "ICICI",
        card_segment: "cashback",
        network: ["Visa"],
        variant: "co_branded",

        joining_fee: 0,
        annual_fee: 0,
        fee_waiver: {
            spend_threshold: null,
            period: null,
            notes: "Lifetime free"
        },

        reward_type: "cashback",
        base_earn: {
            rate: 0.01,
            unit: "per_rupee",
            notes: "1% cashback on all non-Amazon spends"
        },
        reward_value: {
            per_unit_inr: 1,
            notes: "Credited as Amazon Pay balance"
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
                platform: "amazon",
                merchants: ["amazon"],
                category: "shopping",
                multiplier: null,
                fixed_reward: 0.05,
                cap: null,
                period: null,
                spend_threshold: null,
                notes: "5% cashback for Amazon Prime members"
            },
            {
                type: "direct",
                platform: "amazon",
                merchants: ["amazon"],
                category: "shopping",
                multiplier: null,
                fixed_reward: 0.03,
                cap: null,
                period: null,
                spend_threshold: null,
                notes: "3% cashback for non-Prime users"
            }
        ],

        status: "active"
    },

    /* ============================================================================
       FUEL
    ============================================================================ */

    {
        id: "icici_hpcl_super_saver",
        name: "ICICI HPCL Super Saver Credit Card",
        bank: "ICICI",
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
            rate: 2 / 100,
            unit: "per_rupee",
            notes: "2 RP per ₹100 on non-fuel spends"
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
                merchants: ["hpcl"],
                category: "fuel",
                multiplier: null,
                fixed_reward: null,
                cap: 200,
                period: "monthly",
                spend_threshold: null,
                notes: "Fuel surcharge waiver + reward points at HPCL"
            }
        ],

        status: "active"
    },

    /* ============================================================================
       TRAVEL
    ============================================================================ */

    {
        id: "icici_makemytrip",
        name: "ICICI MakeMyTrip Credit Card",
        bank: "ICICI",
        card_segment: "travel",
        network: ["Visa"],
        variant: "co_branded",

        joining_fee: 2500,
        annual_fee: 2500,
        fee_waiver: {
            spend_threshold: null,
            period: null,
            notes: "No spend-based waiver"
        },

        reward_type: "mycash",
        base_earn: {
            rate: 0.01,
            unit: "per_rupee",
            notes: "1% MyCash on non-MMT spends"
        },
        reward_value: {
            per_unit_inr: 1,
            notes: "Redeemable only on MakeMyTrip"
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
            network: ["Dreamfolks"],
            notes: "Annual domestic lounge visits"
        },

        rules: [
            {
                type: "direct",
                platform: "makemytrip",
                merchants: ["makemytrip"],
                category: "travel",
                multiplier: null,
                fixed_reward: 0.06,
                cap: null,
                period: null,
                spend_threshold: null,
                notes: "6% MyCash on MMT hotel & flight bookings"
            }
        ],

        status: "active"
    }

];
