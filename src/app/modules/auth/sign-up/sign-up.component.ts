import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../../services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  user = {
    username: '',
    password: ''
  };

  constructor(private authService: AuthService,
              private router: Router) { }

  ngOnInit() {

  }

  doSignUp() {
    if (!this.user.username && !this.user.password) {
      return;
    }

    return this.authService.signUp(this.user.username, this.user.password)
      .then(token => {
        if (token) {
          this.router.navigate(['/products']);
        }
      });
  }
}
