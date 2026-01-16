# 👨‍💻 BachatSwipe Developer Guide

This directory contains deep-dive documentation and data references for the BachatSwipe engine.

## 📂 Directory Structure

```
BachatSwipe/
├── config/              # Global constants (Merchant lists, Categories)
├── cards_data/          # Card definitions (Base rates, Fees, Tiers)
├── rules/               # Reward logic separated by bank & type
│   ├── hdfc/
│   ├── axis/
│   ├── icici/
│   └── sbi/
├── metadata/            # You are here (Developer docs & Data tables)
└── index.html           # Main optimization engine
```

## 🛠️ Technology Stack
- **Languages:** HTML5, CSS3, Vanilla JavaScript (ES6 Modules)
- **No Frameworks:** Purposefully built without React/Angular for speed and simplicity.
- **Data Storage:** JSON-like JS objects (No database required for this scale).

## 🏗️ Architecture: Cards vs. Rules

BachatSwipe uses a **decoupled architecture** to handle complexity:

1.  **Cards Data (`cards_data/`)**: Defines *who* the card is.
    -   Base Reward Rate (e.g., 1 reward point per ₹100)
    -   Reward Currency (Points, Miles, Cashback)
    -   Redemption Value (₹ value of 1 point)
    -   Exclusions (Fuel, Rent, etc.)

2.  **Rules (`rules/`)**: Defines *when* rewards change.
    -   **Cashback:** Direct percentage back (e.g., "5% on Amazon").
    -   **Accelerated Rewards:** Multipliers on base rate (e.g., "10x points on Dining").
    -   **Portal:** Benefit for using bank portal (e.g., "5x points on SmartBuy Flights").
    -   **Vouchers:** Benefit for buying vouchers (e.g., "3x points on Amazon Vouchers").

## 🧮 Reward Calculation Logic

The engine calculates value using a rigorous waterfall model.

### The Algorithm

1.  **Identify Base Rate:** Get the card's base earn rate (e.g., `0.033` for 3.3%).
2.  **Find Matching Rules:** Check all 4 rule types for the current Merchant/Category.
3.  **Apply Multipliers:**
    -   If a Rule applies `3x` points -> `Card Base Rate * 3`.
    -   If a Rule gives `5%` cashback -> Overrides base rate with `0.05`.
4.  **Check Caps:** Ensure rewards don't exceed monthly limits defined in the Rule.
5.  **Calculate Value:** `Total Points * Value Per Point`.

### 🧪 Example Walkthrough: ₹10,000 Amazon Spend

Let's compare **HDFC Infinia** vs **ICICI Amazon Pay**.

#### Scenario A: HDFC Infinia (via SmartBuy Voucher)
*   **Card Base:** 5 Points per ₹150 (3.33% rate).
*   **Rule Found:** `hdfc_smartbuy_voucher` for "Amazon".
*   **Multiplier:** Rule gives **3x** Global Points.
*   **Calculation:**
    -   Base Points: 10,000 / 150 * 5 = 333 RP
    -   Accelerated: 333 * 3x = **999 RP**
*   **Monetary Value:** 999 RP * ₹1.0 (Redemption Value) = **₹999**
*   **Net Return:** **9.99%**

#### Scenario B: ICICI Amazon Pay (Direct Swipe)
*   **Card Base:** 1% (non-Prime) or 5% (Prime).
*   **Rule Found:** `icici_amazon_prime_cb`
*   **Fixed Rate:** Rule sets rate to **5%** Cashback.
*   **Calculation:**
    -   10,000 * 0.05 = **500 Cashback**
*   **Monetary Value:** 500 * ₹1.0 = **₹500**
*   **Net Return:** **5.00%**

**Winner:** HDFC Infinia (₹999 vs ₹500).

---

## 📚 Data References
Detailed tables for all configured banks:

- [HDFC Bank Data](./hdfc_data.md)
- [Axis Bank Data](./axis_data.md)
- [ICICI Bank Data](./icici_data.md)
- [SBI Cards Data](./sbi_data.md)
