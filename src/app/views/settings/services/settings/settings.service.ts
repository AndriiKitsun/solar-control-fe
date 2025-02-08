import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { env } from '@env/environment';
import { Observable } from 'rxjs';
import {
  SettingsModel,
  UpdateSettingsModel,
} from '../../models/setting.models';

@Injectable({
  providedIn: 'root',
})
export class SettingsService {
  constructor(private readonly http: HttpClient) {}

  getSettings(): Observable<SettingsModel> {
    return this.http.get<SettingsModel>(`${env.apiEndpoint}/settings`);
  }

  saveSettings(
    id: string,
    settings: UpdateSettingsModel,
  ): Observable<SettingsModel> {
    return this.http.patch<SettingsModel>(
      `${env.apiEndpoint}/settings/${id}`,
      settings,
    );
  }
}
