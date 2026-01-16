// config/bank_platforms.js
// Central configuration for bank portals, categories, and constants

// ============================================================
// BANK PORTAL NAMES
// ============================================================

export const BANK_PORTALS = {
    HDFC: {
        portal: "SmartBuy",
        voucher_platform: "SmartBuy (GyFTR)",
        url: "https://offers.smartbuy.hdfcbank.com/"
    },
    AXIS: {
        portal: "Travel Edge",
        voucher_platform: "EDGE Rewards (GyFTR)",
        url: "https://www.traveledge.axisbank.com/"
    },
    ICICI: {
        portal: "PayWith Rewards",
        voucher_platform: "PayWith Rewards",
        url: "https://www.icicibank.com/personal-banking/cards/credit-card/paywith-rewards"
    },
    SBI: {
        portal: "SBI Rewardz",
        voucher_platform: "SBI Rewardz",
        url: "https://www.sbirewardz.com/"
    }
};

// ============================================================
// VOUCHER MERCHANTS (Restricted List)
// ============================================================

export const VOUCHER_MERCHANTS = [
    "amazon",
    "flipkart",
    "swiggy",
    "zomato",
    "tata_neu",
    "bigbasket"
];

// Human-readable merchant names
export const MERCHANT_DISPLAY_NAMES = {
    amazon: "Amazon",
    flipkart: "Flipkart",
    swiggy: "Swiggy",
    zomato: "Zomato",
    tata_neu: "Tata Neu",
    bigbasket: "BigBasket"
};

// ============================================================
// EXPENSE CATEGORIES
// ============================================================

export const EXPENSE_CATEGORIES = {
    // Shopping
    SHOPPING: "shopping",
    ONLINE_SHOPPING: "online_shopping",
    GROCERY: "grocery",
    OFFLINE_SHOPPING: "offline_shopping",
    
    // Food & Dining
    DINING: "dining",
    FOOD_DELIVERY: "food_delivery",
    
    // Travel
    TRAVEL: "travel",
    FLIGHTS: "flights",
    HOTELS: "hotels",
    
    // Fuel & Transportation
    FUEL: "fuel",
    TRANSPORTATION: "transportation",
    
    // Entertainment
    ENTERTAINMENT: "entertainment",
    MOVIES: "movies",
    STREAMING: "streaming",
    
    // Utilities & Bills
    UTILITIES: "utilities",
    BILL_PAYMENTS: "bill_payments",
    MOBILE_RECHARGE: "mobile_recharge",
    
    // Others
    EDUCATION: "education",
    HEALTHCARE: "healthcare",
    INSURANCE: "insurance",
    RENT: "rent",
    GOVERNMENT: "government",
    WALLET: "wallet",
    EMI: "emi",
    
    // Special
    VOUCHER: "voucher",
    UPI: "upi"
};

// ============================================================
// CARD TIERS
// ============================================================

export const CARD_TIERS = {
    SUPER_PREMIUM: "super_premium",
    PREMIUM: "premium",
    CASHBACK: "cashback",
    TRAVEL: "travel",
    LIFESTYLE: "lifestyle",
    UPI: "upi",
    FUEL: "fuel",
    ENTRY: "entry"
};

// ============================================================
// REWARD TYPES
// ============================================================

export const REWARD_TYPES = {
    POINTS: "points",              // Generic reward points
    CASHBACK: "cashback",          // Direct cashback
    MILES: "miles",                // Airline miles
    EDGE_MILES: "edge_miles",      // Axis Edge Miles
    EDGE_REWARDS: "edge_rewards",  // Axis Edge Reward Points
    NEUCOINS: "neucoins",          // Tata NeuCoins
    CV_POINTS: "cv_points",        // Club Vistara Points
    FUEL_POINTS: "fuel_points"     // Fuel-specific points
};

// ============================================================
// REDEMPTION TYPES
// ============================================================

export const REDEMPTION_TYPES = {
    PORTAL: "portal",                    // Redeem via bank portal (SmartBuy, etc.)
    TRANSFER: "transfer",                // Transfer to partners (airlines, hotels)
    CASH: "cash",                        // Direct cash/wallet credit
    STATEMENT_CREDIT: "statement_credit", // Statement balance adjustment
    VOUCHERS: "vouchers",                // Redeem for vouchers
    SHOPPING: "shopping"                 // Redeem for products
};

// ============================================================
// REDEMPTION EASE SCORES
// ============================================================

export const REDEMPTION_EASE = {
    EASIEST: 1,      // Direct cashback, statement credit, wallet credit
    MODERATE: 2,     // Portal redemption, vouchers, shopping
    COMPLEX: 3       // Miles transfer, limited partners, manual booking
};

// ============================================================
// LOUNGE ACCESS TYPES
// ============================================================

export const LOUNGE_ACCESS_TYPES = {
    COMPLIMENTARY: "complimentary",  // Free with card
    SPEND_BASED: "spend_based",      // Based on quarterly/annual spend
    NONE: "none"                     // No lounge access
};

// ============================================================
// BENEFIT TYPES (for rules)
// ============================================================

export const BENEFIT_TYPES = {
    REWARD_MULTIPLIER: "reward_multiplier",   // Multiplies base rate
    CASHBACK: "cashback",                     // Fixed cashback percentage
    INSTANT_DISCOUNT: "instant_discount"      // Instant discount at checkout
};

// ============================================================
// RULE TYPES
// ============================================================

export const RULE_TYPES = {
    CASHBACK: "cashback",
    DIRECT_MERCHANT_ACCELERATED: "direct_merchant_accelerated",
    PORTAL: "portal",
    VOUCHER: "voucher"
};

// ============================================================
// CAP PERIODS
// ============================================================

export const CAP_PERIODS = {
    PER_TRANSACTION: "per_transaction",
    DAILY: "daily",
    WEEKLY: "weekly",
    MONTHLY: "monthly",
    QUARTERLY: "quarterly",
    ANNUAL: "annual"
};

// ============================================================
// BASE EXCLUSIONS (Common across most cards)
// ============================================================

export const COMMON_EXCLUSIONS = [
    "fuel",
    "wallet",
    "rent",
    "government",
    "emi",
    "utility"
];

// ============================================================
// RULE PRIORITIES (Default)
// ============================================================

export const RULE_PRIORITY = {
    PROMOTIONAL: 200,    // Time-limited promotional offers
    STANDARD: 100,       // Regular ongoing offers
    BASE: 50             // Fallback base rates
};

// ============================================================
// HELPER FUNCTIONS
// ============================================================

/**
 * Get portal name for a bank
 */
export function getPortalName(bank) {
    return BANK_PORTALS[bank.toUpperCase()]?.portal || "Portal";
}

/**
 * Get voucher platform name for a bank
 */
export function getVoucherPlatform(bank) {
    return BANK_PORTALS[bank.toUpperCase()]?.voucher_platform || "Voucher Platform";
}

/**
 * Check if merchant is eligible for voucher rules
 */
export function isVoucherMerchant(merchant) {
    return VOUCHER_MERCHANTS.includes(merchant.toLowerCase());
}

/**
 * Validate category
 */
export function isValidCategory(category) {
    return Object.values(EXPENSE_CATEGORIES).includes(category);
}

/**
 * Get display name for merchant
 */
export function getMerchantDisplayName(merchant) {
    return MERCHANT_DISPLAY_NAMES[merchant.toLowerCase()] || 
           merchant.charAt(0).toUpperCase() + merchant.slice(1);
}
