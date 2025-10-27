import { Routes } from '@angular/router';
import { Home } from './features/home/home';

export const routes: Routes = [
    /*{
        path:'home',
        component: Home
    },*/
    {
        path:'lazyHome',
        loadComponent:()=>import('./features/home/home').then(m => m.Home)
    }
];
