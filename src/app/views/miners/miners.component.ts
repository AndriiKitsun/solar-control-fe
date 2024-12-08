import { Component, OnInit } from '@angular/core';
import { MenuComponent } from '@layout/components/menu/menu.component';
import { Menu } from 'primeng/menu';
import { Badge } from 'primeng/badge';
import { Avatar } from 'primeng/avatar';
import { MenuItem, PrimeIcons, MenuItemCommandEvent } from 'primeng/api';
import { NgIf, AsyncPipe } from '@angular/common';
import { Ripple } from 'primeng/ripple';
import { Button } from 'primeng/button';
import { ButtonGroup } from 'primeng/buttongroup';
import { RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-miners',
  standalone: true,
  imports: [
    MenuComponent,
    Menu,
    Badge,
    Avatar,
    NgIf,
    Ripple,
    Button,
    ButtonGroup,
    AsyncPipe,
    RouterLinkActive,
  ],
  templateUrl: './miners.component.html',
  styleUrl: './miners.component.scss',
})
export class MinersComponent implements OnInit {
  items: MenuItem[] = [];

  selected = '2382c3bc-c9b8-4c16-ba8a-62c54b553184';

  ngOnInit(): void {
    this.items = this.getMyConfig();
    // this.items = this.getPrimeConfig();
  }

  getMyConfig(): MenuItem[] {
    const asics = Array(50)
      .fill(0)
      .map((_, i) => {
        const item: MenuItem = {
          id: window.crypto.randomUUID(),
          label: `Asic ${i}`,
          icon: PrimeIcons.SERVER,
          routerLink: '.',
          queryParams: {
            id: window.crypto.randomUUID(),
          },
          // queryParamsHandling: 'merge',
          // command(event: MenuItemCommandEvent) {
          //   console.log(`event -->`, event.item?.label);
          // },
        };

        return item;
      });

    const videoCards = Array(50)
      .fill(0)
      .map((_, i) => {
        const item: MenuItem = {
          id: window.crypto.randomUUID(),
          label: Math.random() > 0.5 ? `Nvidia ${i}` : `Amd ${i}`,
          icon: PrimeIcons.MICROCHIP,
          routerLink: '.',
          queryParams: {
            id: window.crypto.randomUUID(),
          },
        };

        return item;
      });

    const selectedAsic = asics[Math.floor(Math.random() * 10)];
    console.log(`selectedAsic -->`, selectedAsic);

    return [
      {
        label: 'Asics',
        items: asics,
      },
      {
        label: 'Video Cards',
        items: videoCards,
      },
    ];
  }

  getPrimeConfig(): MenuItem[] {
    return [
      {
        label: 'Documents',
        items: [
          {
            id: '7b3a5296-8ddd-405b-805d-9b346eb6fec7',
            label: 'New',
            icon: 'pi pi-plus',
            shortcut: '⌘ + N',
            routerLink: '.',
            queryParams: {
              id: '1',
            },
          },
          {
            id: '2382c3bc-c9b8-4c16-ba8a-62c54b553184',
            label: 'Search',
            icon: 'pi pi-search',
            shortcut: '⌘+S',
            routerLink: '.',
            queryParams: {
              id: '2',
            },
          },
        ],
      },
      {
        label: 'Profile',
        items: [
          {
            id: '2cdb7486-fe43-4665-a39f-ec0ffcd0931f',
            label: 'Settings',
            icon: 'pi pi-cog',
            shortcut: '⌘+O',
            routerLink: '.',
            queryParams: {
              id: '3',
            },
          },
          {
            id: '089b7e90-1e78-4f5f-9230-a46eced31691',
            label: 'Messages',
            icon: 'pi pi-inbox',
            // badge: '2',
            routerLink: '.',
            queryParams: {
              id: '4',
            },
            command(event: MenuItemCommandEvent) {
              console.log(`command event -->`, event);
            },
          },
          {
            id: '494fe021-3977-43c6-8079-2045547e7908',
            label: 'Logout',
            icon: 'pi pi-sign-out',
            shortcut: '⌘+Q',
            routerLink: '.',
            queryParams: {
              id: '5',
            },
          },
        ],
      },
    ];
  }

  logEvent(event: any): void {
    console.log(`event -->`, event);
  }

  deleteItem(event: MouseEvent, item: MenuItem): void {
    console.log(`delete event -->`, item);
    event.stopPropagation();
  }
}
