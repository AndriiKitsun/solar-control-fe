import { ClassMock } from '../../../types/test.types';
import { ConfirmDialogService } from '../confirm-dialog.service';
import { Confirmation } from 'primeng/api';
import { TypedConfirmation } from '../../../types/confirmation.types';
import { Observable } from 'rxjs';

export class ConfirmDialogServiceMock
  implements ClassMock<ConfirmDialogService>
{
  accept = new Observable<Confirmation>();
  requireConfirmation$ = new Observable<Confirmation>();

  confirm(confirmation: Confirmation): ConfirmDialogService {
    return this as unknown as ConfirmDialogService;
  }

  close(): ConfirmDialogService {
    return this as unknown as ConfirmDialogService;
  }

  onAccept(): void {}

  confirmDialog(config: TypedConfirmation): void {}
}
