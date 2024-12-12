import { RowConfig } from '../types';

export enum TableRowId {
  AC_INPUT = 'acInput',
  AC_OUTPUT = 'acOutput',
  DC_BATTERY = 'dcBattery',
  DC_SUN = 'dcSun',
}

// TODO: Add translations to 'title' fields
export const TABLE_ROWS: readonly RowConfig[] = [
  {
    id: TableRowId.AC_INPUT,
    title: 'AC Input',
  },
  {
    id: TableRowId.AC_OUTPUT,
    title: 'AC Output',
  },
  {
    id: TableRowId.DC_BATTERY,
    title: 'DC Battery',
  },
  {
    id: TableRowId.DC_SUN,
    title: 'DC Sun',
  },
];
