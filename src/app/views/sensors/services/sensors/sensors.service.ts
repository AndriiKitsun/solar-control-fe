import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { env } from '@env/environment';
import { Observable } from 'rxjs';
import { PzemCounter, PowerStatus } from '../../models/sensor.models';

@Injectable({
  providedIn: 'root',
})
export class SensorsService {
  constructor(private readonly http: HttpClient) {}

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
