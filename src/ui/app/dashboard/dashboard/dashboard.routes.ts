import { Routes } from "@angular/router";

export const dashboardRoutes: Routes = [
  {
    path: '',
    loadComponent: () => import('./main/pages/main.page').then(m => m.MainPage)
  },
  {
    path: 'activos',
    loadComponent: () => import('./activos/pages/activos.page').then(m => m.ActivosPage)
  },
  {
    path: 'monitoreo',
    loadComponent: () => import('./monitoreo/pages/monitoreo.page').then(m => m.MonitoreoPage)
  },
  {
    path: 'diagnostico',
    loadComponent: () => import('./diagnostico/pages/diagnostico.page').then(m => m.DiagnosticoPage)
  }
]