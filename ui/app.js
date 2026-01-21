// ui/app.js
// Main application controller

/**
 * Application Controller
 * Orchestrates all UI modules and engine interaction
 */

import engine from '../engine/index.js';
import { InputValidator, ValidationError } from './validator.js';
import { errorHandler, CriticalError } from './errorHandler.js';
import FormHandler from './formHandler.js';
import ResultsRenderer from './resultsRenderer.js';

export class App {
    constructor() {
        this.engineReady = false;
        this.formHandler = new FormHandler();
        this.resultsRenderer = new ResultsRenderer();
    }

    /**
     * Initialize application
     */
    async init() {
        try {
            console.log('Initializing BachatSwipe...');

            // Initialize error handler
            errorHandler.init();

            // Initialize UI components
            this.formHandler.init();
            this.resultsRenderer.init();

            // Initialize engine
            await this.initEngine();

            // Set up event listeners
            this.setupEventListeners();

            console.log('Application ready!');

        } catch (error) {
            console.error('Failed to initialize application:', error);
            errorHandler.handleEngineError(error);
            this.formHandler.disable();
        }
    }

    /**
     * Initialize recommendation engine
     */
    async initEngine() {
        try {
            await engine.initialize();
            this.engineReady = true;

            // Populate dropdowns
            this.formHandler.populateMerchantDropdown();
            this.formHandler.populateCategoryDropdown();

            // Populate card list
            const cards = engine.getAllCards();
            this.formHandler.populateCardList(cards);

        } catch (error) {
            throw new CriticalError('Failed to load recommendation engine: ' + error.message);
        }
    }

    /**
     * Set up event listeners
     */
    setupEventListeners() {
        // Make analyze function globally available
        window.runEngine = () => this.analyze();

        // Toggle details function
        window.toggleDetails = (id) => {
            const stratBox = document.getElementById(`strat-${id}`);
            const chevron = document.getElementById(`chev-${id}`);
            if (stratBox) stratBox.classList.toggle('open');
            if (chevron) chevron.classList.toggle('open');
        };
    }

    /**
     * Main analysis function
     */
    async analyze() {
        if (!this.engineReady) {
            errorHandler.showError('Engine not ready. Please wait or refresh the page.');
            return;
        }

        try {
            // Clear previous errors
            errorHandler.hideError();

            // Show loading state
            this.formHandler.showLoading();

            // Get and validate inputs
            const formValues = this.formHandler.getFormValues();
            const transaction = InputValidator.validateTransaction(formValues);

            // Validate card search
            const cards = engine.getAllCards();
            const cardId = InputValidator.validateCardSearch(formValues.cardSearch, cards);
            const userCardIds = cardId ? [cardId] : null;

            // Get recommendation
            const result = engine.getRecommendation(transaction, userCardIds, { showAll: true });

            // Render results
            this.resultsRenderer.render(result);

        } catch (error) {
            if (error instanceof ValidationError) {
                errorHandler.handleValidationError(error);
            } else {
                errorHandler.handleRecommendationError(error);
            }
        } finally {
            this.formHandler.hideLoading();
        }
    }
}

// Create and export app instance
export const app = new App();
export default app;
