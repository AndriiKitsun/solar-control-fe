import { MinerType } from '../models';
import { MinerMenuItemMapConfig } from '../types';
import { PrimeIcons } from 'primeng/api';

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
