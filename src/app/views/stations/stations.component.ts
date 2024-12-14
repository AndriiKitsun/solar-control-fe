import { Component } from '@angular/core';
import { TranslocoDirective } from '@jsverse/transloco';

@Component({
  selector: 'app-stations',
  standalone: true,
  templateUrl: './stations.component.html',
  styleUrl: './stations.component.scss',
  imports: [TranslocoDirective],
})
export class StationsComponent {}
