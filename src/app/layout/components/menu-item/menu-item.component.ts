import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { NgTemplateOutlet, NgClass, AsyncPipe } from '@angular/common';
import { RouterLink, Router, NavigationEnd } from '@angular/router';
import { Ripple } from 'primeng/ripple';
import {
  Observable,
  of,
  filter,
  map,
  startWith,
  tap,
  Subscription,
} from 'rxjs';
import { MenuService, MenuState } from '../../services/menu';
import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';
import { SubmenuAnimationState } from './menu-item.types';

@Component({
  selector: 'app-menu-item',
  standalone: true,
  imports: [NgTemplateOutlet, RouterLink, Ripple, NgClass, AsyncPipe],
  templateUrl: './menu-item.component.html',
  styleUrl: './menu-item.component.scss',
  animations: [
    trigger('submenu', [
      state(SubmenuAnimationState.COLLAPSED, style({ height: 0 })),
      state(SubmenuAnimationState.EXPANDED, style({ height: '*' })),
      transition(
        `${SubmenuAnimationState.COLLAPSED} <=> ${SubmenuAnimationState.EXPANDED}`,
        animate('200ms ease-in-out'),
      ),
    ]),
  ],
})
export class MenuItemComponent implements OnInit, OnDestroy {
  @Input({ required: true })
  item!: MenuItem;

  @Input({ required: true })
  index!: number;

  @Input()
  isTopLevel = true;

  @Input()
  parentItemKey = '';

  isItemSelected$!: Observable<boolean>;
  isSubmenu!: boolean;
  isSubmenuOpened!: boolean;
  itemKey!: string;

  private menuStateSubscription!: Subscription;

  constructor(
    private readonly router: Router,
    private readonly menuService: MenuService,
  ) {}

  get animationState(): SubmenuAnimationState {
    if (this.isTopLevel) {
      return SubmenuAnimationState.EXPANDED;
    }

    return this.isSubmenuOpened
      ? SubmenuAnimationState.EXPANDED
      : SubmenuAnimationState.COLLAPSED;
  }

  ngOnInit(): void {
    this.itemKey = this.buildItemKey();
    this.isItemSelected$ = this.getItemSelectedState();
    this.isSubmenu = !!this.item.items?.length && !this.isTopLevel;
    this.menuStateSubscription = this.handleMenuStateChange().subscribe();
  }

  ngOnDestroy(): void {
    this.menuStateSubscription.unsubscribe();
  }

  buildItemKey(): string {
    return this.parentItemKey
      ? `${this.parentItemKey}-${this.index}`
      : `${this.index}`;
  }

  getItemSelectedState(): Observable<boolean> {
    if (!this.item.routerLink) {
      return of(false);
    }

    const itemFullUrl = this.router
      .createUrlTree([this.item.routerLink], {
        queryParams: this.item.queryParams,
      })
      .toString();

    return this.router.events.pipe(
      filter((event) => event instanceof NavigationEnd),
      map((event) => event.urlAfterRedirects),
      startWith(this.router.url),
      map((activeRoute) => itemFullUrl === activeRoute),
      tap((isSelected) => {
        if (isSelected) {
          this.menuService.updateMenuState({ key: this.itemKey });
        }
      }),
    );
  }

  handleMenuStateChange(): Observable<MenuState | null> {
    return this.menuService.menuState$.pipe(
      tap((state) => {
        if (!this.isSubmenu) {
          return;
        }

        void Promise.resolve().then(() => {
          let openState = false;

          if (state.key === this.itemKey) {
            openState = !this.isSubmenuOpened;
          } else if (state.key.startsWith(this.itemKey) || this.isTopLevel) {
            openState = true;
          }

          this.toggleSubmenu(openState);
        });
      }),
    );
  }

  itemClicked(): void {
    this.menuService.updateMenuState({ key: this.itemKey });
  }

  toggleSubmenu(isOpened: boolean): void {
    this.isSubmenuOpened = isOpened;
  }
}
