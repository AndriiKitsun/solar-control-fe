import { TranslationKey } from '@common/types/lang.types';

export interface RowConfig {
  id: string;
  title: TranslationKey;
  data: RowData;
}

export interface RowData {
  isEmpty?: boolean;
  voltage?: string;
  current?: string;
  power?: string;
  energy?: string;
  t1Energy?: string;
  t2Energy?: string;
  frequency?: string;
  powerFactor?: string;
  avgVoltage?: string;
}
