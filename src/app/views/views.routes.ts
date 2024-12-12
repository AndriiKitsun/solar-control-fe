import { Routes } from '@angular/router';
import { RoutePath } from '@common/constants/router.constants';

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
    path: RoutePath.MINERS,
    loadComponent: () =>
      import('./miners/miners.component').then((c) => c.MinersComponent),
  },
  {
    path: RoutePath.STATIONS,
    loadComponent: () =>
      import('./stations/stations.component').then((c) => c.StationsComponent),
  },
] as Routes;
