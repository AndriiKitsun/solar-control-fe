import { FormControl } from '@angular/forms';

export interface ModifyAsicForm {
  ip: FormControl<string>;
  address: FormControl<string>;
  password: FormControl<string>;
}
