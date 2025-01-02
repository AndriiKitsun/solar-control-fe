import { MenuItem } from 'primeng/api';
import { TranslationKey } from '@common/types/lang.types';
import { MinerType } from '../models/miner.models';

export interface MinerMenuItemMapConfig {
  label: TranslationKey;
  icon: string;
}

export interface MinerMenuItem extends MenuItem {
  ipAddress?: string;
  type?: MinerType;
}
