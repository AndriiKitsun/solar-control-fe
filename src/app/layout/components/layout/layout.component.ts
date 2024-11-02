import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { MenuComponent } from '../menu/menu.component';
import { Button } from 'primeng/button';
import { RouterOutlet } from '@angular/router';
import { LayoutService } from '../../services/layout/layout.service';
import { Observable } from 'rxjs';
import { AsyncPipe, NgIf } from '@angular/common';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    Button,
    RouterOutlet,
    AsyncPipe,
    NgIf,
    CardModule,
  ],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.less',
})
export class LayoutComponent {
  constructor(private readonly layoutService: LayoutService) {}

  get isMenuOpened$(): Observable<boolean> {
    return this.layoutService.isMenuOpened$;
  }
}
