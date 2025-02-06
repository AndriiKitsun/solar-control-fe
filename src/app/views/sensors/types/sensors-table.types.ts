import { TranslationKey } from '@common/types/lang.types';
import { TableColumnWidth } from '@common/enums/table.enums';

export interface RowConfig {
  id: string;
  title: TranslationKey;
  isEmpty: boolean;
  data: RowDataModel;
}

export interface RowDataModel {
  voltage?: string;
  current?: string;
  power?: string;
  energy?: string;
  t1Energy?: string;
  t1EnergyCost?: string;
  t2Energy?: string;
  t2EnergyCost?: string;
  energyCost?: string;
  frequency?: string;
  powerFactor?: string;
  avgVoltage?: string;
}

export interface ColumnConfig {
  header: TranslationKey;
  field: keyof RowDataModel | '';
  minWidth?: TableColumnWidth;
  isTitle?: boolean;
}
