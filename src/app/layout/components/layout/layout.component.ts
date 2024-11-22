import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { MenuComponent } from '../menu/menu.component';
import { LayoutService } from '../../services';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [HeaderComponent, MenuComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
})
export class LayoutComponent implements OnInit {
  constructor(private readonly layoutService: LayoutService) {}

  ngOnInit(): void {
    this.layoutService.restoreThemeState();
  }
}
