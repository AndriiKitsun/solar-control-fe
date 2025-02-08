import { RowConfig, ColumnConfig } from '../types/sensors-table.types';
import { TableColumnWidth } from '@common/enums/table.enums';

/**
 * t(SENSORS.TABLE.ROW.AC_INPUT)
 * t(SENSORS.TABLE.ROW.AC_OUTPUT)
 * t(SENSORS.TABLE.ROW.DC_BATTERY)
 * t(SENSORS.TABLE.COLUMN.NAME)
 * t(SENSORS.TABLE.COLUMN.VOLTAGE)
 * t(SENSORS.TABLE.COLUMN.CURRENT)
 * t(SENSORS.TABLE.COLUMN.POWER)
 * t(SENSORS.TABLE.COLUMN.ENERGY)
 * t(SENSORS.TABLE.COLUMN.T1_ENERGY)
 * t(SENSORS.TABLE.COLUMN.T1_ENERGY_CCY)
 * t(SENSORS.TABLE.COLUMN.T2_ENERGY)
 * t(SENSORS.TABLE.COLUMN.T2_ENERGY_CCY)
 * t(SENSORS.TABLE.COLUMN.ENERGY_CCY_SUM)
 * t(SENSORS.TABLE.COLUMN.FREQUENCY)
 * t(SENSORS.TABLE.COLUMN.POWER_FACTOR)
 * t(SENSORS.TABLE.COLUMN.AVG_VOLTAGE)
 * */

export const enum TableRowId {
  AC_INPUT = 'acInput',
  AC_OUTPUT = 'acOutput',
  DC_BATTERY = 'dcBattery',
}

export const SENSORS_TABLE_ROWS: readonly Pick<RowConfig, 'id' | 'title'>[] = [
  {
    id: TableRowId.AC_INPUT,
    title: 'SENSORS.TABLE.ROW.AC_INPUT',
  },
  {
    id: TableRowId.AC_OUTPUT,
    title: 'SENSORS.TABLE.ROW.AC_OUTPUT',
  },
  {
    id: TableRowId.DC_BATTERY,
    title: 'SENSORS.TABLE.ROW.DC_BATTERY',
  },
];

export const SENSORS_TABLE_COLUMNS: ColumnConfig[] = [
  {
    header: 'SENSORS.TABLE.COLUMN.NAME',
    field: '',
    minWidth: TableColumnWidth.MEDIUM,
    isTitle: true,
  },
  {
    header: 'SENSORS.TABLE.COLUMN.VOLTAGE',
    field: 'voltage',
    minWidth: TableColumnWidth.MEDIUM,
  },
  {
    header: 'SENSORS.TABLE.COLUMN.CURRENT',
    field: 'current',
    minWidth: TableColumnWidth.MEDIUM,
  },
  {
    header: 'SENSORS.TABLE.COLUMN.POWER',
    field: 'power',
    minWidth: TableColumnWidth.MEDIUM,
  },
  {
    header: 'SENSORS.TABLE.COLUMN.ENERGY',
    field: 'energy',
    minWidth: TableColumnWidth.MEDIUM,
  },
  {
    header: 'SENSORS.TABLE.COLUMN.T1_ENERGY',
    field: 't1Energy',
    minWidth: TableColumnWidth.MEDIUM,
  },
  {
    header: 'SENSORS.TABLE.COLUMN.T1_ENERGY_CCY',
    field: 't1EnergyCost',
    minWidth: TableColumnWidth.MEDIUM,
  },
  {
    header: 'SENSORS.TABLE.COLUMN.T2_ENERGY',
    field: 't2Energy',
    minWidth: TableColumnWidth.MEDIUM,
  },
  {
    header: 'SENSORS.TABLE.COLUMN.T2_ENERGY_CCY',
    field: 't2EnergyCost',
    minWidth: TableColumnWidth.MEDIUM,
  },
  {
    header: 'SENSORS.TABLE.COLUMN.ENERGY_CCY_SUM',
    field: 'energyCost',
    minWidth: TableColumnWidth.MEDIUM,
  },
  {
    header: 'SENSORS.TABLE.COLUMN.FREQUENCY',
    field: 'frequency',
    minWidth: TableColumnWidth.MEDIUM,
  },
  {
    header: 'SENSORS.TABLE.COLUMN.POWER_FACTOR',
    field: 'powerFactor',
    minWidth: TableColumnWidth.MEDIUM,
  },
  {
    header: 'SENSORS.TABLE.COLUMN.AVG_VOLTAGE',
    field: 'avgVoltage',
    minWidth: TableColumnWidth.MEDIUM,
  },
];
