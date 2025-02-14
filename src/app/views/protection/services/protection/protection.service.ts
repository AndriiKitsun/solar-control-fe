import { Injectable } from '@angular/core';
import { ProtectionRuleModel } from '../../models/protection-rule.models';
import { Observable, map } from 'rxjs';
import { ProtectionRuleId } from '../../enums/protection.enums';
import { HttpClient } from '@angular/common/http';
import { env } from '@env/environment';

@Injectable({
  providedIn: 'root',
})
export class ProtectionService {
  constructor(private readonly http: HttpClient) {}

  getProtectionRules(): Observable<
    Record<ProtectionRuleId, ProtectionRuleModel>
  > {
    return this.http
      .get<ProtectionRuleModel[]>(`${env.apiEndpoint}/protection-rules`)
      .pipe(
        map((rules) => {
          return rules.reduce(
            (acc, rule) => {
              acc[rule.id] = rule;

              return acc;
            },
            {} as Record<ProtectionRuleId, ProtectionRuleModel>,
          );
        }),
      );
  }

  saveRule(rule: ProtectionRuleModel): Observable<ProtectionRuleModel> {
    return this.http.put<ProtectionRuleModel>(
      `${env.apiEndpoint}/protection-rules`,
      rule,
    );
  }
}
