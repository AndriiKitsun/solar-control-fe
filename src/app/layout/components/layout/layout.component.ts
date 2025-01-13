import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { RouterOutlet } from '@angular/router';
import { TabBarComponent } from '../tab-bar/tab-bar.component';
import { ThemeService } from '../../services/theme/theme.service';

@Component({
  selector: 'app-layout',
  imports: [HeaderComponent, TabBarComponent, RouterOutlet],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LayoutComponent implements OnInit {
  constructor(private readonly themeService: ThemeService) {}

  ngOnInit(): void {
    this.themeService.restoreThemeState();
  }
}
