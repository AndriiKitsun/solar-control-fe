import { Injectable } from '@angular/core';
import {
  SurfaceColorConfig,
  ColorScheme,
  PrimaryColor,
  SurfaceColor,
  Palette,
} from './layout.types';
import {
  updatePreset,
  updatePrimaryPalette,
  updateSurfacePalette,
} from '@primeng/themes';

@Injectable({
  providedIn: 'root',
})
export class LayoutService {
  private static readonly colorSchemeKey = 'colorScheme';
  private static readonly primaryColorKey = 'primaryColor';
  private static readonly surfaceColorKey = 'SurfaceColor';
  private static readonly darkModeClassKey = 'app-dark';

  colorScheme!: ColorScheme;
  primaryColor!: PrimaryColor;
  surfaceColorConfig!: SurfaceColorConfig;

  restoreThemeState(): void {
    this.loadThemeConfig();

    if (this.colorScheme === ColorScheme.DARK) {
      document.documentElement.classList.add(LayoutService.darkModeClassKey);
    }

    updatePreset({
      semantic: {
        primary: this.getPrimaryPalette(this.primaryColor),
        colorScheme: {
          light: {
            surface: this.getSurfacePalette(
              this.surfaceColorConfig[ColorScheme.LIGHT],
            ),
          },
          dark: {
            surface: this.getSurfacePalette(
              this.surfaceColorConfig[ColorScheme.DARK],
            ),
          },
        },
      },
    });
  }

  toggleDarkMode(): void {
    this.colorScheme =
      this.colorScheme === ColorScheme.LIGHT
        ? ColorScheme.DARK
        : ColorScheme.LIGHT;

    document.documentElement.classList.toggle(LayoutService.darkModeClassKey);

    localStorage.setItem(LayoutService.colorSchemeKey, this.colorScheme);
  }

  updatePrimaryColor(color: PrimaryColor): void {
    this.primaryColor = color;

    updatePrimaryPalette(this.getPrimaryPalette(color));

    localStorage.setItem(LayoutService.primaryColorKey, color);
  }

  updateSurfaceColor(scheme: ColorScheme, color: SurfaceColor): void {
    this.surfaceColorConfig[scheme] = color;

    updateSurfacePalette({
      light: this.getSurfacePalette(this.surfaceColorConfig[ColorScheme.LIGHT]),
      dark: this.getSurfacePalette(this.surfaceColorConfig[ColorScheme.DARK]),
    });

    localStorage.setItem(`${scheme}${LayoutService.surfaceColorKey}`, color);
  }

  private loadThemeConfig(): void {
    this.colorScheme = this.loadKey(
      LayoutService.colorSchemeKey,
      ColorScheme.LIGHT,
    );

    this.primaryColor = this.loadKey(
      LayoutService.primaryColorKey,
      PrimaryColor.EMERALD,
    );

    this.surfaceColorConfig = {
      [ColorScheme.LIGHT]: this.loadKey(
        `${ColorScheme.LIGHT}${LayoutService.surfaceColorKey}`,
        SurfaceColor.SLATE,
      ),
      [ColorScheme.DARK]: this.loadKey(
        `${ColorScheme.DARK}${LayoutService.surfaceColorKey}`,
        SurfaceColor.ZINC,
      ),
    };
  }

  private loadKey<T>(key: string, fallback: T): T {
    return (localStorage.getItem(key) as T) ?? fallback;
  }

  private getPrimaryPalette(color: PrimaryColor): Palette {
    return {
      50: `{${color}.50}`,
      100: `{${color}.100}`,
      200: `{${color}.200}`,
      300: `{${color}.300}`,
      400: `{${color}.400}`,
      500: `{${color}.500}`,
      600: `{${color}.600}`,
      700: `{${color}.700}`,
      800: `{${color}.800}`,
      900: `{${color}.900}`,
      950: `{${color}.950}`,
    };
  }

  private getSurfacePalette(color: SurfaceColor): Palette {
    return {
      0: `#ffffff`,
      50: `{${color}.50}`,
      100: `{${color}.100}`,
      200: `{${color}.200}`,
      300: `{${color}.300}`,
      400: `{${color}.400}`,
      500: `{${color}.500}`,
      600: `{${color}.600}`,
      700: `{${color}.700}`,
      800: `{${color}.800}`,
      900: `{${color}.900}`,
      950: `{${color}.950}`,
    };
  }
}
