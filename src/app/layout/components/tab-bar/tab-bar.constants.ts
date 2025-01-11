import { TabItem } from './tab-bar.types';
import { RoutePath } from '@common/constants/router.constants';
import { PrimeIcons } from 'primeng/api';

/**
 * t(TAB_BAR.SENSORS)
 * t(TAB_BAR.ASICS)
 * */

export const MAIN_TABS: TabItem[] = [
  {
    label: 'TAB_BAR.SENSORS',
    icon: PrimeIcons.WAVE_PULSE,
    route: RoutePath.SENSORS,
  },
  {
    label: 'TAB_BAR.ASICS',
    icon: PrimeIcons.SERVER,
    route: RoutePath.ASICS,
  },
];

export const ROUTE_REGEX = /[/?]/;
