import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LayoutService {
  private isMenuOpened = new BehaviorSubject(true);

  isMenuOpened$ = this.isMenuOpened.asObservable();

  toggleMenu(): void {
    this.isMenuOpened.next(!this.isMenuOpened.value);
  }
}
