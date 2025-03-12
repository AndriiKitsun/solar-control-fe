import { SensorsService } from '../sensors.service';
import { ClassMock } from '@common/types/test.types';
import { Observable, of } from 'rxjs';
import {
  PzemCounter,
  PowerStatus,
  SensorDataModel,
} from '../../../models/sensor.models';

export class SensorsServiceMock implements ClassMock<SensorsService> {
  getSensorDataEvents(): Observable<SensorDataModel | null> {
    return of();
  }

  resetCounters(): Observable<PzemCounter[]> {
    return of([]);
  }

  switchPower(status: boolean): Observable<PowerStatus> {
    return of();
  }
}
