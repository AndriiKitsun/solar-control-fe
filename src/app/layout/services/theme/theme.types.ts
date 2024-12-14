export enum PrimaryColor {
  EMERALD = 'emerald',
  GREEN = 'green',
  LIME = 'lime',
  ORANGE = 'orange',
  AMBER = 'amber',
  YELLOW = 'yellow',
  TEAL = 'teal',
  CYAN = 'cyan',
  SKY = 'sky',
  BLUE = 'blue',
  INDIGO = 'indigo',
  VIOLET = 'violet',
  PURPLE = 'purple',
  FUCHSIA = 'fuchsia',
  PINK = 'pink',
  ROSE = 'rose',
}

export enum SurfaceColor {
  SLATE = 'slate',
  GRAY = 'gray',
  ZINC = 'zinc',
  NEUTRAL = 'neutral',
  STONE = 'stone',
}

export enum ThemePresetName {
  AURA = 'Aura',
  LARA = 'Lara',
}

export enum ColorScheme {
  LIGHT = 'light',
  DARK = 'dark',
}

export interface Palette {
  0?: string;
  50: `{${string}.50}`;
  100: `{${string}.100}`;
  200: `{${string}.200}`;
  300: `{${string}.300}`;
  400: `{${string}.400}`;
  500: `{${string}.500}`;
  600: `{${string}.600}`;
  700: `{${string}.700}`;
  800: `{${string}.800}`;
  900: `{${string}.900}`;
  950: `{${string}.950}`;
}

export interface ThemePreset {
  semantic: {
    primary: Palette;
    colorScheme: {
      light: {
        surface: Palette;
      };
      dark: {
        surface: Palette;
      };
    };
  };
}

export type ThemePresetConfig = Record<ThemePresetName, ThemePreset>;
