import { Routes } from '@angular/router';
import { clientRoutes } from './client/client.routes';

export const routes: Routes = [
    {
        path: 'client',
        children: clientRoutes
    },
    {
        path: '',
        redirectTo: 'client/dashboard',
        pathMatch: 'full'
    },
    {
        path: '',
        redirectTo: 'client/settings',
        pathMatch: 'full'
    }
];
