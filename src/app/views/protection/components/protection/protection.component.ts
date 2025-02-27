import {
  ChangeDetectionStrategy,
  Component,
  signal,
  DestroyRef,
  OnInit,
  Inject,
} from '@angular/core';
import { PROTECTION_GROUPS } from '../../constants/protection.constants';
import { ProtectionGroup } from '../../types/protection-group.types';
import { ProtectionGroupComponent } from '../protection-group/protection-group.component';
import { TranslocoDirective } from '@jsverse/transloco';
import { ProtectionRuleModel } from '../../models/protection-rule.models';
import { ProtectionService } from '../../services/protection/protection.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { MessageService } from 'primeng/api';
import { ToastService } from '@common/services/toast/toast.service';
import { Toast } from 'primeng/toast';

/**
 * t(PROTECTION.TOAST.FETCH_RULES_ERROR)
 */

@Component({
  selector: 'app-protection',
  imports: [ProtectionGroupComponent, TranslocoDirective, Toast],
  templateUrl: './protection.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: MessageService,
      useClass: ToastService,
    },
  ],
})
export class ProtectionComponent implements OnInit {
  groups: ProtectionGroup[] = PROTECTION_GROUPS;
  rules: Record<string, ProtectionRuleModel> = {};

  isLoading = signal(false);

  constructor(
    private readonly protectionService: ProtectionService,
    private readonly destroyRef: DestroyRef,
    @Inject(MessageService)
    private readonly toastService: ToastService,
  ) {}

  ngOnInit(): void {
    this.getProtectionRules();
  }

  getProtectionRules(): void {
    this.isLoading.set(true);

    this.protectionService
      .getProtectionRules()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
        next: (rules) => {
          this.rules = rules;

          this.isLoading.set(false);
        },
        error: () => {
          void this.toastService.error('PROTECTION.TOAST.FETCH_RULES_ERROR');
        },
      });
  }
}
