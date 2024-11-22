import { Component } from '@angular/core';
import { LayoutService } from '../../services/layout/layout.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
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
