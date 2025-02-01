import {
  Component,
  OnInit,
  signal,
  DestroyRef,
  computed,
  ChangeDetectionStrategy,
} from '@angular/core';
import { Observable, map, tap, first, finalize } from 'rxjs';
import { AsyncPipe, NgClass, DatePipe } from '@angular/common';
import { TableModule } from 'primeng/table';
import { TranslocoDirective, TranslocoService } from '@jsverse/transloco';
import { Button } from 'primeng/button';
import { Toast } from 'primeng/toast';
import { MessageService, ConfirmationService, PrimeIcons } from 'primeng/api';
import { ConfirmDialog } from 'primeng/confirmdialog';
import { TranslationKey } from '@common/types/lang.types';
import { RowConfig, RowData } from './types/sensors-table.types';
import { SensorsWebSocketService } from './services/sensors-websocket/sensors-websocket.service';
import { SensorsService } from './services/sensors/sensors.service';
import { PzemDataModel, PzemModel } from './models/sensor.models';
import { TABLE_ROWS } from './constants/sensors-table.constants';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import {
  formatNum,
  NEAREST_INT,
  THREE_DIGITS,
  ONE_DIGIT,
  TWO_DIGIT,
} from '@common/helpers/format.helper';
import { Toolbar } from 'primeng/toolbar';

/**
 * t(SENSORS.PZEM_LABEL)
 * t(SENSORS.PZEM_LABEL_WITH_TIME)
 * */

@Component({
  selector: 'app-sensors',
  templateUrl: './sensors.component.html',
  styleUrl: './sensors.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    TableModule,
    AsyncPipe,
    NgClass,
    TranslocoDirective,
    DatePipe,
    Button,
    Toast,
    ConfirmDialog,
    Toolbar,
  ],
  providers: [MessageService, ConfirmationService],
})
export class SensorsComponent implements OnInit {
  isWsConnecting = signal(false);
  isTableLoading = signal(false);
  isLoading = computed(() => this.isWsConnecting() || this.isTableLoading());
  isResetProcessing = signal<boolean>(false);
  isPowerProcessing = signal<boolean>(false);

  powerStatus = signal(false);

  pzemLabel: TranslationKey = 'SENSORS.PZEM_LABEL';
  createdAt = '';

  tablesRows$!: Observable<RowConfig[]>;

  constructor(
    private readonly sensorsWebSocketService: SensorsWebSocketService,
    private readonly sensorsService: SensorsService,
    private readonly translocoService: TranslocoService,
    private readonly messageService: MessageService,
    private readonly confirmationService: ConfirmationService,
    private readonly destroyRef: DestroyRef,
  ) {}

  ngOnInit(): void {
    this.subscribeOnWsStatusChange();
    this.subscribeOnPowerChange();
    this.tablesRows$ = this.getTableRows();
  }

  subscribeOnWsStatusChange(): void {
    this.sensorsWebSocketService.isConnected$
      .pipe(
        takeUntilDestroyed(this.destroyRef),
        tap((value) => {
          this.isWsConnecting.set(!value);
        }),
      )
      .subscribe();
  }

  subscribeOnPowerChange(): void {
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

  getTableRows(): Observable<RowConfig[]> {
    this.isTableLoading.set(true);

    return this.sensorsWebSocketService.on<PzemDataModel>().pipe(
      tap((response: PzemDataModel) => {
        this.isTableLoading.set(false);

        this.pzemLabel = 'SENSORS.PZEM_LABEL_WITH_TIME';
        this.createdAt = response.createdAtGmt;
      }),
      map((response: PzemDataModel) => {
        return TABLE_ROWS.map((row) => {
          const pzem = response.sensors.find((pzem) => pzem.name === row.id);

          return {
            ...row,
            isEmpty: !pzem,
            data: this.mapToRowData(pzem),
          };
        });
      }),
    );
  }

  mapToRowData(pzem?: PzemModel): RowData {
    if (!pzem) {
      return {};
    }

    const acVoltageFormat = pzem.name.startsWith('ac')
      ? NEAREST_INT
      : THREE_DIGITS;

    return {
      voltage: formatNum(pzem.voltage, acVoltageFormat),
      current: formatNum(pzem.current, ONE_DIGIT),
      power: formatNum(pzem.power, TWO_DIGIT),
      energy: formatNum(pzem.energy, ONE_DIGIT),
      t1Energy: formatNum(pzem.t1Energy, ONE_DIGIT),
      t2Energy: formatNum(pzem.t2Energy, ONE_DIGIT),
      frequency: formatNum(pzem.frequency, NEAREST_INT),
      powerFactor: formatNum(pzem.powerFactor, TWO_DIGIT),
      avgVoltage: formatNum(pzem.avgVoltage, THREE_DIGITS),
    };
  }

  openResetConfirmationModal(event: MouseEvent): void {
    this.confirmationService.confirm({
      target: event.target!,
      message: this.translocoService.translate(
        'SENSORS.CONFIRM_DIALOG.RESET_COUNTERS.MESSAGE',
      ),
      header: this.translocoService.translate('CONFIRM_DIALOG.HEADER'),
      icon: PrimeIcons.EXCLAMATION_TRIANGLE,
      rejectButtonProps: {
        label: this.translocoService.translate('BUTTON.CANCEL'),
        severity: 'secondary',
        icon: PrimeIcons.TIMES,
        outlined: true,
      },
      acceptButtonProps: {
        label: this.translocoService.translate('BUTTON.RESET'),
        icon: PrimeIcons.CHECK,
        severity: 'danger',
      },
      accept: () => {
        this.resetCounters();
      },
    });
  }

  openSwitchPowerConfirmationModal(event: MouseEvent): void {
    this.confirmationService.confirm({
      target: event.target!,
      message: this.translocoService.translate(
        'SENSORS.CONFIRM_DIALOG.POWER.MESSAGE',
      ),
      header: this.translocoService.translate('CONFIRM_DIALOG.HEADER'),
      icon: PrimeIcons.EXCLAMATION_TRIANGLE,
      rejectButtonProps: {
        label: this.translocoService.translate('BUTTON.CANCEL'),
        severity: 'secondary',
        icon: PrimeIcons.TIMES,
        outlined: true,
      },
      acceptButtonProps: {
        label: this.translocoService.translate('BUTTON.RESET'),
        icon: PrimeIcons.CHECK,
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
          this.messageService.add({
            severity: 'error',
            summary: this.translocoService.translate('TOAST.SUMMARY.ERROR'),
            detail: this.translocoService.translate(
              'SENSORS.TOAST.RESET_ERROR',
            ),
          });
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
          this.messageService.add({
            severity: 'error',
            summary: this.translocoService.translate('TOAST.SUMMARY.ERROR'),
            detail: this.translocoService.translate(
              'SENSORS.TOAST.POWER_ERROR',
            ),
          });
        },
      });
  }
}
