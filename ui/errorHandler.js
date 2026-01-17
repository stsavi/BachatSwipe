// ui/errorHandler.js
// Centralized error handling and display

/**
 * Error Handler Module
 * Manages error display and logging
 */

export class ErrorHandler {
    constructor() {
        this.errorBanner = null;
        this.errorMessage = null;
    }

    /**
     * Initialize error handler with DOM elements
     */
    init() {
        this.errorBanner = document.getElementById('error-banner');
        this.errorMessage = document.getElementById('error-message');

        if (!this.errorBanner || !this.errorMessage) {
            console.error('Error handler: Required DOM elements not found');
        }
    }

    /**
     * Show error message to user
     * @param {Error|string} error - Error object or message
     */
    showError(error) {
        const message = error instanceof Error ? error.message : String(error);

        console.error('Error:', error);

        if (this.errorBanner && this.errorMessage) {
            this.errorMessage.textContent = message;
            this.errorBanner.classList.remove('hidden');

            // Auto-hide after 10 seconds for non-critical errors
            if (!(error instanceof CriticalError)) {
                setTimeout(() => this.hideError(), 10000);
            }
        } else {
            // Fallback to alert if DOM not available
            alert('Error: ' + message);
        }
    }

    /**
     * Hide error banner
     */
    hideError() {
        if (this.errorBanner) {
            this.errorBanner.classList.add('hidden');
        }
    }

    /**
     * Handle engine initialization errors
     */
    handleEngineError(error) {
        console.error('Engine initialization failed:', error);
        this.showError(new CriticalError(
            'Failed to initialize recommendation engine. Please refresh the page. ' +
            'If the problem persists, check browser console for details.'
        ));
    }

    /**
     * Handle validation errors
     */
    handleValidationError(error) {
        this.showError(error);
    }

    /**
     * Handle recommendation errors
     */
    handleRecommendationError(error) {
        console.error('Recommendation error:', error);
        this.showError(
            'Failed to generate recommendations. Please try again with different inputs.'
        );
    }

    /**
     * Handle unexpected errors
     */
    handleUnexpectedError(error) {
        console.error('Unexpected error:', error);
        this.showError(
            'An unexpected error occurred. Please refresh the page and try again.'
        );
    }
}

/**
 * Critical error that requires user action
 */
export class CriticalError extends Error {
    constructor(message) {
        super(message);
        this.name = 'CriticalError';
    }
}

// Export singleton instance
export const errorHandler = new ErrorHandler();
export default errorHandler;
