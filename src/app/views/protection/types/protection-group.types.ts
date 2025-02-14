import {
  ProtectionRuleId,
  ProtectionActionId,
} from '../enums/protection.enums';
import { TranslationKey } from '@common/types/lang.types';
import { ProtectionRuleModel } from '../models/protection-rule.models';
import { FormControl } from '@angular/forms';

export interface ProtectionGroup {
  id: ProtectionRuleId;
  minInputId: string;
  maxInputId: string;
  label: TranslationKey;
  input: ProtectionInput;
  actions: ProtectionAction[];
  rule?: ProtectionRuleModel;
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

export interface ProtectionRuleForm {
  id: FormControl<ProtectionRuleId | null>;
  min: FormControl<number | null>;
  max: FormControl<number | null>;
  actions: FormControl<ProtectionActionId[] | null>;
}
