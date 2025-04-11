import { LogType, LogLevel } from '../enums/log.enums';
import { Order } from '@api/enums/pagination.enum';

export interface LogModel {
  type: LogType;
  level: LogLevel;
  message: string;
  createdAt: string;
}

export interface GetLogsParams {
  from?: string;
  to?: string;
  type?: string;
  order?: Order;
}
