import { MenuItem } from 'primeng/api';
import { TranslationKey } from '@common/types/lang.types';
import { MinerType } from './asics.models';

export interface AsicsMenuItemMapConfig {
  label: TranslationKey;
  icon: string;
}

export interface AsicsMenuItem extends MenuItem {
  ipAddress?: string;
  type?: MinerType;
}
