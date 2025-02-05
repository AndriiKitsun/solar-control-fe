import { ClassMock } from '../../../types/test.types';
import { ToastService } from '../toast.service';
import { Observable } from 'rxjs';
import { ToastMessageOptions } from 'primeng/api';
import { TranslationKey } from '../../../types/lang.types';

export class ToastServiceMock implements ClassMock<ToastService> {
  messageObserver = new Observable<ToastMessageOptions>();
  clearObserver = new Observable<string>();

  add(message: ToastMessageOptions): void {}

  addAll(messages: ToastMessageOptions[]): void {}

  clear(key?: string): void {}

  error(message: TranslationKey): void {}
}
