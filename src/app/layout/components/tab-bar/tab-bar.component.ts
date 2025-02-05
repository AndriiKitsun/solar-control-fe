import {
  Component,
  OnInit,
  signal,
  DestroyRef,
  ChangeDetectionStrategy,
} from '@angular/core';
import { Tab, TabList, Tabs } from 'primeng/tabs';
import { RouterLink, Router, NavigationEnd } from '@angular/router';
import { tap, filter, map, startWith } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { MAIN_TABS, ROUTE_REGEX } from './tab-bar.constants';
import { TabItem } from './tab-bar.types';
import { TranslocoDirective } from '@jsverse/transloco';

@Component({
  selector: 'app-tab-bar',
  imports: [Tab, TabList, Tabs, RouterLink, TranslocoDirective],
  templateUrl: './tab-bar.component.html',
  styleUrl: './tab-bar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TabBarComponent implements OnInit {
  tabs: TabItem[] = MAIN_TABS;
  activeRoute = signal('');

  constructor(
    private readonly router: Router,
    private readonly destroyRef: DestroyRef,
  ) {}

  ngOnInit(): void {
    this.getActiveRoute();
  }

  getActiveRoute(): void {
    this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        map((event) => event.urlAfterRedirects),
        startWith(this.router.url),
        tap((url) => {
          const route = url.split(ROUTE_REGEX).at(1)!;

          this.activeRoute.set(route);
        }),
        takeUntilDestroyed(this.destroyRef),
      )
      .subscribe();
  }
}
