import { SettingsService } from '../settings.service';
import { ClassMock } from '@common/types/test.types';
import { Observable, of } from 'rxjs';
import {
  SettingsModel,
  UpdateSettingsModel,
} from '../../../models/settings.models';

export class SettingsServiceMock implements ClassMock<SettingsService> {
  getSettings(): Observable<SettingsModel> {
    return of();
  }

  saveSettings(
    id: string,
    settings: UpdateSettingsModel,
  ): Observable<SettingsModel> {
    return of();
  }
}
