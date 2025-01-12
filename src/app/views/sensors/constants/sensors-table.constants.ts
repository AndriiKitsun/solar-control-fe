import { RowConfig } from '../types/sensors-table.types';

/**
 * t(SENSORS.TABLE.ROW.AC_INPUT)
 * t(SENSORS.TABLE.ROW.AC_OUTPUT)
 * t(SENSORS.TABLE.ROW.DC_BATTERY)
 * */

export enum TableRowId {
  AC_INPUT = 'acInput',
  AC_OUTPUT = 'acOutput',
  DC_BATTERY = 'dcBattery',
}

export const TABLE_ROWS: readonly Omit<RowConfig, 'data'>[] = [
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
