import { RowConfig } from '../types';

/**
 * t(SENSORS.TABLE.ROW.AC_INPUT)
 * t(SENSORS.TABLE.ROW.AC_OUTPUT)
 * t(SENSORS.TABLE.ROW.DC_BATTERY)
 * t(SENSORS.TABLE.ROW.DC_SUN)
 * */

export enum TableRowId {
  AC_INPUT = 'acInput',
  AC_OUTPUT = 'acOutput',
  DC_BATTERY = 'dcBattery',
  DC_SUN = 'dcSun',
}

export const TABLE_ROWS: readonly RowConfig[] = [
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
  {
    id: TableRowId.DC_SUN,
    title: 'SENSORS.TABLE.ROW.DC_SUN',
  },
];
