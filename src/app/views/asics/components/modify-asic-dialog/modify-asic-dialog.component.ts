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
import { AsicModel } from '../../asics.models';
import { TranslocoDirective } from '@jsverse/transloco';

@Component({
  selector: 'app-modify-asic-dialog',
  imports: [
    FloatLabel,
    InputText,
    FormsModule,
    KeyFilter,
    AutoComplete,
    Button,
    TranslocoDirective,
  ],
  templateUrl: './modify-asic-dialog.component.html',
})
export class ModifyAsicDialogComponent implements OnInit {
  ipAddressRegExp = new RegExp(IPv4AddressRegExpPattern);

  isEditMode!: boolean;
  addressSuggestions: string[] = [];

  asic!: Partial<AsicModel>;

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
    this.asic = !this.isEditMode || !data.asic ? {} : { ...data.asic };
  }

  suggestAddress(event: AutoCompleteCompleteEvent): void {
    this.addressSuggestions = this.addresses.filter((address) =>
      address.includes(event.query),
    );
  }

  closeDialog(result?: Partial<AsicModel>): void {
    this.ref.close(result);
  }

  addAsic(): void {
    console.log('Added', this.asic);

    this.closeDialog(this.asic);
  }

  editAsic(): void {
    console.log('Edited', this.asic);

    this.closeDialog(this.asic);
  }
}
