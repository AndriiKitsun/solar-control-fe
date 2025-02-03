import { TypedConfirmation } from '../../types/confirmation.types';
import { PrimeIcons } from 'primeng/api';
import { TranslocoService } from '@jsverse/transloco';

/**
 * t(BUTTON.CANCEL)
 * t(BUTTON.OK)
 * */

export function getConfirmDialogConfig(
  config: TypedConfirmation,
  translocoService: TranslocoService,
): TypedConfirmation {
  return {
    header: translocoService.translate('CONFIRM_DIALOG.HEADER'),
    icon: PrimeIcons.EXCLAMATION_TRIANGLE,
    ...config,
    rejectButtonProps: {
      severity: 'secondary',
      icon: PrimeIcons.TIMES,
      outlined: true,
      ...config.rejectButtonProps,
      label: translocoService.translate(
        config.rejectButtonProps?.label ?? 'BUTTON.CANCEL',
      ),
    },
    acceptButtonProps: {
      ...config.acceptButtonProps,
      label: translocoService.translate(
        config.acceptButtonProps?.label ?? 'BUTTON.OK',
      ),
    },
    message: translocoService.translate(config.message),
  };
}
