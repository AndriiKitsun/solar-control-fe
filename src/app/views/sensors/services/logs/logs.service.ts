import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { env } from '@env/environment';
import { Observable, map } from 'rxjs';
import { SseClient } from 'ngx-sse-client';
import { LogModel } from '../../models/log.model';
import { Order } from '@api/enums/pagination.enum';

@Injectable({
  providedIn: 'root',
})
export class LogsService {
  constructor(
    private readonly http: HttpClient,
    private readonly sse: SseClient,
  ) {}

  getLogs(): Observable<LogModel[]> {
    const fromDate = new Date();
    fromDate.setDate(fromDate.getDate() - 1);
    const toDate = new Date();

    return this.http.get<LogModel[]>(`${env.apiEndpoint}/logs`, {
      params: {
        from: fromDate.toJSON(),
        to: toDate.toJSON(),
        order: Order.DESC,
      },
    });
  }

  getLogStream(): Observable<LogModel> {
    return this.sse
      .stream(`${env.apiEndpoint}/logs/sse`, { responseType: 'text' })
      .pipe(map((message) => JSON.parse(message) as LogModel));
  }

  clearLogs(): Observable<void> {
    return this.http.delete<void>(`${env.apiEndpoint}/logs`);
  }
}
