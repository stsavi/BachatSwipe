// ============================================================================
// SBI CARD — CREDIT CARD DATABASE (ACTIVE ONLY)
// Excluded:
// - Doctor / Professional cards
// - Bank tie-ups (PNB / BOI / BOM / PSB etc.)
// - Corporate / niche variants
// ============================================================================

const SBI_CARDS = [

    /* ============================================================================
       PREMIUM / LIFESTYLE
    ============================================================================ */

    {
        id: "sbi_elite",
        name: "SBI Card ELITE",
        bank: "SBI",
        card_segment: "premium",
        network: ["Visa", "Mastercard"],
        variant: "retail",

        joining_fee: 4999,
        annual_fee: 4999,
        fee_waiver: {
            spend_threshold: null,
            period: null,
            notes: "No spend-based waiver"
        },

        reward_type: "points",
        base_earn: {
            rate: 2 / 100,
            unit: "per_rupee",
            notes: "2 Reward Points per ₹100"
        },
        reward_value: {
            per_unit_inr: 0.25,
            notes: "1 RP = ₹0.25"
        },

        supports_upi: false,
        upi_notes: null,
        supports_vouchers: true,

        base_exclusions: ["fuel", "wallet", "rent", "gov", "emi"],

        lounge: {
            domestic: 6,
            international: 6,
            access_type: "complimentary",
            spend_threshold: null,
            network: ["Priority Pass"],
            notes: "Annual limits"
        },

        rules: [
            {
                type: "portal",
                platform: "sbi_rewards",
                merchants: [],
                category: "shopping",
                multiplier: 10,
                fixed_reward: null,
                cap: null,
                period: null,
                spend_threshold: null,
                notes: "10X Reward Points via SBI Card Rewards portal"
            }
        ],

        status: "active"
    },

    {
        id: "sbi_prime",
        name: "SBI Card PRIME",
        bank: "SBI",
        card_segment: "lifestyle",
        network: ["Visa", "Mastercard"],
        variant: "retail",

        joining_fee: 2999,
        annual_fee: 2999,
        fee_waiver: {
            spend_threshold: null,
            period: null,
            notes: "No spend-based waiver"
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
        supports_vouchers: true,

        base_exclusions: ["fuel", "wallet", "rent", "gov", "emi"],

        lounge: {
            domestic: 4,
            international: 4,
            access_type: "complimentary",
            spend_threshold: null,
            network: ["Priority Pass"],
            notes: "Annual limits"
        },

        rules: [
            {
                type: "portal",
                platform: "sbi_rewards",
                merchants: [],
                category: "shopping",
                multiplier: 10,
                fixed_reward: null,
                cap: null,
                period: null,
                spend_threshold: null,
                notes: "10X rewards via SBI Card portal"
            }
        ],

        status: "active"
    },

    /* ============================================================================
       CASHBACK
    ============================================================================ */

    {
        id: "sbi_cashback",
        name: "SBI Cashback Credit Card",
        bank: "SBI",
        card_segment: "cashback",
        network: ["Visa"],
        variant: "retail",

        joining_fee: 999,
        annual_fee: 999,
        fee_waiver: {
            spend_threshold: 200000,
            period: "annual",
            notes: "Fee waived on ₹2L spends"
        },

        reward_type: "cashback",
        base_earn: {
            rate: 0.01,
            unit: "per_rupee",
            notes: "1% cashback on offline spends"
        },
        reward_value: {
            per_unit_inr: 1,
            notes: "Statement credit"
        },

        supports_upi: false,
        upi_notes: null,
        supports_vouchers: false,

        base_exclusions: ["fuel", "wallet", "rent", "gov", "emi", "insurance"],

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
                merchants: ["online"],
                category: "shopping",
                multiplier: null,
                fixed_reward: 0.05,
                cap: 5000,
                period: "monthly",
                spend_threshold: null,
                notes: "5% cashback on online spends"
            }
        ],

        status: "active"
    },

    /* ============================================================================
       CORE / ENTRY LEVEL
    ============================================================================ */

    {
        id: "sbi_simplysave",
        name: "SBI SimplySAVE Credit Card",
        bank: "SBI",
        card_segment: "entry_level",
        network: ["Visa", "Mastercard", "RuPay"],
        variant: "retail",

        joining_fee: 499,
        annual_fee: 499,
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

        supports_upi: true,
        upi_notes: "UPI supported on RuPay variant",
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
                merchants: ["department_store", "grocery", "movie", "dining"],
                category: "shopping",
                multiplier: null,
                fixed_reward: null,
                cap: null,
                period: null,
                spend_threshold: null,
                notes: "Accelerated rewards on select categories"
            }
        ],

        status: "active"
    },

    {
        id: "sbi_simplyclick",
        name: "SBI SimplyCLICK Credit Card",
        bank: "SBI",
        card_segment: "entry_level",
        network: ["Visa"],
        variant: "retail",

        joining_fee: 499,
        annual_fee: 499,
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
        supports_vouchers: true,

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
                merchants: ["amazon", "flipkart", "cleartrip"],
                category: "shopping",
                multiplier: null,
                fixed_reward: null,
                cap: null,
                period: null,
                spend_threshold: null,
                notes: "Accelerated rewards on online partners"
            }
        ],

        status: "active"
    },

    /* ============================================================================
       FUEL
    ============================================================================ */

    {
        id: "sbi_bpcl",
        name: "BPCL SBI Credit Card",
        bank: "SBI",
        card_segment: "fuel",
        network: ["Visa"],
        variant: "co_branded",

        joining_fee: 499,
        annual_fee: 499,
        fee_waiver: {
            spend_threshold: 50000,
            period: "annual",
            notes: "Fee waived on ₹50k spends"
        },

        reward_type: "points",
        base_earn: {
            rate: 1 / 100,
            unit: "per_rupee",
            notes: "1 RP per ₹100 on non-fuel spends"
        },
        reward_value: {
            per_unit_inr: 0.25,
            notes: "Fuel redemption"
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
                merchants: ["bpcl"],
                category: "fuel",
                multiplier: null,
                fixed_reward: null,
                cap: 200,
                period: "monthly",
                spend_threshold: null,
                notes: "Fuel benefits + surcharge waiver at BPCL"
            }
        ],

        status: "active"
    },

    {
        id: "sbi_bpcl_octane",
        name: "BPCL SBI Card OCTANE",
        bank: "SBI",
        card_segment: "fuel",
        network: ["Visa"],
        variant: "co_branded",

        joining_fee: 1499,
        annual_fee: 1499,
        fee_waiver: {
            spend_threshold: 200000,
            period: "annual",
            notes: "Fee waived on ₹2L spends"
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
            domestic: 4,
            international: null,
            access_type: "complimentary",
            spend_threshold: null,
            network: ["Visa"],
            notes: "Domestic lounges"
        },

        rules: [
            {
                type: "direct",
                platform: null,
                merchants: ["bpcl"],
                category: "fuel",
                multiplier: null,
                fixed_reward: null,
                cap: 300,
                period: "monthly",
                spend_threshold: null,
                notes: "Higher fuel rewards & surcharge waiver"
            }
        ],

        status: "active"
    },

    /* ============================================================================
       HEALTH / FITNESS
    ============================================================================ */

    {
        id: "sbi_pulse",
        name: "SBI Card PULSE",
        bank: "SBI",
        card_segment: "lifestyle",
        network: ["Visa"],
        variant: "retail",

        joining_fee: 1499,
        annual_fee: 1499,
        fee_waiver: {
            spend_threshold: 200000,
            period: "annual",
            notes: "Fee waived on ₹2L spends"
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
        supports_vouchers: true,

        base_exclusions: ["fuel", "wallet", "rent", "gov", "emi"],

        lounge: {
            domestic: 4,
            international: null,
            access_type: "complimentary",
            spend_threshold: null,
            network: ["Visa"],
            notes: "Domestic lounges"
        },

        rules: [],

        status: "active"
    },

    /* ============================================================================
       TRAVEL / MILES
    ============================================================================ */

    {
        id: "sbi_miles",
        name: "SBI Card Miles",
        bank: "SBI",
        card_segment: "travel",
        network: ["Visa"],
        variant: "retail",

        joining_fee: 4999,
        annual_fee: 4999,
        fee_waiver: {
            spend_threshold: null,
            period: null,
            notes: "No spend waiver"
        },

        reward_type: "miles",
        base_earn: {
            rate: 2 / 100,
            unit: "per_rupee",
            notes: "2 Travel Miles per ₹100"
        },
        reward_value: {
            per_unit_inr: null,
            notes: "Redeemable across airline & hotel partners"
        },

        supports_upi: false,
        upi_notes: null,
        supports_vouchers: true,

        base_exclusions: ["fuel", "wallet", "rent", "gov", "emi"],

        lounge: {
            domestic: 4,
            international: 4,
            access_type: "complimentary",
            spend_threshold: null,
            network: ["Priority Pass"],
            notes: "Annual limits"
        },

        rules: [],

        status: "active"
    },

    {
        id: "sbi_miles_prime",
        name: "SBI Card Miles PRIME",
        bank: "SBI",
        card_segment: "travel",
        network: ["Visa"],
        variant: "retail",

        joining_fee: 9999,
        annual_fee: 9999,
        fee_waiver: {
            spend_threshold: null,
            period: null,
            notes: "No waiver"
        },

        reward_type: "miles",
        base_earn: {
            rate: 3 / 100,
            unit: "per_rupee",
            notes: "3 Travel Miles per ₹100"
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
            notes: "Unlimited lounge access"
        },

        rules: [],

        status: "active"
    },

    /* ============================================================================
       SUPER PREMIUM
    ============================================================================ */

    {
        id: "sbi_aurum",
        name: "SBI Card AURUM",
        bank: "SBI",
        card_segment: "super_premium",
        network: ["Visa", "Mastercard"],
        variant: "retail",

        joining_fee: 9999,
        annual_fee: 9999,
        fee_waiver: {
            spend_threshold: null,
            period: null,
            notes: "No fee waiver"
        },

        reward_type: "points",
        base_earn: {
            rate: 4 / 100,
            unit: "per_rupee",
            notes: "4 Reward Points per ₹100"
        },
        reward_value: {
            per_unit_inr: 0.25,
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
            notes: "Unlimited lounge access for primary & add-on"
        },

        rules: [
            {
                type: "portal",
                platform: "sbi_rewards",
                merchants: [],
                category: "shopping",
                multiplier: 10,
                fixed_reward: null,
                cap: null,
                period: null,
                spend_threshold: null,
                notes: "Accelerated rewards via SBI Card Rewards"
            }
        ],

        status: "active"
    },

    /* ============================================================================
       RAILWAYS / TRAVEL
    ============================================================================ */

    {
        id: "sbi_irctc",
        name: "SBI Card IRCTC",
        bank: "SBI",
        card_segment: "travel",
        network: ["RuPay"],
        variant: "co_branded",

        joining_fee: 500,
        annual_fee: 300,
        fee_waiver: {
            spend_threshold: null,
            period: null,
            notes: "No spend-based waiver"
        },

        reward_type: "points",
        base_earn: {
            rate: 1 / 100,
            unit: "per_rupee",
            notes: "1 RP per ₹100 on non-IRCTC spends"
        },
        reward_value: {
            per_unit_inr: 0.25,
            notes: "Redeemable on IRCTC"
        },

        supports_upi: true,
        upi_notes: "UPI supported via RuPay Credit on UPI",
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
                fixed_reward: null,
                cap: null,
                period: null,
                spend_threshold: null,
                notes: "Reward points on IRCTC bookings"
            }
        ],

        status: "active"
    },

    /* ============================================================================
       RUPAY CORE (UPI ENABLED)
    ============================================================================ */

    {
        id: "sbi_simplysave_rupay",
        name: "SBI SimplySAVE RuPay Credit Card",
        bank: "SBI",
        card_segment: "entry_level",
        network: ["RuPay"],
        variant: "retail",

        joining_fee: 499,
        annual_fee: 499,
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

        supports_upi: true,
        upi_notes: "Full UPI interoperability via RuPay Credit",
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
    }

];
