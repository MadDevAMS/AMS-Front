import { Routes } from '@angular/router';
import { DahsboardLayout } from './layouts/dashboard.layout';
import { MainPage } from './pages/main/main.page';
import { ActivosPage } from './pages/activos/activos.page';
import { MonitoreoPage } from './pages/monitoreo/monitoreo.page';
import { ReportesPage } from './pages/reportes/reportes.page';
import { UsuariosPage } from './pages/usuarios/usuarios.page';
import { GruposPage } from './pages/grupos/grupos.page';
import { ConfiguracionPage } from './pages/configuracion/configuracion.page';

export const dashboardRoutes: Routes = [
  {
    path: '',
    component: DahsboardLayout,
    children: [
      {
        path: '',
        component: MainPage,
      },
      {
        path: 'activos',
        component: ActivosPage,
      },
      {
        path: 'monitoreo',
        component: MonitoreoPage,
      },
      {
        path: 'reportes',
        component: ReportesPage,
      },
      {
        path: 'usuarios',
        component: UsuariosPage,
      },
      {
        path: 'grupos',
        component: GruposPage,
      },
      {
        path: 'configuracion',
        component: ConfiguracionPage,
      },
    ],
  },
  {
    path: '**',
    redirectTo: '',
  },
];
