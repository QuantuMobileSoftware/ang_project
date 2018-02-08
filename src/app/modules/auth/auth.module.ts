import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './index/auth.component';
import {MaterialModule} from '../shared/material.module';
import {routing} from './auth.routing';
import {SignUpComponent} from './sign-up/sign-up.component';
import {SignInComponent} from './sign-in/sign-in.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    routing,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
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
