import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
  {
    path: 'dashboard',
    loadComponent: () =>
      import('./pages/dashboard/dashboard').then((m) => m.Dashboard),
  },
  {
    path: 'charts',
    loadComponent: () => import('./pages/charts/charts').then((m) => m.Charts),
  },
  {
    path: 'tables',
    loadComponent: () => import('./pages/tables/tables').then((m) => m.Tables),
  },
  { path: '**', redirectTo: 'dashboard' },
];
