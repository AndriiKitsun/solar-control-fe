import {
  ChangeDetectionStrategy,
  Component,
  input,
  OnInit,
  DestroyRef,
  computed,
  signal,
} from '@angular/core';
import { Button } from 'primeng/button';
import { Toolbar } from 'primeng/toolbar';
import {
  PrimeIcons,
  MessageService,
  ConfirmationService,
  MenuItem,
} from 'primeng/api';
import {
  first,
  finalize,
  tap,
  combineLatest,
  BehaviorSubject,
  map,
  Observable,
} from 'rxjs';
import { SensorsService } from '../../services/sensors/sensors.service';
import { TranslocoService, TranslocoDirective } from '@jsverse/transloco';
import { DatePipe, AsyncPipe } from '@angular/common';
import { ConfirmDialog } from 'primeng/confirmdialog';
import { Toast } from 'primeng/toast';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Menu } from 'primeng/menu';
import { TypedConfirmation } from '@common/types/primeng/confirm-dialog.types';
import { SensorsMenuTranslations } from './sensors-toolbar.types';
import { TranslationType } from '@common/types/lang.types';

interface TestObj {
  SENSORS: {
    MENU: {
      BUTTON: {
        RESET_COUNTERS: 'Reset counters';
        POWER_ON: 'Power ON';
        POWER_OFF: 'Power OFF';
      };
    };
  };
}

@Component({
  selector: 'app-sensors-toolbar',
  imports: [
    Button,
    Toolbar,
    TranslocoDirective,
    DatePipe,
    ConfirmDialog,
    Toast,
    Menu,
    AsyncPipe,
  ],
  templateUrl: './sensors-toolbar.component.html',
  styleUrl: './sensors-toolbar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [MessageService, ConfirmationService],
})
export class SensorsToolbarComponent implements OnInit {
  disabled = input.required<boolean>();
  createdAt = input.required<string>();

  menuItems$!: Observable<MenuItem[]>;

  isDisabled = computed(() => this.disabled() || this.isProcessing());

  private sensorsPower = false;
  private isProcessing = signal(false);

  private menuChanges$ = new BehaviorSubject<void>(undefined);

  constructor(
    private readonly sensorsService: SensorsService,
    private readonly translocoService: TranslocoService,
    private readonly messageService: MessageService,
    private readonly confirmationService: ConfirmationService,
    private readonly destroyRef: DestroyRef,
  ) {}

  ngOnInit(): void {
    this.menuItems$ = this.getMenuItems();
    // this.subscribeOnPowerChange();
  }

  getMenuItems(): Observable<MenuItem[]> {
    return combineLatest([
      this.translocoService.selectTranslateObject<SensorsMenuTranslations>(
        'SENSORS.MENU',
      ),
      this.menuChanges$,
    ]).pipe(
      map(([translations]) => {
        return this.initMenu(translations);
      }),
    );
  }

  subscribeOnPowerChange(): void {
    this.sensorsService
      .getPowerStatus()
      .pipe(
        takeUntilDestroyed(this.destroyRef),
        tap((status) => {
          this.sensorsPower = status;
          this.menuChanges$.next();
        }),
      )
      .subscribe();
  }

  initMenu(t: TranslationType): MenuItem[] {
    return [
      {
        label: t.SENSORS.TOAST.POWER_SWITCH_ERROR,
        icon: PrimeIcons.BOLT,
        command: (event) => {
          this.openConfirmDialog({
            target: event.originalEvent?.target ?? undefined,
            message: this.translocoService.translate(
              'SENSORS.CONFIRM_DIALOG.RESET_COUNTERS.MESSAGE',
            ),
            acceptButtonProps: {
              label: this.translocoService.translate('BUTTON.RESET'),
            },
            accept: () => {
              this.resetCounters();
            },
          });
        },
      },
      {
        label: this.sensorsPower ? t.BUTTON.POWER_OFF : t.BUTTON.POWER_ON,
        icon: PrimeIcons.POWER_OFF,
        disabled: !this.sensorsPower,
        command: (event) => {
          this.openConfirmDialog({
            target: event.originalEvent?.target ?? undefined,
            message: this.translocoService.translate(
              'SENSORS.CONFIRM_DIALOG.POWER_SWITCH.MESSAGE',
            ),
            acceptButtonProps: {
              label: this.translocoService.translate('BUTTON.CONFIRM'),
            },
            accept: () => {
              this.switchPower();
            },
          });
        },
      },
    ];
  }

  resetCounters(): void {
    this.isProcessing.set(true);

    this.sensorsService
      .resetCounters()
      .pipe(
        first(),
        finalize(() => {
          this.isProcessing.set(false);
        }),
      )
      .subscribe({
        error: () => {
          this.messageService.add({
            severity: 'error',
            summary: this.translocoService.translate('TOAST.SUMMARY.ERROR'),
            detail: this.translocoService.translate(
              'SENSORS.TOAST.RESET_ERROR',
            ),
          });
        },
      });
  }

  switchPower(): void {
    this.isProcessing.set(true);

    this.sensorsService
      .switchPower(!this.sensorsPower)
      .pipe(
        first(),
        finalize(() => {
          this.isProcessing.set(false);
        }),
      )
      .subscribe({
        next: (status) => {
          this.sensorsPower = status;
          this.menuChanges$.next();
        },
        error: () => {
          this.messageService.add({
            severity: 'error',
            summary: this.translocoService.translate('TOAST.SUMMARY.ERROR'),
            detail: this.translocoService.translate(
              'SENSORS.TOAST.POWER_SWITCH_ERROR',
            ),
          });
        },
      });
  }

  openConfirmDialog(config: TypedConfirmation): void {
    this.confirmationService.confirm({
      header: this.translocoService.translate('CONFIRM_DIALOG.HEADER'),
      icon: PrimeIcons.EXCLAMATION_TRIANGLE,
      ...config,
      rejectButtonProps: {
        label: this.translocoService.translate('BUTTON.CANCEL'),
        severity: 'secondary',
        icon: PrimeIcons.TIMES,
        outlined: true,
        ...config.rejectButtonProps,
      },
      acceptButtonProps: {
        icon: PrimeIcons.CHECK,
        severity: 'danger',
        ...config.acceptButtonProps,
      },
    });
  }

  // updatePowerMenuItemState(status: boolean): void {
  //   this.updateMenu(SensorsToolbarMenuId.POWER, (item) => {
  //     item.disabled = false;
  //     item.label = this.translocoService.translate(
  //       `SENSORS.BUTTON.${status ? 'POWER_OFF' : 'POWER_ON'}`,
  //     );
  //   });
  // }
  //
  // updateMenu(
  //   id: SensorsToolbarMenuId,
  //   updateCb: (item: MenuItem) => void,
  // ): void {
  //   this.menuItems$.update((items) => {
  //     return items.map((item) => {
  //       if (item.id === id) {
  //         updateCb(item);
  //       }
  //
  //       return item;
  //     });
  //   });
  // }
}
