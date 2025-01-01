import { Component, OnInit, signal } from '@angular/core';
import { SensorsWebSocketService, SensorsService } from './services';
import { Observable, map, tap, first, finalize } from 'rxjs';
import { TABLE_ROWS } from './constants';
import { RowConfig } from './types';
import { AsyncPipe, DecimalPipe, NgClass, DatePipe } from '@angular/common';
import { TableModule } from 'primeng/table';
import { PzemDataModel } from './models';
import { TranslocoDirective, TranslocoService } from '@jsverse/transloco';
import { TranslationKey } from '@common/types';
import { Button } from 'primeng/button';
import { Toast } from 'primeng/toast';
import { MessageService, ConfirmationService, PrimeIcons } from 'primeng/api';
import { ConfirmDialog } from 'primeng/confirmdialog';

/**
 * t(SENSORS.PZEM_LABEL)
 * t(SENSORS.PZEM_LABEL_WITH_TIME)
 * */

@Component({
  selector: 'app-sensors',
  templateUrl: './sensors.component.html',
  styleUrl: './sensors.component.scss',
  imports: [
    TableModule,
    AsyncPipe,
    DecimalPipe,
    NgClass,
    TranslocoDirective,
    DatePipe,
    Button,
    Toast,
    ConfirmDialog,
  ],
  providers: [MessageService, ConfirmationService],
})
export class SensorsComponent implements OnInit {
  isLoading = signal<boolean>(false);
  isResetProcessing = signal<boolean>(false);

  pzemLabel: TranslationKey = 'SENSORS.PZEM_LABEL';
  createdAt = '';

  tablesRows$!: Observable<RowConfig[]>;

  constructor(
    private readonly sensorsWebSocketService: SensorsWebSocketService,
    private readonly sensorsService: SensorsService,
    private readonly translocoService: TranslocoService,
    private readonly messageService: MessageService,
    private readonly confirmationService: ConfirmationService,
  ) {}

  ngOnInit(): void {
    this.tablesRows$ = this.getTableRows();
  }

  getTableRows(): Observable<RowConfig[]> {
    this.isLoading.set(true);

    return this.sensorsWebSocketService.on<PzemDataModel>().pipe(
      tap((sensors: PzemDataModel) => {
        this.isLoading.set(false);

        this.pzemLabel = 'SENSORS.PZEM_LABEL_WITH_TIME';
        this.createdAt = sensors.createdAtGmt;
      }),
      map((sensors: PzemDataModel) => {
        return TABLE_ROWS.map((row) => {
          return {
            ...row,
            data: sensors.pzems.find((pzem) => pzem.name === row.id),
          };
        });
      }),
    );
  }

  openResetConfirmationModal(event: MouseEvent): void {
    this.confirmationService.confirm({
      target: event.target!,
      message: this.translocoService.translate(
        'SENSORS.CONFIRM_DIALOG.RESET_COUNTERS.MESSAGE',
      ),
      header: this.translocoService.translate(
        'SENSORS.CONFIRM_DIALOG.CONFIRM_HEADER',
      ),
      icon: PrimeIcons.EXCLAMATION_TRIANGLE,
      rejectButtonProps: {
        label: this.translocoService.translate('SENSORS.CONFIRM_DIALOG.REJECT'),
        severity: 'secondary',
        outlined: true,
      },
      acceptButtonProps: {
        label: this.translocoService.translate(
          'SENSORS.CONFIRM_DIALOG.RESET_COUNTERS.ACCEPT',
        ),
        severity: 'danger',
      },
      accept: () => {
        this.resetCounters();
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
}
