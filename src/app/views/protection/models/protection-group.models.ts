import {
  ProtectionGroupId,
  ProtectionActionId,
} from '../enums/protection-groups.enums';
import { TranslationKey } from '@common/types/lang.types';

export interface ProtectionGroup {
  id: ProtectionGroupId;
  minInputId: string;
  maxInputId: string;
  label: TranslationKey;
  input: ProtectionInput;
  actions: ProtectionAction[];
}

export interface ProtectionInput {
  min: number;
  max: number;
  step: number;
  suffix: TranslationKey;
  fractionDigits: number;
}

export interface ProtectionAction {
  id: ProtectionActionId;
  label: TranslationKey;
}
