import { Routes } from "@angular/router";
import { ReportesPage } from "./reportes/reportes.page";
import { UsuariosPage } from "./usuarios/pages/usuarios.page";
import { GruposPage } from "./grupos/pages/grupos.page";

export const gestionRoutes: Routes = [
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
]