import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  signal,
} from '@angular/core';
import { DynamicDialogRef, DialogService } from 'primeng/dynamicdialog';
import { ModifyAsicDialogData } from '../../asics.types';
import { InputText } from 'primeng/inputtext';
import { AutoCompleteCompleteEvent, AutoComplete } from 'primeng/autocomplete';
import {
  FormGroup,
  FormControl,
  ReactiveFormsModule,
  Validators,
  AbstractControl,
} from '@angular/forms';
import { FloatLabel } from 'primeng/floatlabel';
import { Button } from 'primeng/button';
import { KeyFilter } from 'primeng/keyfilter';
import { IPv4AddressRegExpPattern } from '../../asics.constants';
import { AsicModel, AddAsicModel } from '../../asics.models';
import { TranslocoDirective } from '@jsverse/transloco';
import { Password } from 'primeng/password';
import { NgTemplateOutlet } from '@angular/common';
import { MessageService } from 'primeng/api';
import { AsicsService } from '../../services/asics/asics.service';
import { first, finalize } from 'rxjs';
import { Message } from 'primeng/message';
import { TranslationKey } from '@common/types/lang.types';
import { ModifyAsicForm } from './modify-asic-dialog.types';

/**
 * t(ASICS.TOAST.ADD)
 * t(ASICS.TOAST.EDIT)
 * */

@Component({
  selector: 'app-modify-asic-dialog',
  imports: [
    FloatLabel,
    InputText,
    KeyFilter,
    AutoComplete,
    Button,
    TranslocoDirective,
    Password,
    ReactiveFormsModule,
    NgTemplateOutlet,
    Message,
  ],
  templateUrl: './modify-asic-dialog.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [MessageService],
})
export class ModifyAsicDialogComponent implements OnInit {
  ipAddressRegExp = new RegExp(IPv4AddressRegExpPattern);

  isEditMode!: boolean;
  asicId?: string;

  form!: FormGroup<ModifyAsicForm>;
  addressSuggestions: string[] = [];
  isProcessing = signal(false);

  errorMessageKey?: TranslationKey;

  private addresses!: string[];

  constructor(
    private readonly ref: DynamicDialogRef,
    private readonly dialogService: DialogService,
    private readonly asicsService: AsicsService,
  ) {}

  get ipControl(): AbstractControl<string, string> | null {
    return this.form.get('ip');
  }

  get addressControl(): AbstractControl<string, string> | null {
    return this.form.get('address');
  }

  get passwordControl(): AbstractControl<string, string> | null {
    return this.form.get('password');
  }

  ngOnInit(): void {
    const data = this.dialogService.getInstance(this.ref)
      .data as ModifyAsicDialogData;

    this.isEditMode = data?.isEditMode ?? false;
    this.addresses = data?.addresses ?? [];
    this.asicId = data.asic?.id;

    this.form = this.initForm(data.asic);
  }

  initForm(asic?: AsicModel): FormGroup<ModifyAsicForm> {
    let defaultIp: string;
    let defaultAddress: string;

    if (!this.isEditMode || !asic) {
      defaultIp = '';
      defaultAddress = '';
    } else {
      defaultIp = asic.ip;
      defaultAddress = asic.address;
    }

    return new FormGroup<ModifyAsicForm>({
      ip: new FormControl(defaultIp, {
        nonNullable: true,
        // eslint-disable-next-line @typescript-eslint/unbound-method
        validators: [Validators.required],
      }),
      address: new FormControl(defaultAddress, { nonNullable: true }),
      password: new FormControl('', { nonNullable: true }),
    });
  }

  suggestAddress(event: AutoCompleteCompleteEvent): void {
    this.addressSuggestions = this.addresses.filter((address) =>
      address.includes(event.query),
    );
  }

  closeDialog(result?: AsicModel): void {
    this.ref.close(result);
  }

  addAsic(): void {
    if (this.form.invalid) {
      return;
    }

    this.isProcessing.set(true);
    this.clearErrorMessage();

    this.asicsService
      .addAsic(this.form.value as AddAsicModel)
      .pipe(
        first(),
        finalize(() => {
          this.isProcessing.set(false);
        }),
      )
      .subscribe({
        next: (data: AsicModel) => {
          this.closeDialog(data);
        },
        error: () => {
          this.errorMessageKey = 'ASICS.TOAST.ADD';
        },
      });
  }

  editAsic(): void {
    if (this.form.invalid || !this.asicId) {
      return;
    }

    this.isProcessing.set(true);
    this.clearErrorMessage();

    this.asicsService
      .updateAsic(this.asicId, this.form.value)
      .pipe(
        first(),
        finalize(() => {
          this.isProcessing.set(false);
        }),
      )
      .subscribe({
        next: (data: AsicModel) => {
          this.closeDialog(data);
        },
        error: () => {
          this.errorMessageKey = 'ASICS.TOAST.EDIT';
        },
      });
  }

  clearErrorMessage(): void {
    this.errorMessageKey = undefined;
  }
}
