import { TranslationKey } from '@common/types/lang.types';

export interface TabItem {
  label: TranslationKey;
  icon: string;
  route: string;
  disabled?: boolean;
}
