import { MenuItem } from 'primeng/api';
import { MinerType } from '../models';
import { TranslationKey } from '@common/types';

export interface MinerMenuItemMapConfig {
  label: TranslationKey;
  icon: string;
}

export interface MinerMenuItem extends MenuItem {
  ipAddress?: string;
  type?: MinerType;
}
