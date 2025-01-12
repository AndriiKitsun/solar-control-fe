import { Component, OnInit, signal, computed } from '@angular/core';
import { map, Observable, tap, first } from 'rxjs';
import { Menu } from 'primeng/menu';
import { Button } from 'primeng/button';
import { TranslocoDirective, TranslocoService } from '@jsverse/transloco';
import { AsicsService } from './services/asics/asics.service';
import { Toolbar } from 'primeng/toolbar';
import {
  PrimeIcons,
  MenuItemCommandEvent,
  ConfirmationService,
} from 'primeng/api';
import { AsyncPipe } from '@angular/common';
import { AsicModel } from './asics.models';
import { AsicMenuItem, ModifyAsicDialogData } from './asics.types';
import { DialogService } from 'primeng/dynamicdialog';
import { ModifyAsicDialogComponent } from './components/modify-asic-dialog/modify-asic-dialog.component';
import { ConfirmDialog } from 'primeng/confirmdialog';
import { TableModule } from 'primeng/table';

/**
 * t(ASICS.DIALOG.MODIFY.HEADER.ADD)
 * t(ASICS.DIALOG.MODIFY.HEADER.EDIT)
 * */

@Component({
  selector: 'app-asics',
  imports: [
    TranslocoDirective,
    Menu,
    AsyncPipe,
    Toolbar,
    Button,
    ConfirmDialog,
    TableModule,
  ],
  templateUrl: './asics.component.html',
  styleUrl: './asics.component.scss',
  providers: [ConfirmationService],
})
export class AsicsComponent implements OnInit {
  isLoading = signal(false);
  isToolbarDisabled = computed(() => this.isLoading() || !this.selectedItem());
  selectedItem = signal<AsicMenuItem | null>(null);

  menuItems$!: Observable<AsicMenuItem[]>;

  private menu: AsicMenuItem[] = [];
  private addresses: string[] = [];

  constructor(
    private readonly asicsService: AsicsService,
    private readonly dialogService: DialogService,
    private readonly confirmationService: ConfirmationService,
    private readonly translocoService: TranslocoService,
  ) {}

  ngOnInit(): void {
    this.menuItems$ = this.getMenuItems();
  }

  getMenuItems(): Observable<AsicMenuItem[]> {
    this.isLoading.set(true);

    return this.asicsService.getAsics().pipe(
      map((asics: AsicModel[]) => {
        const menu: AsicMenuItem[] = [];

        asics.forEach((asic) => {
          const group = menu.find((item) => item.label === asic.address);
          const item: AsicMenuItem = this.buildMenuItem(asic);

          if (!group) {
            menu.push({ label: asic.address, items: [item] });
            this.addresses.push(asic.address);
          } else {
            group.items!.push(item);
          }
        });

        return menu;
      }),
      tap((menu: AsicMenuItem[]) => {
        this.menu = menu;
        this.isLoading.set(false);
      }),
    );
  }

  onItemClick(event: MenuItemCommandEvent): void {
    this.selectedItem.set(event.item as AsicMenuItem);
  }

  openModifyDialog(isEditMode: boolean): void {
    const ref = this.dialogService.open(ModifyAsicDialogComponent, {
      header: this.translocoService.translate(
        `ASICS.DIALOG.MODIFY.HEADER.${isEditMode ? 'EDIT' : 'ADD'}`,
      ),
      duplicate: false,
      closable: true,
      draggable: true,
      modal: true,
      focusOnShow: false,
      width: '25rem',
      height: '31rem',
      data: {
        isEditMode,
        addresses: this.addresses,
        asic: this.selectedItem()?.asic,
      } satisfies ModifyAsicDialogData,
    });

    ref.onClose.pipe(first()).subscribe((asic: AsicModel) => {
      if (!asic) {
        return;
      }
    });
  }

  openDeleteAsicModal(event: MouseEvent): void {
    this.confirmationService.confirm({
      target: event.target!,
      message: this.translocoService.translate(
        'ASICS.CONFIRM_DIALOG.DELETE_ASIC.MESSAGE',
      ),
      header: this.translocoService.translate('CONFIRM_DIALOG.HEADER'),
      icon: PrimeIcons.EXCLAMATION_TRIANGLE,
      rejectButtonProps: {
        label: this.translocoService.translate('BUTTON.CANCEL'),
        severity: 'secondary',
        icon: PrimeIcons.TIMES,
        outlined: true,
      },
      acceptButtonProps: {
        label: this.translocoService.translate('BUTTON.DELETE'),
        severity: 'danger',
        icon: PrimeIcons.CHECK,
      },
      accept: () => {
        this.deleteAsic();
      },
    });
  }

  buildMenuItem(asic: AsicModel): AsicMenuItem {
    return {
      id: asic.id,
      label: asic.name,
      icon: PrimeIcons.SERVER,
      command: (event) => this.onItemClick(event),
      asic,
    };
  }

  deleteAsic(): void {
    if (!this.selectedItem()) {
      return;
    }

    const groupIdx = this.menu.findIndex(
      (item) => item.label === this.selectedItem()!.asic!.address,
    );
    const groupItems = this.menu[groupIdx].items;

    if (!groupItems) {
      return;
    }

    const idx = groupItems.findIndex(
      (item) => item.id === this.selectedItem()!.id,
    );

    if (idx !== -1) {
      groupItems.splice(idx, 1);
    }

    if (!groupItems.length) {
      this.menu.splice(groupIdx, 1);
    }

    this.selectedItem.set(null);
  }
}
