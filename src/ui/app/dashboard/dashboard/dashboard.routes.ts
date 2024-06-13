import { Routes } from "@angular/router";
import { ActivosPage } from "./activos/pages/activos.page";
import { MainPage } from "./main/pages/main.page";
import { MonitoreoPage } from "./monitoreo/pages/monitoreo.page";

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
]