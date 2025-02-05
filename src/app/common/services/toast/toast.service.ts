import { Injectable } from '@angular/core';
import { MessageService } from 'primeng/api';
import { TranslocoService } from '@jsverse/transloco';
import { TranslationKey } from '../../types/lang.types';

@Injectable({
  providedIn: 'root',
})
export class ToastService extends MessageService {
  constructor(private readonly translocoService: TranslocoService) {
    super();
  }

  error(message: TranslationKey): void {
    this.add({
      severity: 'error',
      summary: this.translocoService.translate('TOAST.ERROR_SUMMARY'),
      detail: this.translocoService.translate(message),
    });
  }
}
