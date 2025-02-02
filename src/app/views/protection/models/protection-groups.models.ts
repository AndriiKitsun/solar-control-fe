import {
  ProtectionGroupId,
  ProtectionActionId,
} from '../enums/protection-groups.enums';

export interface ProtectionGroup {
  id: ProtectionGroupId;
  minInputId: string;
  maxInputId: string;
  label: string;
  input: ProtectionInput;
  actions: ProtectionAction[];
}

export interface ProtectionInput {
  min: number;
  max: number;
  step: number;
  suffix: string;
  fractionDigits: number;
}

export interface ProtectionAction {
  id: ProtectionActionId;
  label: string;
}
