import {
  ApplicationConfig,
  provideZoneChangeDetection,
  isDevMode,
} from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { providePrimeNG } from 'primeng/config';
import Aura from '@primeng/themes/aura';
import {
  provideHttpClient,
  withFetch,
  withInterceptors,
} from '@angular/common/http';
import { TranslocoHttpLoader } from './transloco-loader';
import { provideTransloco } from '@jsverse/transloco';
import { loggerInterceptor } from '@common/interceptors/logger/logger.interceptor';
import { ALLOWED_LANGS } from '@common/constants/lang.constants';
import { LangService } from '@layout/services/lang/lang.service';
import { ThemePreset } from '@layout/services/theme/theme.types';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideAnimationsAsync(),
    providePrimeNG({
      ripple: true,
      theme: {
        preset: Aura as ThemePreset,
        options: {
          darkModeSelector: '.app-dark',
        },
      },
    }),
    provideHttpClient(withFetch(), withInterceptors([loggerInterceptor])),
    provideTransloco({
      config: {
        availableLangs: ALLOWED_LANGS as unknown as string[],
        defaultLang: LangService.getLang(),
        reRenderOnLangChange: true,
        prodMode: !isDevMode(),
      },
      loader: TranslocoHttpLoader,
    }),
  ],
};
