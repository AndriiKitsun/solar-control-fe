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
import { ProtectionGroup } from '../../models/protection-group.models';
import {
  FormGroup,
  FormControl,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { ProtectionRuleModel } from '../../models/protection-rule.models';
import { ProtectionRuleForm } from './protection-group.models';
import { TranslocoDirective } from '@jsverse/transloco';
import { ConfirmationService, PrimeIcons } from 'primeng/api';
import { ConfirmDialog } from 'primeng/confirmdialog';
import { ConfirmDialogService } from '@common/services/confirm-dialog/confirm-dialog.service';

/**
 * t(PROTECTION.CONFIRM_DIALOG.SAVE_MESSAGE)
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
  group = input.required<ProtectionGroup>();
  rule = input.required<ProtectionRuleModel, ProtectionRuleModel>({
    transform: (value) => {
      if (value && this.form) {
        this.form.setValue(value);
      }

      return value;
    },
  });

  save = output<ProtectionRuleModel>();

  form!: FormGroup<ProtectionRuleForm>;

  constructor(
    @Inject(ConfirmationService)
    private readonly confirmDialogService: ConfirmDialogService,
  ) {}

  ngOnInit(): void {
    this.form = new FormGroup<ProtectionRuleForm>({
      groupId: new FormControl(this.group().id),
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
        this.save.emit(this.form.value as ProtectionRuleModel);
      },
    });
  }
}
