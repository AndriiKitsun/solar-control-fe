import { SelectChangeEvent } from 'primeng/select';

export interface SelectChangeTypedEvent<T> extends SelectChangeEvent {
  value: T;
}
