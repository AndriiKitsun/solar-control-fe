import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { env } from '@env/environment';
import { Observable, map } from 'rxjs';
import { PzemCounter, PzemPowerModel } from '../../models/sensor.models';

@Injectable({
  providedIn: 'root',
})
export class SensorsService {
  constructor(private readonly http: HttpClient) {}

  resetCounters(): Observable<PzemCounter[]> {
    return this.http.delete<PzemCounter[]>(`${env.apiEndpoint}/pzems/counter`);
  }

  getPowerStatus(): Observable<boolean> {
    return this.http
      .get<PzemPowerModel>(`${env.apiEndpoint}/pzems/power`)
      .pipe(map((response) => response.status));
  }

  switchPower(status: boolean): Observable<boolean> {
    return this.http
      .post<PzemPowerModel>(
        `${env.apiEndpoint}/pzems/power?status=${status}`,
        {},
      )
      .pipe(map((response) => response.status));
  }
}
