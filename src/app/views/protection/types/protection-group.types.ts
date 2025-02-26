import { ProtectionRuleId } from '../enums/protection.enums';
import { TranslationKey } from '@common/types/lang.types';
import { FormControl } from '@angular/forms';

export interface ProtectionGroup {
  id: ProtectionRuleId;
  enableCheckId: string;
  minInputId: string;
  maxInputId: string;
  label: TranslationKey;
  input: ProtectionInput;
}

export interface ProtectionInput {
  min: number;
  max: number;
  step: number;
  suffix: TranslationKey;
  fractionDigits: number;
}

export interface ProtectionRuleForm {
  id: FormControl<ProtectionRuleId | null>;
  min: FormControl<number | null>;
  max: FormControl<number | null>;
  enabled: FormControl<boolean | null>;
}
