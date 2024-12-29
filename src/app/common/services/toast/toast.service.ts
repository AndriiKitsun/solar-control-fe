import { Injectable } from '@angular/core';
import { MessageService } from 'primeng/api';
import { TranslocoService } from '@jsverse/transloco';
import { TranslationKey } from '../../types';

@Injectable()
export class ToastService {
  constructor(
    private readonly messageService: MessageService,
    private readonly translocoService: TranslocoService,
  ) {}

  error(message: TranslationKey): void {
    this.messageService.add({
      severity: 'error',
      summary: this.translocoService.translate('TOAST.SUMMARY.ERROR'),
      detail: this.translocoService.translate(message),
    });
  }
}
