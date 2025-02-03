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
  interval,
  startWith,
  EMPTY,
  finalize,
  BehaviorSubject,
  of,
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
  NEAREST_INT,
  TWO_DIGIT,
} from '@common/helpers/format.helper';
import { ASIC_SUMMARY_UPDATE_INTERVAL } from './asics.constants';
import { Tag } from 'primeng/tag';
import { Severity } from '@common/types/severity.types';
import { createHttpErrorToast } from '@common/helpers/toast.helper';

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
 * t(ASICS.TOAST.SIDE_BAR_ERROR)
 * t(ASICS.TOAST.SUMMARY_ERROR)
 * t(ASICS.TOAST.DELETE_ERROR)
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

  private addresses: string[] = [];
  private menuItemsSub$ = new BehaviorSubject<AsicMenuItem[]>([]);

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

    return this.menuItemsSub$.pipe(
      switchMap((items: AsicMenuItem[]) => {
        if (items.length) {
          return of(items);
        }

        return this.asicsService
          .getAsics()
          .pipe(map((asics: AsicModel[]) => this.buildMenu(asics)));
      }),
      tap((menu: AsicMenuItem[]) => {
        this.addresses = menu.map((item) => item.label!);
        this.isLoading.set(false);
      }),
      catchError((err) => {
        this.messageService.add(
          createHttpErrorToast(
            'ASICS.TOAST.SIDE_BAR_ERROR',
            this.translocoService,
          ),
        );

        throw err;
      }),
    );
  }

  buildMenu(asics: AsicModel[]): AsicMenuItem[] {
    const menu: AsicMenuItem[] = [];

    asics.forEach((asic) => {
      const group = menu.find((item) => item.label === asic.address);
      const item: AsicMenuItem = this.buildMenuItem(asic);

      if (!group) {
        menu.push({ label: asic.address, items: [item] });
      } else {
        group.items!.push(item);
      }
    });

    return menu;
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

  getAsicSummary(): Observable<AsicSummaryGridItem[]> {
    return toObservable(this.selectedItem).pipe(
      switchMap((menuItem) => {
        return interval(ASIC_SUMMARY_UPDATE_INTERVAL).pipe(
          startWith(0),
          switchMap(() => {
            if (!menuItem) {
              return EMPTY;
            }

            return this.asicsService.getSummary(menuItem.id!);
          }),
        );
      }),
      map((summary: AsicSummaryModel) => {
        const gridData: AsicSummaryGridItem = {
          ip: summary.ip,
          state: {
            value: `ASICS.TABLE.STATE.${summary.status.state.toUpperCase()}`,
            severity: this.getStateSeverity(summary.status.state),
          },
          time: {
            days: summary.status.stateTimeDays,
            hours: summary.status.stateTimeHours,
            minutes: summary.status.stateTimeMinutes,
          },
          avgHashRate: this.formatHashRate(
            summary.avgHashRate,
            summary.currentPreset,
          ),
          maxChipTemp: formatNum(summary.maxChipTemp, NEAREST_INT),
          powerConsumption: formatNum(summary.powerConsumption, NEAREST_INT),
          avgFanSpeed: formatNum(summary.avgFanSpeed, NEAREST_INT),
        };

        return [gridData];
      }),
      catchError((err) => {
        this.messageService.add(
          createHttpErrorToast(
            'ASICS.TOAST.SUMMARY_ERROR',
            this.translocoService,
          ),
        );

        throw err;
      }),
    );
  }

  formatHashRate(hashrate: number, preset?: string): string {
    const formatted = formatNum(hashrate, TWO_DIGIT);

    if (preset) {
      return `${formatted} / ${preset}`;
    }

    return formatted;
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

      if (isEditMode && this.selectedItem()?.asic) {
        this.selectedItem()!.asic = asic;
      }

      this.menuItemsSub$.next([]);
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

  deleteAsic(): void {
    if (!this.selectedItem()) {
      return;
    }

    this.isLoading.set(true);

    this.asicsService
      .deleteAsic(this.selectedItem()!.id!)
      .pipe(
        first(),
        finalize(() => {
          this.isLoading.set(false);
        }),
      )
      .subscribe({
        next: () => {
          this.menuItemsSub$.next([]);
          this.selectedItem.set(null);
        },
        error: () => {
          this.messageService.add(
            createHttpErrorToast(
              'ASICS.TOAST.DELETE_ERROR',
              this.translocoService,
            ),
          );
        },
      });
  }

  getStateSeverity(state: AsicState): Severity {
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
