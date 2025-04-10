import {
  ChangeDetectionStrategy,
  Component,
  input,
  signal,
  Inject,
  output,
} from '@angular/core';
import { AsicModel, AsicSetting } from '../../models/asics.models';
import { Checkbox } from 'primeng/checkbox';
import { TranslocoDirective } from '@jsverse/transloco';
import { CheckboxChangeTypedEvent } from '@common/types/checkbox.types';
import { first, finalize } from 'rxjs';
import { AsicsService } from '../../services/asics/asics.service';
import { ToastService } from '@common/services/toast/toast.service';
import { MessageService } from 'primeng/api';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-asic-settings',
  imports: [Checkbox, TranslocoDirective, FormsModule],
  templateUrl: './asic-settings.component.html',
  styleUrl: './asic-settings.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AsicSettingsComponent {
  asic = input.required<AsicModel>();
  isSettingUpdating = signal(false);

  updated = output<AsicModel>();

  constructor(
    private readonly asicsService: AsicsService,
    @Inject(MessageService)
    private readonly toastService: ToastService,
  ) {}

  updateT2ActiveState(
    event: CheckboxChangeTypedEvent,
    setting: AsicSetting,
  ): void {
    const checked = event.checked ?? false;

    this.isSettingUpdating.set(true);

    this.asicsService
      .updateAsic(this.asic().id, { [setting]: checked })
      .pipe(
        first(),
        finalize(() => {
          this.isSettingUpdating.set(false);
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
