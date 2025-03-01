import { Injectable } from '@angular/core';
import { ProtectionRuleModel } from '../../models/protection-rule.models';
import { Observable, map } from 'rxjs';
import { ProtectionRuleId } from '../../enums/protection.enums';
import { HttpClient } from '@angular/common/http';
import { env } from '@env/environment';
import { SseClient } from 'ngx-sse-client';
import { ProtectionResultModel } from '../../models/protection-result.models';

@Injectable({
  providedIn: 'root',
})
export class ProtectionService {
  constructor(
    private readonly http: HttpClient,
    private readonly sse: SseClient,
  ) {}

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
    const payload: Partial<ProtectionRuleModel> = {
      min: rule.min,
      max: rule.max,
      enabled: rule.enabled,
    };

    return this.http.put<ProtectionRuleModel>(
      `${env.apiEndpoint}/protection-rules/${rule.id}`,
      payload,
    );
  }

  getProtectionEvents(): Observable<ProtectionResultModel> {
    return this.sse
      .stream(`${env.apiEndpoint}/protection-rules/sse`, {
        responseType: 'text',
      })
      .pipe(map((message) => JSON.parse(message) as ProtectionResultModel));
  }
}
