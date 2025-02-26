import { ProtectionRuleId } from '../enums/protection.enums';
import { ProtectionGroup } from '../types/protection-group.types';

/**
 * t(PROTECTION.GROUP.AC_OUTPUT_FREQUENCY.LABEL)
 * t(PROTECTION.GROUP.AC_OUTPUT_FREQUENCY.SUFFIX)
 * t(PROTECTION.GROUP.AC_OUTPUT_VOLTAGE.LABEL)
 * t(PROTECTION.GROUP.AC_OUTPUT_VOLTAGE.SUFFIX)
 * t(PROTECTION.GROUP.AC_OUTPUT_AVG_VOLTAGE.LABEL)
 * t(PROTECTION.GROUP.AC_OUTPUT_AVG_VOLTAGE.SUFFIX)
 * t(PROTECTION.GROUP.DC_BATTERY_VOLTAGE.LABEL)
 * t(PROTECTION.GROUP.DC_BATTERY_VOLTAGE.SUFFIX)
 * */

export const PROTECTION_GROUPS: ProtectionGroup[] = [
  {
    id: ProtectionRuleId.AC_OUTPUT_FREQUENCY,
    enableCheckId: `${ProtectionRuleId.AC_OUTPUT_FREQUENCY}Enabled`,
    minInputId: `${ProtectionRuleId.AC_OUTPUT_FREQUENCY}Min`,
    maxInputId: `${ProtectionRuleId.AC_OUTPUT_FREQUENCY}Max`,
    label: 'PROTECTION.GROUP.AC_OUTPUT_FREQUENCY.LABEL',
    input: {
      min: 49.5,
      max: 50.5,
      step: 0.01,
      fractionDigits: 2,
      suffix: 'PROTECTION.GROUP.AC_OUTPUT_FREQUENCY.SUFFIX',
    },
  },
  {
    id: ProtectionRuleId.AC_OUTPUT_VOLTAGE,
    enableCheckId: `${ProtectionRuleId.AC_OUTPUT_VOLTAGE}Enabled`,
    minInputId: `${ProtectionRuleId.AC_OUTPUT_VOLTAGE}Min`,
    maxInputId: `${ProtectionRuleId.AC_OUTPUT_VOLTAGE}Max`,
    label: 'PROTECTION.GROUP.AC_OUTPUT_VOLTAGE.LABEL',
    input: {
      min: 150,
      max: 290,
      step: 1,
      fractionDigits: 0,
      suffix: 'PROTECTION.GROUP.AC_OUTPUT_VOLTAGE.SUFFIX',
    },
  },
  {
    id: ProtectionRuleId.AC_OUTPUT_AVG_VOLTAGE,
    enableCheckId: `${ProtectionRuleId.AC_OUTPUT_AVG_VOLTAGE}Enabled`,
    minInputId: `${ProtectionRuleId.AC_OUTPUT_AVG_VOLTAGE}Min`,
    maxInputId: `${ProtectionRuleId.AC_OUTPUT_AVG_VOLTAGE}Max`,
    label: 'PROTECTION.GROUP.AC_OUTPUT_AVG_VOLTAGE.LABEL',
    input: {
      min: 150,
      max: 290,
      step: 1,
      fractionDigits: 0,
      suffix: 'PROTECTION.GROUP.AC_OUTPUT_AVG_VOLTAGE.SUFFIX',
    },
  },
  {
    id: ProtectionRuleId.DC_BATTERY_VOLTAGE,
    enableCheckId: `${ProtectionRuleId.DC_BATTERY_VOLTAGE}Enabled`,
    minInputId: `${ProtectionRuleId.DC_BATTERY_VOLTAGE}Min`,
    maxInputId: `${ProtectionRuleId.DC_BATTERY_VOLTAGE}Max`,
    label: 'PROTECTION.GROUP.DC_BATTERY_VOLTAGE.LABEL',
    input: {
      min: 30,
      max: 70,
      step: 0.1,
      fractionDigits: 1,
      suffix: 'PROTECTION.GROUP.DC_BATTERY_VOLTAGE.SUFFIX',
    },
  },
];
