import {
  ChangeDetectionStrategy,
  Component,
  input,
  signal,
  Inject,
  output,
} from '@angular/core';
import { AsicModel } from '../../models/asics.models';
import { Checkbox } from 'primeng/checkbox';
import { TranslocoDirective } from '@jsverse/transloco';
import { CheckboxChangeTypedEvent } from '@common/types/checkbox.types';
import { first, finalize } from 'rxjs';
import { AsicsService } from '../../services/asics/asics.service';
import { ToastService } from '@common/services/toast/toast.service';
import { MessageService } from 'primeng/api';
import { FormsModule } from '@angular/forms';
import { ASIC_SETTINGS } from '../../constants/asic-settings.constants';
import { AsicSetting } from '../../types/asic-settings.types';

@Component({
  selector: 'app-asic-settings',
  imports: [Checkbox, TranslocoDirective, FormsModule],
  templateUrl: './asic-settings.component.html',
  styleUrl: './asic-settings.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AsicSettingsComponent {
  settings = ASIC_SETTINGS;

  asic = input.required<AsicModel>();
  isUpdating = signal(false);

  updated = output<AsicModel>();

  constructor(
    private readonly asicsService: AsicsService,
    @Inject(MessageService)
    private readonly toastService: ToastService,
  ) {}

  updateAsicSetting(
    event: CheckboxChangeTypedEvent,
    setting: AsicSetting,
  ): void {
    const checked = event.checked ?? false;

    this.isUpdating.set(true);

    this.asicsService
      .updateAsic(this.asic().id, { [setting]: checked })
      .pipe(
        first(),
        finalize(() => {
          this.isUpdating.set(false);
        }),
      )
      .subscribe({
        next: () => {
          this.asic()[setting] = checked;

          this.updated.emit(this.asic());
        },
        error: () => {
          void this.toastService.error('ASICS.TOAST.UPDATE_SETTINGS_ERROR');
        },
      });
  }
}
