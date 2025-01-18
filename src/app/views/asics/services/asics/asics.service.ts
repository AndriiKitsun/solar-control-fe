import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AsicModel, AsicSummaryModel, AddAsicModel } from '../../asics.models';
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

  addAsic(asic: AddAsicModel): Observable<AsicModel> {
    return this.http.post<AsicModel>(`${env.apiEndpoint}/asics`, asic);
  }

  updateAsic(id: string, asic: Partial<AddAsicModel>): Observable<AsicModel> {
    if (!asic.password) {
      delete asic.password;
    }

    return this.http.patch<AsicModel>(`${env.apiEndpoint}/asics/${id}`, asic);
  }
}
