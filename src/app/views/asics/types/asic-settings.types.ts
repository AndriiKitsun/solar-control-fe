import { AsicModel } from '../models/asics.models';
import { TranslationKey } from '@common/types/lang.types';

export type AsicSetting = keyof Pick<
  AsicModel,
  't2Active' | 't2EndStop' | 'automated'
>;

export interface AsicSettingGroup {
  id: AsicSetting;
  label: TranslationKey;
}
