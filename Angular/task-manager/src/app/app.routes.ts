import { Routes } from '@angular/router';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./components/layout/layout.component').then(m => m.LayoutComponent),
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      },
      {
        path: 'home',
        loadComponent: () => import('./components/home/home.component').then(m => m.HomeComponent),
      },
      {
        path: 'add',
        loadComponent: () => import('./components/task-input/task-input').then(m => m.TaskInputComponent),
        canActivate: [authGuard],

      },
      {
        path: 'lists',
        loadComponent: () => import('./components/task-list/task-list').then(m => m.TaskListComponent),
        canActivate: [authGuard],

      }
    ]
  }
  ,
  {
    path: 'login',
    loadComponent: () => import('./components/auth/login/login.component').then(m => m.LoginComponent)
  },
  {
    path: 'signup',
    loadComponent: () => import('./components/auth/signup/signup.component').then(m => m.SignupComponent)
  },
  {
    path: 'not-logged-in',
    loadComponent: () => import('./components/auth/not-logged-in/not-logged-in.component').then(m => m.NotLoggedInComponent)
  },
  {
    path: '**',
    loadComponent: () => import('./components/not-found/not-found.component').then(m => m.NotFoundComponent)
  }
];
