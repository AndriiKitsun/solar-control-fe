import { LogType, LogLevel } from '../enums/log.enums';

export interface LogModel {
  type: LogType;
  level: LogLevel;
  message: string;
  createdAt: string;
}
