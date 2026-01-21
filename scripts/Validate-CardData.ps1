# Validate-CardData.ps1
# PowerShell script that validates BachatSwipe card data files.
# It does not require Node.js; it parses the JavaScript files as text.

$CardDataDir = Join-Path -Path $PSScriptRoot -ChildPath '..\cards_data'
$KnownExclusions = @('fuel','wallet_loads','rent','insurance','utilities','utility','government','emi','jewellery','wallet','wallet_load','cash_withdrawal','railway_tickets','government_payments','education','utility_bills')

function Get-ExportedArray([string]$FilePath) {
    # Read file content
    $content = Get-Content -Path $FilePath -Raw
    # Find the array between the first '[' and the matching ']'
    $arrayMatch = [regex]::Match($content, '\[.*?\]', 'Singleline')
    if ($arrayMatch.Success) {
        $json = $arrayMatch.Value
        # Replace single quotes with double quotes for JSON parsing
        $json = $json -replace "'", '"'
        # Remove trailing commas before closing brackets
        $json = $json -replace ',\s*\]', ']'
        $json = $json -replace ',\s*\}', '}'
        try {
            return $json | ConvertFrom-Json
        } catch {
            Write-Warning "Failed to parse JSON in $FilePath"
            return $null
        }
    }
    return $null
}

function Parse-EarningDisplay([string]$display) {
    $lower = $display.ToLower()
    # Direct pattern like "12 Edge Miles per ₹200"
    if ($lower -match '([\d.]+)\s*([a-z% ]+?)\s*per\s*₹?(\d+)') {
        return @{ amount = [double]$matches[1]; unit = $matches[2].Trim(); per = [int]$matches[3] }
    }
    # Simple cashback like "5% cashback"
    if ($lower -match '([\d.]+)%\s*cashback') {
        return @{ amount = [double]$matches[1]; unit = '%'; per = 100 }
    }
    # Composite percentages – take first number
    if ($lower -match '([\d.]+)%') {
        return @{ amount = [double]$matches[1]; unit = '%'; per = 100 }
    }
    return $null
}

$errors = @()
$seenIds = @{}

Get-ChildItem -Path $CardDataDir -Filter '*_cards_data.js' | ForEach-Object {
    $cards = Get-ExportedArray $_.FullName
    if (-not $cards) { continue }
    foreach ($card in $cards) {
        $id = $card.id
        $name = $card.name
        $baseRate = $card.base_rate
        $earningDisplay = $card.earning_display
        $valuePerUnit = $card.value_per_unit
        $rewardType = $card.reward_type
        $feeWaiver = $card.fee_waiver_criteria
        $annualFee = $card.annual_fee
        $exclusions = $card.base_exclusions

        # Duplicate ID check
        if ($seenIds.ContainsKey($id)) {
            $errors += "${_}.js: Duplicate card id \"$id\""
        } else { $seenIds[$id] = $true }

        # Base rate vs earning display
        $parsed = Parse-EarningDisplay $earningDisplay
        if ($parsed) {
            if (-not $earningDisplay.ToLower().Contains('on')) {
                $expected = $parsed.amount / $parsed.per
                if ([math]::Abs($expected - $baseRate) -gt 0.001) {
                    $errors += "${_}.js ($name): base_rate $baseRate does not match earning_display \"$earningDisplay\""
                }
            }
        } else {
            $errors += "${_}.js ($name): Unable to parse earning_display \"$earningDisplay\""
        }

        # value_per_unit check
        if ($rewardType -match '(?i)cashback|cash') {
            if ($valuePerUnit -ne 1.0) { $errors += "${_}.js ($name): Cashback value_per_unit should be 1.0 but is $valuePerUnit" }
        } else {
            if (-not ($valuePerUnit -is [double]) -or $valuePerUnit -le 0) { $errors += "${_}.js ($name): value_per_unit should be positive number, got $valuePerUnit" }
        }

        # exclusions validation
        if ($exclusions -is [Array]) {
            foreach ($ex in $exclusions) {
                if (-not $KnownExclusions -contains $ex) { $errors += "${_}.js ($name): unknown exclusion \"$ex\"" }
            }
        }

        # fee waiver check
        if ($feeWaiver) {
            if (-not ($feeWaiver -match '₹?[\d,]+')) { $errors += "${_}.js ($name): fee_waiver_criteria \"$feeWaiver\" does not contain a spend amount" }
        }

        # annual fee check
        if (-not ($annualFee -is [double]) -or $annualFee -lt 0) { $errors += "${_}.js ($name): annual_fee should be non‑negative number, got $annualFee" }
    }
}

if ($errors.Count -eq 0) {
    Write-Host "✅ Card data validation passed – no issues found."
    exit 0
} else {
    Write-Host "⚠️ Card data validation found issues:"
    $errors | ForEach-Object { Write-Host "- $_" }
    exit 1
}
