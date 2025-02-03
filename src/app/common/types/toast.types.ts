import { ToastMessageOptions } from 'primeng/api';
import { TranslationKey } from './lang.types';

export interface TypedToastMessageOptions extends ToastMessageOptions {
  details: TranslationKey;
}
