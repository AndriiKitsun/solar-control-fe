import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { MenuState } from './menu.types';

@Injectable({
  providedIn: 'root',
})
export class MenuService {
  private menuState = new Subject<MenuState>();

  menuState$ = this.menuState.asObservable();

  updateMenuState(state: MenuState): void {
    this.menuState.next(state);
  }
}
