import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MinerModel, MinerType } from '../../models';
import { FakeDataHelper } from '@common/helpers';

@Injectable({
  providedIn: 'root',
})
export class MinerService {
  private readonly minerNames: Record<MinerType, string[]> = {
    [MinerType.CARD]: [
      'GeForce RTX 3060',
      'GeForce RTX 3060 Ti',
      'GeForce RTX 3070',
      'GeForce RTX 4060',
      'GeForce RTX 4060 Ti',
      'GeForce RTX 4070',
      'GeForce RTX 4070 Ti',
      'GeForce RTX 4080',
      'GeForce RTX 4090',
      'Radeon RX 6600 XT',
      'RX 7600 XT',
      'RX 7700 XT',
    ],
    [MinerType.ASIC]: [
      'Asic Bitmain S19 110 Th/s',
      'Asic Bitmain L9 16 Gh/s',
      'Asic Bitmain L7 9050 Mh/s',
      'Asic Bitmain KA3 166 Th/s',
      'Jasminer X44-P 23.4 Gh/s',
      'IceRiver KAS KS5M 15Th',
    ],
  };

  getMiners(): Observable<MinerModel[]> {
    const items = Array(30)
      .fill(0)
      .map<MinerModel>(() => {
        const type = FakeDataHelper.randomFromList(Object.values(MinerType));

        return {
          id: FakeDataHelper.randomUUID(),
          name: FakeDataHelper.randomFromList(this.minerNames[type]),
          type,
          ipAddress: FakeDataHelper.randomIP(),
        };
      });

    return of(items);
  }
}
