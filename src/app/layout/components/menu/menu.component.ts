import { Component, OnInit } from '@angular/core';
import { MenuItemComponent } from '../menu-item/menu-item.component';
import { MenuItem } from 'primeng/api';
import { MENU_ITEMS_EXAMPLE } from './menu.constants';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [MenuItemComponent],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss',
})
export class MenuComponent implements OnInit {
  items!: MenuItem[];

  ngOnInit(): void {
    // this.items = MENU_ITEMS;
    this.items = MENU_ITEMS_EXAMPLE;
  }
}
