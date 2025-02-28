import { SelectOption } from '@common/types/select.types';
import { LogLevel } from '../enums/log.enums';
import { TranslationKey } from '@common/types/lang.types';

/**
 * t(LOG.LEVEL.DEBUG)
 * t(LOG.LEVEL.INFO)
 * t(LOG.LEVEL.WARN)
 * t(LOG.LEVEL.ERROR)
 * */

export const LOG_SELECT_OPTIONS: SelectOption<LogLevel, TranslationKey>[] = [
  {
    value: LogLevel.DEBUG,
    label: 'LOG.LEVEL.DEBUG',
  },
  {
    value: LogLevel.INFO,
    label: 'LOG.LEVEL.INFO',
  },
  {
    value: LogLevel.WARN,
    label: 'LOG.LEVEL.WARN',
  },
  {
    value: LogLevel.ERROR,
    label: 'LOG.LEVEL.ERROR',
  },
];
