import {Routes, RouterModule} from '@angular/router';
import {SignUpComponent} from './sign-up/sign-up.component';
import {SignInComponent} from './sign-in/sign-in.component';
import {GuestLayoutComponent} from '../../layouts/guest-layout.component';
import {GuestGuard} from '../../services/quards/guest.guard';

export const routes: Routes = [

  {
    path: 'auth',
    children: [
      {
        path: 'sign-up',
        component: GuestLayoutComponent,
        children: [{
          path: '',
          component: SignUpComponent
        }]
      },
      {
        path: 'sign-in',
        component: GuestLayoutComponent,
        children: [{
          path: '',
          component: SignInComponent
        }],
        canActivate: [GuestGuard]
      }
    ]
  }

];

export const routing = RouterModule.forChild(routes);
