import { TabItem } from './tab-bar.types';
import { RoutePath } from '@common/constants/router.constants';
import { PrimeIcons } from 'primeng/api';

export const MAIN_TABS: TabItem[] = [
  {
    label: 'Dashboard',
    icon: PrimeIcons.HOME,
    route: RoutePath.LANDING,
  },
  {
    label: 'Stations',
    icon: PrimeIcons.WAREHOUSE,
    route: RoutePath.STATIONS,
  },
  {
    label: 'Miners',
    icon: PrimeIcons.SERVER,
    route: RoutePath.MINERS,
  },
];

export const ROUTE_REGEX = /[/?]/;
