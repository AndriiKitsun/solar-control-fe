import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { MenuState } from './menu.types';

@Injectable({
  providedIn: 'root',
})
export class MenuService {
  menuState$ = new Subject<MenuState>();

  updateMenuState(state: MenuState): void {
    this.menuState$.next(state);
  }
}
