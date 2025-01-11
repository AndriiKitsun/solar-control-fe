import { Component, OnInit, signal } from '@angular/core';
import { map, Observable, tap } from 'rxjs';
import { Menu } from 'primeng/menu';
import { Button } from 'primeng/button';
import { TranslocoDirective } from '@jsverse/transloco';
import { AsicsService } from './services/asics/asics.service';
import { Toolbar } from 'primeng/toolbar';
import { MenuItem, PrimeIcons } from 'primeng/api';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-asics',
  imports: [TranslocoDirective, Menu, AsyncPipe, Toolbar, Button],
  templateUrl: './asics.component.html',
  styleUrl: './asics.component.scss',
})
export class AsicsComponent implements OnInit {
  isLoading = signal(false);

  menuItems$!: Observable<MenuItem[]>;

  constructor(private readonly asicsService: AsicsService) {}

  ngOnInit(): void {
    this.menuItems$ = this.getMenuItems();
  }

  getMenuItems(): Observable<MenuItem[]> {
    this.isLoading.set(true);

    return this.asicsService.getAsics().pipe(
      tap(() => {
        this.isLoading.set(false);
      }),
      map((asics) => {
        const menu: MenuItem[] = [];

        asics.forEach((asic) => {
          const group = menu.find((item) => item.label === asic.address);
          const item: MenuItem = {
            id: asic.id,
            label: asic.name,
            icon: PrimeIcons.SERVER,
          };

          if (!group) {
            menu.push({ label: asic.address, items: [item] });
          } else {
            group.items?.push(item);
          }
        });

        return menu;
      }),
    );
  }

  // deleteItem(
  //   event: MouseEvent,
  //   clickedItem: AsicsMenuItem,
  //   items: AsicsMenuItem[],
  // ): void {
  //   event.stopPropagation();
  //
  //   const itemsByTypeIdx = items.findIndex(
  //     (item) => item.type === clickedItem.type,
  //   );
  //
  //   if (itemsByTypeIdx === -1) {
  //     return;
  //   }
  //
  //   const itemsByType = items[itemsByTypeIdx].items;
  //
  //   if (!itemsByType?.length) {
  //     return;
  //   }
  //
  //   const idx = itemsByType.findIndex((item) => item.id === clickedItem.id);
  //
  //   if (idx !== -1) {
  //     itemsByType.splice(idx, 1);
  //   }
  //
  //   if (!itemsByType.length) {
  //     items.splice(itemsByTypeIdx, 1);
  //   }
  // }
}
