import { Component, OnInit, signal } from '@angular/core';
import { SensorService } from './services';
import { Observable, map, tap } from 'rxjs';
import { TABLE_ROWS } from './constants';
import { RowConfig } from './types';
import { AsyncPipe, DecimalPipe, DatePipe, NgClass } from '@angular/common';
import { TableModule } from 'primeng/table';
import { SensorModel } from './models';
import { TranslocoDirective } from '@jsverse/transloco';

@Component({
  selector: 'app-sensors',
  standalone: true,
  templateUrl: './sensors.component.html',
  styleUrl: './sensors.component.scss',
  providers: [DatePipe],
  imports: [TableModule, AsyncPipe, DecimalPipe, NgClass, TranslocoDirective],
})
export class SensorsComponent implements OnInit {
  isLoading = signal<boolean>(false);

  createdAtLabel = 'PZEM Sensors';
  tablesRows$!: Observable<RowConfig[]>;

  constructor(
    private readonly sensorService: SensorService,
    private readonly datePipe: DatePipe,
  ) {}

  ngOnInit(): void {
    this.tablesRows$ = this.getTableRows();
  }

  getTableRows(): Observable<RowConfig[]> {
    this.isLoading.set(true);

    return this.sensorService.getSensorsData().pipe(
      tap((sensors: SensorModel) => {
        this.isLoading.set(false);

        // TODO: Add translation for the label
        this.createdAtLabel = `PZEM Sensors: ${this.datePipe.transform(sensors.createdAtGmt, 'mediumTime')}`;
      }),
      map((sensors: SensorModel) => {
        return TABLE_ROWS.map((row) => {
          return {
            ...row,
            data: sensors.pzems.find((pzem) => pzem.id === row.id),
          };
        });
      }),
    );
  }
}
