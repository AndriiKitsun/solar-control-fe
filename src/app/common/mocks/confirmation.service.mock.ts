import { ClassMock } from '../types/test.types';
import { ConfirmationService, Confirmation } from 'primeng/api';
import { Observable } from 'rxjs';

export class ConfirmationServiceMock implements ClassMock<ConfirmationService> {
  accept = new Observable<Confirmation>();
  requireConfirmation$ = new Observable<Confirmation>();

  confirm(confirmation: Confirmation): ConfirmationService {
    return this as unknown as ConfirmationService;
  }

  close(): ConfirmationService {
    return this as unknown as ConfirmationService;
  }

  onAccept(): void {}
}
