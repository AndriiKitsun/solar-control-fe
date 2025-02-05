import {
  ProtectionGroupId,
  ProtectionActionId,
} from '../../enums/protection-group.enums';
import { FormControl } from '@angular/forms';

export interface ProtectionRuleForm {
  groupId: FormControl<ProtectionGroupId | null>;
  min: FormControl<number | null>;
  max: FormControl<number | null>;
  actions: FormControl<ProtectionActionId[] | null>;
}
