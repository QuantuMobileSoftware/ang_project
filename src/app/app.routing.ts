import {Routes, RouterModule} from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'auth/sign-in',
  },
];

export const routing = RouterModule.forRoot(routes);