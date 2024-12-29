import { Component, OnInit, signal } from '@angular/core';
import { SensorsWebSocketService, SensorsService } from './services';
import { Observable, map, tap, first, finalize } from 'rxjs';
import { TABLE_ROWS } from './constants';
import { RowConfig } from './types';
import { AsyncPipe, DecimalPipe, NgClass, DatePipe } from '@angular/common';
import { TableModule } from 'primeng/table';
import { PzemDataModel } from './models';
import { TranslocoDirective } from '@jsverse/transloco';
import { TranslationKey } from '@common/types';
import { Button } from 'primeng/button';
import { Toast } from 'primeng/toast';
import { ToastService } from '@common/services';
import { MessageService } from 'primeng/api';

/**
 * t(SENSORS.PZEM_LABEL)
 * t(SENSORS.PZEM_LABEL_WITH_TIME)
 * t(SENSORS.TOAST.RESET_ERROR)
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
  ],
  providers: [ToastService, MessageService],
})
export class SensorsComponent implements OnInit {
  isLoading = signal<boolean>(false);
  isResetLoading = signal<boolean>(false);

  pzemLabel: TranslationKey = 'SENSORS.PZEM_LABEL';
  createdAt = '';

  tablesRows$!: Observable<RowConfig[]>;

  constructor(
    private readonly sensorsWebSocketService: SensorsWebSocketService,
    private readonly sensorsService: SensorsService,
    private readonly toastService: ToastService,
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

  resetCounters(): void {
    this.isResetLoading.set(true);

    this.sensorsService
      .resetCounters()
      .pipe(
        first(),
        finalize(() => {
          this.isResetLoading.set(false);
        }),
      )
      .subscribe({
        error: () => {
          this.toastService.error('SENSORS.TOAST.RESET_ERROR');
        },
      });
  }
}
