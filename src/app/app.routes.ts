import { Routes, RouterModule, RouterState } from '@angular/router';
import { Home } from './components/home/home';
import { Login } from './components/login/login'
import { Footer } from './components/footer/footer';
import { Favorites } from './components/favorites/favorites';
import { ForgotPassword } from './components/forgot-password/forgot-password';
import { Header } from './components/header/header';
import { Shopping } from './components/shopping/shopping';
import { Singin } from './components/singin/singin';
import { Newarticle } from './components/newarticle/newarticle';
import { authGuard } from './services/auth-guard';


export const routes: Routes = [
    {
        path: '',
        redirectTo: '/login',
        pathMatch: "full"
    },
    {
        path: 'home',
        component: Home,
        canActivate: [authGuard]
    },
    {
        path: 'login',
        component: Login
    },
    {
        path: 'footer',
        component: Footer,
        canActivate: [authGuard]
    },
    {
        path: 'favorites',
        component: Favorites,
        canActivate: [authGuard]
    },
    {
        path: 'forgot-password',
        component: ForgotPassword,
        canActivate: [authGuard]
    },
    {
        path: 'header',
        component: Header,
        canActivate: [authGuard]
    },
    {
        path: 'shopping',
        component: Shopping,
        canActivate: [authGuard]
    },
    {
        path: 'singing',
        component: Singin,
        canActivate: [authGuard]
    }, {
        path: 'newarticle',
        component: Newarticle,
        canActivate: [authGuard]
    },{ 
        path: '**',
        redirectTo: 'login' } 
];



