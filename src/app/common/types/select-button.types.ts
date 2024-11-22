import { SelectButtonChangeEvent } from 'primeng/selectbutton';

export interface SelectButtonOption<T = string> {
  label: string;
  value?: T;
}

export interface SelectButtonChangeTypedEvent<T>
  extends SelectButtonChangeEvent {
  value?: {
    label: T;
  };
}
