import { LogsService } from '../logs.service';
import { ClassMock } from '@common/types/test.types';
import { Observable, of } from 'rxjs';
import { LogModel } from '../../../models/log.model';

export class LogsServiceMock implements ClassMock<LogsService> {
  getLogs(): Observable<LogModel[]> {
    return of();
  }

  getLogStream(): Observable<LogModel> {
    return of();
  }

  clearLogs(): Observable<void> {
    return of();
  }
}
