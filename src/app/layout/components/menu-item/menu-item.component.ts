import { Component, Input, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { NgTemplateOutlet, NgClass, AsyncPipe } from '@angular/common';
import { RouterLink, Router, NavigationEnd } from '@angular/router';
import { Ripple } from 'primeng/ripple';
import { Observable, of, filter, map, startWith } from 'rxjs';

@Component({
  selector: 'app-menu-item',
  standalone: true,
  imports: [NgTemplateOutlet, RouterLink, Ripple, NgClass, AsyncPipe],
  templateUrl: './menu-item.component.html',
  styleUrl: './menu-item.component.scss',
})
export class MenuItemComponent implements OnInit {
  @Input({ required: true })
  item!: MenuItem;

  @Input()
  isTopLevel = true;

  isItemSelected$!: Observable<boolean>;

  constructor(private readonly router: Router) {}

  ngOnInit(): void {
    this.isItemSelected$ = this.getItemSelectedState();
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
    );
  }
}
