import { Component } from '@angular/core';
import { Menu } from 'primeng/menu';
import { Button } from 'primeng/button';
import { PrimeIcons, MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [Menu, Button],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss',
})
export class MenuComponent {
  model: MenuItem[] = [
    {
      label: 'Home',
      items: [
        {
          label: 'Dashboard',
          icon: PrimeIcons.HOME,
        },
      ],
    },
    {
      label: 'Solars',
      items: [
        {
          label: '1',
          icon: PrimeIcons.HOME,
        },
        {
          label: '2',
          icon: PrimeIcons.HOME,
        },
        {
          label: '3',
          icon: PrimeIcons.HOME,
        },
      ],
    },
    {
      label: 'Asics',
      icon: PrimeIcons.HOME,
    },
    {
      label: 'PZEMs',
      icon: PrimeIcons.HOME,
    },
  ];
}
