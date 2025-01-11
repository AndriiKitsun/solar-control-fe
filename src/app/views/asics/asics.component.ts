import { Component, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { Menu } from 'primeng/menu';
import { Ripple } from 'primeng/ripple';
import { Button } from 'primeng/button';
import { TranslocoDirective } from '@jsverse/transloco';
import { AsicsMenuItem } from './asics.types';
import { AsicsService } from './services/asics/asics.service';
import { MinerType } from './asics.models';
import { MINER_MENU_ITEM_MAPPING } from './asics.constants';

@Component({
  selector: 'app-asics',
  imports: [AsyncPipe, Menu, Ripple, Button, TranslocoDirective],
  templateUrl: './asics.component.html',
  styleUrl: './asics.component.scss',
})
export class AsicsComponent implements OnInit {
  items$!: Observable<AsicsMenuItem[]>;

  constructor(private readonly asicsService: AsicsService) {}

  ngOnInit(): void {
    this.items$ = this.getMenuItems();
  }

  getMenuItems(): Observable<AsicsMenuItem[]> {
    return this.asicsService.getMiners().pipe(
      map((miners) => {
        const menu: Partial<Record<MinerType, AsicsMenuItem[]>> = {};

        miners.forEach((miner) => {
          const { id, name, type } = miner;
          const itemMapping = MINER_MENU_ITEM_MAPPING[type];

          if (!menu[type]) {
            menu[type] = [];
          }

          const menuItem: AsicsMenuItem = {
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
    clickedItem: AsicsMenuItem,
    items: AsicsMenuItem[],
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
