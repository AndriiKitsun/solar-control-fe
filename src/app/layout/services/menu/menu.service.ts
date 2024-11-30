import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { MenuState } from './menu.types';

@Injectable({
  providedIn: 'root',
})
export class MenuService {
  private menuState = new BehaviorSubject<MenuState | null>(null);

  menuState$ = this.menuState.asObservable();

  updateMenuState(state: MenuState): void {
    this.menuState.next(state);
  }
}
