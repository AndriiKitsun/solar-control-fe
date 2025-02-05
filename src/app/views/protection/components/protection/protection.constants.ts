import {
  ProtectionGroupId,
  ProtectionActionId,
} from '../../enums/protection-group.enums';
import {
  ProtectionGroup,
  ProtectionAction,
} from '../../models/protection-group.models';

/**
 * t(PROTECTION.ACTION.DISABLE_ASICS)
 * t(PROTECTION.ACTION.ALARM)
 * t(PROTECTION.ACTION.POWER_OFF)
 * t(PROTECTION.GROUP.AC_OUTPUT_FREQUENCY.LABEL)
 * t(PROTECTION.GROUP.AC_OUTPUT_FREQUENCY.SUFFIX)
 * t(PROTECTION.GROUP.AC_OUTPUT_VOLTAGE.LABEL)
 * t(PROTECTION.GROUP.AC_OUTPUT_VOLTAGE.SUFFIX)
 * t(PROTECTION.GROUP.AC_OUTPUT_AVG_VOLTAGE.LABEL)
 * t(PROTECTION.GROUP.AC_OUTPUT_AVG_VOLTAGE.SUFFIX)
 * t(PROTECTION.GROUP.DC_BATTERY_VOLTAGE.LABEL)
 * t(PROTECTION.GROUP.DC_BATTERY_VOLTAGE.SUFFIX)
 * */

const PROTECTION_ACTIONS: ProtectionAction[] = [
  {
    id: ProtectionActionId.DISABLE_ASICS,
    label: 'PROTECTION.ACTION.DISABLE_ASICS',
  },
  {
    id: ProtectionActionId.ALARM,
    label: 'PROTECTION.ACTION.ALARM',
  },
  {
    id: ProtectionActionId.POWER_OFF,
    label: 'PROTECTION.ACTION.POWER_OFF',
  },
];

export const PROTECTION_GROUPS: ProtectionGroup[] = [
  {
    id: ProtectionGroupId.AC_OUTPUT_FREQUENCY,
    minInputId: `${ProtectionGroupId.AC_OUTPUT_FREQUENCY}Min`,
    maxInputId: `${ProtectionGroupId.AC_OUTPUT_FREQUENCY}Max`,
    label: 'PROTECTION.GROUP.AC_OUTPUT_FREQUENCY.LABEL',
    input: {
      min: 49.5,
      max: 50.5,
      step: 0.01,
      fractionDigits: 2,
      suffix: 'PROTECTION.GROUP.AC_OUTPUT_FREQUENCY.SUFFIX',
    },
    actions: PROTECTION_ACTIONS,
  },
  {
    id: ProtectionGroupId.AC_OUTPUT_VOLTAGE,
    minInputId: `${ProtectionGroupId.AC_OUTPUT_VOLTAGE}Min`,
    maxInputId: `${ProtectionGroupId.AC_OUTPUT_VOLTAGE}Max`,
    label: 'PROTECTION.GROUP.AC_OUTPUT_VOLTAGE.LABEL',
    input: {
      min: 150,
      max: 290,
      step: 1,
      fractionDigits: 0,
      suffix: 'PROTECTION.GROUP.AC_OUTPUT_VOLTAGE.SUFFIX',
    },
    actions: PROTECTION_ACTIONS,
  },
  {
    id: ProtectionGroupId.AC_OUTPUT_AVG_VOLTAGE,
    minInputId: `${ProtectionGroupId.AC_OUTPUT_AVG_VOLTAGE}Min`,
    maxInputId: `${ProtectionGroupId.AC_OUTPUT_AVG_VOLTAGE}Max`,
    label: 'PROTECTION.GROUP.AC_OUTPUT_AVG_VOLTAGE.LABEL',
    input: {
      min: 150,
      max: 290,
      step: 1,
      fractionDigits: 0,
      suffix: 'PROTECTION.GROUP.AC_OUTPUT_AVG_VOLTAGE.SUFFIX',
    },
    actions: PROTECTION_ACTIONS,
  },
  {
    id: ProtectionGroupId.DC_BATTERY_VOLTAGE,
    minInputId: `${ProtectionGroupId.DC_BATTERY_VOLTAGE}Min`,
    maxInputId: `${ProtectionGroupId.DC_BATTERY_VOLTAGE}Max`,
    label: 'PROTECTION.GROUP.DC_BATTERY_VOLTAGE.LABEL',
    input: {
      min: 30,
      max: 70,
      step: 0.1,
      fractionDigits: 1,
      suffix: 'PROTECTION.GROUP.DC_BATTERY_VOLTAGE.SUFFIX',
    },
    actions: PROTECTION_ACTIONS,
  },
];
