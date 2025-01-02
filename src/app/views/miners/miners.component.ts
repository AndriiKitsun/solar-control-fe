import { Component, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { Menu } from 'primeng/menu';
import { Ripple } from 'primeng/ripple';
import { Button } from 'primeng/button';
import { TranslocoDirective } from '@jsverse/transloco';
import { MinerMenuItem } from './types/menu.types';
import { MinerService } from './services/miner/miner.service';
import { MinerType } from './models/miner.models';
import { MINER_MENU_ITEM_MAPPING } from './constants/miners.constants';

@Component({
  selector: 'app-miners',
  imports: [AsyncPipe, Menu, Ripple, Button, TranslocoDirective],
  templateUrl: './miners.component.html',
  styleUrl: './miners.component.scss',
})
export class MinersComponent implements OnInit {
  items$!: Observable<MinerMenuItem[]>;

  constructor(private readonly minerService: MinerService) {}

  ngOnInit(): void {
    this.items$ = this.getMenuItems();
  }

  getMenuItems(): Observable<MinerMenuItem[]> {
    return this.minerService.getMiners().pipe(
      map((miners) => {
        const menu: Partial<Record<MinerType, MinerMenuItem[]>> = {};

        miners.forEach((miner) => {
          const { id, name, type } = miner;
          const itemMapping = MINER_MENU_ITEM_MAPPING[type];

          if (!menu[type]) {
            menu[type] = [];
          }

          const menuItem: MinerMenuItem = {
            id,
            label: name,
            icon: itemMapping.icon,
            ipAddress: miner.ipAddress,
            type: type,
          };

          menu[type].push(menuItem);
        });

        return Object.values(MinerType).map((type) => {
          return {
            label: MINER_MENU_ITEM_MAPPING[type].label,
            items: menu[type],
            type: type,
          };
        });
      }),
    );
  }

  deleteItem(
    event: MouseEvent,
    clickedItem: MinerMenuItem,
    items: MinerMenuItem[],
  ): void {
    event.stopPropagation();

    const itemsByTypeIdx = items.findIndex(
      (item) => item.type === clickedItem.type,
    );

    if (itemsByTypeIdx === -1) {
      return;
    }

    const itemsByType = items[itemsByTypeIdx].items;

    if (!itemsByType?.length) {
      return;
    }

    const idx = itemsByType.findIndex((item) => item.id === clickedItem.id);

    if (idx !== -1) {
      itemsByType.splice(idx, 1);
    }

    if (!itemsByType.length) {
      items.splice(itemsByTypeIdx, 1);
    }
  }
}
