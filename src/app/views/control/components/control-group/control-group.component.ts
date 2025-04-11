import {
  ChangeDetectionStrategy,
  Component,
  input,
  OnInit,
  computed,
  signal,
  Inject,
} from '@angular/core';
import { TranslocoDirective } from '@jsverse/transloco';
import { ConfirmationService, MessageService, PrimeIcons } from 'primeng/api';
import { ConfirmDialog } from 'primeng/confirmdialog';
import { ConfirmDialogService } from '@common/services/confirm-dialog/confirm-dialog.service';
import { Toast } from 'primeng/toast';
import { ToastService } from '@common/services/toast/toast.service';
import { ControlGroup, ControlRuleForm } from '../../types/control-group.types';
import { ControlRuleModel } from '../../models/control-rule.models';
import {
  FormGroup,
  ReactiveFormsModule,
  FormControl,
  Validators,
} from '@angular/forms';
import { FloatLabel } from 'primeng/floatlabel';
import { InputNumber } from 'primeng/inputnumber';
import { Button } from 'primeng/button';
import { ControlService } from '../../services/control/control.service';
import { first, finalize } from 'rxjs';

/**
 * t(CONTROL.CONFIRM_DIALOG.SAVE_MESSAGE)
 * t(CONTROL.TOAST.SAVE_ERROR)
 */

@Component({
  selector: 'app-control-group',
  imports: [
    TranslocoDirective,
    ConfirmDialog,
    Toast,
    ReactiveFormsModule,
    FloatLabel,
    InputNumber,
    Button,
  ],
  providers: [
    {
      provide: ConfirmationService,
      useClass: ConfirmDialogService,
    },
    {
      provide: MessageService,
      useClass: ToastService,
    },
  ],
  templateUrl: './control-group.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ControlGroupComponent implements OnInit {
  disabled = input.required<boolean>();
  group = input.required<ControlGroup>();
  rule = input.required<ControlRuleModel, ControlRuleModel>({
    transform: (value) => {
      if (value && this.form) {
        this.form.setValue(value);
      }

      return value;
    },
  });

  isLoading = signal(false);
  isDisabled = computed(() => {
    const disabled = this.disabled() || this.isLoading();

    if (this.form) {
      disabled ? this.form.disable() : this.form.enable();
    }

    return disabled;
  });

  form!: FormGroup<ControlRuleForm>;

  constructor(
    private readonly controlService: ControlService,
    @Inject(ConfirmationService)
    private readonly confirmDialogService: ConfirmDialogService,
    @Inject(MessageService)
    private readonly toastService: ToastService,
  ) {}

  ngOnInit(): void {
    this.form = new FormGroup<ControlRuleForm>({
      id: new FormControl(this.group().id),
      scaleUpCheckTime: new FormControl(
        {
          value: null,
          disabled: this.isDisabled(),
        },
        Validators.required,
      ),
      scaleUpValue: new FormControl(
        {
          value: null,
          disabled: this.isDisabled(),
        },
        Validators.required,
      ),
      scaleDownCheckTime: new FormControl(
        {
          value: null,
          disabled: this.isDisabled(),
        },
        Validators.required,
      ),
      scaleDownValue: new FormControl(
        {
          value: null,
          disabled: this.isDisabled(),
        },
        Validators.required,
      ),
    });

    if (this.rule()) {
      this.form.setValue(this.rule());
    }
  }

  openSaveDialog(event: MouseEvent): void {
    if (this.form.invalid) {
      return;
    }

    this.confirmDialogService.confirmDialog({
      target: event.target!,
      message: 'CONTROL.CONFIRM_DIALOG.SAVE_MESSAGE',
      acceptButtonProps: {
        icon: PrimeIcons.SAVE,
        label: 'BUTTON.SAVE',
      },
      accept: () => {
        this.saveRule();
      },
    });
  }

  saveRule(): void {
    this.isLoading.set(true);

    this.controlService
      .saveRule(this.form.value as ControlRuleModel)
      .pipe(
        first(),
        finalize(() => {
          this.isLoading.set(false);
        }),
      )
      .subscribe({
        next: () => {
          this.form.reset(this.form.value);
        },
        error: () => {
          void this.toastService.error('CONTROL.TOAST.SAVE_ERROR');
        },
      });
  }
}
