import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { DynamicDialogRef, DialogService } from 'primeng/dynamicdialog';
import { ModifyAsicDialogData } from '../../asics.types';
import { InputText } from 'primeng/inputtext';
import { AutoCompleteCompleteEvent, AutoComplete } from 'primeng/autocomplete';
import {
  FormGroup,
  FormControl,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { FloatLabel } from 'primeng/floatlabel';
import { Button } from 'primeng/button';
import { KeyFilter } from 'primeng/keyfilter';
import { IPv4AddressRegExpPattern } from '../../asics.constants';
import { AsicModel } from '../../asics.models';
import { TranslocoDirective } from '@jsverse/transloco';
import { Password } from 'primeng/password';
import { NgTemplateOutlet } from '@angular/common';

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
  ],
  templateUrl: './modify-asic-dialog.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ModifyAsicDialogComponent implements OnInit {
  ipAddressRegExp = new RegExp(IPv4AddressRegExpPattern);

  isEditMode!: boolean;
  addressSuggestions: string[] = [];

  form!: FormGroup;

  private addresses!: string[];

  constructor(
    private readonly ref: DynamicDialogRef,
    private readonly dialogService: DialogService,
  ) {}

  ngOnInit(): void {
    const data = this.dialogService.getInstance(this.ref)
      .data as ModifyAsicDialogData;

    this.isEditMode = data?.isEditMode ?? false;
    this.addresses = data?.addresses ?? [];

    const asic = !this.isEditMode || !data.asic ? ({} as AsicModel) : data.asic;

    this.form = new FormGroup({
      // eslint-disable-next-line @typescript-eslint/unbound-method
      ip: new FormControl(asic.ip, Validators.required),
      address: new FormControl(asic.address),
      password: new FormControl(''),
    });
  }

  get ipControl() {
    return this.form.get('ip');
  }

  get addressControl() {
    return this.form.get('address');
  }

  get passwordControl() {
    return this.form.get('password');
  }

  suggestAddress(event: AutoCompleteCompleteEvent): void {
    this.addressSuggestions = this.addresses.filter((address) =>
      address.includes(event.query),
    );
  }

  closeDialog(result?: unknown): void {
    this.ref.close(result);
  }

  addAsic(): void {
    console.log('Added', this.form.value);

    if (this.form.invalid) {
      return;
    }

    this.closeDialog(this.form.value);
  }

  editAsic(): void {
    console.log('Edited', this.form.value);

    if (this.form.invalid) {
      return;
    }

    this.closeDialog(this.form.value);
  }
}
