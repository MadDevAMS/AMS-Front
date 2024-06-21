import { Routes } from "@angular/router";

export const gestionRoutes: Routes = [
  {
    path: 'reportes',
    loadComponent: () => import('./reportes/pages/reportes.page').then(m => m.ReportesPage)
  },
  {
    path: 'usuarios',
    loadComponent: () => import('./usuarios/pages/usuarios.page').then(m => m.UsuariosPage)
  },
  {
    path: 'grupos',
    loadComponent: () => import('./grupos/pages/grupos.page').then(m => m.GruposPage)
  },
]