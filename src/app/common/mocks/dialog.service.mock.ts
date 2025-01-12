import { ClassMock } from '../types/test.types';
import {
  DialogService,
  DynamicDialogRef,
  DynamicDialogComponent,
  DynamicDialogConfig,
} from 'primeng/dynamicdialog';
import { ComponentRef, Type } from '@angular/core';

export class DialogServiceMock implements ClassMock<DialogService> {
  static readonly componentMock = {} as DynamicDialogComponent;
  static readonly dynamicDialogRefMock: DynamicDialogRef =
    {} as DynamicDialogRef;

  dialogComponentRefMap = new Map<
    DynamicDialogRef,
    ComponentRef<DynamicDialogComponent>
  >();

  getInstance(ref: DynamicDialogRef): DynamicDialogComponent {
    return DialogServiceMock.componentMock;
  }

  open<T, DataType, InputValuesType extends Record<string, any>>(
    componentType: Type<T>,
    config: DynamicDialogConfig<DataType, InputValuesType>,
  ): DynamicDialogRef<T> {
    return DialogServiceMock.dynamicDialogRefMock;
  }
}
