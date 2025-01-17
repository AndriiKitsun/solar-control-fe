import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AsicModel, AsicSummaryModel } from '../../asics.models';
import { HttpClient } from '@angular/common/http';
import { env } from '@env/environment';

@Injectable({
  providedIn: 'root',
})
export class AsicsService {
  constructor(private readonly http: HttpClient) {}

  getAsics(): Observable<AsicModel[]> {
    return this.http.get<AsicModel[]>(`${env.apiEndpoint}/asics`);
  }

  getSummary(id: string): Observable<AsicSummaryModel> {
    return this.http.get<AsicSummaryModel>(
      `${env.apiEndpoint}/asics/${id}/summary`,
    );
  }

  startMining(id: string): Observable<void> {
    return this.http.post<void>(`${env.apiEndpoint}/asics/${id}/start`, {});
  }

  stopMining(id: string): Observable<void> {
    return this.http.post<void>(`${env.apiEndpoint}/asics/${id}/stop`, {});
  }
}
