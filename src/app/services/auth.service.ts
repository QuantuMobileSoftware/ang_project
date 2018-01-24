import { Injectable } from '@angular/core';
import {ServiceRequester} from './service.requester';

@Injectable()
export class AuthService {

  constructor(public requester: ServiceRequester) { }
  url = 'auth/';
  islogin = false;
  authToken: string;
  username: string;

  signUp(username, password) {
    return this.requester.httpPost(this.url + 'register', {username, password})
      .then(user => {
        if (user) {
          this.islogin = true;
        }
      });

    // this.islogin = true;
    // this.authToken = username + password;
    // this.username = username;
  }

  signIn(username, password) {
    return this.requester.httpPost(this.url + 'login', {username, password})
      .then
      (token => {
        if (token) {
          console.log('token', token);
          localStorage.setItem('auth_token', token);

        }
      });
  }

  getUser() {

  }
}
