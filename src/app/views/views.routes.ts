import { Routes } from '@angular/router';
import { RoutePath } from '@common/constants/router.constants';
import { DialogService } from 'primeng/dynamicdialog';

export default [
  {
    path: RoutePath.ROOT,
    pathMatch: 'full',
    redirectTo: RoutePath.SENSORS,
  },
  {
    path: RoutePath.SENSORS,
    loadComponent: () =>
      import('./sensors/sensors.component').then((c) => c.SensorsComponent),
  },
  {
    path: RoutePath.ASICS,
    loadComponent: () =>
      import('./asics/asics.component').then((c) => c.AsicsComponent),
    providers: [DialogService],
  },
] as Routes;
