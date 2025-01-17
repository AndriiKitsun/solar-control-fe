import { ClassMock } from '@common/types/test.types';
import { AsicsService } from '../asics.service';
import { Observable, of } from 'rxjs';
import { AsicModel, AsicSummaryModel } from '../../../asics.models';

export class AsicsServiceMock implements ClassMock<AsicsService> {
  getAsics(): Observable<AsicModel[]> {
    return of([]);
  }

  getSummary(id: string): Observable<AsicSummaryModel> {
    return of();
  }
}
