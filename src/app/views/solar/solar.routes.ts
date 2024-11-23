import { Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { RoutePath } from '@common/constants/router.constants';

export default [
  {
    path: RoutePath.LANDING,
    component: DashboardComponent,
  },
  {
    path: RoutePath.MINERS,
    loadComponent: () =>
      import('./components/miners/miners.component').then(
        (c) => c.MinersComponent,
      ),
  },
  {
    path: RoutePath.STATIONS,
    loadComponent: () =>
      import('./components/station/station.component').then(
        (c) => c.StationComponent,
      ),
  },
] as Routes;
