import { ALLOWED_LANGS } from './lang.config';

export type Lang = (typeof ALLOWED_LANGS)[number];
