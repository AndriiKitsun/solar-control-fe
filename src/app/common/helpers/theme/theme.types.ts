export enum PrimaryColor {
  NOIR = 'noir',
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
  SOHO = 'soho',
  VIVA = 'viva',
  OCEAN = 'ocean',
}

export interface Palette<T extends string> {
  50: `{${T}.50}`;
  100: `{${T}.100}`;
  200: `{${T}.200}`;
  300: `{${T}.300}`;
  400: `{${T}.400}`;
  500: `{${T}.500}`;
  600: `{${T}.600}`;
  700: `{${T}.700}`;
  800: `{${T}.800}`;
  900: `{${T}.900}`;
  950: `{${T}.950}`;
}

export interface Surface<T extends string> extends Palette<T> {
  0: string;
}
