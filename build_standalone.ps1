# PowerShell script to create standalone BachatSwipe.html
# This bundles all JavaScript files into a single HTML file that works without a server

Write-Host "Building standalone BachatSwipe.html..." -ForegroundColor Cyan

# List of JavaScript files to bundle (in dependency order)
$files = @(
    "config\bank_platforms.js",
    "config\merchants.js",
    "config\categories.js",
    "cards_data\hdfc_cards_data.js",
    "cards_data\axis_cards_data.js",
    "cards_data\icici_cards_data.js",
    "cards_data\sbi_cards_data.js",
    "rules\hdfc\cashback.js",
    "rules\hdfc\direct_merchant_accelerated_rewards.js",
    "rules\hdfc\portal.js",
    "rules\hdfc\vouchers.js",
    "rules\axis\cashback.js",
    "rules\axis\direct_merchant_accelerated_rewards.js",
    "rules\axis\portal.js",
    "rules\axis\vouchers.js",
    "rules\icici\cashback.js",
    "rules\icici\direct_merchant_accelerated_rewards.js",
    "rules\icici\portal.js",
    "rules\icici\vouchers.js",
    "rules\sbi\cashback.js",
    "rules\sbi\direct_merchant_accelerated_rewards.js",
    "rules\sbi\portal.js",
    "rules\sbi\vouchers.js",
    "engine\dataLoader.js",
    "engine\pathGenerator.js",
    "engine\ruleMatcher.js",
    "engine\calculator.js",
    "engine\pathEvaluator.js",
    "engine\index.js",
    "ui\validator.js",
    "ui\errorHandler.js",
    "ui\formHandler.js",
    "ui\resultsRenderer.js",
    "ui\app.js"
)

# HTML header with styles
$htmlHeader = @"
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>BachatSwipe (Standalone)</title>
    <style>
        :root {
            --sky-blue: #0062E3;
            --dark-sky: #00224F;
            --sky-gray: #F0F3F5;
            --slate-gray: #68737D;
            --white: #FFFFFF;
            --monteverde: #05A357;
            --border-light: #E0E7ED;
        }
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif; background: var(--sky-gray); color: var(--dark-sky); line-height: 1.6; }
        .header-banner { background: linear-gradient(135deg, var(--sky-blue) 0%, #0052c9 100%); color: var(--white); padding: 1.5rem 0; box-shadow: 0 2px 8px rgba(0,0,0,0.1); }
        .header-content { max-width: 1200px; margin: 0 auto; padding: 0 2rem; display: flex; align-items: center; gap: 1rem; }
        .brand-icon { width: 48px; height: 48px; background: var(--white); border-radius: 12px; display: flex; align-items: center; justify-content: center; font-size: 1.5rem; font-weight: 900; color: var(--sky-blue); }
        .brand-text { font-size: 1.75rem; font-weight: 800; letter-spacing: -0.5px; }
        .highlight { color: var(--monteverde); }
        .container { max-width: 1200px; margin: 0 auto; padding: 2rem; }
        .search-section { background: var(--white); border-radius: 12px; padding: 2rem; box-shadow: 0 1px 3px rgba(0,0,0,0.1); margin-bottom: 2rem; }
        .search-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1rem; margin-bottom: 1.5rem; }
        .input-group label { display: block; font-size: 0.875rem; font-weight: 600; color: var(--dark-sky); margin-bottom: 0.5rem; }
        .input-group input, .input-group select { width: 100%; padding: 0.75rem 1rem; border: 1px solid var(--border-light); border-radius: 8px; font-size: 1rem; }
        .compare-btn { background: var(--sky-blue); color: var(--white); border: none; padding: 0.875rem 2rem; border-radius: 8px; font-size: 1rem; font-weight: 700; cursor: pointer; transition: all 0.2s; width: 100%; }
        .compare-btn:hover { background: #0052c9; transform: translateY(-1px); box-shadow: 0 4px 12px rgba(0,98,227,0.3); }
        .result-card { background: var(--white); border-radius: 12px; padding: 1.5rem; margin-bottom: 1rem; box-shadow: 0 1px 3px rgba(0,0,0,0.1); position: relative; }
        .card-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem; cursor: pointer; }
        .card-header:hover { background: rgba(0, 98, 227, 0.03); }
        .card-info { display: flex; align-items: center; gap: 1rem; }
        .card-logo { width: 48px; height: 48px; border-radius: 8px; background: var(--sky-gray); display: flex; align-items: center; justify-content: center; overflow: hidden; }
        .card-logo img { width: 100%; height: 100%; object-fit: cover; }
        .card-name { font-size: 1.125rem; font-weight: 700; }
        .card-bank { font-size: 0.875rem; color: var(--slate-gray); }
        .reward-value { font-size: 1.5rem; font-weight: 800; color: var(--sky-blue); margin-top: 1.5rem; text-align: right; }
        .best-value-badge { position: absolute; top: 0.75rem; right: 1rem; background: var(--monteverde); color: var(--white); padding: 0.25rem 0.625rem; border-radius: 4px; font-size: 0.625rem; font-weight: 700; z-index: 10; }
        .strategies-box { max-height: 0; overflow: hidden; transition: max-height 0.3s ease; }
        .strategies-box.open { max-height: 800px; }
        .cursor-pointer { cursor: pointer; }
        .select-btn { background: var(--sky-blue); color: var(--white); border: none; padding: 0.625rem 1.5rem; border-radius: 6px; font-weight: 700; cursor: pointer; }
        .loading-spinner { display: none; width: 16px; height: 16px; border: 2px solid white; border-top-color: transparent; border-radius: 50%; animation: spin 0.8s linear infinite; margin-left: 8px; }
        @keyframes spin { to { transform: rotate(360deg); } }
        .loading-spinner.active { display: inline-block; }
    </style>
</head>
<body>
    <div class="header-banner">
        <div class="header-content">
            <div class="brand-icon"></div>
            <div class="brand-text">Bachat<span class="highlight">Swipe</span></div>
        </div>
    </div>
    <div class="container">
        <div class="search-section">
            <div class="search-grid">
                <div class="input-group">
                    <label>Amount</label>
                    <input type="number" id="amount" value="10000">
                </div>
                <div class="input-group">
                    <label>Merchant</label>
                    <select id="merchant">
                        <option value="">Select merchant</option>
                        <option value="amazon">Amazon</option>
                        <option value="flipkart">Flipkart</option>
                        <option value="swiggy">Swiggy</option>
                        <option value="zomato">Zomato</option>
                        <option value="bigbasket">BigBasket</option>
                        <option value="tata_neu">Tata Neu</option>
                        <option value="bookmyshow">BookMyShow</option>
                    </select>
                </div>
                <div class="input-group">
                    <label>Category</label>
                    <select id="category">
                        <option value="online_shopping">Online Shopping</option>
                        <option value="offline_shopping">Offline Swipe/Spends</option>
                        <option value="dining">Dining / Food Delivery</option>
                        <option value="grocery">Grocery</option>
                        <option value="flights">Flights</option>
                        <option value="hotels">Hotels</option>
                        <option value="fuel">Fuel / Petrol</option>
                        <option value="utilities">Utilities</option>
                        <option value="entertainment">Entertainment</option>
                        <option value="upi">UPI / Scan & Pay</option>
                    </select>
                </div>
            </div>
            <div class="input-group mb-4" style="margin-bottom: 1.5rem">
                <label>Search Specific Card (Optional)</label>
                <input type="text" id="card_search" list="card_list" placeholder="All cards">
                <datalist id="card_list"></datalist>
            </div>
            <button id="submit-button" class="compare-btn" onclick="window.app.analyze()">
                Compare <span class="loading-spinner" id="loading-spinner"></span>
            </button>
        </div>
        <div id="results"></div>
        <div style="text-align: center; padding: 2rem; font-size: 0.8rem; color: #64748b; font-style: italic;">
            Disclaimer: Decisions should be based on current bank terms.
        </div>
    </div>
    <script>
        window.BachatSwipe = {};
"@

$scriptContent = ""
foreach ($file in $files) {
    if (Test-Path $file) {
        $content = Get-Content $file -Raw -Encoding UTF8
        $content = $content -replace 'import .* from .*', ''
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
        window.toggleDetails = function (index) {
            const box = document.getElementById('strat-' + index);
            if (box) box.classList.toggle('open');
        };

        window.app = new window.App();
        window.app.init();
    </script>
</body>
</html>
"@

# Combine all parts
$fullHTML = $htmlHeader + $scriptContent + $htmlFooter

# Write to file with UTF-8 encoding
$outputPath = "BachatSwipe.html"
[System.IO.File]::WriteAllText($outputPath, $fullHTML, [System.Text.Encoding]::UTF8)

Write-Host "Created BachatSwipe.html (UTF-8) - Standalone version ready!" -ForegroundColor Green
