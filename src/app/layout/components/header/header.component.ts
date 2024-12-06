import { Component } from '@angular/core';
import { Ripple } from 'primeng/ripple';
import { ThemeConfiguratorComponent } from '../theme-configurator/theme-configurator.component';
import { StyleClass } from 'primeng/styleclass';
import { RouterLink } from '@angular/router';
import { PrimeIcons } from 'primeng/api';
import { ColorScheme, LayoutService } from '../../services';
import { TabBarComponent } from '../tab-bar/tab-bar.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    Ripple,
    RouterLink,
    ThemeConfiguratorComponent,
    StyleClass,
    TabBarComponent,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  themeIcons: Record<ColorScheme, PrimeIcons> = {
    [ColorScheme.LIGHT]: PrimeIcons.SUN,
    [ColorScheme.DARK]: PrimeIcons.MOON,
  };

  constructor(private readonly layoutService: LayoutService) {}

  get colorScheme(): ColorScheme {
    return this.layoutService.colorScheme;
  }

  toggleDarkMode(): void {
    this.layoutService.toggleDarkMode();
  }
}
