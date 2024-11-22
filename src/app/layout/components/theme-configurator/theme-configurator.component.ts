import { Component } from '@angular/core';
import { Button } from 'primeng/button';

@Component({
  selector: 'app-theme-configurator',
  standalone: true,
  imports: [Button],
  templateUrl: './theme-configurator.component.html',
  styleUrl: './theme-configurator.component.less',
})
export class ThemeConfiguratorComponent {}
