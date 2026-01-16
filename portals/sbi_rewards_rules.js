// ============================================================================
// SBI CARD — REWARDS PORTAL RULES (TRAVEL & SHOPPING)
// - Only portal accelerator rules (no voucher details here).
// - benefit_type: "reward_multiplier" | "direct_discount"
// - Only include cards/paths where SBI public docs / portal list an accelerated benefit.
// - Engine falls back to base card rewards if no rule exists.
// ============================================================================

const SBI_REWARDS_RULES = [

/* ============================================================================
   FLIGHTS — SBI Rewards Portal
   - Recent SBI notice reduced many 10X to 5X for some cards/partners; default to 5X
   - Certain premium cards / partner flows remain higher (noted)
   - Applies to cards that SBI lists as portal-eligible
   - Source: SBICard rewards portal & notices. :contentReference[oaicite:7]{index=7}
============================================================================ */

{
  bank: "SBI",
  portal: "sbi_rewards",
  category: "flights",
  applies_to_cards: [
    "sbi_elite",
    "sbi_aurum",
    "sbi_miles_prime",
    "sbi_miles",
    "sbi_prime",
    "sbi_simplyclick"
  ],
  benefit_type: "reward_multiplier",
  reward_multiplier: 5,    // baseline accelerator (post-Apr-2025 public notice)
  cap: null,
  period: "monthly",
  notes:
    "Baseline 5X reward points on flights via SBI Rewards portal for listed cards. Some premium / partner flows historically had 10X — see SBICard notices for partner-level exceptions (Apollo/BookMyShow etc remain 10X in some flows).",
}

/* ============================================================================
   HOTELS — SBI Rewards Portal
   - Hotels historically had higher multipliers on portal; baseline 5X now,
     premium cards may access higher effective value/bundles (noted).
   - Source: SBICard portal & public notices. :contentReference[oaicite:8]{index=8}
============================================================================ */

,
{
  bank: "SBI",
  portal: "sbi_rewards",
  category: "hotels",
  applies_to_cards: [
    "sbi_elite",
    "sbi_aurum",
    "sbi_miles_prime",
    "sbi_miles",
    "sbi_prime",
    "sbi_simplyclick"
  ],
  benefit_type: "reward_multiplier",
  reward_multiplier: 5,
  cap: null,
  period: "monthly",
  notes:
    "Baseline 5X reward points on hotels via SBI Rewards portal for listed cards. Certain partners and premium redemption routes historically gave 10X; those are partner-specific and remain noted on SBICard portal."
}

/* ============================================================================
   SHOPPING / ONLINE PARTNERS — SBI Rewards Portal
   - Cards like SimplyCLICK historically had 10X on online spends with select partners;
     note public changes and treat portal partner acceleration at 5X baseline now.
   - Source: SimplyCLICK page and SBICard portal. :contentReference[oaicite:9]{index=9}
============================================================================ */

,
{
  bank: "SBI",
  portal: "sbi_rewards",
  category: "shopping",
  applies_to_cards: [
    "sbi_simplyclick",
    "sbi_prime",
    "sbi_elite",
    "sbi_aurum"
  ],
  benefit_type: "reward_multiplier",
  reward_multiplier: 5,
  cap: null,
  period: "monthly",
  notes:
    "Baseline 5X on select portal partners / online spends via SBI Rewards (SimplyCLICK historically had 10X for many online partners; SBICard notice reduced some 10X to 5X with partner exceptions)."
}

];

export default SBI_REWARDS_RULES;
