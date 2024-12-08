import { Component, input } from '@angular/core';
import { MenuItemComponent } from '../menu-item/menu-item.component';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [MenuItemComponent],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss',
})
export class MenuComponent {
  items = input.required<MenuItem[]>();
}
