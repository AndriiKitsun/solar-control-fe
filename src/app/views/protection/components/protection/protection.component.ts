import {
  ChangeDetectionStrategy,
  Component,
  signal,
  DestroyRef,
  OnInit,
} from '@angular/core';
import { PROTECTION_GROUPS } from './protection.constants';
import { ProtectionGroup } from '../../models/protection-groups.models';
import { ProtectionGroupComponent } from '../protection-group/protection-group.component';
import { of, delay } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-protection',
  imports: [ProtectionGroupComponent],
  templateUrl: './protection.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProtectionComponent implements OnInit {
  groups: ProtectionGroup[] = PROTECTION_GROUPS;

  isLoading = signal(false);

  constructor(private readonly destroyRef: DestroyRef) {}

  ngOnInit(): void {
    this.getProtectionRules();
  }

  getProtectionRules(): void {
    this.isLoading.set(true);

    of(null)
      .pipe(delay(1000), takeUntilDestroyed(this.destroyRef))
      .subscribe(() => {
        this.isLoading.set(false);
      });
  }
}
