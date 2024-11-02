import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LayoutService } from '../../services/layout/layout.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.less',
})
export class HeaderComponent {
  constructor(private readonly layoutService: LayoutService) {}

  toggleManu(): void {
    this.layoutService.toggleMenu();
  }
}
