import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  OnInit,
  Inject,
  signal,
  effect,
} from '@angular/core';
import { TranslocoDirective } from '@jsverse/transloco';
import { FloatLabel } from 'primeng/floatlabel';
import { InputNumber } from 'primeng/inputnumber';
import {
  ReactiveFormsModule,
  FormsModule,
  FormGroup,
  FormControl,
} from '@angular/forms';
import { Button } from 'primeng/button';
import { SettingsService } from '../../services/settings/settings.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { tap, first, finalize } from 'rxjs';
import { SettingsModel } from '../../models/settings.models';
import { PrimeIcons, ConfirmationService, MessageService } from 'primeng/api';
import { ConfirmDialogService } from '@common/services/confirm-dialog/confirm-dialog.service';
import { ToastService } from '@common/services/toast/toast.service';
import { SettingsForm } from '../../types/settings.types';
import { ConfirmDialog } from 'primeng/confirmdialog';
import { Toast } from 'primeng/toast';

/**
 * t(SETTINGS.CONFIRM_DIALOG.SAVE_MESSAGE)
 * t(SETTINGS.TOAST.SAVE_ERROR)
 * t(SETTINGS.TOAST.SETTINGS_ERROR)
 */

@Component({
  selector: 'app-settings',
  imports: [
    TranslocoDirective,
    FloatLabel,
    InputNumber,
    ReactiveFormsModule,
    Button,
    FormsModule,
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
  templateUrl: './settings.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SettingsComponent implements OnInit {
  isLoading = signal(false);
  isSaving = signal(false);

  form!: FormGroup<SettingsForm>;

  private settings!: SettingsModel;

  constructor(
    private readonly settingsService: SettingsService,
    private readonly destroyRef: DestroyRef,
    @Inject(ConfirmationService)
    private readonly confirmDialogService: ConfirmDialogService,
    @Inject(MessageService)
    private readonly toastService: ToastService,
  ) {
    effect(() => {
      if (this.form) {
        this.isLoading() ? this.form.disable() : this.form.enable();
      }
    });
  }

  ngOnInit(): void {
    this.form = this.initForm();
    this.getSettings();
  }

  initForm(): FormGroup<SettingsForm> {
    return new FormGroup<SettingsForm>({
      t1EnergyCcyPrice: new FormControl(
        {
          value: undefined,
          disabled: true,
        },
        { nonNullable: true },
      ),
      t2EnergyCcyPrice: new FormControl(
        {
          value: undefined,
          disabled: true,
        },
        { nonNullable: true },
      ),
    });
  }

  getSettings(): void {
    this.isLoading.set(true);

    this.settingsService
      .getSettings()
      .pipe(
        takeUntilDestroyed(this.destroyRef),
        tap((settings) => {
          this.settings = settings;

          this.form.setValue({
            t1EnergyCcyPrice: settings.t1EnergyCcyPrice,
            t2EnergyCcyPrice: settings.t2EnergyCcyPrice,
          });
        }),
        finalize(() => {
          this.isLoading.set(false);
        }),
      )
      .subscribe({
        error: () => {
          void this.toastService.error('SETTINGS.TOAST.SETTINGS_ERROR');
        },
      });
  }

  openSaveDialog(event: MouseEvent): void {
    if (this.form.invalid) {
      return;
    }

    this.confirmDialogService.confirmDialog({
      target: event.target!,
      message: 'SETTINGS.CONFIRM_DIALOG.SAVE_MESSAGE',
      acceptButtonProps: {
        icon: PrimeIcons.SAVE,
        label: 'BUTTON.SAVE',
      },
      accept: () => {
        this.isLoading.set(true);
        this.isSaving.set(true);

        this.settingsService
          .saveSettings(this.settings.id, this.form.value)
          .pipe(
            first(),
            finalize(() => {
              this.isLoading.set(false);
              this.isSaving.set(false);
            }),
          )
          .subscribe({
            next: () => {
              this.form.reset(this.form.value);
            },
            error: () => {
              void this.toastService.error('SETTINGS.TOAST.SAVE_ERROR');
            },
          });
      },
    });
  }
}
