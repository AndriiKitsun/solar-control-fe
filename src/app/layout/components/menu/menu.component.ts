import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
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
      label: 'label1',
    },
    {
      label: 'label2',
    },
    {
      label: 'not visible',
      visible: false,
    },
    {
      label: 'label3',
    },
  ];
}
