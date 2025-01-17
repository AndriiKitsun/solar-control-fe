import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  signal,
  input,
  computed,
} from '@angular/core';
import { Menu } from 'primeng/menu';
import { MenuItem, MessageService } from 'primeng/api';
import { Button } from 'primeng/button';
import { TranslocoService, HashMap } from '@jsverse/transloco';
import { AsicsService } from '../../services/asics/asics.service';
import { map, Observable, first, finalize } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { Toast } from 'primeng/toast';

/**
 * t(ASICS.POWER_MENU.START)
 * t(ASICS.POWER_MENU.STOP)
 * */

@Component({
  selector: 'app-asic-power-menu',
  imports: [Menu, Button, AsyncPipe, Toast],
  templateUrl: './asic-power-menu.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [MessageService],
})
export class AsicPowerMenuComponent implements OnInit {
  id = input<string>();

  isProcessing = signal(false);
  isDisabled = computed(() => !this.id() || this.isProcessing());

  menuItems$!: Observable<MenuItem[]>;

  constructor(
    private readonly translocoService: TranslocoService,
    private readonly asicsService: AsicsService,
    private readonly messageService: MessageService,
  ) {}

  ngOnInit(): void {
    this.menuItems$ = this.getMenuItems();
  }

  getMenuItems(): Observable<MenuItem[]> {
    return this.translocoService.selectTranslateObject('ASICS.POWER_MENU').pipe(
      map((translations: HashMap<string>) => {
        return [
          {
            label: translations['START'],
            command: () => this.startAsic(),
          },
          {
            label: translations['STOP'],
            command: () => this.stopAsic(),
          },
        ];
      }),
    );
  }

  startAsic(): void {
    if (!this.id()) {
      return;
    }

    this.isProcessing.set(true);

    this.asicsService
      .startMining(this.id()!)
      .pipe(
        first(),
        finalize(() => {
          this.isProcessing.set(false);
        }),
      )
      .subscribe({
        error: () => {
          this.messageService.add({
            severity: 'error',
            summary: this.translocoService.translate('TOAST.SUMMARY.ERROR'),
            detail: this.translocoService.translate('ASICS.TOAST.POWER_START'),
          });
        },
      });
  }

  stopAsic(): void {
    if (!this.id()) {
      return;
    }

    this.isProcessing.set(true);

    this.asicsService
      .stopMining(this.id()!)
      .pipe(
        first(),
        finalize(() => {
          this.isProcessing.set(false);
        }),
      )
      .subscribe({
        error: () => {
          this.messageService.add({
            severity: 'error',
            summary: this.translocoService.translate('TOAST.SUMMARY.ERROR'),
            detail: this.translocoService.translate('ASICS.TOAST.POWER_STOP'),
          });
        },
      });
  }
}
