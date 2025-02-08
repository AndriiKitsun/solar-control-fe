import { TabItem } from './tab-bar.types';
import { RoutePath } from '@common/constants/router.constants';
import { PrimeIcons } from 'primeng/api';

/**
 * t(TAB_BAR.SENSORS)
 * t(TAB_BAR.PROTECTION)
 * t(TAB_BAR.CONTROL)
 * t(TAB_BAR.ASICS)
 * t(TAB_BAR.SETTINGS)
 * */

export const MAIN_TABS: TabItem[] = [
  {
    label: 'TAB_BAR.SENSORS',
    icon: PrimeIcons.WAVE_PULSE,
    route: RoutePath.SENSORS,
  },
  {
    label: 'TAB_BAR.PROTECTION',
    icon: PrimeIcons.SHIELD,
    route: RoutePath.PROTECTION,
  },
  {
    label: 'TAB_BAR.CONTROL',
    icon: PrimeIcons.WRENCH,
    route: RoutePath.CONTROL,
    disabled: true,
  },
  {
    label: 'TAB_BAR.ASICS',
    icon: PrimeIcons.SERVER,
    route: RoutePath.ASICS,
  },
  {
    label: 'TAB_BAR.SETTINGS',
    icon: PrimeIcons.COG,
    route: RoutePath.SETTINGS,
  },
];

export const ROUTE_REGEX = /[/?]/;
