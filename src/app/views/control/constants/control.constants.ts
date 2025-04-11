import { ControlGroup } from '../types/control-group.types';
import { ControlRuleId } from '../enums/control-rule.enum';

/**
 * t(CONTROL.GROUP.DC_BATTERY_AVG_VOLTAGE)
 * t(CONTROL.PLACEHOLDER.TIME_SUFFIX)
 * t(CONTROL.PLACEHOLDER.VOLTAGE_SUFFIX)
 * t(CONTROL.PLACEHOLDER.SCALE_UP_CHECK_TIME)
 * t(CONTROL.PLACEHOLDER.SCALE_UP_VALUE)
 * t(CONTROL.PLACEHOLDER.SCALE_DOWN_CHECK_TIME)
 * t(CONTROL.PLACEHOLDER.SCALE_DOWN_VALUE)
 * */

export const CONTROL_GROUPS: ControlGroup[] = [
  {
    id: ControlRuleId.DC_BATTERY_AVG_VOLTAGE,
    label: 'CONTROL.GROUP.DC_BATTERY_AVG_VOLTAGE',
    inputs: [
      {
        id: `${ControlRuleId.DC_BATTERY_AVG_VOLTAGE}ScaleUpTime`,
        formControlId: 'scaleUpCheckTime',
        min: 180,
        max: 1000,
        step: 1,
        fractionDigits: 0,
        suffix: 'CONTROL.PLACEHOLDER.TIME_SUFFIX',
        label: 'CONTROL.PLACEHOLDER.SCALE_UP_CHECK_TIME',
      },
      {
        id: `${ControlRuleId.DC_BATTERY_AVG_VOLTAGE}ScaleUpValue`,
        formControlId: 'scaleUpValue',
        min: 0,
        max: 100,
        step: 1,
        fractionDigits: 1,
        suffix: 'CONTROL.PLACEHOLDER.VOLTAGE_SUFFIX',
        label: 'CONTROL.PLACEHOLDER.SCALE_UP_VALUE',
      },
      {
        id: `${ControlRuleId.DC_BATTERY_AVG_VOLTAGE}ScaleDownTime`,
        formControlId: 'scaleDownCheckTime',
        min: 90,
        max: 300,
        step: 1,
        fractionDigits: 0,
        suffix: 'CONTROL.PLACEHOLDER.TIME_SUFFIX',
        label: 'CONTROL.PLACEHOLDER.SCALE_DOWN_CHECK_TIME',
      },
      {
        id: `${ControlRuleId.DC_BATTERY_AVG_VOLTAGE}ScaleDownValue`,
        formControlId: 'scaleDownValue',
        min: 0,
        max: 100,
        step: 1,
        fractionDigits: 1,
        suffix: 'CONTROL.PLACEHOLDER.VOLTAGE_SUFFIX',
        label: 'CONTROL.PLACEHOLDER.SCALE_DOWN_VALUE',
      },
    ],
  },
];
