import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  signal,
} from '@angular/core';
import { BlockUI } from 'primeng/blockui';
import { timer, tap, fromEvent, switchMap } from 'rxjs';

@Component({
  selector: 'app-locker',
  imports: [BlockUI],
  templateUrl: './locker.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LockerComponent implements OnInit {
  isDocumentBlocked = signal(false);

  private readonly blockTimeout = 900_000; // 15 minutes

  ngOnInit(): void {
    fromEvent(window, 'mousemove')
      .pipe(
        switchMap(() => timer(this.blockTimeout)),
        tap(() => {
          this.isDocumentBlocked.set(true);
        }),
      )
      .subscribe();
  }
}
