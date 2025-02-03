/* eslint-disable @typescript-eslint/unbound-method */

import {
  ChangeDetectionStrategy,
  Component,
  input,
  output,
  OnInit,
  Inject,
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
import { ConfirmationService, PrimeIcons } from 'primeng/api';
import { ConfirmDialog } from 'primeng/confirmdialog';
import { ConfirmDialogService } from '@common/services/confirm-dialog/confirm-dialog.service';

/**
 * t(PROTECTION.CONFIRM_DIALOG.SAVE_MESSAGE)
 * t(PROTECTION.TOAST.SAVE_ERROR)
 */

@Component({
  selector: 'app-protection-group',
  imports: [
    FloatLabel,
    InputNumber,
    Checkbox,
    ReactiveFormsModule,
    Button,
    TranslocoDirective,
    ConfirmDialog,
  ],
  providers: [
    {
      provide: ConfirmationService,
      useClass: ConfirmDialogService,
    },
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

  constructor(
    @Inject(ConfirmationService)
    private readonly confirmDialogService: ConfirmDialogService,
  ) {}

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

  openSaveDialog(event: MouseEvent): void {
    if (this.form.invalid) {
      return;
    }

    this.confirmDialogService.confirmDialog({
      target: event.target!,
      message: 'PROTECTION.CONFIRM_DIALOG.SAVE_MESSAGE',
      acceptButtonProps: {
        icon: PrimeIcons.SAVE,
        label: 'BUTTON.SAVE',
      },
      accept: () => {
        this.save.emit(this.form.value as ProtectionItemModel);
      },
    });
  }
}
