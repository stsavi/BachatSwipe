// ui/formHandler.js
// Form input handling and population

/**
 * Form Handler Module
 * Manages form inputs and user interactions
 */

import { SUPPORTED_MERCHANTS } from '../config/merchants.js';
import { SUPPORTED_CATEGORIES } from '../config/categories.js';

export class FormHandler {
    constructor() {
        this.elements = {};
    }

    /**
     * Initialize form handler with DOM elements
     */
    init() {
        try {
            this.elements = {
                amount: this.getElement('amount'),
                merchant: this.getElement('merchant'),
                category: this.getElement('category'),
                cardSearch: this.getElement('card_search'),
                cardList: this.getElement('card_list'),
                submitButton: this.getElement('submit-button'),
                loadingSpinner: this.getElement('loading-spinner')
            };
        } catch (error) {
            throw new Error('Failed to initialize form: ' + error.message);
        }
    }

    /**
     * Get DOM element with error handling
     */
    getElement(id) {
        const element = document.getElementById(id);
        if (!element) {
            throw new Error(`Required element #${id} not found`);
        }
        return element;
    }

    /**
     * Get form values
     */
    getFormValues() {
        return {
            amount: this.elements.amount.value,
            merchant: this.elements.merchant.value,
            category: this.elements.category.value,
            cardSearch: this.elements.cardSearch.value.trim()
        };
    }

    /**
     * Populate merchant dropdown
     */
    populateMerchantDropdown() {
        const merchantSelect = this.elements.merchant;
        // Keep the first "Select merchant" option
        merchantSelect.innerHTML = '<option value="">Select merchant</option>';

        SUPPORTED_MERCHANTS.forEach(merchant => {
            const option = document.createElement('option');
            option.value = merchant.value;
            option.textContent = merchant.label;
            merchantSelect.appendChild(option);
        });

        // Ensure default selection
        if (merchantSelect.options.length > 0) {
            merchantSelect.selectedIndex = 0;
        }
    }

    /**
     * Populate category dropdown
     */
    populateCategoryDropdown() {
        const categorySelect = this.elements.category;
        categorySelect.innerHTML = '';

        SUPPORTED_CATEGORIES.forEach((category, index) => {
            const option = document.createElement('option');
            option.value = category.value;
            option.textContent = category.label;
            // Select first category by default
            if (index === 0) option.selected = true;
            categorySelect.appendChild(option);
        });

        // Ensure default selection
        if (categorySelect.options.length > 0) {
            categorySelect.selectedIndex = 0;
        }
    }

    /**
     * Populate card list dropdown
     */
    populateCardList(cards) {
        if (!Array.isArray(cards)) {
            throw new Error('Invalid cards data');
        }

        const cardList = this.elements.cardList;
        cardList.innerHTML = ''; // Clear existing options

        // Sort cards alphabetically
        const sortedCards = [...cards].sort((a, b) =>
            a.name.localeCompare(b.name)
        );

        sortedCards.forEach(card => {
            const option = document.createElement('option');
            option.value = card.name;
            option.setAttribute('data-id', card.id);
            cardList.appendChild(option);
        });
    }

    /**
     * Show loading state
     */
    showLoading() {
        if (this.elements.loadingSpinner) {
            this.elements.loadingSpinner.classList.add('active');
        }
        if (this.elements.submitButton) {
            this.elements.submitButton.disabled = true;
        }
    }

    /**
     * Hide loading state
     */
    hideLoading() {
        if (this.elements.loadingSpinner) {
            this.elements.loadingSpinner.classList.remove('active');
        }
        if (this.elements.submitButton) {
            this.elements.submitButton.disabled = false;
        }
    }

    /**
     * Reset form to defaults
     */
    reset() {
        if (this.elements.amount) this.elements.amount.value = '10000';
        if (this.elements.merchant) this.elements.merchant.value = '';
        if (this.elements.category) this.elements.category.value = 'shopping';
        if (this.elements.cardSearch) this.elements.cardSearch.value = '';
    }

    /**
     * Disable form inputs
     */
    disable() {
        Object.values(this.elements).forEach(element => {
            if (element && element.disabled !== undefined) {
                element.disabled = true;
            }
        });
    }

    /**
     * Enable form inputs
     */
    enable() {
        Object.values(this.elements).forEach(element => {
            if (element && element.disabled !== undefined) {
                element.disabled = false;
            }
        });
    }
}

export default FormHandler;
