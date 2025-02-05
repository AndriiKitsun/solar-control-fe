import { Injectable } from '@angular/core';
import { ProtectionRuleModel } from '../../models/protection-rule.models';
import { Observable, of, delay, map } from 'rxjs';
import {
  ProtectionGroupId,
  ProtectionActionId,
} from '../../enums/protection-group.enums';

@Injectable({
  providedIn: 'root',
})
export class ProtectionService {
  getProtectionRules(): Observable<ProtectionRuleModel[]> {
    return of(null).pipe(
      delay(1000),
      map(() => {
        return [
          {
            groupId: ProtectionGroupId.AC_OUTPUT_VOLTAGE,
            min: 123,
            max: 222,
            actions: [ProtectionActionId.ALARM],
          },
          {
            groupId: ProtectionGroupId.DC_BATTERY_VOLTAGE,
            min: 10,
            max: 55,
            actions: [
              ProtectionActionId.POWER_OFF,
              ProtectionActionId.DISABLE_ASICS,
            ],
          },
        ] satisfies ProtectionRuleModel[];
      }),
    );
  }
}
