import {
  ProtectionGroupId,
  ProtectionActionId,
} from '../enums/protection-groups.enums';

export interface ProtectionRuleModel {
  groupId: ProtectionGroupId;
  min: number;
  max: number;
  actions: ProtectionActionId[];
}
