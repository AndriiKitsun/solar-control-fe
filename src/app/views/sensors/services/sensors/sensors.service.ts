import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { env } from '@env/environment';
import { Observable } from 'rxjs';
import { PzemCounter } from '../../models/sensor.models';

@Injectable({
  providedIn: 'root',
})
export class SensorsService {
  constructor(private readonly http: HttpClient) {}

  resetCounters(): Observable<PzemCounter[]> {
    return this.http.delete<PzemCounter[]>(`${env.apiEndpoint}/pzems/counter`);
  }
}
