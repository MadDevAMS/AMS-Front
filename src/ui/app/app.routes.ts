import { Routes } from '@angular/router';
import { authRoutes } from './auth/auth.routes';
import { dashboardRoutes } from './dashboard/dashboard.routes';

export const routes: Routes = [
    {
        path: "",
        pathMatch: "full",
        redirectTo: "auth"
    },
    {
        path: "auth",
        children: authRoutes
    },
    {
        path: "dashboard",
        children: dashboardRoutes
    },
    {
        path: "**",
        redirectTo: ""
    }
];
