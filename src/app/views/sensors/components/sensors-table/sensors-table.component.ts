import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { TableModule } from 'primeng/table';
import { TranslocoDirective } from '@jsverse/transloco';
import { PzemDataModel, PzemModel } from '../../models/sensor.models';
import {
  RowDataModel,
  RowConfig,
  ColumnConfig,
} from '../../types/sensors-table.types';
import { formatNum, NumFormat } from '@common/helpers/format.helper';
import {
  SENSORS_TABLE_ROWS,
  SENSORS_TABLE_COLUMNS,
} from '../../constants/sensors-table.constants';
import { NgClass } from '@angular/common';
import { SettingsModel } from '../../models/setting.models';

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
  settings = input<SettingsModel | null>(null);

  columnConfigs: ColumnConfig[] = SENSORS_TABLE_COLUMNS;

  transformToRow(data: PzemDataModel): RowConfig[] {
    return SENSORS_TABLE_ROWS.map((row) => {
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
      ? NumFormat.NEAREST_INT
      : NumFormat.THREE_DIGITS;

    const t1EnergyCost = this.calcCost(
      pzem.t1Energy,
      this.settings()?.t1EnergyCcyPrice,
    );
    const t2EnergyCost = this.calcCost(
      pzem.t2Energy,
      this.settings()?.t2EnergyCcyPrice,
    );
    const energyCost = t1EnergyCost + t2EnergyCost;

    return {
      voltage: formatNum(pzem.voltage, acVoltageFormat),
      current: formatNum(pzem.current, NumFormat.ONE_DIGIT),
      power: formatNum(pzem.power, NumFormat.TWO_DIGIT),
      energy: formatNum(pzem.energy, NumFormat.ONE_DIGIT),
      t1Energy: formatNum(pzem.t1Energy, NumFormat.ONE_DIGIT),
      t1EnergyCost: formatNum(t1EnergyCost, NumFormat.TWO_DIGIT),
      t2Energy: formatNum(pzem.t2Energy, NumFormat.ONE_DIGIT),
      t2EnergyCost: formatNum(t2EnergyCost, NumFormat.TWO_DIGIT),
      energyCost: formatNum(energyCost, NumFormat.TWO_DIGIT),
      frequency: formatNum(pzem.frequency, NumFormat.TWO_DIGIT),
      powerFactor: formatNum(pzem.powerFactor, NumFormat.TWO_DIGIT),
      avgVoltage: formatNum(pzem.avgVoltage, NumFormat.THREE_DIGITS),
    };
  }

  calcCost(value?: number, price?: number): number {
    if (!value || !price) {
      return 0;
    }

    return value * price;
  }
}
