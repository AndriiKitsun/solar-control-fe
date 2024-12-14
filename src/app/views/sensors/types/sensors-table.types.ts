import { PzemModel } from '../models';
import { TranslationKey } from '@common/types';

export interface RowConfig {
  id: string;
  title: TranslationKey;
  data?: PzemModel;
}
