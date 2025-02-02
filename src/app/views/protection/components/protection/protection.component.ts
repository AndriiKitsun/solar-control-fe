import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PROTECTION_GROUPS } from './protection.constants';
import { ProtectionGroup } from '../../models/protection-groups.models';
import { ProtectionGroupComponent } from '../protection-group/protection-group.component';

@Component({
  selector: 'app-protection',
  imports: [ProtectionGroupComponent],
  templateUrl: './protection.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProtectionComponent {
  groups: ProtectionGroup[] = PROTECTION_GROUPS;
}
