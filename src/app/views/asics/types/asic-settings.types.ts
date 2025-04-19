import { AsicModel } from '../models/asics.models';
import { TranslationKey } from '@common/types/lang.types';

export type AsicSetting = keyof Pick<
  AsicModel,
  't2Active' | 't2EndStop' | 'automated' | 't2Automated'
>;

export interface AsicSettingGroup {
  id: AsicSetting;
  label: TranslationKey;
}
