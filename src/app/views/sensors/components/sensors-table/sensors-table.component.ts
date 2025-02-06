import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { TableModule } from 'primeng/table';
import { TranslocoDirective } from '@jsverse/transloco';
import { PzemDataModel, PzemModel } from '../../models/sensor.models';
import {
  RowDataModel,
  RowConfig,
  ColumnConfig,
} from '../../types/sensors-table.types';
import {
  NEAREST_INT,
  THREE_DIGITS,
  formatNum,
  ONE_DIGIT,
  TWO_DIGIT,
} from '@common/helpers/format.helper';
import {
  TABLE_ROWS,
  SENSORS_TABLE_COLUMNS,
} from '../../constants/sensors-table.constants';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-sensors-table',
  imports: [TableModule, TranslocoDirective, NgClass],
  templateUrl: './sensors-table.component.html',
  styleUrl: './sensors-table.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SensorsTableComponent {
  loading = input.required<boolean>();
  rows = input.required<RowConfig[], PzemDataModel>({
    transform: (value: PzemDataModel): RowConfig[] => {
      if (!value) {
        return [];
      }

      return this.transformToRow(value);
    },
  });

  columnConfigs: ColumnConfig[] = SENSORS_TABLE_COLUMNS;

  transformToRow(data: PzemDataModel): RowConfig[] {
    return TABLE_ROWS.map((row) => {
      const pzem = data.sensors.find((pzem) => pzem.name === row.id);

      return {
        ...row,
        isEmpty: !pzem,
        data: this.mapToRowData(pzem),
      };
    });
  }

  mapToRowData(pzem?: PzemModel): RowDataModel {
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
      frequency: formatNum(pzem.frequency, TWO_DIGIT),
      powerFactor: formatNum(pzem.powerFactor, TWO_DIGIT),
      avgVoltage: formatNum(pzem.avgVoltage, THREE_DIGITS),
    };
  }
}
