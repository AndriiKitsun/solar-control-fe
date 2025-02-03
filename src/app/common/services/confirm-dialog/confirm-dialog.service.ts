import { Injectable } from '@angular/core';
import { ConfirmationService, PrimeIcons } from 'primeng/api';
import { TranslocoService } from '@jsverse/transloco';
import { TypedConfirmation } from '../../types/confirmation.types';

/**
 * t(BUTTON.CANCEL)
 * t(BUTTON.OK)
 * */

@Injectable()
export class ConfirmDialogService extends ConfirmationService {
  constructor(private readonly translocoService: TranslocoService) {
    super();
  }

  confirmDialog(config: TypedConfirmation): void {
    this.confirm({
      header: this.translocoService.translate('CONFIRM_DIALOG.HEADER'),
      icon: PrimeIcons.EXCLAMATION_TRIANGLE,
      ...config,
      rejectButtonProps: {
        severity: 'secondary',
        icon: PrimeIcons.TIMES,
        outlined: true,
        ...config.rejectButtonProps,
        label: this.translocoService.translate(
          config.rejectButtonProps?.label ?? 'BUTTON.CANCEL',
        ),
      },
      acceptButtonProps: {
        ...config.acceptButtonProps,
        label: this.translocoService.translate(
          config.acceptButtonProps?.label ?? 'BUTTON.OK',
        ),
      },
      message: this.translocoService.translate(config.message),
    });
  }
}
