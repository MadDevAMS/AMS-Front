import { Routes } from "@angular/router";
import { ReportesPage } from "./pages/reportes/reportes.page";
import { UsuariosPage } from "./pages/usuarios/usuarios.page";
import { GruposPage } from "./pages/grupos/grupos.page";

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