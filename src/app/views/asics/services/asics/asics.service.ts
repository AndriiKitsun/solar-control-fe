import { Injectable } from '@angular/core';
import { Observable, of, delay } from 'rxjs';
import { AsicModel } from '../../asics.models';
import { FakeDataHelper } from '@common/helpers/fake-data.helper';

@Injectable({
  providedIn: 'root',
})
export class AsicsService {
  private readonly minerNames: string[] = [
    'Asic Bitmain S19 110 Th/s',
    'Asic Bitmain L9 16 Gh/s',
    'Asic Bitmain L7 9050 Mh/s',
    'Asic Bitmain KA3 166 Th/s',
    'Jasminer X44-P 23.4 Gh/s',
    'IceRiver KAS KS5M 15Th',
  ];
  private readonly addresses: string[] = [
    'home',
    'father',
    'mother',
    'address1',
    'address2',
    'address3',
  ];

  getAsics(): Observable<AsicModel[]> {
    const items = Array.from({ length: 30 }).map<AsicModel>(() => {
      return {
        id: FakeDataHelper.randomUUID(),
        name: FakeDataHelper.randomFromList(this.minerNames),
        address: FakeDataHelper.randomFromList(this.addresses),
      };
    });

    return of(items).pipe(delay(2000));
  }
}
