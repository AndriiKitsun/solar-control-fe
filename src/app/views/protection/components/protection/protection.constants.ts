import {
  ProtectionGroupId,
  ProtectionActionId,
} from '../../enums/protection-groups.enums';
import {
  ProtectionGroup,
  ProtectionAction,
} from '../../models/protection-groups.models';

const PROTECTION_ACTIONS: ProtectionAction[] = [
  {
    id: ProtectionActionId.DISABLE_ASICS,
    label: 'Disable Asics',
  },
  {
    id: ProtectionActionId.ALARM,
    label: 'Alarm',
  },
  {
    id: ProtectionActionId.POWER_OFF,
    label: 'Power Off',
  },
];

export const PROTECTION_GROUPS: ProtectionGroup[] = [
  {
    id: ProtectionGroupId.AC_OUTPUT_FREQUENCY,
    minInputId: `${ProtectionGroupId.AC_OUTPUT_FREQUENCY}Min`,
    maxInputId: `${ProtectionGroupId.AC_OUTPUT_FREQUENCY}Max`,
    label: 'AC Output Frequency',
    input: {
      min: 49.5,
      max: 50.5,
      step: 0.01,
      fractionDigits: 2,
      suffix: ' Hz',
    },
    actions: PROTECTION_ACTIONS,
  },
  {
    id: ProtectionGroupId.AC_OUTPUT_VOLTAGE,
    minInputId: `${ProtectionGroupId.AC_OUTPUT_VOLTAGE}Min`,
    maxInputId: `${ProtectionGroupId.AC_OUTPUT_VOLTAGE}Max`,
    label: 'AC Output Voltage',
    input: {
      min: 200,
      max: 250,
      step: 1,
      fractionDigits: 0,
      suffix: ' V',
    },
    actions: PROTECTION_ACTIONS,
  },
  {
    id: ProtectionGroupId.AC_OUTPUT_AVG_VOLTAGE,
    minInputId: `${ProtectionGroupId.AC_OUTPUT_AVG_VOLTAGE}Min`,
    maxInputId: `${ProtectionGroupId.AC_OUTPUT_AVG_VOLTAGE}Max`,
    label: 'AC Output 10m Voltage',
    input: {
      min: 200,
      max: 250,
      step: 1,
      fractionDigits: 0,
      suffix: ' V',
    },
    actions: PROTECTION_ACTIONS,
  },
  {
    id: ProtectionGroupId.DC_BATTERY_VOLTAGE,
    minInputId: `${ProtectionGroupId.DC_BATTERY_VOLTAGE}Min`,
    maxInputId: `${ProtectionGroupId.DC_BATTERY_VOLTAGE}Max`,
    label: 'DC Battery Voltage',
    input: {
      min: 10,
      max: 70,
      step: 0.1,
      fractionDigits: 1,
      suffix: ' V',
    },
    actions: PROTECTION_ACTIONS,
  },
];
