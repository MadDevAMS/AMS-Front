import { Routes } from '@angular/router';
import { authRoutes } from './auth/auth.routes';
import { mainRoutes } from './dashboard/dashboard.routes';
import { AuthGuard } from './shared/guards/auth.guard';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'auth',
  },
  {
    path: 'auth',
    children: authRoutes,
  },
  {
    path: 'dashboard',
    canActivate: [AuthGuard],
    children: mainRoutes,
  },
  {
    path: '**',
    redirectTo: '',
  },
];
