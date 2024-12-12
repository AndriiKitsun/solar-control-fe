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
import { PzemModel } from './models';

enum SensorGridColumn {
  EMPTY = 'EMPTY',
  INPUT_AC = 'INPUT_AC',
  OUTPUT_AC = 'CURRENT',
  BATTERY_DC = 'BATTERY_DC',
  SUN_DC = 'SUN_DC',
}

interface ColumnConfig {
  id: string;
  title?: string;
  ngStyle?: Record<string, string | number>;
  field?: string;
}

interface RowConfig {
  title: string;
  field: keyof PzemModel;
  [key: string]: string | number | undefined;
}

@Component({
  selector: 'app-sensors',
  standalone: true,
  templateUrl: './sensors.component.html',
  styleUrl: './sensors.component.scss',
  imports: [TableModule, JsonPipe, AsyncPipe, DecimalPipe, NgForOf, NgStyle],
})
export class SensorsComponent implements OnInit {
  columnConfig: ColumnConfig[] = [
    {
      id: SensorGridColumn.EMPTY,
      ngStyle: {
        'width.rem': 8,
      },
      field: 'title',
    },
    {
      id: SensorGridColumn.INPUT_AC,
      title: 'Input AC',
      field: 'acInput',
    },
    {
      id: SensorGridColumn.OUTPUT_AC,
      title: 'Output AC',
      field: 'acOutput',
    },
    {
      id: SensorGridColumn.BATTERY_DC,
      title: 'Battery DC',
      field: 'dcAcc',
    },
    {
      id: SensorGridColumn.SUN_DC,
      title: 'Sun DC',
      field: 'dcSun',
    },
  ];

  rowData: RowConfig[] = [
    {
      title: 'U (V)',
      field: 'voltageV',
    },
    {
      title: 'I (A)',
      field: 'currentA',
    },
    {
      title: 'P (kW)',
      field: 'powerKw',
    },
    {
      title: 'T1 (Kw/h)',
      field: 't1EnergyKwh',
    },
    {
      title: 'T2 (Kw/h)',
      field: 't2EnergyKwh',
    },
    {
      title: '10m U (V)',
      field: 'avgVoltageV',
    },
  ];

  dataConfig$!: Observable<PzemModel[]>;

  constructor(private readonly sensorService: SensorService) {}

  ngOnInit(): void {
    this.dataConfig$ = this.sensorService.getSensorsData().pipe(
      map((sensors) => {
        console.log(`sensors -->`, sensors);
        return sensors.pzems;

        // sensors.pzems.forEach((pzem: PzemModel) => {
        //   this.rowData.forEach((row) => {
        //     row[pzem.id] = pzem[row.field];
        //   });
        // });
        //
        // return this.rowData;
      }),
    );
  }
}
