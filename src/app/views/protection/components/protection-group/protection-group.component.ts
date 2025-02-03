/* eslint-disable @typescript-eslint/unbound-method */

import {
  ChangeDetectionStrategy,
  Component,
  input,
  output,
  OnInit,
} from '@angular/core';
import { Button } from 'primeng/button';
import { Checkbox } from 'primeng/checkbox';
import { FloatLabel } from 'primeng/floatlabel';
import { InputNumber } from 'primeng/inputnumber';
import { ProtectionGroup } from '../../models/protection-groups.models';
import {
  FormGroup,
  FormControl,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { ProtectionItemModel } from '../../models/protection.models';
import { ProtectionItemForm } from './protection-group.models';
import { TranslocoDirective } from '@jsverse/transloco';

@Component({
  selector: 'app-protection-group',
  imports: [
    FloatLabel,
    InputNumber,
    Checkbox,
    ReactiveFormsModule,
    Button,
    TranslocoDirective,
  ],
  templateUrl: './protection-group.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProtectionGroupComponent implements OnInit {
  group = input.required<ProtectionGroup>();
  disabled = input.required<boolean, boolean>({
    transform: (value) => {
      if (!this.form) {
        return value;
      }

      if (value) {
        this.form.disable();
      } else {
        this.form.enable();
      }

      return value;
    },
  });
  save = output<ProtectionItemModel>();

  form!: FormGroup<ProtectionItemForm>;

  ngOnInit(): void {
    this.form = new FormGroup<ProtectionItemForm>({
      id: new FormControl(this.group().id),
      min: new FormControl(
        {
          value: null,
          disabled: this.disabled(),
        },
        Validators.required,
      ),
      max: new FormControl(
        {
          value: null,
          disabled: this.disabled(),
        },
        Validators.required,
      ),
      actions: new FormControl({
        value: [],
        disabled: this.disabled(),
      }),
    });
  }

  saveItem(): void {
    if (this.form.invalid) {
      return;
    }

    this.save.emit(this.form.value as ProtectionItemModel);
  }
}
