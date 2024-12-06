import { Injectable } from '@angular/core';
import {
  ColorScheme,
  PrimaryColor,
  SurfaceColor,
  Palette,
  ThemePresetName,
  ThemePresetConfig,
  ThemePreset,
} from './layout.types';
import {
  updatePrimaryPalette,
  updateSurfacePalette,
  definePreset,
  usePreset,
} from '@primeng/themes';
import Aura from '@primeng/themes/aura';
import Lara from '@primeng/themes/lara';

@Injectable({
  providedIn: 'root',
})
export class LayoutService {
  private static readonly darkModeClassKey = 'app-dark';
  private static readonly colorSchemeKey = 'colorScheme';
  private static readonly primaryColorKey = 'primaryColor';
  private static readonly surfaceColorKey = 'SurfaceColor';
  private static readonly themePresetKey = 'themePreset';

  private themePresets: ThemePresetConfig = {
    [ThemePresetName.AURA]: Aura as ThemePreset,
    [ThemePresetName.LARA]: Lara as ThemePreset,
  };

  colorScheme!: ColorScheme;
  primaryColor!: PrimaryColor;
  lightSurfaceColor!: SurfaceColor;
  darkSurfaceColor!: SurfaceColor;
  presetName!: ThemePresetName;

  restoreThemeState(): void {
    this.loadThemeConfig();

    if (this.colorScheme === ColorScheme.DARK) {
      document.documentElement.classList.add(LayoutService.darkModeClassKey);
    }

    usePreset(this.createPreset(this.presetName));
  }

  toggleDarkMode(): void {
    this.colorScheme =
      this.colorScheme === ColorScheme.LIGHT
        ? ColorScheme.DARK
        : ColorScheme.LIGHT;

    if (document.startViewTransition) {
      document.startViewTransition(() => this.toggleDarkModeClass());
    } else {
      this.toggleDarkModeClass();
    }

    localStorage.setItem(LayoutService.colorSchemeKey, this.colorScheme);
  }

  updatePrimaryColor(color: PrimaryColor): void {
    this.primaryColor = color;

    updatePrimaryPalette(this.getPrimaryPalette(color));

    localStorage.setItem(LayoutService.primaryColorKey, color);
  }

  updateSurfaceColor(scheme: ColorScheme, color: SurfaceColor): void {
    if (scheme === ColorScheme.LIGHT) {
      this.lightSurfaceColor = color;
    } else {
      this.darkSurfaceColor = color;
    }

    updateSurfacePalette({
      light: this.getSurfacePalette(this.lightSurfaceColor),
      dark: this.getSurfacePalette(this.darkSurfaceColor),
    });

    localStorage.setItem(`${scheme}${LayoutService.surfaceColorKey}`, color);
  }

  updatePreset(name: ThemePresetName): void {
    this.presetName = name;

    usePreset(this.createPreset(name));

    localStorage.setItem(LayoutService.themePresetKey, name);
  }

  private loadThemeConfig(): void {
    this.colorScheme = this.loadKey(
      LayoutService.colorSchemeKey,
      window.matchMedia('(prefers-color-scheme: dark)').matches
        ? ColorScheme.DARK
        : ColorScheme.LIGHT,
    );

    this.primaryColor = this.loadKey(
      LayoutService.primaryColorKey,
      PrimaryColor.EMERALD,
    );

    this.lightSurfaceColor = this.loadKey(
      `${ColorScheme.LIGHT}${LayoutService.surfaceColorKey}`,
      SurfaceColor.SLATE,
    );
    this.darkSurfaceColor = this.loadKey(
      `${ColorScheme.DARK}${LayoutService.surfaceColorKey}`,
      SurfaceColor.ZINC,
    );

    this.presetName = this.loadKey(
      LayoutService.themePresetKey,
      ThemePresetName.AURA,
    );
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

  private createPreset(name: ThemePresetName): ThemePreset {
    return definePreset(this.themePresets[name], {
      semantic: {
        primary: this.getPrimaryPalette(this.primaryColor),
        colorScheme: {
          light: {
            surface: this.getSurfacePalette(this.lightSurfaceColor),
          },
          dark: {
            surface: this.getSurfacePalette(this.darkSurfaceColor),
          },
        },
      },
    }) as ThemePreset;
  }

  private toggleDarkModeClass(): void {
    document.documentElement.classList.toggle(LayoutService.darkModeClassKey);
  }
}
