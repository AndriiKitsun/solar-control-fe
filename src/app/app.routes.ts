import { Routes } from '@angular/router';
import { LayoutComponent } from '@layout/components/layout/layout.component';
import { RoutePath } from '@common/constants';

export const routes: Routes = [
  {
    path: RoutePath.ROOT,
    component: LayoutComponent,
    loadChildren: () => import('@views/views.routes'),
  },
  {
    path: '**',
    redirectTo: RoutePath.ROOT,
  },
];
