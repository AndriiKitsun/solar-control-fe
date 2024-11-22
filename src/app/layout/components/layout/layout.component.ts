import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { MenuComponent } from '../menu/menu.component';
import { RouterOutlet } from '@angular/router';
import { Button } from 'primeng/button';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [
    HeaderComponent,
    MenuComponent,
    RouterOutlet,
    FooterComponent,
    Button,
  ],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
})
export class LayoutComponent {}
