import {
  ProtectionRuleId,
  ProtectionActionId,
} from '../enums/protection.enums';

export interface ProtectionRuleModel {
  id: ProtectionRuleId;
  min: number;
  max: number;
  actions: ProtectionActionId[];
}
