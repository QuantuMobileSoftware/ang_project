import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../../services/auth.service';

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

  constructor(private authService: AuthService) { }

  ngOnInit() {

  }

  doSignUp() {
    if (!this.user.username && !this.user.password) {
      return;
    }

    return this.authService.signUp(this.user.username, this.user.password)
      // .then(user => {
      //   console.log('user', user);
      // });
  }
}
