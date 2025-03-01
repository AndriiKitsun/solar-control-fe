import { TranslationKey } from '@common/types/lang.types';
import { RoutePath } from '@common/constants/router.constants';

export interface TabItem {
  label: TranslationKey;
  icon: string;
  route: RoutePath;
  disabled?: boolean;
  badge?: boolean;
}
