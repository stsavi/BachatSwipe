// ui/validator.js
// Input validation and sanitization

/**
 * Validator Module
 * Validates and sanitizes all user inputs
 */

export class InputValidator {
    /**
     * Validate transaction inputs
     * @param {Object} inputs - Raw form inputs
     * @returns {Object} Validated transaction or throws error
     */
    static validateTransaction(inputs) {
        const errors = [];

        // Validate amount
        if (!inputs.amount) {
            errors.push('Amount is required');
        } else {
            const amount = parseFloat(inputs.amount);
            if (isNaN(amount)) {
                errors.push('Amount must be a valid number');
            } else if (amount <= 0) {
                errors.push('Amount must be greater than 0');
            } else if (amount > 10000000) {
                errors.push('Amount cannot exceed ₹1 crore');
            }
        }

        // Validate category
        const validCategories = [
            'shopping', 'dining', 'grocery', 'travel', 'flights', 'hotels',
            'fuel', 'utility', 'upi', 'wallet', 'rent', 'government'
        ];
        if (!inputs.category) {
            errors.push('Category is required');
        } else if (!validCategories.includes(inputs.category)) {
            errors.push('Invalid category selected');
        }

        // Validate merchant (optional but must be from allowed list if provided)
        const validMerchants = ['', 'amazon', 'flipkart', 'swiggy', 'zomato', 'bigbasket', 'tata_neu'];
        if (inputs.merchant && !validMerchants.includes(inputs.merchant)) {
            errors.push('Invalid merchant selected');
        }

        if (errors.length > 0) {
            throw new ValidationError(errors.join('; '));
        }

        return {
            amount: parseFloat(inputs.amount),
            category: inputs.category,
            merchant: inputs.merchant || 'any'
        };
    }

    /**
     * Validate card search input
     * @param {string} cardName - Card name from search
     * @param {Array} availableCards - List of available cards
     * @returns {string|null} Card ID or null
     */
    static validateCardSearch(cardName, availableCards) {
        if (!cardName || cardName.trim() === '') {
            return null; // No card selected, show all
        }

        const card = availableCards.find(c => c.name === cardName);
        if (!card) {
            throw new ValidationError(`Card "${cardName}" not found`);
        }

        return card.id;
    }

    /**
     * Sanitize string input
     */
    static sanitizeString(input) {
        if (typeof input !== 'string') return '';
        return input.trim().toLowerCase();
    }
}

/**
 * Custom validation error
 */
export class ValidationError extends Error {
    constructor(message) {
        super(message);
        this.name = 'ValidationError';
    }
}

export default InputValidator;
