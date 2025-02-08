import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { env } from '@env/environment';
import { Observable, of, tap } from 'rxjs';
import {
  SettingsModel,
  UpdateSettingsModel,
} from '../../models/settings.models';

@Injectable({
  providedIn: 'root',
})
export class SettingsService {
  private settings?: SettingsModel;

  constructor(private readonly http: HttpClient) {}

  getSettings(): Observable<SettingsModel> {
    if (this.settings) {
      return of(this.settings);
    }

    return this.http.get<SettingsModel>(`${env.apiEndpoint}/settings`).pipe(
      tap((settings) => {
        this.settings = settings;
      }),
    );
  }

  saveSettings(
    id: string,
    settings: UpdateSettingsModel,
  ): Observable<SettingsModel> {
    return this.http
      .patch<SettingsModel>(`${env.apiEndpoint}/settings/${id}`, settings)
      .pipe(
        tap((settings) => {
          this.settings = settings;
        }),
      );
  }
}
