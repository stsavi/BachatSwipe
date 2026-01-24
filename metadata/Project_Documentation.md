# 📚 BachatSwipe - Project Documentation

**Version:** 2.0  
**Last Updated:** January 24, 2026  
**Purpose:** Complete technical documentation for developers

---

## 📖 Table of Contents

1. [Project Overview](#project-overview)
2. [Architecture](#architecture)
3. [Directory Structure](#directory-structure)
4. [Core Features](#core-features)
5. [Technical Implementation](#technical-implementation)
6. [Data Models](#data-models)
7. [Development Guide](#development-guide)
8. [Testing](#testing)
9. [Deployment](#deployment)
10. [Troubleshooting](#troubleshooting)

---

## 🎯 Project Overview

**BachatSwipe** is an intelligent credit card optimization engine for India that helps users maximize rewards, cashback, and savings on every transaction.

### The Problem
India's credit card ecosystem is complex with rewards varying by:
- Bank Portals (SmartBuy, Travel Edge, etc.)
- Voucher Programs (GyFTR, Amazon vouchers)
- Merchant Categories (Dining, Travel, Shopping)
- Card Types (Cashback vs Reward Points vs Miles)

### The Solution
BachatSwipe evaluates all valid payment paths and recommends the optimal strategy:
1. **Direct Swipe** on merchant website
2. **Bank Portals** (e.g., buying via HDFC SmartBuy)
3. **Voucher Route** (e.g., buying vouchers via GyFTR)

### Supported Banks
- **HDFC Bank** (Infinia, Diners Black, Regalia, Millennia, etc.)
- **Axis Bank** (Magnus, Atlas, Ace, Flipkart, etc.)
- **ICICI Bank** (Sapphiro, Rubx, Amazon Pay, etc.)
- **SBI Cards** (Cashback, SimplyCLICK, Prime, etc.)

**Total:** 31 credit cards, 70+ reward rules

---

## 🏗️ Architecture

### High-Level Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                        User Interface                        │
│                         (index.html)                         │
└──────────────────────────┬──────────────────────────────────┘
                           │
                           ▼
┌─────────────────────────────────────────────────────────────┐
│                      UI Layer (ui/)                          │
│  ┌──────────┬──────────┬──────────┬──────────────────────┐  │
│  │  app.js  │validator │  error   │  resultsRenderer.js  │  │
│  │          │   .js    │Handler.js│                      │  │
│  └──────────┴──────────┴──────────┴──────────────────────┘  │
└──────────────────────────┬──────────────────────────────────┘
                           │
                           ▼
┌─────────────────────────────────────────────────────────────┐
│                   Engine Layer (engine/)                     │
│  ┌──────────┬──────────┬──────────┬──────────────────────┐  │
│  │dataLoader│calculator│  rule    │   pathGenerator.js   │  │
│  │   .js    │   .js    │Matcher.js│   pathEvaluator.js   │  │
│  └──────────┴──────────┴──────────┴──────────────────────┘  │
└──────────────────────────┬──────────────────────────────────┘
                           │
                           ▼
┌─────────────────────────────────────────────────────────────┐
│                  Data Layer (cards_data/, rules/)            │
│  ┌──────────────────┬──────────────────┬─────────────────┐  │
│  │  Card Definitions│  Reward Rules    │  Configuration  │  │
│  │  (31 cards)      │  (70+ rules)     │  (constants)    │  │
│  └──────────────────┴──────────────────┴─────────────────┘  │
└─────────────────────────────────────────────────────────────┘
```

### Module Responsibilities

#### UI Layer (`ui/`)
- **app.js**: Main application controller, orchestrates all UI interactions
- **validator.js**: Input validation and sanitization
- **errorHandler.js**: Centralized error management and display
- **formHandler.js**: Form state management
- **resultsRenderer.js**: Results rendering with HTML escaping

#### Engine Layer (`engine/`)
- **index.js**: Main orchestrator, exports public API
- **dataLoader.js**: Loads and validates card/rule data
- **calculator.js**: Core value calculation algorithm
- **ruleMatcher.js**: Finds applicable rules for transactions
- **pathGenerator.js**: Enumerates all possible payment paths
- **pathEvaluator.js**: Ranks paths by value and ease

#### Data Layer
- **cards_data/**: Card definitions (base rates, redemption values)
- **rules/**: Reward rules (multipliers, cashback rates, caps)
- **config/**: Global constants and configurations

---

## 📁 Directory Structure

```
BachatSwipe/
├── config/                      # Global constants
│   ├── bank_platforms.js        # Bank portal names, categories
│   ├── merchants.js             # Supported merchants
│   └── categories.js            # Expense categories
│
├── cards_data/                  # Card definitions (31 cards)
│   ├── hdfc_cards_data.js       # HDFC Bank cards
│   ├── axis_cards_data.js       # Axis Bank cards
│   ├── icici_cards_data.js      # ICICI Bank cards
│   └── sbi_cards_data.js        # SBI Cards
│
├── rules/                       # Reward rules (~70 rules)
│   ├── hdfc/
│   │   ├── cashback.js          # Direct cashback rules
│   │   ├── direct_merchant_accelerated_rewards.js
│   │   ├── portal.js            # SmartBuy portal rules
│   │   └── vouchers.js          # Voucher purchase rules
│   ├── axis/
│   │   ├── cashback.js
│   │   ├── direct_merchant_accelerated_rewards.js
│   │   ├── portal.js
│   │   └── vouchers.js
│   ├── icici/
│   │   ├── cashback.js
│   │   ├── portal.js
│   │   └── vouchers.js
│   └── sbi/
│       ├── cashback.js
│       ├── portal.js
│       └── vouchers.js
│
├── engine/                      # Recommendation Engine
│   ├── index.js                 # Main orchestrator
│   ├── dataLoader.js            # Data import & validation
│   ├── calculator.js            # Value calculation
│   ├── ruleMatcher.js           # Rule filtering
│   ├── pathGenerator.js         # Path enumeration
│   ├── pathEvaluator.js         # Path ranking
│   ├── test.js                  # Test suite
│   └── README.md                # API documentation
│
├── ui/                          # User Interface Layer
│   ├── app.js                   # Main controller
│   ├── validator.js             # Input validation
│   ├── errorHandler.js          # Error display
│   ├── formHandler.js           # Form management
│   └── resultsRenderer.js       # Results display
│
├── metadata/                    # Documentation & Assets
│   ├── images/                  # App icons and logos
│   │   └── icon.jpg             # PWA icon
│   ├── README.md                # Developer guide
│   ├── hdfc_data.md             # HDFC data tables
│   ├── axis_data.md             # Axis data tables
│   ├── icici_data.md            # ICICI data tables
│   ├── sbi_data.md              # SBI data tables
│   └── Project_Documentation.md # This file
│
├── scripts/                     # Utility scripts
│   ├── validate_card_data.js    # Card data validator
│   └── test_rule_integrity.js   # Rule integrity checker
│
├── index.html                   # Main modular entry point
├── BachatSwipe.html             # Standalone version (all-in-one)
├── manifest.json                # PWA manifest
├── sw.js                        # Service Worker for offline support
├── run_local_server.py          # Local development server
├── build_standalone.ps1         # Build script for standalone HTML
└── README.md                    # User-facing documentation
```

---

## ✨ Core Features

### 1. Multi-Path Optimization
Evaluates multiple payment strategies:
- **Direct Swipe**: Use card directly on merchant
- **Portal Route**: Book via bank portals (SmartBuy, Travel Edge)
- **Voucher Route**: Buy vouchers first, then redeem

### 2. Intelligent Ranking
Ranks payment paths by:
1. **Primary**: Total value (₹)
2. **Secondary**: Redemption ease score (1-3)

### 3. Comprehensive Card Support
- **31 credit cards** across 4 major banks
- **70+ reward rules** covering various scenarios
- Real-time rule matching based on merchant, category, amount

### 4. Progressive Web App (PWA)
- **Installable**: Add to home screen on mobile
- **Offline Support**: Works without internet (via Service Worker)
- **App-like Experience**: Standalone display mode

### 4. Progressive Web App (PWA)
- **Installable**: Add to home screen on mobile
- **Offline Support**: Works without internet (via Service Worker)
- **App-like Experience**: Standalone display mode

#### PWA Files (`pwa/` directory)

**`app.webmanifest`** - Defines app installation behavior:
- App name, icon, and theme colors
- Display mode (standalone = no browser UI)
- Start URL and scope
- Icon sizes (192x192, 512x512)

**`service-worker.js`** - Enables offline functionality:
- Caches essential files on first visit
- Serves cached files when offline
- Updates cache in background
- Cache-first strategy for performance

#### PWA Requirements
- Must be served over **HTTPS** (localhost exempt)
- Valid manifest with required fields
- Service Worker registered successfully
- Icons in correct sizes

#### Testing PWA
```bash
# Desktop testing
python run_local_server.py
# Check DevTools → Application → Manifest & Service Worker

# Mobile testing (requires HTTPS)
ngrok http 8080
# Open HTTPS URL on phone → Install banner appears
```

### 5. Error Handling
- Input validation with user-friendly messages
- XSS protection via HTML escaping
- Graceful degradation for missing data

---

## 🔧 Technical Implementation

### Core Algorithm: Path Evaluation

```javascript
function evaluatePath(transaction, card, method, platform) {
  // 1. Get base earning
  let value = transaction.amount * card.base_rate * card.value_per_unit;
  
  // 2. Find matching rules
  const rules = findRules(card, transaction.category, 
                          transaction.merchant, method, platform);
  
  // 3. Apply multipliers/cashback
  for (const rule of rules) {
    if (rule.benefit_type === 'reward_multiplier') {
      value *= rule.reward_multiplier_map[card.id];
    } else if (rule.benefit_type === 'cashback') {
      value = transaction.amount * rule.cashback_rate_map[card.id];
    }
  }
  
  // 4. Apply caps
  if (rule.cap) {
    value = Math.min(value, rule.cap);
  }
  
  // 5. Return with metadata
  return {
    value,
    ease_score: card.redemption_ease_score,
    explanation: generateExplanation(card, rules, value)
  };
}
```

### Data Flow

```
User Input (Merchant, Category, Amount)
    ↓
Path Generator → [Direct, Portal, Voucher] × [All Cards]
    ↓
For Each Path:
    ↓
Rule Matcher → Find applicable rules
    ↓
Calculator → Compute value (base × multiplier × redemption)
    ↓
Path Evaluator → Rank by value, then ease_score
    ↓
UI Display → Show ranked results with explanations
```

---

## 📊 Data Models

### Card Data Structure

```javascript
{
  // IDENTITY
  id: "hdfc_infinia",
  name: "HDFC Infinia Metal",
  bank: "HDFC",
  
  // CLASSIFICATION
  card_tier: "super_premium",
  reward_type: "points",
  
  // EARNING
  base_rate: 0.0333,  // 5 RP per ₹150
  earning_display: "5 RP per ₹150",
  reward_currency: "RP",
  
  // REDEMPTION
  value_per_unit: 1.0,  // 1 RP = ₹1 on SmartBuy
  optimal_redemption: {
    method: "SmartBuy Flights/Hotels",
    redemption_type: "portal"
  },
  redemption_ease_score: 2,  // 1=easiest, 3=complex
  
  // FEES
  joining_fee: 12500,
  annual_fee: 12500,
  fee_waiver: {
    spend_threshold: 1000000,
    period: "annual"
  },
  
  // FEATURES
  supports_upi: false,
  base_exclusions: ["fuel", "wallet", "rent"]
}
```

### Rule Data Structure

```javascript
{
  // IDENTITY
  id: "hdfc_smartbuy_amazon_flipkart_voucher_infinia_5x",
  bank: "HDFC",
  rule_type: "voucher",
  
  // APPLICABILITY
  platform: "SmartBuy (GyFTR)",
  category: "voucher",
  merchants: ["amazon", "flipkart"],
  
  // BENEFIT
  benefit_type: "reward_multiplier",
  reward_multiplier_map: {
    "hdfc_infinia": 5
  },
  
  // CONSTRAINTS
  cap: 15000,
  cap_period: "monthly",
  min_transaction: 1000,
  max_transaction: 10000,
  
  // METADATA
  valid_from: "2024-01-01",
  valid_until: null,
  priority: 150,
  notes: "5x Reward Points when buying vouchers via SmartBuy"
}
```

---

## 👨‍💻 Development Guide

### Prerequisites
- Modern web browser (Chrome, Edge, Firefox, Safari)
- Python 3.x (for local server)
- Text editor (VS Code recommended)

### Setup

```bash
# Clone the repository
git clone <repository-url>
cd BachatSwipe

# Start local server
python run_local_server.py

# Open browser
# http://localhost:8080/index.html
```

### Development Workflow

1. **Modular Development** (Recommended)
   - Edit files in `cards_data/`, `rules/`, `engine/`, `ui/`
   - Test with `index.html`
   - Build standalone with `build_standalone.ps1`

2. **Standalone Development**
   - Edit `BachatSwipe.html` directly
   - All code in one file (easier deployment)

### Adding New Cards

1. Add card definition to appropriate file in `cards_data/`
2. Follow existing card structure
3. Validate with `scripts/validate_card_data.js`

### Adding New Rules

1. Add rule to appropriate file in `rules/<bank>/`
2. Follow existing rule structure
3. Test with sample transactions
4. Validate with `scripts/test_rule_integrity.js`

---

## 🧪 Testing

### Manual Testing

```bash
# Test the engine
node engine/test.js

# Validate card data
node scripts/validate_card_data.js

# Check rule integrity
node scripts/test_rule_integrity.js
```

### Test Scenarios

1. **Amazon ₹10,000 Purchase**
   - Expected: HDFC Infinia via SmartBuy voucher (₹1,650)
   
2. **Swiggy ₹5,000 Order**
   - Expected: HDFC Infinia via SmartBuy voucher (₹500)
   
3. **Flipkart ₹20,000 Purchase**
   - Expected: SBI Cashback direct (₹1,000)

### Browser Testing

- **Desktop**: Chrome, Edge, Firefox, Safari
- **Mobile**: Chrome Android, Safari iOS
- **PWA**: Test installation and offline functionality

---

## 🚀 Deployment

### Option 1: Static Hosting (Recommended)

Deploy to platforms with automatic HTTPS:

**Vercel:**
```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel
```

**Netlify:**
```bash
# Install Netlify CLI
npm install -g netlify-cli

# Deploy
netlify deploy
```

**GitHub Pages:**
1. Push to GitHub repository
2. Enable GitHub Pages in repository settings
3. Select branch and folder
4. Access via `https://<username>.github.io/<repo>/`

### Option 2: Self-Hosted

Requirements:
- Web server (Apache, Nginx)
- HTTPS certificate (Let's Encrypt)
- Domain name (optional)

### PWA Deployment Checklist

- ✅ Served over HTTPS
- ✅ `manifest.json` properly linked
- ✅ Service Worker registered
- ✅ Icons in correct sizes (192x192, 512x512)
- ✅ Start URL is correct
- ✅ Offline functionality tested

---

## 🐛 Troubleshooting

### Common Issues

#### 1. PWA Not Installing on Mobile

**Problem**: Install banner doesn't appear  
**Cause**: Requires HTTPS (HTTP won't work)  
**Solution**: 
- Use ngrok for local testing: `ngrok http 8080`
- Deploy to HTTPS platform (Vercel, Netlify)

#### 2. Service Worker Not Registering

**Problem**: Console shows SW registration failed  
**Cause**: Path mismatch or HTTPS requirement  
**Solution**:
- Check `sw.js` is in root directory
- Verify HTTPS or localhost
- Check browser console for errors

#### 3. Rules Not Matching

**Problem**: No results or wrong results  
**Cause**: Rule conditions not met  
**Solution**:
- Check merchant/category spelling
- Verify amount meets min/max thresholds
- Review rule priority and conflicts

#### 4. Calculation Errors

**Problem**: Values don't match expectations  
**Cause**: Incorrect base rate or multiplier  
**Solution**:
- Verify card `base_rate` and `value_per_unit`
- Check rule `reward_multiplier_map`
- Review cap application logic

### Debug Mode

Enable detailed logging:

```javascript
// In browser console
localStorage.setItem('debug', 'true');
location.reload();
```

---

## 📝 Code Style Guide

### JavaScript

- Use ES6+ features (const, let, arrow functions)
- Prefer functional programming patterns
- Add JSDoc comments for functions
- Use meaningful variable names

```javascript
/**
 * Calculate the total reward value for a transaction
 * @param {Object} card - Card object
 * @param {Object} transaction - Transaction details
 * @param {Array} rules - Applicable rules
 * @returns {number} Total value in ₹
 */
function calculateValue(card, transaction, rules) {
  // Implementation
}
```

### HTML/CSS

- Use semantic HTML5 elements
- Follow BEM naming convention for CSS
- Keep inline styles minimal
- Use CSS custom properties for theming

---

## 🔐 Security Considerations

### XSS Protection
- All user inputs are sanitized
- HTML escaping in `resultsRenderer.js`
- No `eval()` or `innerHTML` with user data

### Data Privacy
- No user data is stored on servers
- All processing happens client-side
- No analytics or tracking (privacy-first)

### Content Security Policy
Consider adding CSP headers:
```html
<meta http-equiv="Content-Security-Policy" 
      content="default-src 'self'; script-src 'self' 'unsafe-inline'">
```

---

## 📚 Additional Resources

### External Documentation
- [MDN Web Docs](https://developer.mozilla.org/)
- [PWA Documentation](https://web.dev/progressive-web-apps/)
- [Service Worker API](https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API)

### Bank Resources
- [HDFC SmartBuy](https://offers.smartbuy.hdfcbank.com/)
- [Axis Grab Deals](https://grabdeals.axisbank.com/)
- [ICICI iShop](https://www.icicibank.com/ishop/)
- [SBI Rewardz](https://www.sbirewardz.com/)

---

## 🤝 Contributing

### Guidelines
1. Follow existing code structure
2. Add tests for new features
3. Update documentation
4. Validate data accuracy with bank sources

### Pull Request Process
1. Create feature branch
2. Make changes
3. Test thoroughly
4. Submit PR with description

---

## 📄 License

This project is for educational and personal use. Card data and reward rules are based on publicly available information from bank websites as of January 2026.

---

## 📞 Support

For questions or issues:
1. Check this documentation
2. Review existing code examples
3. Test with sample scenarios
4. Check browser console for errors

---

**Last Updated:** January 24, 2026  
**Version:** 2.0  
**Maintainer:** BachatSwipe Development Team
