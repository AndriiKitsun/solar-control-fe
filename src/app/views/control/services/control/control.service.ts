import { Injectable } from '@angular/core';
import { ControlRuleModel } from '../../models/control-rule.models';
import { Observable, map } from 'rxjs';
import { ControlRuleId } from '../../enums/control-rule.enum';
import { HttpClient } from '@angular/common/http';
import { env } from '@env/environment';

@Injectable({
  providedIn: 'root',
})
export class ControlService {
  constructor(private readonly http: HttpClient) {}

  getControlRule(): Observable<Record<ControlRuleId, ControlRuleModel>> {
    return this.http
      .get<ControlRuleModel[]>(`${env.apiEndpoint}/automation/control`)
      .pipe(
        map((rules) => {
          return rules.reduce(
            (acc, rule) => {
              acc[rule.id] = rule;

              return acc;
            },
            {} as Record<ControlRuleId, ControlRuleModel>,
          );
        }),
      );
  }

  saveRule(rule: ControlRuleModel): Observable<ControlRuleModel> {
    return this.http.put<ControlRuleModel>(
      `${env.apiEndpoint}/automation/protection/${rule.id}`,
      rule,
    );
  }
}
