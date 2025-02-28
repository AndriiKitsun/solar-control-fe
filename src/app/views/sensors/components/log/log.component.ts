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
import { LOG_SELECT_OPTIONS } from '../../constants/log.constants';
import { LogsService } from '../../services/logs/logs.service';
import { mergeWith, tap, first, finalize } from 'rxjs';
import { TranslationKey } from '@common/types/lang.types';
import { LogModel } from '../../models/log.model';
import { Scroller } from 'primeng/scroller';
import { DatePipe } from '@angular/common';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Button } from 'primeng/button';
import { ConfirmationService, MessageService, PrimeIcons } from 'primeng/api';
import { ConfirmDialogService } from '@common/services/confirm-dialog/confirm-dialog.service';
import { ToastService } from '@common/services/toast/toast.service';
import { ConfirmDialog } from 'primeng/confirmdialog';
import { Toast } from 'primeng/toast';

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
    Scroller,
    DatePipe,
    ConfirmDialog,
    Toast,
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
  levelOptions: SelectOption<LogLevel>[] = LOG_SELECT_OPTIONS;
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
    this.logsService
      .getLogs()
      .pipe(
        takeUntilDestroyed(this.destroyRef),
        mergeWith(this.logsService.getLogStream()),
        tap((logs: LogModel | LogModel[]) => {
          if (Array.isArray(logs)) {
            this.logs = logs;
          } else {
            this.logs.unshift(logs);
          }

          this.updateItems();
        }),
      )
      .subscribe();
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

  updateItems(): void {
    const logs = this.logs.filter(
      (log) => log.level >= this.selectedLevel.value,
    );

    this.items.set(logs);
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
              this.updateItems();
            },
            error: () => {
              void this.toastService.error('LOG.TOAST.DELETE_ERROR');
            },
          });
      },
    });
  }
}
