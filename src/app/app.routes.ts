import { Routes, RouterModule } from '@angular/router';
import { Home } from './components/home/home';
import { Login } from './components/login/login'
import { Footer } from './components/footer/footer';
import { Favorites } from './components/favorites/favorites';
import { ForgotPassword } from './components/forgot-password/forgot-password';
import { Header } from './components/header/header';
import { Shopping } from './components/shopping/shopping';
import { Singin } from './components/singin/singin';
import { Newarticle } from './components/newarticle/newarticle';

export const routes: Routes = [
    {
        path: '',
        redirectTo: '/login',
        pathMatch: "full"
    },
    {
        path: 'home',
        component: Home
    },
    {
        path: 'login',
        component: Login
    },
    {
        path: 'footer',
        component: Footer
    },
    {
        path: 'favorites',
        component: Favorites
    },
    {
        path: 'forgot-password',
        component: ForgotPassword
    },
    {
        path: 'header',
        component: Header
    },
    {
        path: 'shopping',
        component: Shopping
    },
    {
        path: 'singing',
        component: Singin
    }, {
        path: 'newarticle',
        component: Newarticle
    }
];



