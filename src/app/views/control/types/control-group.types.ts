import { ControlRuleId } from '../enums/control-rule.enum';
import { TranslationKey } from '@common/types/lang.types';
import { FormControl } from '@angular/forms';
import { ControlRuleModel } from '../models/control-rule.models';

export interface ControlGroup {
  id: ControlRuleId;
  label: TranslationKey;
  inputs: ControlInput[];
}

export interface ControlInput {
  id: string;
  formControlId: keyof ControlRuleModel;
  min: number;
  max: number;
  step: number;
  fractionDigits: number;
  suffix: TranslationKey;
  label: TranslationKey;
}

export interface ControlRuleForm {
  id: FormControl<ControlRuleId | null>;
  scaleUpCheckTime: FormControl<number | null>;
  scaleUpValue: FormControl<number | null>;
  scaleDownCheckTime: FormControl<number | null>;
  scaleDownValue: FormControl<number | null>;
}
