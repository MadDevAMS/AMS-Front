import { Routes } from "@angular/router";
import { ActivosPage } from "./activos/pages/activos.page";
import { MainPage } from "./main/pages/main.page";
import { MonitoreoPage } from "./monitoreo/pages/monitoreo.page";

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