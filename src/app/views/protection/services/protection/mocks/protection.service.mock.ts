import { ClassMock } from '@common/types/test.types';
import { ProtectionService } from '../protection.service';
import { Observable, of } from 'rxjs';
import { ProtectionRuleId } from '../../../enums/protection.enums';
import { ProtectionRuleModel } from '../../../models/protection-rule.models';
import { ProtectionResultModel } from '../../../models/protection-result.models';

export class ProtectionServiceMock implements ClassMock<ProtectionService> {
  getProtectionRules(): Observable<
    Record<ProtectionRuleId, ProtectionRuleModel>
  > {
    return of();
  }

  saveRule(rule: ProtectionRuleModel): Observable<ProtectionRuleModel> {
    return of();
  }

  getProtectionEvents(): Observable<ProtectionResultModel> {
    return of();
  }
}
