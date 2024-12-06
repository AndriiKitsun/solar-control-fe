import { Component } from '@angular/core';
import { MenuComponent } from '@layout/components/menu/menu.component';

@Component({
  selector: 'app-miners',
  standalone: true,
  imports: [MenuComponent],
  templateUrl: './miners.component.html',
  styleUrl: './miners.component.scss',
})
export class MinersComponent {}
