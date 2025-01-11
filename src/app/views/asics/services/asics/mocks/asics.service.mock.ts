import { ClassMock } from '@common/types/test.types';
import { AsicsService } from '../asics.service';
import { Observable, of } from 'rxjs';
import { AsicModel } from '../../../asics.models';

export class AsicsServiceMock implements ClassMock<AsicsService> {
  getMiners(): Observable<AsicModel[]> {
    return of([]);
  }
}
