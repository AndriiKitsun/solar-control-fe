import {
  Component,
  OnInit,
  signal,
  DestroyRef,
  computed,
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
import { SensorsWebSocketService } from '../../services/sensors-websocket/sensors-websocket.service';
import { SensorsService } from '../../services/sensors/sensors.service';
import { PzemDataModel } from '../../models/sensor.models';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Toolbar } from 'primeng/toolbar';
import { ConfirmDialogService } from '@common/services/confirm-dialog/confirm-dialog.service';
import { ToastService } from '@common/services/toast/toast.service';
import { SensorsTableComponent } from '../sensors-table/sensors-table.component';
import { SettingsService } from '../../services/settings/settings.service';
import { SettingsModel } from '../../models/setting.models';

/**
 * t(SENSORS.BUTTON.RESET)
 * t(SENSORS.BUTTON.SWITCH)
 * t(SENSORS.TOAST.RESET_ERROR)
 * t(SENSORS.TOAST.POWER_ERROR)
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
  isWsConnecting = signal(false);
  isTableLoading = signal(false);
  isLoading = computed(() => this.isWsConnecting() || this.isTableLoading());
  isResetProcessing = signal<boolean>(false);
  isPowerProcessing = signal<boolean>(false);

  powerStatus = signal(false);

  createdAt = '';
  sensorsData$!: Observable<PzemDataModel>;
  settings!: SettingsModel;

  constructor(
    private readonly sensorsWebSocketService: SensorsWebSocketService,
    private readonly sensorsService: SensorsService,
    private readonly settingsService: SettingsService,
    private readonly destroyRef: DestroyRef,
    @Inject(ConfirmationService)
    private readonly confirmDialogService: ConfirmDialogService,
    @Inject(MessageService)
    private readonly toastService: ToastService,
  ) {}

  ngOnInit(): void {
    this.getWsStatus();
    this.getPowerStatus();
    this.sensorsData$ = this.getSensorsData();
    this.getSettings();
  }

  getWsStatus(): void {
    this.sensorsWebSocketService.isConnected$
      .pipe(
        takeUntilDestroyed(this.destroyRef),
        tap((value) => {
          this.isWsConnecting.set(!value);
        }),
      )
      .subscribe();
  }

  getPowerStatus(): void {
    this.sensorsService
      .getPowerStatus()
      .pipe(
        takeUntilDestroyed(this.destroyRef),
        tap((response) => {
          this.powerStatus.set(response.status);
        }),
      )
      .subscribe();
  }

  getSensorsData(): Observable<PzemDataModel> {
    this.isTableLoading.set(true);

    return this.sensorsWebSocketService.on<PzemDataModel>().pipe(
      tap((response: PzemDataModel) => {
        this.isTableLoading.set(false);

        this.createdAt = response.createdAtGmt;
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
      .subscribe();
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
          this.toastService.error('SENSORS.TOAST.RESET_ERROR');
        },
      });
  }

  switchPower(): void {
    this.isPowerProcessing.set(true);

    this.sensorsService
      .switchPower(!this.powerStatus())
      .pipe(
        first(),
        finalize(() => {
          this.isPowerProcessing.set(false);
        }),
      )
      .subscribe({
        next: (response) => {
          this.powerStatus.set(response.status);
        },
        error: () => {
          this.toastService.error('SENSORS.TOAST.POWER_ERROR');
        },
      });
  }
}
