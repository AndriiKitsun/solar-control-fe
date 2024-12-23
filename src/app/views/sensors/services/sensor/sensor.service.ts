import { Injectable } from '@angular/core';
import { Observable, interval, map } from 'rxjs';
import { PzemDataModel, PzemModel } from '../../models';
import { FakeDataHelper } from '@common/helpers';

@Injectable({
  providedIn: 'root',
})
export class SensorService {
  // TODO: Delete after E2E testing
  getSensorsData(): Observable<PzemDataModel> {
    return interval(1000).pipe(map(() => this.randomSensor()));
  }

  private randomSensor(): PzemDataModel {
    const pzems: PzemModel[] = [];

    if (FakeDataHelper.randomBoolean(0.95)) {
      pzems.push(this.randomPzem('acInput'));
    }

    if (FakeDataHelper.randomBoolean(0.95)) {
      pzems.push(this.randomPzem('acOutput'));
    }

    if (FakeDataHelper.randomBoolean(0.95)) {
      pzems.push(this.randomPzem('dcBattery'));
    }

    if (FakeDataHelper.randomBoolean(0.95)) {
      pzems.push(this.randomPzem('dcSun'));
    }

    return {
      createdAtGmt: FakeDataHelper.randomISOString(),
      pzems,
    };
  }

  private randomPzem(name: string): PzemModel {
    return {
      name,
      voltageV: FakeDataHelper.randomFloat(170, 260),
      currentA: FakeDataHelper.randomFloat(0, 5),
      powerKw: FakeDataHelper.randomFloat(0, 10),
      energyKwh: FakeDataHelper.randomFloat(0, 50),
      frequencyHz: FakeDataHelper.randomFloat(45, 50, 0),
      powerFactor: FakeDataHelper.randomFloat(0, 1, 3),
      t1EnergyKwh: FakeDataHelper.randomFloat(0, 50),
      t2EnergyKwh: FakeDataHelper.randomFloat(0, 50),
      avgVoltageV: FakeDataHelper.randomFloat(170, 260),
    };
  }
}
