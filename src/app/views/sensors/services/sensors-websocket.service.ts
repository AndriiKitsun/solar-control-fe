import { Injectable } from '@angular/core';
import { WebSocketClientService } from '@api/services';
import { WebSocketSubjectConfig } from 'rxjs/internal/observable/dom/WebSocketSubject';
import { env } from '@env/environment';

@Injectable({
  providedIn: 'root',
})
export class SensorsWebSocketService extends WebSocketClientService {
  protected getConfig(): WebSocketSubjectConfig<unknown> {
    return {
      url: `${env.wsEndpoint}/pzems`,
    };
  }
}
