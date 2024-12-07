import { Routes } from '@angular/router';
import { RoutePath } from '@common/constants/router.constants';

export default [
  {
    path: RoutePath.LANDING,
    loadComponent: () =>
      import('./dashboard/dashboard.component').then(
        (c) => c.DashboardComponent,
      ),
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
