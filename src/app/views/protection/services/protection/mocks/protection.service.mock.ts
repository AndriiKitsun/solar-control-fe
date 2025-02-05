import { ClassMock } from '@common/types/test.types';
import { ProtectionService } from '../protection.service';
import { Observable, of } from 'rxjs';
import { ProtectionGroupId } from '../../../enums/protection-group.enums';
import { ProtectionRuleModel } from '../../../models/protection-rule.models';

export class ProtectionServiceMock implements ClassMock<ProtectionService> {
  getProtectionRules(): Observable<
    Record<ProtectionGroupId, ProtectionRuleModel>
  > {
    return of();
  }

  saveRule(rule: ProtectionRuleModel): Observable<null> {
    return of();
  }
}
