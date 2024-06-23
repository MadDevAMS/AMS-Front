import { Routes } from "@angular/router";

export const gestionRoutes: Routes = [
  {
    path: 'reportes',
    loadComponent: () => import('./reportes/reportes.page').then(m => m.ReportesPage)
  },
  {
    path: 'usuarios',
    loadComponent: () => import('./usuarios/pages/usuarios.page').then(m => m.UsuariosPage)
  },
  {
    path: 'usuarios/create',
    loadComponent: () => import('./usuarios/pages/usuarios-create.page').then(m => m.UsuariosCreatePage)
  },
  {
    path: 'grupos',
    loadComponent: () => import('./grupos/pages/grupos.page').then(m => m.GruposPage)
  },
  {
    path: 'grupos/create',
    loadComponent: () => import('./grupos/pages/grupos-create.page').then(m => m.GruposCreatePage)
  },
]