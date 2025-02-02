import { ProtectionGroupModel } from '../../models/protection.models';

export const enum ProtectionGroupId {
  AC_OUTPUT_FREQUENCY = 'acOutputFrequency',
  AC_OUTPUT_VOLTAGE = 'acOutputVoltage',
  AC_OUTPUT_AVG_VOLTAGE = 'acOutputAvgVoltage',
  DC_BATTERY_VOLTAGE = 'dcBatteryVoltage',
}

export const PROTECTION_GROUPS: ProtectionGroupModel[] = [
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
  },
];
