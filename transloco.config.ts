import { TranslocoGlobalConfig } from '@jsverse/transloco-utils';

const config: TranslocoGlobalConfig = {
  rootTranslationsPath: 'public/i18n/',
  langs: ['en', 'uk'],
  keysManager: {
    output: 'public/i18n/',
    unflat: true,
    emitErrorOnExtraKeys: true,
  },
};

export default config;
