import { Component, OnInit } from '@angular/core';
import { DynamicDialogRef, DialogService } from 'primeng/dynamicdialog';
import { ModifyAsicDialogData } from '../../asics.types';
import { InputText } from 'primeng/inputtext';
import { AutoCompleteCompleteEvent, AutoComplete } from 'primeng/autocomplete';
import { FormsModule } from '@angular/forms';
import { FloatLabel } from 'primeng/floatlabel';
import { Button } from 'primeng/button';
import { KeyFilter } from 'primeng/keyfilter';
import { IPv4AddressRegExpPattern } from '../../asics.constants';

@Component({
  selector: 'app-modify-asic-dialog',
  imports: [
    FloatLabel,
    InputText,
    FormsModule,
    KeyFilter,
    AutoComplete,
    Button,
  ],
  templateUrl: './modify-asic-dialog.component.html',
})
export class ModifyAsicDialogComponent implements OnInit {
  ipAddressRegExp = new RegExp(IPv4AddressRegExpPattern);

  isEditMode!: boolean;
  addressSuggestions: string[] = [];

  ipAddress = '';
  address = '';
  password = '';
  hostname = '';

  private addresses!: string[];

  constructor(
    private readonly ref: DynamicDialogRef,
    private readonly dialogService: DialogService,
  ) {}

  ngOnInit(): void {
    const data = this.dialogService.getInstance(this.ref)
      .data as ModifyAsicDialogData;

    this.isEditMode = data.isEditMode;
    this.addresses = data.addresses;
  }

  suggestAddress(event: AutoCompleteCompleteEvent): void {
    this.addressSuggestions = this.addresses.filter((address) =>
      address.includes(event.query),
    );
  }

  closeDialog(): void {
    this.ref.close();
  }

  addAsic(): void {
    console.log('Added');

    this.closeDialog();
  }

  editAsic(): void {
    console.log('Edited');

    this.closeDialog();
  }
}
