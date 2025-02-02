import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PROTECTION_GROUPS } from './protection.constants';
import { ProtectionGroupModel } from '../../models/protection.models';
import { FloatLabel } from 'primeng/floatlabel';
import { InputNumber } from 'primeng/inputnumber';
import { Button } from 'primeng/button';
import { Checkbox } from 'primeng/checkbox';

@Component({
  selector: 'app-protection',
  imports: [FloatLabel, InputNumber, Button, Checkbox],
  templateUrl: './protection.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProtectionComponent {
  groups: ProtectionGroupModel[] = PROTECTION_GROUPS;
}
