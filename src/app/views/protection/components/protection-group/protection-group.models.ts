import {
  ProtectionGroupId,
  ProtectionActionId,
} from '../../enums/protection-groups.enums';
import { FormControl } from '@angular/forms';

export interface ProtectionItemForm {
  id: FormControl<ProtectionGroupId | null>;
  min: FormControl<number | null>;
  max: FormControl<number | null>;
  actions: FormControl<ProtectionActionId[] | null>;
}
