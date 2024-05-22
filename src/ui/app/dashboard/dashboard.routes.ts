import { Routes } from '@angular/router';
import { DahsboardLayout } from './shared/layouts/dashboard.layout';
import { dashboardRoutes } from './dashboard/dashboard.routes';
import { gestionRoutes } from './gestion/gestion.routes';
import { configuracionRoutes } from './configuracion/configuracion.routes';

export const mainRoutes: Routes = [
  {
    path: '',
    component: DahsboardLayout,
    children: [
      {
        path: '',
        children: dashboardRoutes
      },
      {
        path: 'gestion',
        children: gestionRoutes
      },
      {
        path: 'configuracion',
        children: configuracionRoutes
      },
    ],
  },
  {
    path: '**',
    redirectTo: '',
  },
];
