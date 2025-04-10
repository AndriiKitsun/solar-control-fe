import { AsicSettingGroup } from '../types/asic-settings.types';

/**
 * t(ASICS.SETTINGS.T2_ACTIVE)
 * t(ASICS.SETTINGS.T2_END_STOP)
 * t(ASICS.SETTINGS.AUTOMATED)
 * */

export const ASIC_SETTINGS: AsicSettingGroup[] = [
  {
    id: 't2Active',
    label: 'ASICS.SETTINGS.T2_ACTIVE',
  },
  {
    id: 't2EndStop',
    label: 'ASICS.SETTINGS.T2_END_STOP',
  },
  {
    id: 'automated',
    label: 'ASICS.SETTINGS.AUTOMATED',
  },
];
