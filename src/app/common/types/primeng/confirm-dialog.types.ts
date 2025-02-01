import { Confirmation, PrimeIcons } from 'primeng/api';
import { Severity } from './common.types';

export interface ConfirmationButtonProps {
  label?: string;
  severity?: Severity;
  icon?: PrimeIcons;
  outlined?: boolean;
}

export interface TypedConfirmation extends Confirmation {
  acceptButtonProps?: ConfirmationButtonProps;
  rejectButtonProps?: ConfirmationButtonProps;
}
