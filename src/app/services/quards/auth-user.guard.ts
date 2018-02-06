import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate} from '@angular/router';
import { Router, RouterStateSnapshot } from '@angular/router';
import {AuthService} from '../auth.service';

@Injectable()
export class AuthUserGuard implements CanActivate {

    constructor( private router: Router,
                 private authService: AuthService) {}

    canActivate (route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> | boolean {
      if (!this.authService.authToken || this.authService.authToken === '') {
        this.router.navigate(['/auth', 'sign-in']);
        return false;
      }

      return true;
    }
}
