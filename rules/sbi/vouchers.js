import { VOUCHER_MERCHANTS, BANK_PORTALS, CAP_PERIODS, BENEFIT_TYPES, RULE_TYPES } from '../../config/bank_platforms.js';

/**
 * SBI Cards - Voucher Rules (SBI Rewardz)
 * Gift voucher purchases via SBI portals
 * Data validated against: SBI Rewardz portal, SBI Cards MITC
 * Last updated: January 17, 2026
 */

export const sbiVoucherRules = [
  // Note: SBI Cards has limited voucher multiplier programs compared to other banks
  // Most voucher purchases earn base rates
  // Promotional offers may provide temporary multipliers
  
  // Placeholder for future voucher rules
  // Currently SBI Cards does not have standardized voucher multipliers
  // Base rates apply for voucher purchases
];

export default sbiVoucherRules;