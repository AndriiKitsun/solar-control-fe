import { ClassMock } from '../types/test.types';
import { MessageService, ToastMessageOptions } from 'primeng/api';
import { Observable } from 'rxjs';

export class MessageServiceMock implements ClassMock<MessageService> {
  messageObserver = new Observable<ToastMessageOptions>();
  clearObserver = new Observable<string>();

  add(message: ToastMessageOptions): void {}

  addAll(messages: ToastMessageOptions[]): void {}

  clear(key?: string): void {}
}
