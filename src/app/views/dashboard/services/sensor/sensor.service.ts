import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { SensorModel, PzemModel } from '../../models';
import { FakeDataHelper } from '@common/helpers';

@Injectable({
  providedIn: 'root',
})
export class SensorService {
  getSensorsData(): Observable<SensorModel> {
    const pzems: PzemModel[] = [];

    if (FakeDataHelper.randomBoolean(0.95)) {
      pzems.push(this.randomPzem('acInput'));
    }

    if (FakeDataHelper.randomBoolean(0.95)) {
      pzems.push(this.randomPzem('acOutput'));
    }

    if (FakeDataHelper.randomBoolean(0.95)) {
      pzems.push(this.randomPzem('dcAcc'));
    }

    if (FakeDataHelper.randomBoolean(0.95)) {
      pzems.push(this.randomPzem('dcSun'));
    }

    const model: SensorModel = {
      id: FakeDataHelper.randomUUID(),
      createdAtGmt: FakeDataHelper.randomISOString(),
      pzems,
    };

    return of(model);
  }

  private randomPzem(id: string): PzemModel {
    return {
      id,
      voltageV: FakeDataHelper.randomFloat(170, 260),
      currentA: FakeDataHelper.randomFloat(0, 5),
      powerKw: FakeDataHelper.randomFloat(0, 10),
      energyKwh: FakeDataHelper.randomFloat(0, 50),
      frequencyHz: FakeDataHelper.randomFloat(45, 50, 0),
      powerFactor: FakeDataHelper.randomFloat(0, 1, 3),
      t1EnergyKwh: FakeDataHelper.randomFloat(0, 50),
      t2EnergyKwh: FakeDataHelper.randomFloat(0, 50),
      avgVoltageV: FakeDataHelper.randomFloat(0, 100),
    };
  }
}
