import { TabItem } from './tab-bar.types';
import { RoutePath } from '@common/constants/router.constants';
import { PrimeIcons } from 'primeng/api';

export const MAIN_TABS: TabItem[] = [
  {
    label: 'TAB_BAR.SENSORS',
    icon: PrimeIcons.WAVE_PULSE,
    route: RoutePath.SENSORS,
  },
  {
    label: 'TAB_BAR.STATIONS',
    icon: PrimeIcons.WAREHOUSE,
    route: RoutePath.STATIONS,
  },
  {
    label: 'TAB_BAR.MINERS',
    icon: PrimeIcons.SERVER,
    route: RoutePath.MINERS,
  },
];

export const ROUTE_REGEX = /[/?]/;
