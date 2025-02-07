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
      import('./sensors/components/sensors/sensors.component').then(
        (c) => c.SensorsComponent,
      ),
  },
  {
    path: RoutePath.PROTECTION,
    loadComponent: () =>
      import('./protection/components/protection/protection.component').then(
        (c) => c.ProtectionComponent,
      ),
  },
  {
    path: RoutePath.ASICS,
    loadComponent: () =>
      import('./asics/asics.component').then((c) => c.AsicsComponent),
    providers: [DialogService],
  },
  {
    path: RoutePath.SETTINGS,
    loadComponent: () =>
      import('./settings/components/settings/settings.component').then(
        (c) => c.SettingsComponent,
      ),
    providers: [DialogService],
  },
] as Routes;
