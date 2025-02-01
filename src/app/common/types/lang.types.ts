import enTranslation from 'public/i18n/en.json';
import { ALLOWED_LANGS } from '../constants/lang.constants';

type NestedKeys<T> = T extends object
  ? {
      [K in keyof T]: `${Exclude<K, symbol>}${NestedKeys<T[K]> extends never ? '' : `.${NestedKeys<T[K]>}`}`;
    }[keyof T]
  : never;

type NestedObject<T> = {
  [K in keyof T]: T extends object ? NestedObject<T[K]> : string;
};

export type TranslationKey = NestedKeys<typeof enTranslation>;
export type TranslationObject = NestedObject<typeof enTranslation>;
export type TranslationType = typeof enTranslation;

export type Lang = (typeof ALLOWED_LANGS)[number];
