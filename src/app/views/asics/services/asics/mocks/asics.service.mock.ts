import { ClassMock } from '@common/types/test.types';
import { AsicsService } from '../asics.service';
import { Observable, of } from 'rxjs';
import {
  AsicModel,
  AsicSummaryModel,
  AddAsicModel,
} from '../../../asics.models';

export class AsicsServiceMock implements ClassMock<AsicsService> {
  getAsics(): Observable<AsicModel[]> {
    return of([]);
  }

  getSummary(id: string): Observable<AsicSummaryModel> {
    return of();
  }

  addAsic(asic: AddAsicModel): Observable<AsicModel> {
    return of();
  }

  updateAsic(id: string, asic: Partial<AddAsicModel>): Observable<AsicModel> {
    return of();
  }

  deleteAsic(id: string): Observable<void> {
    return of();
  }
}
