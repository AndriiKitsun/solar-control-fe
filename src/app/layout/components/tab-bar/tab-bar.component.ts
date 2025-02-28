import {
  Component,
  OnInit,
  signal,
  DestroyRef,
  ChangeDetectionStrategy,
} from '@angular/core';
import { Tab, TabList, Tabs } from 'primeng/tabs';
import { RouterLink, Router, NavigationEnd } from '@angular/router';
import { tap, filter, map, startWith, BehaviorSubject } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { MAIN_TABS, ROUTE_REGEX } from './tab-bar.constants';
import { TabItem } from './tab-bar.types';
import { TranslocoDirective } from '@jsverse/transloco';
import { OverlayBadge } from 'primeng/overlaybadge';
import { ProtectionService } from '@views/protection/services/protection/protection.service';
import { ProtectionResultModel } from '@views/protection/models/protection-result.models';
import { RoutePath } from '@common/constants/router.constants';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-tab-bar',
  imports: [
    Tab,
    TabList,
    Tabs,
    RouterLink,
    TranslocoDirective,
    OverlayBadge,
    AsyncPipe,
  ],
  templateUrl: './tab-bar.component.html',
  styleUrl: './tab-bar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TabBarComponent implements OnInit {
  tabs = new BehaviorSubject<TabItem[]>(MAIN_TABS);
  activeRoute = signal('');

  private protectionTab!: TabItem;

  constructor(
    private readonly router: Router,
    private readonly destroyRef: DestroyRef,
    private readonly protectionService: ProtectionService,
  ) {}

  ngOnInit(): void {
    this.protectionTab = MAIN_TABS.find(
      (tab) => tab.route === RoutePath.PROTECTION,
    )!;

    this.getActiveRoute();
    this.getProtectionResult();
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

  getProtectionResult(): void {
    this.protectionService
      .getProtectionResult()
      .pipe(
        takeUntilDestroyed(this.destroyRef),
        tap((result: ProtectionResultModel) => {
          this.protectionTab.badge = result.triggered;
          this.tabs.next(this.tabs.value);
        }),
      )
      .subscribe();
  }
}
