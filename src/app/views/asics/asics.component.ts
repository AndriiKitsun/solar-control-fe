import {
  Component,
  OnInit,
  signal,
  computed,
  AfterViewInit,
  ViewChild,
  ChangeDetectionStrategy,
} from '@angular/core';
import {
  map,
  Observable,
  tap,
  first,
  catchError,
  switchMap,
  filter,
  interval,
  startWith,
} from 'rxjs';
import { Menu } from 'primeng/menu';
import { Button } from 'primeng/button';
import { TranslocoDirective, TranslocoService } from '@jsverse/transloco';
import { AsicsService } from './services/asics/asics.service';
import { Toolbar } from 'primeng/toolbar';
import {
  PrimeIcons,
  MenuItemCommandEvent,
  ConfirmationService,
  MessageService,
} from 'primeng/api';
import { AsyncPipe } from '@angular/common';
import { AsicModel, AsicSummaryModel, AsicState } from './asics.models';
import {
  AsicMenuItem,
  ModifyAsicDialogData,
  AsicSummaryGridItem,
} from './asics.types';
import { DialogService } from 'primeng/dynamicdialog';
import { ModifyAsicDialogComponent } from './components/modify-asic-dialog/modify-asic-dialog.component';
import { ConfirmDialog } from 'primeng/confirmdialog';
import { TableModule } from 'primeng/table';
import { Toast } from 'primeng/toast';
import { toObservable } from '@angular/core/rxjs-interop';
import {
  formatNum,
  THREE_DIGITS,
  ONE_DIGIT,
  NEAREST_INT,
  TWO_DIGIT,
} from '@common/helpers/format.helper';
import { ASIC_SUMMARY_UPDATE_INTERVAL } from './asics.constants';
import { Tag } from 'primeng/tag';
import { TagSeverity } from '@common/types/tag.types';
import { AsicPowerMenuComponent } from './components/asic-power-menu/asic-power-menu.component';

/**
 * t(ASICS.DIALOG.MODIFY.HEADER.ADD)
 * t(ASICS.DIALOG.MODIFY.HEADER.EDIT)
 * t(ASICS.TABLE.STATE.MINING)
 * t(ASICS.TABLE.STATE.INITIALIZING)
 * t(ASICS.TABLE.STATE.STARTING)
 * t(ASICS.TABLE.STATE.AUTO-TUNING)
 * t(ASICS.TABLE.STATE.RESTARTING)
 * t(ASICS.TABLE.STATE.SHUTTING-DOWN)
 * t(ASICS.TABLE.STATE.STOPPED)
 * t(ASICS.TABLE.STATE.FAILURE)
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
    Toast,
    Tag,
    AsicPowerMenuComponent,
  ],
  templateUrl: './asics.component.html',
  styleUrl: './asics.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [ConfirmationService, MessageService],
})
export class AsicsComponent implements OnInit, AfterViewInit {
  isLoading = signal(false);
  isToolbarDisabled = computed(() => this.isLoading() || !this.selectedItem());
  selectedItem = signal<AsicMenuItem | null>(null);

  @ViewChild('menu') menuElement!: Menu;

  menuItems$!: Observable<AsicMenuItem[]>;
  asicSummary$: Observable<AsicSummaryGridItem[]> = this.getAsicSummary();

  private menu: AsicMenuItem[] = [];
  private addresses: string[] = [];

  constructor(
    private readonly asicsService: AsicsService,
    private readonly dialogService: DialogService,
    private readonly confirmationService: ConfirmationService,
    private readonly translocoService: TranslocoService,
    private readonly messageService: MessageService,
  ) {}

  ngOnInit(): void {
    this.menuItems$ = this.getMenuItems();
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      if (this.menuElement) {
        // Override method to prevent menu item focus lose
        // eslint-disable-next-line @typescript-eslint/no-empty-function
        this.menuElement.onListBlur = () => {};
      }
    }, 100);
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
      catchError((err) => {
        this.messageService.add({
          severity: 'error',
          summary: this.translocoService.translate('TOAST.SUMMARY.ERROR'),
          detail: this.translocoService.translate('ASICS.TOAST.SIDE_BAR'),
        });

        throw err;
      }),
    );
  }

  getAsicSummary(): Observable<AsicSummaryGridItem[]> {
    return toObservable(this.selectedItem).pipe(
      filter(Boolean),
      switchMap((menuItem) => {
        return interval(ASIC_SUMMARY_UPDATE_INTERVAL).pipe(
          startWith(0),
          switchMap(() => {
            return this.asicsService.getSummary(menuItem.id!);
          }),
        );
      }),
      map((summary: AsicSummaryModel) => {
        const gridData: AsicSummaryGridItem = {
          ip: summary.ip,
          state: {
            value: `ASICS.TABLE.STATE.${summary.state.toUpperCase()}`,
            severity: this.getStateSeverity(summary.state),
          },
          avgHashRate: formatNum(summary.avgHashRate, THREE_DIGITS),
          maxChipTemp: formatNum(summary.maxChipTemp, ONE_DIGIT),
          powerConsumption: formatNum(summary.powerConsumption, TWO_DIGIT),
          avgFanSpeed: formatNum(summary.avgFanSpeed, NEAREST_INT),
        };

        return [gridData];
      }),
      catchError((err) => {
        this.messageService.add({
          severity: 'error',
          summary: this.translocoService.translate('TOAST.SUMMARY.ERROR'),
          detail: this.translocoService.translate('ASICS.TOAST.SUMMARY'),
        });

        throw err;
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
      label: asic.hostname,
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

  getStateSeverity(state: AsicState): TagSeverity {
    switch (state) {
      case 'mining':
        return 'success';
      case 'initializing':
      case 'starting':
      case 'auto-tuning':
        return 'info';
      case 'restarting':
      case 'shutting-down':
      case 'stopped':
        return 'warn';
      case 'failure':
        return 'danger';
      default:
        return 'danger';
    }
  }
}
