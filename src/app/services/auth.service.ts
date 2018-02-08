import { Injectable } from '@angular/core';
import {ServiceRequester} from './service.requester';

@Injectable()
export class AuthService {

  constructor(public requester: ServiceRequester) {
    this.authToken = localStorage.getItem('auth_token');
  }
  url = 'auth/';
  authToken = null;

  signUp(username, password) {
    return this.requester.httpPost(this.url + 'register', {username, password})
      .then(user => {
        this.authToken = user.data.token;
        localStorage.setItem('auth_token', user.data.token);
        return user.data;
      });
  }

  signIn(username, password) {
    return this.requester.httpPost(this.url + 'login', {username, password})
      .then(token => {
        if (token.key) {
          this.authToken = token.key;
          localStorage.setItem('auth_token', token.key);
          return true;
        }
        return false;
      });
  }

  signOut() {
    this.authToken = null;
    localStorage.setItem('auth_token', '');
  }
}
