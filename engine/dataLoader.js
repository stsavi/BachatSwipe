// engine/dataLoader.js
// Loads and validates all card and rule data

/**
 * Data Loader Module
 * Responsible for importing all cards and rules data and providing unified access
 */

import { HDFC_CARDS } from '../cards_data/hdfc_cards_data.js';
import { axisCardsData } from '../cards_data/axis_cards_data.js';
import { iciciCardsData } from '../cards_data/icici_cards_data.js';
import { sbiCardsData } from '../cards_data/sbi_cards_data.js';

// Import HDFC rules
import { HDFC_CASHBACK_RULES } from '../rules/hdfc/cashback.js';
import { HDFC_DIRECT_ACCELERATED_RULES } from '../rules/hdfc/direct_merchant_accelerated_rewards.js';
import { HDFC_PORTAL_RULES } from '../rules/hdfc/portal.js';
import { HDFC_VOUCHER_RULES } from '../rules/hdfc/vouchers.js';

// Import Axis rules
import { axisCashbackRules } from '../rules/axis/cashback.js';
import { axisDirectAcceleratedRules } from '../rules/axis/direct_merchant_accelerated_rewards.js';
import { axisPortalRules } from '../rules/axis/portal.js';
import { axisVoucherRules } from '../rules/axis/vouchers.js';

// Import ICICI rules
import { iciciCashbackRules } from '../rules/icici/cashback.js';
import { iciciDirectAcceleratedRules } from '../rules/icici/direct_merchant_accelerated_rewards.js';
import { iciciPortalRules } from '../rules/icici/portal.js';
import { iciciVoucherRules } from '../rules/icici/vouchers.js';

// Import SBI rules
import { sbiCashbackRules } from '../rules/sbi/cashback.js';
import { sbiDirectAcceleratedRules } from '../rules/sbi/direct_merchant_accelerated_rewards.js';
import { sbiPortalRules } from '../rules/sbi/portal.js';
import { sbiVoucherRules } from '../rules/sbi/vouchers.js';

/**
 * Unified card data structure
 */
class DataLoader {
    constructor() {
        this.cards = [];
        this.rules = [];
        this.cardsById = new Map();
        this.rulesByBank = new Map();
        this.initialized = false;
    }

    /**
     * Initialize and load all data
     */
    async initialize() {
        if (this.initialized) {
            console.warn('DataLoader already initialized');
            return;
        }

        try {
            // Load all cards
            this.cards = [
                ...HDFC_CARDS,
                ...axisCardsData,
                ...iciciCardsData,
                ...sbiCardsData
            ];

            // Load all rules
            this.rules = [
                ...HDFC_CASHBACK_RULES,
                ...HDFC_DIRECT_ACCELERATED_RULES,
                ...HDFC_PORTAL_RULES,
                ...HDFC_VOUCHER_RULES,
                ...axisCashbackRules,
                ...axisDirectAcceleratedRules,
                ...axisPortalRules,
                ...axisVoucherRules,
                ...iciciCashbackRules,
                ...iciciDirectAcceleratedRules,
                ...iciciPortalRules,
                ...iciciVoucherRules,
                ...sbiCashbackRules,
                ...sbiDirectAcceleratedRules,
                ...sbiPortalRules,
                ...sbiVoucherRules
            ];

            // Build index maps
            this._buildCardIndex();
            this._buildRuleIndex();

            // Validate data
            this._validateData();

            this.initialized = true;
            console.log(`DataLoader initialized: ${this.cards.length} cards, ${this.rules.length} rules`);
        } catch (error) {
            console.error('Failed to initialize DataLoader:', error);
            throw error;
        }
    }

    /**
     * Build card index for fast lookup
     */
    _buildCardIndex() {
        this.cardsById.clear();
        for (const card of this.cards) {
            if (this.cardsById.has(card.id)) {
                console.warn(`Duplicate card ID: ${card.id}`);
            }
            this.cardsById.set(card.id, card);
        }
    }

    /**
     * Build rule index by bank
     */
    _buildRuleIndex() {
        this.rulesByBank.clear();
        for (const rule of this.rules) {
            if (!this.rulesByBank.has(rule.bank)) {
                this.rulesByBank.set(rule.bank, []);
            }
            this.rulesByBank.get(rule.bank).push(rule);
        }
    }

    /**
     * Validate loaded data
     */
    _validateData() {
        let errors = [];

        // Validate cards
        for (const card of this.cards) {
            if (!card.id || !card.name || !card.bank) {
                errors.push(`Invalid card: ${JSON.stringify(card)}`);
            }
            if (typeof card.base_rate !== 'number' || card.base_rate < 0) {
                errors.push(`Invalid base_rate for card ${card.id}: ${card.base_rate}`);
            }
            if (typeof card.value_per_unit !== 'number' || card.value_per_unit <= 0) {
                errors.push(`Invalid value_per_unit for card ${card.id}: ${card.value_per_unit}`);
            }
        }

        // Validate rules
        for (const rule of this.rules) {
            if (!rule.id || !rule.bank || !rule.rule_type) {
                errors.push(`Invalid rule: ${JSON.stringify(rule)}`);
            }

            const hasMap = rule.reward_multiplier_map || rule.cashback_rate_map || rule.instant_discount_rate_map;
            if (!hasMap) {
                errors.push(`Rule ${rule.id} has no applicable card maps`);
            }
        }

        if (errors.length > 0) {
            console.error('Data validation errors:', errors);
            throw new Error(`Data validation failed: ${errors.length} errors found`);
        }

        console.log('Data validation passed');
    }

    /**
     * Get all cards
     */
    getAllCards() {
        return this.cards;
    }

    /**
     * Get card by ID
     */
    getCardById(cardId) {
        return this.cardsById.get(cardId);
    }

    /**
     * Get all cards from a specific bank
     */
    getCardsByBank(bank) {
        return this.cards.filter(card => card.bank === bank);
    }

    /**
     * Get all rules
     */
    getAllRules() {
        return this.rules;
    }

    /**
     * Get rules by bank
     */
    getRulesByBank(bank) {
        return this.rulesByBank.get(bank) || [];
    }

    /**
     * Get rules by type
     */
    getRulesByType(ruleType) {
        return this.rules.filter(rule => rule.rule_type === ruleType);
    }

    /**
     * Get statistics
     */
    getStats() {
        return {
            totalCards: this.cards.length,
            totalRules: this.rules.length,
            cardsByBank: {
                HDFC: this.getCardsByBank('HDFC').length,
                'Axis Bank': this.getCardsByBank('Axis Bank').length,
                'ICICI Bank': this.getCardsByBank('ICICI Bank').length,
                'SBI Card': this.getCardsByBank('SBI Card').length
            },
            rulesByType: {
                cashback: this.getRulesByType('cashback').length,
                direct_merchant_accelerated: this.getRulesByType('direct_merchant_accelerated').length,
                portal: this.getRulesByType('portal').length,
                voucher: this.getRulesByType('voucher').length
            }
        };
    }
}

// Export singleton instance
export const dataLoader = new DataLoader();
export default dataLoader;
