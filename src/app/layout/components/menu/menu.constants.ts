import { MenuItem, PrimeIcons } from 'primeng/api';
import { RoutePath } from '@common/constants/router.constants';

export const MENU_ITEMS: MenuItem[] = [
  {
    label: 'Home',
    icon: PrimeIcons.KEY,
    items: [
      {
        label: 'Dashboard',
        icon: PrimeIcons.HOURGLASS,
        routerLink: '/',
      },
    ],
  },
  {
    label: 'Solar Stations',
    items: [
      {
        label: 'Шевченка 24',
        icon: PrimeIcons.BUILDING_COLUMNS,
        routerLink: RoutePath.STATIONS,
        queryParams: {
          id: 'shev_solar',
        },
      },
      {
        label: 'Сонячна 18',
        icon: PrimeIcons.BELL_SLASH,
        routerLink: RoutePath.STATIONS,
        queryParams: {
          id: 'son_solar',
        },
      },
    ],
  },
  {
    label: 'Asics',
    items: [
      {
        label: 'Сонячна 18',
        icon: PrimeIcons.SERVER,
        routerLink: `${RoutePath.MINERS}`,
        queryParams: {
          id: 'Son_Asics',
        },
      },
      {
        label: 'Йосипівка',
        icon: PrimeIcons.MOON,
        items: [
          {
            label: 'Asic 1',
            icon: PrimeIcons.SERVER,
            routerLink: RoutePath.MINERS,
            queryParams: {
              id: 'Yos_Asic1',
            },
          },
          {
            label: 'Asic 2',
            icon: PrimeIcons.SERVER,
            routerLink: RoutePath.MINERS,
            queryParams: {
              id: 'Yos_Asic2',
            },
          },
          {
            label: 'Asic 3',
            icon: PrimeIcons.SERVER,
            routerLink: RoutePath.MINERS,
            queryParams: {
              id: 'Yos_Asic3',
            },
          },
        ],
      },
    ],
  },
  {
    label: '1 level header',
    items: [
      {
        label: '2.1 level label',
      },
      {
        label: '2.2 level label',
        items: [
          {
            label: '3.1 level subitem',
          },
          {
            label: '3.2 level subitem',
          },
        ],
      },
    ],
  },
  {
    label: 'Just labeled item',
  },
];

export const MENU_ITEMS_EXAMPLE: MenuItem[] = [
  {
    label: 'Home',
    items: [{ label: 'Dashboard', icon: 'pi pi-fw pi-home', routerLink: '/' }],
  },
  {
    label: 'UI Components',
    items: [
      {
        label: 'Form Layout',
        icon: 'pi pi-fw pi-id-card',
        routerLink: '/stations',
        queryParams: {
          id: Math.random(),
        },
      },
      {
        label: 'Input',
        icon: 'pi pi-fw pi-check-square',
        routerLink: '/stations',
        queryParams: {
          id: Math.random(),
        },
      },
      {
        label: 'Button',
        icon: 'pi pi-fw pi-mobile',
        routerLink: '/stations',
        queryParams: {
          id: Math.random(),
        },
        class: 'rotated-icon',
      },
      {
        label: 'Table',
        icon: 'pi pi-fw pi-table',
        routerLink: '/stations',
        queryParams: {
          id: Math.random(),
        },
      },
      {
        label: 'List',
        icon: 'pi pi-fw pi-list',
        routerLink: '/stations',
        queryParams: {
          id: Math.random(),
        },
      },
      {
        label: 'Tree',
        icon: 'pi pi-fw pi-share-alt',
        routerLink: '/stations',
        queryParams: {
          id: Math.random(),
        },
      },
      {
        label: 'Panel',
        icon: 'pi pi-fw pi-tablet',
        routerLink: '/stations',
        queryParams: {
          id: Math.random(),
        },
      },
      {
        label: 'Overlay',
        icon: 'pi pi-fw pi-clone',
        routerLink: '/stations',
        queryParams: {
          id: Math.random(),
        },
      },
      {
        label: 'Media',
        icon: 'pi pi-fw pi-image',
        routerLink: '/stations',
        queryParams: {
          id: Math.random(),
        },
      },
      {
        label: 'Menu',
        icon: 'pi pi-fw pi-bars',
        routerLink: '/stations',
        queryParams: {
          id: Math.random(),
        },
      },
      {
        label: 'Message',
        icon: 'pi pi-fw pi-comment',
        routerLink: '/stations',
        queryParams: {
          id: Math.random(),
        },
      },
      {
        label: 'File',
        icon: 'pi pi-fw pi-file',
        routerLink: '/stations',
        queryParams: {
          id: Math.random(),
        },
      },
      {
        label: 'Chart',
        icon: 'pi pi-fw pi-chart-bar',
        routerLink: '/stations',
        queryParams: {
          id: Math.random(),
        },
      },
      {
        label: 'Timeline',
        icon: 'pi pi-fw pi-calendar',
        routerLink: '/stations',
        queryParams: {
          id: Math.random(),
        },
      },
      {
        label: 'Misc',
        icon: 'pi pi-fw pi-circle',
        routerLink: '/stations',
        queryParams: {
          id: Math.random(),
        },
      },
    ],
  },
  {
    label: 'Pages',
    icon: 'pi pi-fw pi-briefcase',
    routerLink: '/pages',
    items: [
      {
        label: 'Landing',
        icon: 'pi pi-fw pi-globe',
        routerLink: '/stations',
        queryParams: {
          id: Math.random(),
        },
      },
      {
        label: 'Auth',
        icon: 'pi pi-fw pi-user',
        items: [
          {
            label: 'Login',
            icon: 'pi pi-fw pi-sign-in',
            routerLink: '/stations',
            queryParams: {
              id: Math.random(),
            },
          },
          {
            label: 'Error',
            icon: 'pi pi-fw pi-times-circle',
            routerLink: '/stations',
            queryParams: {
              id: Math.random(),
            },
          },
          {
            label: 'Access Denied',
            icon: 'pi pi-fw pi-lock',
            routerLink: '/stations',
            queryParams: {
              id: Math.random(),
            },
          },
        ],
      },
      {
        label: 'Crud',
        icon: 'pi pi-fw pi-pencil',
        routerLink: '/stations',
        queryParams: {
          id: Math.random(),
        },
      },
      {
        label: 'Not Found',
        icon: 'pi pi-fw pi-exclamation-circle',
        routerLink: '/stations',
        queryParams: {
          id: Math.random(),
        },
      },
      {
        label: 'Empty',
        icon: 'pi pi-fw pi-circle-off',
        routerLink: '/stations',
        queryParams: {
          id: Math.random(),
        },
      },
    ],
  },
  {
    label: 'Hierarchy',
    items: [
      {
        label: 'Submenu 1',
        icon: 'pi pi-fw pi-bookmark',
        items: [
          {
            label: 'Submenu 1.1',
            icon: 'pi pi-fw pi-bookmark',
            items: [
              { label: 'Submenu 1.1.1', icon: 'pi pi-fw pi-bookmark' },
              { label: 'Submenu 1.1.2', icon: 'pi pi-fw pi-bookmark' },
              { label: 'Submenu 1.1.3', icon: 'pi pi-fw pi-bookmark' },
            ],
          },
          {
            label: 'Submenu 1.2',
            icon: 'pi pi-fw pi-bookmark',
            items: [{ label: 'Submenu 1.2.1', icon: 'pi pi-fw pi-bookmark' }],
          },
        ],
      },
      {
        label: 'Submenu 2',
        icon: 'pi pi-fw pi-bookmark',
        items: [
          {
            label: 'Submenu 2.1',
            icon: 'pi pi-fw pi-bookmark',
            items: [
              { label: 'Submenu 2.1.1', icon: 'pi pi-fw pi-bookmark' },
              { label: 'Submenu 2.1.2', icon: 'pi pi-fw pi-bookmark' },
            ],
          },
          {
            label: 'Submenu 2.2',
            icon: 'pi pi-fw pi-bookmark',
            items: [{ label: 'Submenu 2.2.1', icon: 'pi pi-fw pi-bookmark' }],
          },
        ],
      },
    ],
  },
  {
    label: 'Get Started',
    items: [
      {
        label: 'Documentation',
        icon: 'pi pi-fw pi-book',
        routerLink: '/stations',
        queryParams: {
          id: Math.random(),
        },
      },
      {
        label: 'View Source',
        icon: 'pi pi-fw pi-github',
        url: 'https://github.com/primefaces/sakai-vue',
        target: '_blank',
      },
    ],
  },
];
