import { Injectable } from '@angular/core';
import { MessageService } from 'primeng/api';
import { TranslocoService } from '@jsverse/transloco';
import { TranslationKey } from '../../types/lang.types';
import { LangService } from '@layout/services/lang/lang.service';

@Injectable()
export class ToastService extends MessageService {
  constructor(
    private readonly translocoService: TranslocoService,
    private readonly langService: LangService,
  ) {
    super();
  }

  async error(message: TranslationKey): Promise<void> {
    if (await this.langService.langLoaded()) {
      this.add({
        severity: 'error',
        summary: this.translocoService.translate('TOAST.ERROR_SUMMARY'),
        detail: this.translocoService.translate(message),
      });
    }
  }
}
