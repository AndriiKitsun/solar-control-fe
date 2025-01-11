import { Component, OnInit, signal, computed } from '@angular/core';
import { map, Observable, tap } from 'rxjs';
import { Menu } from 'primeng/menu';
import { Button } from 'primeng/button';
import { TranslocoDirective } from '@jsverse/transloco';
import { AsicsService } from './services/asics/asics.service';
import { Toolbar } from 'primeng/toolbar';
import { PrimeIcons, MenuItemCommandEvent } from 'primeng/api';
import { AsyncPipe } from '@angular/common';
import { AsicModel } from './asics.models';
import { AsicMenuItem } from './asics.types';

@Component({
  selector: 'app-asics',
  imports: [TranslocoDirective, Menu, AsyncPipe, Toolbar, Button],
  templateUrl: './asics.component.html',
  styleUrl: './asics.component.scss',
})
export class AsicsComponent implements OnInit {
  isLoading = signal(false);
  isToolbarDisabled = computed(
    () => this.isLoading() || !this.selectedItem().id,
  );
  selectedItem = signal<AsicMenuItem>({});

  menuItems$!: Observable<AsicMenuItem[]>;

  private menu: AsicMenuItem[] = [];

  constructor(private readonly asicsService: AsicsService) {}

  ngOnInit(): void {
    this.menuItems$ = this.getMenuItems();
  }

  getMenuItems(): Observable<AsicMenuItem[]> {
    this.isLoading.set(true);

    return this.asicsService.getAsics().pipe(
      map((asics: AsicModel[]) => {
        const menu: AsicMenuItem[] = [];

        asics.forEach((asic) => {
          const group = menu.find((item) => item.label === asic.address);
          const item: AsicMenuItem = {
            id: asic.id,
            label: asic.name,
            icon: PrimeIcons.SERVER,
            command: (event) => this.onItemClick(event),
            asic,
          };

          if (!group) {
            menu.push({ label: asic.address, items: [item] });
          } else {
            group.items!.push(item);
          }
        });

        return menu;
      }),
      tap((menu: AsicMenuItem[]) => {
        this.menu = menu;
        this.isLoading.set(false);
      }),
    );
  }

  onItemClick(event: MenuItemCommandEvent): void {
    this.selectedItem.set(event.item as AsicMenuItem);
  }

  openAddAsicModal(): void {
    console.log('openAddAsicModal');
  }

  openEditAsicModal(): void {
    console.log('openEditAsicModal');
  }

  deleteAsic(): void {
    if (!this.selectedItem()) {
      return;
    }

    const groupIdx = this.menu.findIndex(
      (item) => item.label === this.selectedItem().asic!.address,
    );
    const groupItems = this.menu[groupIdx].items;

    if (!groupItems) {
      return;
    }

    const idx = groupItems.findIndex(
      (item) => item.id === this.selectedItem().id,
    );

    if (idx !== -1) {
      groupItems.splice(idx, 1);
    }

    if (!groupItems.length) {
      this.menu.splice(groupIdx, 1);
    }

    this.selectedItem.set({});
  }
}
