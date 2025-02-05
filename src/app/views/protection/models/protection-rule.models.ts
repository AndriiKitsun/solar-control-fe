import {
  ProtectionGroupId,
  ProtectionActionId,
} from '../enums/protection-group.enums';

export interface ProtectionRuleModel {
  groupId: ProtectionGroupId;
  min: number;
  max: number;
  actions: ProtectionActionId[];
}
