import { Component, OnInit, signal, inject, DestroyRef } from '@angular/core';
import { Tab, TabList, Tabs } from 'primeng/tabs';
import { DEFAULT_ROUTE } from '@common/constants/router.constants';
import { RouterLink, Router, NavigationEnd } from '@angular/router';
import { tap, filter, map, startWith } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { MAIN_TABS, ROUTE_REGEX } from './tab-bar.constants';
import { TabItem } from './tab-bar.types';
import { TranslocoDirective } from '@jsverse/transloco';

@Component({
  selector: 'app-tab-bar',
  standalone: true,
  imports: [Tab, TabList, Tabs, RouterLink, TranslocoDirective],
  templateUrl: './tab-bar.component.html',
  styleUrl: './tab-bar.component.scss',
})
export class TabBarComponent implements OnInit {
  tabs: TabItem[] = MAIN_TABS;
  activeRoute = signal('');

  private destroyRef = inject(DestroyRef);

  constructor(private readonly router: Router) {}

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
          const route = url.split(ROUTE_REGEX).at(1) ?? DEFAULT_ROUTE;

          this.activeRoute.set(route);
        }),
        takeUntilDestroyed(this.destroyRef),
      )
      .subscribe();
  }
}
