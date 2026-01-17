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
      <div class="flex justify-between items-center p-2 text-sm border-b border-white/5 last:border-0 hover:bg-white/5 rounded">
        <div class="flex items-center gap-2">
          <span>${this.getMethodIcon(path.method)}</span>
          <div>
            <div class="text-slate-200 font-medium">${this.escapeHTML(path.pathDescription)}</div>
            <div class="text-xs text-slate-500">${this.escapeHTML(path.explanation)}</div>
          </div>
        </div>
        <div class="text-right">
          <div class="text-white font-mono">₹${Math.round(path.value)}</div>
          <div class="text-[10px] text-slate-500">${path.percentageReturn.toFixed(2)}%</div>
        </div>
      </div>
    `).join('');

        return `
      <div class="mb-3 rounded-xl overflow-hidden transition-all duration-300 ${isWinner ? 'bg-slate-800 gold-glow' : 'bg-slate-800/40 border border-slate-700/50'}">
        
        <div onclick="window.toggleDetails(${index})" class="relative p-4 flex justify-between items-center cursor-pointer hover:bg-slate-800/60 transition">
          ${isWinner ? '<div class="absolute -top-3 -left-2 bg-yellow-500 text-black text-[10px] font-bold px-2 py-0.5 rounded shadow">🏆 #1 BEST CHOICE</div>' : ''}
          
          <div class="flex items-center gap-4">
            <div class="w-10 h-10 rounded-full bg-slate-700 flex items-center justify-center text-xl shadow-inner">
              ${bestPath.value > 0 ? (card.reward_type === 'cashback' ? '💵' : '💎') : '⚠️'}
            </div>
            <div>
              <h3 class="font-bold text-white text-lg leading-tight">
                ${this.escapeHTML(card.name)} 
                <span class="text-[10px] uppercase bg-slate-900 text-slate-400 px-1.5 py-0.5 rounded ml-1 border border-slate-700">${this.escapeHTML(card.bank)}</span>
              </h3>
              <div class="text-sm text-gray-300 mt-1 flex items-center gap-1">
                <span class="text-xs bg-blue-900/30 text-blue-300 px-1.5 rounded border border-blue-500/20">${this.escapeHTML(bestPath.method)}</span>
                <span class="text-xs text-slate-500">• ${this.escapeHTML(bestPath.explanation)}</span>
              </div>
            </div>
          </div>

          <div class="text-right flex items-center gap-4">
            <div>
              <div class="text-2xl font-bold ${valueColor}">₹${Math.round(bestPath.value)}</div>
              <div class="text-xs font-mono text-slate-500 bg-slate-900/50 px-2 py-0.5 rounded inline-block mt-1">
                ${bestPath.percentageReturn.toFixed(2)}% Return
              </div>
            </div>
            <i id="chev-${index}" class="fas fa-chevron-down text-slate-600 chevron"></i>
          </div>
        </div>

        <div id="strat-${index}" class="strategies-box bg-slate-900/50 px-4">
          ${otherPaths.length > 0 ? `<div class="text-[10px] uppercase font-bold text-slate-600 mb-2">📊 Alternative Payment Paths (${otherPaths.length})</div>` : '<div class="text-xs text-slate-500 text-center py-2">No alternative paths available</div>'}
          ${otherPathsHTML}
        </div>
      </div>`;
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
     * Get icon for payment method
     */
    getMethodIcon(method) {
        const icons = {
            'direct': '💳',
            'portal': '🌐',
            'voucher': '🎟️'
        };
        return icons[method] || '💳';
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
