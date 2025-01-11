import { MenuItem, PrimeIcons } from 'primeng/api';
import { RoutePath } from '@common/constants/router.constants';

export const MENU_ITEMS: MenuItem[] = [
  {
    label: 'Home',
    items: [
      {
        label: 'Dashboard',
        icon: PrimeIcons.HOME,
        routerLink: '/',
      },
    ],
  },
  {
    label: 'Stations',
    items: [
      {
        label: 'Address 1',
        icon: PrimeIcons.SUN,
        routerLink: RoutePath.ASICS,
        queryParams: {
          id: 'address1',
        },
      },
      {
        label: 'Address 2',
        icon: PrimeIcons.BUILDING_COLUMNS,
        items: [
          {
            label: 'Station 1',
            icon: PrimeIcons.SUN,
            routerLink: RoutePath.ASICS,
            queryParams: {
              id: 'address2-1',
            },
          },
          {
            label: 'Station 2',
            icon: PrimeIcons.SUN,
            routerLink: RoutePath.ASICS,
            queryParams: {
              id: 'address2-2',
            },
          },
        ],
      },
    ],
  },
  {
    label: 'Miners',
    items: [
      {
        label: 'Address 1',
        icon: PrimeIcons.BUILDING_COLUMNS,
        routerLink: RoutePath.ASICS,
        queryParams: {
          id: 'address1-1',
        },
      },
      {
        label: 'Address 2',
        icon: PrimeIcons.BUILDING_COLUMNS,
        items: [
          {
            label: 'Asic 1',
            icon: PrimeIcons.SUN,
            routerLink: RoutePath.ASICS,
            queryParams: {
              id: 'address2-1',
            },
          },
          {
            label: 'Asic 2',
            icon: PrimeIcons.SUN,
            routerLink: RoutePath.ASICS,
            queryParams: {
              id: 'address2-2',
            },
          },
        ],
      },
    ],
  },
];
