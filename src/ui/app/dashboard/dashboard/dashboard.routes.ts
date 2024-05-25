import { Routes } from "@angular/router";
import { ActivosPage } from "./pages/activos/activos.page";
import { MainPage } from "./pages/main/main.page";
import { MonitoreoPage } from "./pages/monitoreo/monitoreo.page";

export const dashboardRoutes: Routes = [
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
]