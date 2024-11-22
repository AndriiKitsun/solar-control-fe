import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LayoutService } from '../../services/layout/layout.service';
import { Button } from 'primeng/button';
import { ThemeConfiguratorComponent } from '../theme-configurator/theme-configurator.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, Button, ThemeConfiguratorComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.less',
})
export class HeaderComponent {
  isDarkMode = false;

  constructor(private readonly layoutService: LayoutService) {}

  toggleManu(): void {
    this.layoutService.toggleMenu();
  }

  toggleDarkMode(): void {
    document.documentElement.classList.toggle('app-dark');

    this.isDarkMode = !this.isDarkMode;
  }
}
