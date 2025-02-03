import { Confirmation, PrimeIcons } from 'primeng/api';
import { Severity } from './severity.types';
import { TranslationKey } from './lang.types';

export interface ConfirmationButtonProps {
  label?: TranslationKey;
  severity?: Severity;
  icon?: PrimeIcons;
  outlined?: boolean;
}

export interface TypedConfirmation extends Confirmation {
  message: TranslationKey;
  acceptButtonProps?: ConfirmationButtonProps;
  rejectButtonProps?: ConfirmationButtonProps;
}
