import {
  Component,
  OnInit,
  signal,
  DestroyRef,
  ChangeDetectionStrategy,
  Inject,
} from '@angular/core';
import { Observable, tap, first, finalize } from 'rxjs';
import { DatePipe, AsyncPipe } from '@angular/common';
import { TableModule } from 'primeng/table';
import { TranslocoDirective } from '@jsverse/transloco';
import { Button } from 'primeng/button';
import { Toast } from 'primeng/toast';
import { MessageService, ConfirmationService, PrimeIcons } from 'primeng/api';
import { ConfirmDialog } from 'primeng/confirmdialog';
import { SensorsService } from '../../services/sensors/sensors.service';
import { SensorDataModel } from '../../models/sensor.models';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Toolbar } from 'primeng/toolbar';
import { ConfirmDialogService } from '@common/services/confirm-dialog/confirm-dialog.service';
import { ToastService } from '@common/services/toast/toast.service';
import { SensorsTableComponent } from '../sensors-table/sensors-table.component';
import { SettingsService } from '../../../settings/services/settings/settings.service';
import { SettingsModel } from '../../../settings/models/settings.models';
import { TranslationKey } from '@common/types/lang.types';
import { Severity } from '@common/types/severity.types';
import { LogComponent } from '../log/log.component';

/**
 * t(SENSORS.BUTTON.RESET)
 * t(SENSORS.BUTTON.SWITCH)
 * t(SENSORS.BUTTON.POWER)
 * t(SENSORS.BUTTON.POWER_ON)
 * t(SENSORS.BUTTON.POWER_OFF)
 * t(SENSORS.TOAST.RESET_ERROR)
 * t(SENSORS.TOAST.SWITCH_POWER_ERROR)
 * t(SENSORS.TOAST.POWER_STATUS_ERROR)
 * t(SENSORS.CONFIRM_DIALOG.POWER_MESSAGE)
 * t(SENSORS.CONFIRM_DIALOG.RESET_COUNTERS_MESSAGE)
 * */

@Component({
  selector: 'app-sensors',
  templateUrl: './sensors.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    TableModule,
    TranslocoDirective,
    DatePipe,
    Button,
    Toast,
    ConfirmDialog,
    Toolbar,
    SensorsTableComponent,
    AsyncPipe,
    LogComponent,
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
})
export class SensorsComponent implements OnInit {
  isTableLoading = signal(false);
  isResetProcessing = signal(false);
  isPowerProcessing = signal(false);

  powerStatus?: boolean;
  powerBtnLabel: TranslationKey = 'SENSORS.BUTTON.POWER';
  powerBtnSeverity: Severity = 'secondary';

  createdAt = '';
  sensorsData$!: Observable<SensorDataModel | null>;
  settings!: SettingsModel;

  constructor(
    private readonly sensorsService: SensorsService,
    private readonly settingsService: SettingsService,
    private readonly destroyRef: DestroyRef,
    @Inject(ConfirmationService)
    private readonly confirmDialogService: ConfirmDialogService,
    @Inject(MessageService)
    private readonly toastService: ToastService,
  ) {}

  ngOnInit(): void {
    this.getPowerStatus();
    this.sensorsData$ = this.getSensorsData();
    this.getSettings();
  }

  getPowerStatus(): void {
    this.isPowerProcessing.set(true);

    this.sensorsService
      .getPowerStatus()
      .pipe(
        takeUntilDestroyed(this.destroyRef),
        tap((response) => {
          this.powerStatus = response.status;

          if (response.status) {
            this.powerBtnLabel = 'SENSORS.BUTTON.POWER_OFF';
            this.powerBtnSeverity = 'danger';
          } else {
            this.powerBtnLabel = 'SENSORS.BUTTON.POWER_ON';
            this.powerBtnSeverity = 'success';
          }
        }),
        finalize(() => {
          this.isPowerProcessing.set(false);
        }),
      )
      .subscribe({
        error: () => {
          void this.toastService.error('SENSORS.TOAST.POWER_STATUS_ERROR');
        },
      });
  }

  getSensorsData(): Observable<SensorDataModel | null> {
    this.isTableLoading.set(true);

    return this.sensorsService.getSensorDataEvents().pipe(
      tap((response: SensorDataModel | null) => {
        if (!response) {
          this.isTableLoading.set(true);

          return;
        }

        this.isTableLoading.set(false);

        this.createdAt = response.createdAt;
      }),
    );
  }

  getSettings(): void {
    this.settingsService
      .getSettings()
      .pipe(
        takeUntilDestroyed(this.destroyRef),
        tap((settings) => {
          this.settings = settings;
        }),
      )
      .subscribe({
        error: () => {
          void this.toastService.error('SETTINGS.TOAST.SETTINGS_ERROR');
        },
      });
  }

  openResetConfirmationModal(event: MouseEvent): void {
    this.confirmDialogService.confirmDialog({
      target: event.target!,
      message: 'SENSORS.CONFIRM_DIALOG.RESET_COUNTERS_MESSAGE',
      acceptButtonProps: {
        label: 'SENSORS.BUTTON.RESET',
        icon: PrimeIcons.BOLT,
        severity: 'danger',
      },
      accept: () => {
        this.resetCounters();
      },
    });
  }

  openSwitchPowerConfirmationModal(event: MouseEvent): void {
    this.confirmDialogService.confirmDialog({
      target: event.target!,
      message: 'SENSORS.CONFIRM_DIALOG.POWER_MESSAGE',
      acceptButtonProps: {
        label: 'SENSORS.BUTTON.SWITCH',
        icon: PrimeIcons.POWER_OFF,
        severity: 'danger',
      },
      accept: () => {
        this.switchPower();
      },
    });
  }

  resetCounters(): void {
    this.isResetProcessing.set(true);

    this.sensorsService
      .resetCounters()
      .pipe(
        first(),
        finalize(() => {
          this.isResetProcessing.set(false);
        }),
      )
      .subscribe({
        error: () => {
          void this.toastService.error('SENSORS.TOAST.RESET_ERROR');
        },
      });
  }

  switchPower(): void {
    this.isPowerProcessing.set(true);

    this.sensorsService
      .switchPower(!this.powerStatus)
      .pipe(
        first(),
        finalize(() => {
          this.isPowerProcessing.set(false);
        }),
      )
      .subscribe({
        next: (response) => {
          this.powerStatus = response.status;
        },
        error: () => {
          void this.toastService.error('SENSORS.TOAST.SWITCH_POWER_ERROR');
        },
      });
  }
}
