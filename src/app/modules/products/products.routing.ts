import {Routes, RouterModule} from '@angular/router';
import {UserLayoutComponent} from '../../layouts/user-layout.component';
import {ProductsComponent} from './index/products.component';
import {AuthUserGuard} from '../../services/quards/auth-user.guard';

export const routes: Routes = [

  {
    path: 'products',
    component: UserLayoutComponent,
    children: [{
          path: '',
          component: ProductsComponent
      }],
    canActivate: [AuthUserGuard]
  }

];

export const routing = RouterModule.forChild(routes);
