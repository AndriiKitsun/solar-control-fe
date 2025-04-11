import { SelectOption } from '@common/types/select.types';
import { LogLevel, LogType } from '../enums/log.enums';
import { TranslationKey } from '@common/types/lang.types';
import { LogTab } from '../types/log.types';

/**
 * t(LOG.LEVEL.DEBUG)
 * t(LOG.LEVEL.INFO)
 * t(LOG.LEVEL.WARN)
 * t(LOG.LEVEL.ERROR)
 * t(LOG.TAB.ALL)
 * t(LOG.TAB.PROTECTION)
 * t(LOG.TAB.CONTROL)
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

export const LOG_TABS: LogTab[] = [
  {
    id: '',
    label: 'LOG.TAB.ALL',
  },
  {
    id: LogType.PROTECTION,
    label: 'LOG.TAB.PROTECTION',
  },
  {
    id: LogType.CONTROL,
    label: 'LOG.TAB.CONTROL',
  },
];
