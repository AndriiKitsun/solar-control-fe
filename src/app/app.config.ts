import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { providePrimeNG } from 'primeng/config';
import Lara from '@primeng/themes/lara';
import { definePreset } from '@primeng/themes';
import { ThemeHelper, PrimaryColor, SurfaceColor } from '@common/helpers';

// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
const preset = definePreset(Lara, {
  semantic: {
    primary: ThemeHelper.getPalette(PrimaryColor.INDIGO),
    colorScheme: {
      light: {
        surface: ThemeHelper.getSurface(SurfaceColor.GRAY),
      },
      dark: {
        surface: ThemeHelper.getSurface(SurfaceColor.GRAY),
      },
    },
  },
});

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideAnimationsAsync(),
    providePrimeNG({
      ripple: true,
      theme: {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        preset,
        options: {
          prefix: 'p',
          darkModeSelector: '.app-dark',
          cssLayer: false,
        },
      },
    }),
  ],
};
