import { TranslocoService } from '@jsverse/transloco';
import { TranslationKey } from '../types/lang.types';
import { ToastMessageOptions } from 'primeng/api';

/**
 * t(TOAST.ERROR_SUMMARY)
 */

export function createHttpErrorToast(
  message: TranslationKey,
  translocoService: TranslocoService,
): ToastMessageOptions {
  return {
    severity: 'error',
    summary: translocoService.translate('TOAST.ERROR_SUMMARY'),
    detail: translocoService.translate(message),
  };
}
