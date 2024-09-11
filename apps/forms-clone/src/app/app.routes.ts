import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'sign-in',
    data: {preload: true},
    loadComponent: () =>
      import('@unispace/auth/login').then(c => c.LoginContainerComponent)
  },
  {
    path: 'register',
    data: {preload: true},
    loadComponent: () =>
      import('@unispace/auth/register').then(c => c.RegisterContainerComponent)
  }
];
