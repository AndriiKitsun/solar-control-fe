import { ClassMock } from '@common/types/test.types';
import { SensorsWebSocketService } from '../sensors-websocket.service';
import { Observable, of } from 'rxjs';

export class SensorsWebsocketServiceMock
  implements ClassMock<SensorsWebSocketService>
{
  isConnected$ = new Observable<boolean>();

  on<T>(): Observable<T> {
    return of(null as T);
  }
}
