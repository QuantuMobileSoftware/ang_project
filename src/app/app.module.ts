import { BrowserModule } from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';


import { AppComponent } from './app.component';
import {AuthModule} from './modules/auth/auth.module';
import {routing} from './app.routing';
import {AuthService} from './services/auth.service';
import {MaterialModule} from './modules/shared/material.module';
import {ServiceRequester} from './services/service.requester';
import {HttpClientModule} from '@angular/common/http';
import {GuestLayoutComponent} from './layouts/guest-layout.component';
import {AuthUserGuard} from './services/quards/auth-user.guard';
import {GuestGuard} from './services/quards/guest.guard';


@NgModule({
  declarations: [
    AppComponent,
    GuestLayoutComponent
  ],
  imports: [
    BrowserModule,
    AuthModule,
    routing,
    MaterialModule,
    HttpClientModule
  ],
  providers: [
    AuthService,
    ServiceRequester,
    AuthUserGuard,
    GuestGuard
  ],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AppModule { }
