import { CheckboxChangeEvent } from 'primeng/checkbox';

export interface CheckboxChangeTypedEvent<T = boolean>
  extends CheckboxChangeEvent {
  checked?: T;
}
