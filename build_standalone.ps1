$files = @(
    "config/bank_platforms.js",
    "cards_data/hdfc_cards_data.js",
    "cards_data/axis_cards_data.js",
    "cards_data/icici_cards_data.js",
    "cards_data/sbi_cards_data.js",
    "rules/hdfc/cashback.js",
    "rules/hdfc/direct_merchant_accelerated_rewards.js",
    "rules/hdfc/portal.js",
    "rules/hdfc/vouchers.js",
    "rules/axis/cashback.js",
    "rules/axis/direct_merchant_accelerated_rewards.js",
    "rules/axis/portal.js",
    "rules/axis/vouchers.js",
    "rules/icici/cashback.js",
    "rules/icici/direct_merchant_accelerated_rewards.js",
    "rules/icici/portal.js",
    "rules/icici/vouchers.js",
    "rules/sbi/cashback.js",
    "rules/sbi/direct_merchant_accelerated_rewards.js",
    "rules/sbi/portal.js",
    "rules/sbi/vouchers.js",
    "engine/dataLoader.js",
    "engine/calculator.js",
    "engine/ruleMatcher.js",
    "engine/pathGenerator.js",
    "engine/pathEvaluator.js",
    "engine/index.js",
    "ui/validator.js",
    "ui/errorHandler.js",
    "ui/formHandler.js",
    "ui/resultsRenderer.js",
    "ui/app.js"
)

$htmlHeader = @"
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>BachatSwipe (Standalone)</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" rel="stylesheet">
    <style>
        body { background-color: #0b1121; color: #e2e8f0; font-family: 'Inter', sans-serif; }
        .glass { background: rgba(30, 41, 59, 0.7); backdrop-filter: blur(12px); border: 1px solid rgba(255, 255, 255, 0.08); }
        .input-dark { background: #1e293b; border: 1px solid #334155; color: white; transition: 0.2s; }
        .input-dark:focus { border-color: #f59e0b; outline: none; }
        .strategies-box { max-height: 0; overflow: hidden; transition: max-height 0.3s ease-out, padding 0.3s ease; }
        .strategies-box.open { max-height: 800px; padding-top: 0.75rem; padding-bottom: 0.75rem; border-top: 1px solid rgba(255,255,255,0.1); }
        .chevron { transition: transform 0.3s; }
        .chevron.open { transform: rotate(180deg); }
        .loading { display: none; }
        .loading.active { display: inline-block; animation: spin 1s linear infinite; }
        @keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
    </style>
</head>
<body class="min-h-screen p-4 md:p-8 flex flex-col items-center">
    <div id="error-banner" class="hidden w-full max-w-4xl bg-red-900/50 border border-red-500 text-red-200 p-4 rounded-xl mb-6 text-center">
        <p class="font-bold"><i class="fas fa-exclamation-triangle"></i> Error</p>
        <p class="text-sm mt-1" id="error-message"></p>
    </div>
    <div class="w-full max-w-4xl">
        <div class="text-center mb-8">
            <h1 class="text-3xl md:text-5xl font-black mb-2 tracking-tight">
                <span class="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-600">BachatSwipe</span>
                <span class="text-xs text-blue-400 bg-blue-900/30 px-2 py-1 rounded ml-2 align-top">STANDALONE</span>
            </h1>
            <p class="text-slate-400 text-sm">Smart Card Optimizer - Single File Mode</p>
        </div>
        <div class="glass p-6 rounded-2xl shadow-xl mb-8">
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                    <label class="block text-xs font-bold text-slate-500 uppercase mb-1">Expense Amount (INR)</label>
                    <input type="number" id="amount" value="10000" min="1" max="10000000" class="input-dark w-full p-3 rounded-lg text-lg font-mono" required>
                </div>
                <div>
                    <label class="block text-xs font-bold text-slate-500 uppercase mb-1">Merchant</label>
                    <select id="merchant" class="input-dark w-full p-3 rounded-lg">
                        <option value="">Any Merchant</option>
                        <option value="amazon">Amazon</option>
                        <option value="flipkart">Flipkart</option>
                        <option value="swiggy">Swiggy</option>
                        <option value="zomato">Zomato</option>
                        <option value="bigbasket">BigBasket</option>
                        <option value="tata_neu">Tata Neu</option>
                        <option value="bookmyshow">BookMyShow</option>
                    </select>
                </div>
                <div>
                    <label class="block text-xs font-bold text-slate-500 uppercase mb-1">Category</label>
                    <select id="category" class="input-dark w-full p-3 rounded-lg" required>
                        <option value="shopping">Shopping (General)</option>
                        <option value="online_shopping">Online Shopping</option>
                        <option value="offline_shopping">Offline Swipe (Physical Store)</option>
                        <option value="dining">Dining / Food Delivery</option>
                        <option value="grocery">Grocery</option>
                        <option value="electronics">Electronics</option>
                        <option value="flights">Flights</option>
                        <option value="hotels">Hotels</option>
                        <option value="fuel">Fuel / Petrol</option>
                        <option value="utilities">Utility (Electricity/Water/Bills)</option>
                        <option value="entertainment">Movies / BookMyShow</option>
                        <option value="upi">UPI / Scan & Pay</option>
                    </select>
                </div>
            </div>
            <div class="mt-6 pt-4 border-t border-slate-700/50 flex flex-col md:flex-row justify-between items-center gap-4">
                <div class="w-full md:w-auto flex-1">
                    <label class="block text-xs font-bold text-slate-500 uppercase mb-1">
                        <i class="fas fa-credit-card mr-1"></i> Search Specific Card (Optional)
                    </label>
                    <input type="text" id="card_search" list="card_list" placeholder="Leave empty for Top 10 Cards" class="input-dark w-full p-2 rounded-lg text-sm border-slate-600 font-bold text-yellow-400 bg-slate-800">
                    <datalist id="card_list"></datalist>
                </div>
                <button id="submit-button" onclick="window.app.analyze()" class="w-full md:w-auto px-8 py-3 bg-gradient-to-r from-yellow-500 to-orange-600 hover:from-yellow-400 hover:to-orange-500 text-black font-bold rounded-xl shadow-lg transition active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed">
                    <i class="fas fa-search mr-2"></i>Analyze Rewards
                    <i class="fas fa-spinner loading ml-2" id="loading-spinner"></i>
                </button>
            </div>
        </div>
        <div id="results" class="space-y-3"></div>
    </div>
    <script>
        window.BachatSwipe = {};
"@

$scriptContent = ""
foreach ($file in $files) {
    if (Test-Path $file) {
        $content = Get-Content $file -Raw -Encoding UTF8
        # Remove imports
        $content = $content -replace 'import .* from .*', ''
        # Convert exports
        $content = $content -replace 'export const (\w+)', 'window.$1'
        $content = $content -replace 'export function (\w+)', 'window.$1 = function $1'
        $content = $content -replace 'export class (\w+)', 'window.$1 = class $1'
        $content = $content -replace '(?s)export default \{.*?\}\;?', ''
        $content = $content -replace 'export default (\w+);', 'if (typeof $1 !== "undefined") window.$1 = $1;'
        
        $scriptContent += "`n/* --- Source: $file --- */`n"
        $scriptContent += $content
    }
}

$htmlFooter = @"
        // Auto-initialize
        window.addEventListener('DOMContentLoaded', () => {
            console.log('Standalone mode loaded.');
            if (window.app && window.app.init) {
                window.app.init().catch(e => console.error('Init failed:', e));
            } else {
                console.error('window.app not found');
            }
        });
    </script>
</body>
</html>
"@

$finalContent = $htmlHeader + $scriptContent + $htmlFooter

# Use .NET to write UTF-8 without BOM for better web compatibility
$utf8NoBom = New-Object System.Text.UTF8Encoding $false
[System.IO.File]::WriteAllText("$PWD/index.html", $finalContent, $utf8NoBom)
Write-Host "Created index.html (UTF-8) - Ready for GitHub Pages!"
