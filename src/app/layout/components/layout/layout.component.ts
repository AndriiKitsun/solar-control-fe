import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { ThemeService } from '../../services';
import { RouterOutlet } from '@angular/router';
import { TabBarComponent } from '../tab-bar/tab-bar.component';

@Component({
  selector: 'app-layout',
  imports: [HeaderComponent, TabBarComponent, RouterOutlet],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
})
export class LayoutComponent implements OnInit {
  constructor(private readonly themeService: ThemeService) {}

  ngOnInit(): void {
    this.themeService.restoreThemeState();
  }
}
