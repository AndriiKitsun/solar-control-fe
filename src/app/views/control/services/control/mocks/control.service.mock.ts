import { ClassMock } from '@common/types/test.types';
import { ControlService } from '../control.service';
import { Observable, of } from 'rxjs';
import { ControlRuleId } from '../../../enums/control-rule.enum';
import { ControlRuleModel } from '../../../models/control-rule.models';

export class ControlServiceMock implements ClassMock<ControlService> {
  getControlRule(): Observable<Record<ControlRuleId, ControlRuleModel>> {
    return of();
  }

  saveRule(rule: ControlRuleModel): Observable<ControlRuleModel> {
    return of();
  }
}
