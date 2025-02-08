import { FormControl } from '@angular/forms';

export interface SettingsForm {
  t1EnergyCcyPrice: FormControl<number | undefined>;
  t2EnergyCcyPrice: FormControl<number | undefined>;
}
