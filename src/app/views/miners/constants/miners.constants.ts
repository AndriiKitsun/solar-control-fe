import { PrimeIcons } from 'primeng/api';
import { MinerType } from '../models/miner.models';
import { MinerMenuItemMapConfig } from '../types/menu.types';

/**
 * t(MINERS.TYPE.CARD)
 * t(MINERS.TYPE.ASIC)
 * */

export const MINER_MENU_ITEM_MAPPING: Record<
  MinerType,
  MinerMenuItemMapConfig
> = {
  [MinerType.CARD]: {
    label: 'MINERS.TYPE.CARD',
    icon: PrimeIcons.MICROCHIP,
  },
  [MinerType.ASIC]: {
    label: 'MINERS.TYPE.ASIC',
    icon: PrimeIcons.SERVER,
  },
};
