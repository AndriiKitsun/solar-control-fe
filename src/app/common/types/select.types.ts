import { SelectChangeEvent } from 'primeng/select';
import { SelectButtonChangeEvent } from 'primeng/selectbutton';

export interface SelectOption<T = string> {
  label: string;
  value: T;
}

export interface SimpleSelectOption<T = string> {
  label: T;
}

export interface SelectChangeTypedEvent<T> extends SelectChangeEvent {
  value: T;
}

export interface SelectButtonChangeTypedEvent<T>
  extends SelectButtonChangeEvent {
  value?: T;
}
