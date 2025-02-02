import {
  ProtectionGroupId,
  ProtectionActionId,
} from '../enums/protection-groups.enums';

export interface ProtectionItemModel {
  id: ProtectionGroupId;
  min: number;
  max: number;
  actions: ProtectionActionId[];
}
