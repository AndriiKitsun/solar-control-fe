import { Component } from '@angular/core';
import { MenuItem, PrimeIcons } from 'primeng/api';
import { MenuItemComponent } from '../menu-item/menu-item.component';
import { Menu } from 'primeng/menu';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [MenuItemComponent, Menu],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss',
})
export class MenuComponent {
  items: MenuItem[] = [
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
        },
        {
          label: 'Сонячна 18',
          icon: PrimeIcons.BELL_SLASH,
        },
      ],
    },
    {
      label: 'Asics',
      items: [
        {
          label: 'Сонячна 18',
          icon: PrimeIcons.SERVER,
        },
        {
          label: 'Йосипівка',
          icon: PrimeIcons.MOON,
          items: [
            {
              label: 'Asic 1',
              icon: PrimeIcons.SERVER,
            },
            {
              label: 'Asic 2',
              icon: PrimeIcons.SERVER,
            },
            {
              label: 'Asic 3',
              icon: PrimeIcons.SERVER,
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

  items2: MenuItem[] = [
    {
      label: 'Home',
      items: [
        { label: 'Dashboard', icon: 'pi pi-fw pi-home', routerLink: '/' },
      ],
    },
    {
      label: 'UI Components',
      items: [
        {
          label: 'Form Layout',
          icon: 'pi pi-fw pi-id-card',
          routerLink: '/uikit/formlayout',
        },
        {
          label: 'Input',
          icon: 'pi pi-fw pi-check-square',
          routerLink: '/uikit/input',
        },
        {
          label: 'Button',
          icon: 'pi pi-fw pi-mobile',
          routerLink: '/uikit/button',
          class: 'rotated-icon',
        },
        {
          label: 'Table',
          icon: 'pi pi-fw pi-table',
          routerLink: '/uikit/table',
        },
        { label: 'List', icon: 'pi pi-fw pi-list', routerLink: '/uikit/list' },
        {
          label: 'Tree',
          icon: 'pi pi-fw pi-share-alt',
          routerLink: '/uikit/tree',
        },
        {
          label: 'Panel',
          icon: 'pi pi-fw pi-tablet',
          routerLink: '/uikit/panel',
        },
        {
          label: 'Overlay',
          icon: 'pi pi-fw pi-clone',
          routerLink: '/uikit/overlay',
        },
        {
          label: 'Media',
          icon: 'pi pi-fw pi-image',
          routerLink: '/uikit/media',
        },
        { label: 'Menu', icon: 'pi pi-fw pi-bars', routerLink: '/uikit/menu' },
        {
          label: 'Message',
          icon: 'pi pi-fw pi-comment',
          routerLink: '/uikit/message',
        },
        { label: 'File', icon: 'pi pi-fw pi-file', routerLink: '/uikit/file' },
        {
          label: 'Chart',
          icon: 'pi pi-fw pi-chart-bar',
          routerLink: '/uikit/charts',
        },
        {
          label: 'Timeline',
          icon: 'pi pi-fw pi-calendar',
          routerLink: '/uikit/timeline',
        },
        {
          label: 'Misc',
          icon: 'pi pi-fw pi-circle',
          routerLink: '/uikit/misc',
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
          routerLink: '/landing',
        },
        {
          label: 'Auth',
          icon: 'pi pi-fw pi-user',
          items: [
            {
              label: 'Login',
              icon: 'pi pi-fw pi-sign-in',
              routerLink: '/auth/login',
            },
            {
              label: 'Error',
              icon: 'pi pi-fw pi-times-circle',
              routerLink: '/auth/error',
            },
            {
              label: 'Access Denied',
              icon: 'pi pi-fw pi-lock',
              routerLink: '/auth/access',
            },
          ],
        },
        {
          label: 'Crud',
          icon: 'pi pi-fw pi-pencil',
          routerLink: '/pages/crud',
        },
        {
          label: 'Not Found',
          icon: 'pi pi-fw pi-exclamation-circle',
          routerLink: '/pages/notfound',
        },
        {
          label: 'Empty',
          icon: 'pi pi-fw pi-circle-off',
          routerLink: '/pages/empty',
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
          routerLink: '/documentation',
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
}
