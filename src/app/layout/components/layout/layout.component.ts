import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { LayoutService } from '../../services';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from '../footer/footer.component';
import { TabBarComponent } from '../tab-bar/tab-bar.component';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [HeaderComponent, TabBarComponent, RouterOutlet, FooterComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
})
export class LayoutComponent implements OnInit {
  constructor(private readonly layoutService: LayoutService) {}

  ngOnInit(): void {
    this.layoutService.restoreThemeState();
  }
}
