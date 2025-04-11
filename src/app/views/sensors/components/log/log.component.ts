import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  DestroyRef,
  signal,
  Inject,
} from '@angular/core';
import { TabsModule } from 'primeng/tabs';
import { SelectOption } from '@common/types/select.types';
import { LogLevel } from '../../enums/log.enums';
import { Select } from 'primeng/select';
import { FormsModule } from '@angular/forms';
import { TranslocoDirective } from '@jsverse/transloco';
import { LOG_SELECT_OPTIONS, LOG_TABS } from '../../constants/log.constants';
import { LogsService } from '../../services/logs/logs.service';
import {
  first,
  finalize,
  BehaviorSubject,
  switchMap,
  mergeWith,
  tap,
} from 'rxjs';
import { TranslationKey } from '@common/types/lang.types';
import { LogModel } from '../../models/log.model';
import { Button } from 'primeng/button';
import { ConfirmationService, MessageService, PrimeIcons } from 'primeng/api';
import { ConfirmDialogService } from '@common/services/confirm-dialog/confirm-dialog.service';
import { ToastService } from '@common/services/toast/toast.service';
import { ConfirmDialog } from 'primeng/confirmdialog';
import { Toast } from 'primeng/toast';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Scroller } from 'primeng/scroller';
import { DatePipe } from '@angular/common';

/**
 * t(LOG.CONFIRM_DIALOG.DELETE_MESSAGE)
 * t(LOG.TOAST.DELETE_ERROR)
 * */

@Component({
  selector: 'app-log',
  imports: [
    TabsModule,
    Select,
    FormsModule,
    Button,
    TranslocoDirective,
    ConfirmDialog,
    Toast,
    Scroller,
    DatePipe,
  ],
  templateUrl: './log.component.html',
  styleUrl: './log.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: ConfirmationService,
      useClass: ConfirmDialogService,
    },
    {
      provide: MessageService,
      useClass: ToastService,
    },
  ],
})
export class LogComponent implements OnInit {
  readonly tabs = LOG_TABS;
  readonly levelOptions: SelectOption<LogLevel>[] = LOG_SELECT_OPTIONS;

  activeTab$ = new BehaviorSubject<string>('');
  selectedLevel: SelectOption<LogLevel> = this.levelOptions[1];

  items = signal<LogModel[]>([]);
  isDeleting = signal(false);

  private logs: LogModel[] = [];

  constructor(
    private readonly logsService: LogsService,
    private readonly destroyRef: DestroyRef,
    @Inject(ConfirmationService)
    private readonly confirmDialogService: ConfirmDialogService,
    @Inject(MessageService)
    private readonly toastService: ToastService,
  ) {}

  ngOnInit(): void {
    this.getLogs();
  }

  getLogs(): void {
    this.activeTab$
      .pipe(
        switchMap((tab: string) => {
          return this.logsService.getLogs(tab).pipe(
            mergeWith(this.logsService.getLogStream(tab)),
            tap((logs: LogModel | LogModel[]) => {
              if (Array.isArray(logs)) {
                this.logs = logs;
              } else {
                this.logs.unshift(logs);
              }

              this.filterLogsByLevel();
            }),
            takeUntilDestroyed(this.destroyRef),
          );
        }),
      )
      .subscribe();
  }

  updateTab(event: unknown): void {
    this.activeTab$.next(event as string);
  }

  filterLogsByLevel(): void {
    const logs = this.logs.filter(
      (log) => log.level >= this.selectedLevel.value,
    );

    this.items.set(logs);
  }

  getLevelTranslation(level: LogLevel): TranslationKey {
    switch (level) {
      case LogLevel.DEBUG:
        return 'LOG.LEVEL.DEBUG';
      case LogLevel.INFO:
        return 'LOG.LEVEL.INFO';
      case LogLevel.WARN:
        return 'LOG.LEVEL.WARN';
      case LogLevel.ERROR:
        return 'LOG.LEVEL.ERROR';
      default:
        return 'LOG.LEVEL.ERROR';
    }
  }

  openDeleteLogsDialog(event: MouseEvent): void {
    this.confirmDialogService.confirmDialog({
      target: event.target!,
      message: 'LOG.CONFIRM_DIALOG.DELETE_MESSAGE',
      acceptButtonProps: {
        label: 'BUTTON.DELETE',
        icon: PrimeIcons.TRASH,
        severity: 'danger',
      },
      accept: () => {
        this.isDeleting.set(true);

        this.logsService
          .deleteLogs()
          .pipe(
            first(),
            finalize(() => {
              this.isDeleting.set(false);
            }),
          )
          .subscribe({
            next: () => {
              this.logs = [];
              this.filterLogsByLevel();
            },
            error: () => {
              void this.toastService.error('LOG.TOAST.DELETE_ERROR');
            },
          });
      },
    });
  }
}
