import { Component, OnInit } from '@angular/core';
import { TableModule } from 'primeng/table';
import { SensorService } from './services';
import {
  JsonPipe,
  AsyncPipe,
  DecimalPipe,
  NgForOf,
  NgStyle,
} from '@angular/common';
import { Observable, map } from 'rxjs';
import { TABLE_ROWS } from './constants';
import { RowConfig } from './types/sensors-table.types';

// enum SensorGridColumn {
//   EMPTY = 'EMPTY',
//   INPUT_AC = 'INPUT_AC',
//   OUTPUT_AC = 'CURRENT',
//   BATTERY_DC = 'BATTERY_DC',
//   SUN_DC = 'SUN_DC',
// }
//
// interface ColumnConfig {
//   id: string;
//   title?: string;
//   ngStyle?: Record<string, string | number>;
//   field?: string;
// }

// interface RowConfig {
//   title: string;
//   field: keyof PzemModel;
//   [key: string]: string | number | undefined;
// }

@Component({
  selector: 'app-sensors',
  standalone: true,
  templateUrl: './sensors.component.html',
  styleUrl: './sensors.component.scss',
  imports: [TableModule, JsonPipe, AsyncPipe, DecimalPipe, NgForOf, NgStyle],
})
export class SensorsComponent implements OnInit {
  tablesRows$!: Observable<RowConfig[]>;

  constructor(private readonly sensorService: SensorService) {}

  ngOnInit(): void {
    this.tablesRows$ = this.getTableRows();
  }

  getTableRows(): Observable<RowConfig[]> {
    return this.sensorService.getSensorsData().pipe(
      map((sensors) => {
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
