import { ControlRuleId } from '../enums/control-rule.enum';
import { TranslationKey } from '@common/types/lang.types';
import { FormControl } from '@angular/forms';

export interface ControlGroup {
  id: ControlRuleId;
  scaleUpTimeInputId: string;
  scaleUpValueInputId: string;
  scaleDownTimeInputId: string;
  scaleDownValueInputId: string;
  label: TranslationKey;
  input: ControlInput;
}

export interface ControlInput {
  min: number;
  max: number;
  step: number;
  suffix: TranslationKey;
  fractionDigits: number;
}

export interface ControlRuleForm {
  id: FormControl<ControlRuleId | null>;
  scaleUpCheckTime: FormControl<number | null>;
  scaleUpValue: FormControl<number | null>;
  scaleDownCheckTime: FormControl<number | null>;
  scaleDownValue: FormControl<number | null>;
}
