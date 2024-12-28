import { Component, OnInit, signal } from '@angular/core';
import { SensorsWebSocketService } from './services';
import { Observable, map, tap } from 'rxjs';
import { TABLE_ROWS } from './constants';
import { RowConfig } from './types';
import { AsyncPipe, DecimalPipe, NgClass, DatePipe } from '@angular/common';
import { TableModule } from 'primeng/table';
import { PzemDataModel } from './models';
import { TranslocoDirective } from '@jsverse/transloco';
import { TranslationKey } from '@common/types';

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
  ],
})
export class SensorsComponent implements OnInit {
  isLoading = signal<boolean>(false);

  pzemLabel: TranslationKey = 'SENSORS.PZEM_LABEL';
  createdAt = '';

  tablesRows$!: Observable<RowConfig[]>;

  constructor(
    private readonly sensorsWebSocketService: SensorsWebSocketService,
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
}
