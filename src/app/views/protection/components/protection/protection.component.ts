import {
  ChangeDetectionStrategy,
  Component,
  signal,
  DestroyRef,
  OnInit,
} from '@angular/core';
import { PROTECTION_GROUPS } from '../../constants/protection.constants';
import { ProtectionGroup } from '../../types/protection-group.types';
import { ProtectionGroupComponent } from '../protection-group/protection-group.component';
import { TranslocoDirective } from '@jsverse/transloco';
import { ProtectionRuleModel } from '../../models/protection-rule.models';
import { ProtectionService } from '../../services/protection/protection.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-protection',
  imports: [ProtectionGroupComponent, TranslocoDirective],
  templateUrl: './protection.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProtectionComponent implements OnInit {
  groups: ProtectionGroup[] = PROTECTION_GROUPS;
  rules: Record<string, ProtectionRuleModel> = {};

  isLoading = signal(false);

  constructor(
    private readonly protectionService: ProtectionService,
    private readonly destroyRef: DestroyRef,
  ) {}

  ngOnInit(): void {
    this.getProtectionRules();
  }

  getProtectionRules(): void {
    this.isLoading.set(true);

    this.protectionService
      .getProtectionRules()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((rules) => {
        this.rules = rules;

        this.isLoading.set(false);
      });
  }
}
