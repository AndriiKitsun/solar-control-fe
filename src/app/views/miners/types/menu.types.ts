import { MenuItem } from 'primeng/api';
import { MinerType } from '../models/miner.models';

export interface MinerMenuItemMapConfig {
  label: string;
  icon: string;
}

export interface MinerMenuItem extends MenuItem {
  ipAddress?: string;
  type?: MinerType;
}
