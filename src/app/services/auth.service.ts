import { Injectable } from '@angular/core';
import {AuthService, GoogleLoginProvider, SocialUser} from 'angularx-social-login';

@Injectable()
export class MainAuthService {

  constructor(private authService: AuthService) { }
  user: SocialUser = null;
  loggedIn = false;

  signInWithGoogle() {
    return this.authService.signIn(GoogleLoginProvider.PROVIDER_ID)
      .then(user => {
        this.user = user;
        this.loggedIn = true;

        return this.getMe();
      });
  }

  signOut(): void {
    this.authService.signOut();
  }

  getMe() {
    return this.user;
  }
}
