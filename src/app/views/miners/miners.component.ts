import { Component, OnInit } from '@angular/core';
import { MenuComponent } from '@layout/components/menu/menu.component';
import { Menu } from 'primeng/menu';
import { Badge } from 'primeng/badge';
import { Avatar } from 'primeng/avatar';
import { MenuItem, PrimeIcons } from 'primeng/api';
import { NgIf } from '@angular/common';
import { Ripple } from 'primeng/ripple';
import { Button } from 'primeng/button';
import { ButtonGroup } from 'primeng/buttongroup';

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
  ],
  templateUrl: './miners.component.html',
  styleUrl: './miners.component.scss',
})
export class MinersComponent implements OnInit {
  items: MenuItem[] = [];

  ngOnInit(): void {
    this.items = this.getMyConfig();
    // this.items = this.getPrimeConfig();
  }

  getMyConfig(): MenuItem[] {
    const items = Array(50)
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

    return items;
    // return [
    //   {
    //     label: 'Asics',
    //     items,
    //   },
    // ];
  }

  getPrimeConfig(): MenuItem[] {
    return [
      {
        separator: true,
      },
      {
        label: 'Documents',
        items: [
          {
            label: 'New',
            icon: 'pi pi-plus',
            shortcut: '⌘ + N',
          },
          {
            label: 'Search',
            icon: 'pi pi-search',
            shortcut: '⌘+S',
          },
        ],
      },
      {
        label: 'Profile',
        items: [
          {
            label: 'Settings',
            icon: 'pi pi-cog',
            shortcut: '⌘+O',
          },
          {
            label: 'Messages',
            icon: 'pi pi-inbox',
            badge: '2',
          },
          {
            label: 'Logout',
            icon: 'pi pi-sign-out',
            shortcut: '⌘+Q',
          },
        ],
      },
      {
        separator: true,
      },
    ];
  }

  logEvent(event: MouseEvent, item: MenuItem): void {
    console.log(`event -->`, item);
    event.stopPropagation();
  }
}
