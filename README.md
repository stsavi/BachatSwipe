# 💳 BachatSwipe
### Swipe smart. Save more.

**BachatSwipe** is an intelligent credit card optimization engine for India that tells you the best way to pay for any expense — ensuring you maximize rewards, cashback, and savings on every transaction.

> **⚠️ IMPORTANT:** This app uses ES6 modules and **must be served via HTTP**. See [QUICK_START.md](./QUICK_START.md) for setup instructions.

---

## 🚨 The Problem
India’s credit card ecosystem is fragmented and complex. Rewards vary by:
- **Bank Portals** (SmartBuy, Travel Edge, etc.) vs Direct Swipe
- **Voucher Programs** (GyFTR, Amazon vouchers)
- **Merchant Categories** (Dining, Travel, Shopping)
- **Card Type** (Cashback vs Reward Points vs Miles)

Users often miss out on 5-10% extra value because they don't know the optimal "path" to pay.

## ✅ The Solution
BachatSwipe answers a simple question: **"How should I pay for this expense to get the maximum benefit?"**

It evaluates all valid payment paths:
1.  **Direct Swipe** on merchant website
2.  **Bank Portals** (e.g., buying flights via HDFC SmartBuy)
3.  **Voucher Route** (e.g., buying Amazon Pay vouchers via GyFTR)
4.  **Wallet Loads** (e.g., loading Paytm wallet with a specific card)

## 🚀 Usage Guide

### Simple Optimization Flow
1.  **Select Merchant & Category**: e.g., "Amazon" (Shopping)
2.  **Enter Amount**: e.g., ₹10,000
3.  **See Ranked Options**:
    - 🥇 **Rank 1**: Buy Voucher via SmartBuy (Value: ₹1,650)
    - 🥈 **Rank 2**: Direct Swipe with Card A (Value: ₹330)
    - 🥉 **Rank 3**: Direct Swipe with Card B (Value: ₹100)

### Supported Banks
BachatSwipe currently supports optimization for:
- **HDFC Bank** (Infinia, Diners Black, Regalia, Millennia, etc.)
- **Axis Bank** (Magnus, Atlas, Ace, Flipkart, etc.)
- **ICICI Bank** (Sapphiro, Rubx, Amazon Pay, etc.)
- **SBI Cards** (Cashback, SimplyCLICK, Prime, etc.)

---

## 🧪 Optimization Example: ₹5,000 on Amazon

| Payment Method | Card Used | Value Type | Estimated Value |
| :--- | :--- | :--- | :--- |
| **Voucher via Portal** | HDFC Infinia | Reward Points (5x) | **₹825 (16.5%)** |
| **Direct Swipe** | SBI Cashback | Cashback | ₹250 (5%) |
| **Direct Swipe** | ICICI Amazon Pay | Cashback | ₹250 (5%) |
| **Direct Swipe** | HDFC Millennia | Cashback | ₹50 (1%) |

*BachatSwipe automatically calculates these values based on live card rules and highlights the winner.*
