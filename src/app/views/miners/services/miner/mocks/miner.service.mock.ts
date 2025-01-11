import { ClassMock } from '@common/types/test.types';
import { MinerService } from '../miner.service';
import { Observable, of } from 'rxjs';
import { MinerModel } from '../../../models/miner.models';

export class MinerServiceMock implements ClassMock<MinerService> {
  getMiners(): Observable<MinerModel[]> {
    return of([]);
  }
}
