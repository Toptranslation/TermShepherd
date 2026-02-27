import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: ':lang',
        loadComponent: () => import('./features/home/home.component').then(m => m.HomeComponent)
    },
    {
        path: '',
        redirectTo: 'de',
        pathMatch: 'full'
    },
    {
        path: '**',
        redirectTo: 'de'
    }
];
