import {Routes, RouterModule} from '@angular/router';
import {AuthComponent} from './index/auth.component';

export const routes: Routes = [

  {
    path: 'auth/sign-in',
    component: AuthComponent,
    pathMatch: 'full',
    // resolve: {
    //   bootstrap: GuestBootstrapService
    // }
  },

];

export const routing = RouterModule.forChild(routes);
