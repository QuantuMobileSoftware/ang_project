import { Component, OnInit } from '@angular/core';
import {MainAuthService} from '../../../services/auth.service';
import {SocialUser} from 'angularx-social-login';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  constructor(private authService: MainAuthService) { }

  user: SocialUser = null;

  ngOnInit() {
    this.user = this.authService.getMe();
  }

  async signIn() {
    this.user = await this.authService.signInWithGoogle();
  }

  signOut() {
    this.authService.signOut();
    this.user = null;
  }
}
