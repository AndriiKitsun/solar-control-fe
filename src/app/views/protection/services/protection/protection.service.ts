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
  getProtectionRules(): Observable<
    Record<ProtectionGroupId, ProtectionRuleModel>
  > {
    return of(null).pipe(
      delay(1000),
      map(() => {
        return [
          {
            groupId: ProtectionGroupId.AC_OUTPUT_VOLTAGE,
            min: 184,
            max: 225,
            actions: [ProtectionActionId.ALARM],
          },
          {
            groupId: ProtectionGroupId.DC_BATTERY_VOLTAGE,
            min: 30.3,
            max: 55.6,
            actions: [
              ProtectionActionId.POWER_OFF,
              ProtectionActionId.DISABLE_ASICS,
            ],
          },
        ] satisfies ProtectionRuleModel[];
      }),
      map((rules: ProtectionRuleModel[]) => {
        return rules.reduce(
          (acc, item) => {
            acc[item.groupId] = item;

            return acc;
          },
          {} as Record<ProtectionGroupId, ProtectionRuleModel>,
        );
      }),
    );
  }

  saveRule(rule: ProtectionRuleModel): Observable<null> {
    console.log(`rule -->`, rule);

    return of(null).pipe(delay(2000));
  }
}
