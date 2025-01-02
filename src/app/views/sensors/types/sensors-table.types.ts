import { TranslationKey } from '@common/types/lang.types';
import { PzemModel } from '../models/sensor.models';

export interface RowConfig {
  id: string;
  title: TranslationKey;
  data?: PzemModel;
}
