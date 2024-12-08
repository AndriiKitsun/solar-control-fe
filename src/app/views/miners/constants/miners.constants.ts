import { MinerType } from '../models/miner.models';
import { MinerMenuItemMapConfig } from '../types/menu.types';
import { PrimeIcons } from 'primeng/api';

export const MINER_MENU_ITEM_MAPPING: Record<
  MinerType,
  MinerMenuItemMapConfig
> = {
  [MinerType.CARD]: {
    label: 'Video Cards',
    icon: PrimeIcons.MICROCHIP,
  },
  [MinerType.ASIC]: {
    label: 'Asics',
    icon: PrimeIcons.SERVER,
  },
};
