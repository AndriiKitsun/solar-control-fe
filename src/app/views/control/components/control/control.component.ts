import {
  ChangeDetectionStrategy,
  Component,
  signal,
  DestroyRef,
  OnInit,
  Inject,
} from '@angular/core';
import { TranslocoDirective } from '@jsverse/transloco';
import { ControlRuleModel } from '../../models/control-rule.models';
import { ControlService } from '../../services/control/control.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { MessageService } from 'primeng/api';
import { ToastService } from '@common/services/toast/toast.service';
import { Toast } from 'primeng/toast';

/**
 * t(CONTROL.TOAST.FETCH_RULES_ERROR)
 */

@Component({
  selector: 'app-control',
  imports: [TranslocoDirective, Toast],
  templateUrl: './control.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: MessageService,
      useClass: ToastService,
    },
  ],
})
export class ControlComponent implements OnInit {
  rules: Record<string, ControlRuleModel> = {};

  isLoading = signal(false);

  constructor(
    private readonly controlService: ControlService,
    private readonly destroyRef: DestroyRef,
    @Inject(MessageService)
    private readonly toastService: ToastService,
  ) {}

  ngOnInit(): void {
    this.getControlRules();
  }

  getControlRules(): void {
    this.isLoading.set(true);

    this.controlService
      .getControlRule()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
        next: (rules) => {
          this.rules = rules;

          this.isLoading.set(false);
        },
        error: () => {
          void this.toastService.error('CONTROL.TOAST.FETCH_RULES_ERROR');
        },
      });
  }
}
