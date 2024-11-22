import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LayoutService } from '../../services/layout/layout.service';
import { Button } from 'primeng/button';
import { ThemeHelper, PrimaryColor, SurfaceColor } from '@common/helpers';
import { updatePrimaryPalette, updateSurfacePalette } from '@primeng/themes';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, Button],
  templateUrl: './header.component.html',
  styleUrl: './header.component.less',
})
export class HeaderComponent {
  primaryColor = '';
  surfaceColor = '';

  constructor(private readonly layoutService: LayoutService) {}

  toggleManu(): void {
    this.layoutService.toggleMenu();
  }

  toggleDarkMode(): void {
    document.documentElement.classList.toggle('app-dark');
  }

  randomPrimaryColor(): void {
    const colors = Object.values(PrimaryColor);
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    const paletteSet = ThemeHelper.getPalette(randomColor);

    this.primaryColor = randomColor;

    updatePrimaryPalette(paletteSet);
  }

  randomSurface(): void {
    const colors = Object.values(SurfaceColor);
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    const palette = ThemeHelper.getSurface(randomColor);

    this.surfaceColor = randomColor;

    updateSurfacePalette(palette);
  }
}
