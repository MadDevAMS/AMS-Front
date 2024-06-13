import { Routes } from '@angular/router';
import { AuthLayout } from './layouts/auth.layout';

export const authRoutes: Routes = [
  {
    path: '',
    component: AuthLayout,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'login'
      },
      {
        path: 'login',
        loadComponent: () => import('./pages/login.page').then(m => m.LoginPage)
      },
      {
        path: 'register',
        loadComponent: () => import('./pages/register.page').then(m => m.RegisterPage)
      },
    ]
  },
  {
    path: '**',
    redirectTo: '/',
  },
];
