import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate} from '@angular/router';
import { Router, RouterStateSnapshot } from '@angular/router';
import {AuthService} from '../auth.service';

@Injectable()
export class GuestGuard implements CanActivate {

    constructor( private router: Router,
                 private authService: AuthService) {}

    canActivate (route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> | boolean {
      console.log('guest', this.authService.islogin)
      if (this.authService.islogin) {
        this.router.navigate(['/products'])
        return false;
      }

      return true;
    }
}
