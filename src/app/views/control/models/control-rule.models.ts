import { ControlRuleId } from '../enums/control-rule.enum';

export interface ControlRuleModel {
  id: ControlRuleId;
  scaleUpCheckTime: number;
  scaleUpValue: number;
  scaleDownCheckTime: number;
  scaleDownValue: number;
}
