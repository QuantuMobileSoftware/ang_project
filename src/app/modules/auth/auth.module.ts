import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './index/auth.component';
import {MaterialModule} from '../shared/material.module';
import {routing} from './auth.routing';
import {AuthServiceConfig, GoogleLoginProvider, SocialLoginModule} from 'angularx-social-login';
import {SignUpComponent} from './sign-up/sign-up.component';
import {SignInComponent} from './sign-in/sign-in.component';
import {FormsModule} from '@angular/forms';

const config = new AuthServiceConfig([{
    id: GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider('261723719749-3pdutl1gu81f1iedcmk5dldc49hh2vjf.apps.googleusercontent.com')
  }]);

@NgModule({
  imports: [
    CommonModule,
    routing,
    MaterialModule,
    SocialLoginModule.initialize(config),
    FormsModule
  ],
  declarations: [
    AuthComponent,
    SignUpComponent,
    SignInComponent
  ],
  bootstrap: [
    AuthComponent
  ]
})
export class AuthModule { }
