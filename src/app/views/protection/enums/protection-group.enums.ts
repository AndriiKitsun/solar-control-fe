export const enum ProtectionGroupId {
  AC_OUTPUT_FREQUENCY = 'acOutputFrequency',
  AC_OUTPUT_VOLTAGE = 'acOutputVoltage',
  AC_OUTPUT_AVG_VOLTAGE = 'acOutputAvgVoltage',
  DC_BATTERY_VOLTAGE = 'dcBatteryVoltage',
}

export const enum ProtectionActionId {
  DISABLE_ASICS = 'disableAsics',
  ALARM = 'alarm',
  POWER_OFF = 'powerOff',
}
