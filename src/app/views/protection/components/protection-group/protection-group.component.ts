import {
  ChangeDetectionStrategy,
  Component,
  input,
  OnInit,
  Inject,
  computed,
  signal,
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
import { ConfirmationService, MessageService, PrimeIcons } from 'primeng/api';
import { ConfirmDialog } from 'primeng/confirmdialog';
import { ConfirmDialogService } from '@common/services/confirm-dialog/confirm-dialog.service';
import { ProtectionService } from '../../services/protection/protection.service';
import { first, finalize } from 'rxjs';
import { Toast } from 'primeng/toast';
import { ToastService } from '@common/services/toast/toast.service';

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
    Toast,
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
  templateUrl: './protection-group.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProtectionGroupComponent implements OnInit {
  disabled = input.required<boolean>();
  group = input.required<ProtectionGroup>();
  rule = input.required<ProtectionRuleModel, ProtectionRuleModel>({
    transform: (value) => {
      if (value && this.form) {
        this.form.setValue(value);
      }

      return value;
    },
  });

  isDisabled = computed(() => {
    const disabled = this.disabled() || this.isLoading();

    if (this.form) {
      disabled ? this.form.disable() : this.form.enable();
    }

    return disabled;
  });

  form!: FormGroup<ProtectionRuleForm>;

  private isLoading = signal(false);

  constructor(
    private readonly protectionService: ProtectionService,
    @Inject(ConfirmationService)
    private readonly confirmDialogService: ConfirmDialogService,
    @Inject(MessageService)
    private readonly toastService: ToastService,
  ) {}

  ngOnInit(): void {
    this.form = new FormGroup<ProtectionRuleForm>({
      groupId: new FormControl(this.group().id),
      min: new FormControl(
        {
          value: null,
          disabled: this.isDisabled(),
        },
        Validators.required,
      ),
      max: new FormControl(
        {
          value: null,
          disabled: this.isDisabled(),
        },
        Validators.required,
      ),
      actions: new FormControl({
        value: [],
        disabled: this.isDisabled(),
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
        label: 'PROTECTION.BUTTON.SAVE',
      },
      accept: () => {
        this.saveRule();
      },
    });
  }

  saveRule(): void {
    this.isLoading.set(true);

    this.protectionService
      .saveRule(this.form.value as ProtectionRuleModel)
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
          this.toastService.error('PROTECTION.TOAST.SAVE_ERROR');
        },
      });
  }
}
