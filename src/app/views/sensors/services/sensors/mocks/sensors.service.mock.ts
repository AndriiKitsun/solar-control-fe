import { SensorsService } from '../sensors.service';
import { ClassMock } from '@common/types/test.types';
import { Observable, of } from 'rxjs';
import { PzemCounter } from '../../../models/sensor.models';

export class SensorsServiceMock implements ClassMock<SensorsService> {
  resetCounters(): Observable<PzemCounter[]> {
    return of([]);
  }
}
