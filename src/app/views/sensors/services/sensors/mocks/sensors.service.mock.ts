import { SensorsService } from '../sensors.service';
import { ClassMock } from '@common/types/test.types';
import { Observable, of } from 'rxjs';
import { PzemCounter, PowerStatus } from '../../../models/sensor.models';

export class SensorsServiceMock implements ClassMock<SensorsService> {
  resetCounters(): Observable<PzemCounter[]> {
    return of([]);
  }

  getPowerStatus(): Observable<PowerStatus> {
    return of();
  }

  switchPower(status: boolean): Observable<PowerStatus> {
    return of();
  }
}
