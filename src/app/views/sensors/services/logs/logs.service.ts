import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { env } from '@env/environment';
import { Observable, map, filter } from 'rxjs';
import { SseClient } from 'ngx-sse-client';
import { LogModel, GetLogsParams } from '../../models/log.model';
import { Order } from '@api/enums/pagination.enum';

@Injectable({
  providedIn: 'root',
})
export class LogsService {
  constructor(
    private readonly http: HttpClient,
    private readonly sse: SseClient,
  ) {}

  getLogs(type?: string): Observable<LogModel[]> {
    const fromDate = new Date();
    fromDate.setDate(fromDate.getDate() - 1);

    const params: GetLogsParams = {
      from: fromDate.toJSON(),
      to: new Date().toJSON(),
      order: Order.DESC,
    };

    if (type) {
      params.type = type;
    }

    return this.http.get<LogModel[]>(`${env.apiEndpoint}/logs`, {
      params: params as Record<string, string>,
    });
  }

  getLogStream(type?: string): Observable<LogModel> {
    return this.sse
      .stream(`${env.apiEndpoint}/logs/sse`, { responseType: 'text' })
      .pipe(
        map((message) => JSON.parse(message) as LogModel),
        filter((log: LogModel) => {
          if (!type) {
            return true;
          }

          return log.type === type;
        }),
      );
  }

  deleteLogs(): Observable<void> {
    return this.http.delete<void>(`${env.apiEndpoint}/logs`);
  }
}
