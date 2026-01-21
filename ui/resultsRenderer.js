// ui/resultsRenderer.js
// Results display and rendering

/**
 * Results Renderer Module
 * Handles rendering of recommendation results
 */

export class ResultsRenderer {
  constructor() {
    this.container = null;
    this.title = null;
  }

  /**
   * Initialize renderer with DOM elements
   */
  init() {
    this.container = document.getElementById('results');
    this.title = document.getElementById('result_title');

    if (!this.container) {
      throw new Error('Results container not found');
    }
  }

  /**
   * Render results
   * @param {Object} result - Engine result object
   */
  render(result) {
    if (!result || !result.results) {
      this.showNoResults();
      return;
    }

    // Clear previous results
    this.container.innerHTML = '';

    // Show title
    if (this.title) {
      this.title.classList.remove('hidden');
    }

    // Group results by card
    const cardGroups = this.groupByCard(result.results);

    // Take top 10 unique cards
    const topCards = Array.from(cardGroups.values()).slice(0, 10);

    if (topCards.length === 0) {
      this.showNoResults();
      return;
    }

    // Render each card
    topCards.forEach((cardGroup, index) => {
      this.renderCard(cardGroup, index);
    });
  }

  /**
   * Group results by card
   */
  groupByCard(results) {
    const groups = new Map();

    results.forEach(path => {
      const cardId = path.card.id;
      if (!groups.has(cardId)) {
        groups.set(cardId, {
          card: path.card,
          paths: []
        });
      }
      groups.get(cardId).paths.push(path);
    });

    return groups;
  }

  /**
   * Render a single card with all its paths
   */
  renderCard(cardGroup, index) {
    const isWinner = index === 0;
    const bestPath = cardGroup.paths[0];
    const otherPaths = cardGroup.paths.slice(1);
    const card = cardGroup.card;

    const isCashback = card.reward_type === 'cashback';
    const valueColor = isCashback ? 'text-green-400' : 'text-blue-400';

    const cardHTML = this.buildCardHTML(card, bestPath, otherPaths, isWinner, index, valueColor);
    this.container.innerHTML += cardHTML;
  }

  /**
   * Build HTML for a card
   */
  buildCardHTML(card, bestPath, otherPaths, isWinner, index, valueColor) {
    const otherPathsHTML = otherPaths.map(path => `
      <div style="display: flex; justify-content: space-between; align-items: center; padding: 0.75rem; font-size: 0.875rem; border-bottom: 1px solid var(--border-light); transition: background 0.2s;">
        <div style="display: flex; align-items: center; gap: 0.5rem; flex: 1;">
          <div style="min-width: 40px; display: flex; justify-content: center;">${this.getMethodIcon(path.method, path.pathDescription)}</div>
          <div style="flex: 1;">
            <div style="color: var(--dark-sky); font-weight: 500;">${this.escapeHTML(path.pathDescription)}</div>
            <div style="font-size: 0.75rem; color: var(--slate-gray); margin-top: 0.25rem;">${this.escapeHTML(path.explanation)}</div>
          </div>
        </div>
        <div style="text-align: right; min-width: 100px;">
          <div style="color: var(--sky-blue); font-weight: 700; font-size: 1rem;">₹${Math.round(path.value)}</div>
          <div style="font-size: 0.625rem; color: var(--slate-gray);">${path.percentageReturn.toFixed(2)}%</div>
        </div>
      </div>
    `).join('');

    return `
      <div class="result-card ${isWinner ? 'best-card' : ''}" style="padding-bottom: 1rem;">
        ${isWinner ? '<div class="best-value-badge">Best Value</div>' : ''}
        
        <div onclick="const btn = this.parentElement.querySelector('.select-btn'); if(btn) { window.toggleDetails(${index}); btn.textContent = btn.textContent.trim() === 'Select' ? 'Hide' : 'Select'; }" class="card-header cursor-pointer">
          <div class="card-info">
            <div class="card-logo">
              ${this.getBankInitial(card.bank)}
            </div>
            <div>
              <div class="card-name">${this.escapeHTML(card.name)}</div>
              <div class="card-bank">${this.escapeHTML(card.bank)}</div>
            </div>
          </div>
          <div class="text-right">
            <div class="reward-value">₹${Math.round(bestPath.value)}</div>
            <div style="font-size: 0.75rem; color: var(--slate-gray); margin-top: 0.25rem;">
              ${bestPath.percentageReturn.toFixed(2)}% return
            </div>
          </div>
        </div>

        <!-- Best Usage Highlight (Always Visible) - Click does nothing -->
        <div style="margin: 0 1.5rem 1rem 1.5rem; padding: 1rem; background: var(--sky-gray); border-radius: 8px; border-left: 4px solid var(--sky-blue); cursor: default;">
          <div style="display: flex; align-items: flex-start; gap: 1rem;">
            <div style="min-width: 40px; display: flex; justify-content: center; padding-top: 2px;">
              ${this.getMethodIcon(bestPath.method, bestPath.pathDescription)}
            </div>
            <div>
              <div style="font-weight: 700; color: var(--dark-sky); font-size: 1rem; margin-bottom: 0.25rem;">
                ${this.escapeHTML(bestPath.pathDescription)}
              </div>
              <div style="font-size: 0.875rem; color: var(--slate-gray); line-height: 1.4;">
                ${this.escapeHTML(bestPath.explanation)}
              </div>
            </div>
          </div>
        </div>

        <div id="strat-${index}" class="strategies-box">
          <div class="card-details" style="padding-top: 0;">
            ${otherPaths.length > 0 ? `
              <div style="font-weight: 600; margin-bottom: 0.5rem; color: var(--dark-sky); border-top: 1px solid var(--border-light); padding-top: 1rem; margin-top: 0; padding-left: 1.5rem; padding-right: 1.5rem;">
                Alternative Paths (${otherPaths.length})
              </div>
              <div style="padding-left: 0.75rem; padding-right: 0.75rem;">
                ${otherPathsHTML}
              </div>
            ` : `
              <div style="font-style: italic; color: var(--slate-gray); border-top: 1px solid var(--border-light); padding: 1rem 1.5rem; margin-top: 0;">
                There is no alternative way to pay using this card.
              </div>
            `}
          </div>
        </div>
        
        <div style="text-align: right; margin-top: 0.5rem; padding: 0 1.5rem;">
          <button class="select-btn" onclick="window.toggleDetails(${index}); this.textContent = this.textContent.trim() === 'Select' ? 'Hide' : 'Select';">
            Select
          </button>
        </div>
      </div>`;
  }

  /**
   * Get bank initial for logo
   */
  getBankInitial(bank) {
    const bankName = bank.toLowerCase();
    const bankLogos = {
      'hdfc': 'metadata/images/hdfc_logo.jpg',
      'axis': 'metadata/images/axis_logo.jpg',
      'icici': 'metadata/images/icici_logo.jpg',
      'sbi': 'metadata/images/sbi_logo.jpg'
    };

    // Find matching key
    const match = Object.keys(bankLogos).find(key => bankName.includes(key));
    const logoFile = match ? bankLogos[match] : null;

    if (logoFile) {
      return `<img src="${logoFile}" alt="${bank}" onerror="this.style.display='none'; this.parentElement.textContent='${bank.charAt(0)}';">`;
    }
    return bank.charAt(0).toUpperCase();
  }

  /**
   * Show no results message
   */
  showNoResults() {
    this.container.innerHTML = '<div class="text-gray-500 text-center py-4">No rewards found for this transaction.</div>';
    if (this.title) {
      this.title.classList.remove('hidden');
    }
  }

  /**
   * Clear results
   */
  clear() {
    this.container.innerHTML = '';
    if (this.title) {
      this.title.classList.add('hidden');
    }
  }

  /**
   * Get icon image for payment method
   */
  getMethodIcon(method, description = '') {
    let iconSrc = 'metadata/images/card_img.jpg'; // Default to card image

    if (method === 'direct') {
      iconSrc = 'metadata/images/card_img.jpg';
    } else if (method === 'voucher') {
      iconSrc = 'metadata/images/voucher_img.jpg';
    } else if (method === 'portal') {
      const descLower = description.toLowerCase();
      if (descLower.includes('smartbuy')) {
        iconSrc = 'metadata/images/smartbuy_logo.jpg';
      } else if (descLower.includes('grab deals')) {
        iconSrc = 'metadata/images/grabdeals_icon.jpg';
      } else if (descLower.includes('ishop')) {
        iconSrc = 'metadata/images/ishop_logo.jpg';
      } else if (descLower.includes('rewardz')) {
        iconSrc = 'metadata/images/sbi_logo.jpg';
      } else {
        // Fallback for generic portals if any
        iconSrc = 'metadata/images/card_img.jpg';
      }
    }

    return `<img src="${iconSrc}" alt="${method}" style="width: 32px; height: 32px; object-fit: contain; border-radius: 4px;">`;
  }

  /**
   * Escape HTML to prevent XSS
   */
  escapeHTML(str) {
    if (typeof str !== 'string') return '';
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
  }
}

export default ResultsRenderer;
