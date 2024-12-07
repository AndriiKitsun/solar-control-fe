import { Routes } from '@angular/router';
import { LayoutComponent } from '@layout/components/layout/layout.component';
import { RoutePath } from '@common/constants/router.constants';

export const routes: Routes = [
  {
    path: RoutePath.LANDING,
    component: LayoutComponent,
    loadChildren: () => import('@views/views.routes'),
  },
  {
    path: '**',
    redirectTo: RoutePath.LANDING,
  },
];
