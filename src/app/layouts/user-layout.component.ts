import {Component} from '@angular/core';
import {AuthService} from '../services/auth.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-user-layout',
    templateUrl: './user-layout.component.html',
    styleUrls: ['./user-layout.component.scss']
})
export class UserLayoutComponent {
    constructor(private authService: AuthService,
                private router: Router) {}

  signOut() {
    this.authService.signOut();
    this.router.navigate(['/auth', 'sign-in']);
  }
}
