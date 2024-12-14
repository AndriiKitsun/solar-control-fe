import enTranslation from 'public/i18n/en.json';
import { ALLOWED_LANGS } from '../constants';

type NestedKeys<T> = T extends object
  ? {
      [K in keyof T]: `${Exclude<K, symbol>}${NestedKeys<T[K]> extends never ? '' : `.${NestedKeys<T[K]>}`}`;
    }[keyof T]
  : never;

export type TranslationKey = NestedKeys<typeof enTranslation>;

export type Lang = (typeof ALLOWED_LANGS)[number];
