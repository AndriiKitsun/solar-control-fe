import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { env } from '@env/environment';
import { Observable, map } from 'rxjs';
import {
  PzemCounter,
  PowerStatus,
  SensorDataModel,
} from '../../models/sensor.models';
import { SseClient } from 'ngx-sse-client';

@Injectable({
  providedIn: 'root',
})
export class SensorsService {
  constructor(
    private readonly http: HttpClient,
    private readonly sse: SseClient,
  ) {}

  getSensorDataEvents(): Observable<SensorDataModel | null> {
    return this.sse.stream(`${env.apiEndpoint}/sensors/sse`).pipe(
      map((event: Event) => {
        if (event.type === 'error') {
          return null;
        }

        return JSON.parse(
          (event as MessageEvent<string>).data,
        ) as SensorDataModel;
      }),
    );
  }

  resetCounters(): Observable<PzemCounter[]> {
    return this.http.delete<PzemCounter[]>(`${env.apiEndpoint}/pzems/counter`);
  }

  getPowerStatus(): Observable<PowerStatus> {
    return this.http.get<PowerStatus>(`${env.apiEndpoint}/relays`);
  }

  switchPower(status: boolean): Observable<PowerStatus> {
    return this.http.put<PowerStatus>(`${env.apiEndpoint}/relays/power`, {
      status: status,
    });
  }
}
