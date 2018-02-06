import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../../services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  user = {
    username: '',
    password: ''
  };

  constructor(private authService: AuthService,
              private router: Router) { }

  ngOnInit() {

  }

  signIn() {
    if (!this.user.username && !this.user.password) {
      return;
    }

    return this.authService.signIn(this.user.username, this.user.password)
      .then(token => {
        if (token) {
          this.router.navigate(['/products']);
        }
      });
  }
}
