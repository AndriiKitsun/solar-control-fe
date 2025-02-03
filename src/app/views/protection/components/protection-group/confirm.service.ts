import { Injectable } from '@angular/core';
import { ConfirmationService } from 'primeng/api';
import { TranslocoService } from '@jsverse/transloco';

@Injectable()
export class ConfirmService extends ConfirmationService {
  constructor(private readonly translocoService: TranslocoService) {
    super();
  }
}
