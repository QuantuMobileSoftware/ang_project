import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {UnderlineDirective} from './directives/underline.directive';
import {LoopDirective} from './directives/loop.directive';
import {PhonePipe} from './pipes/phone-number.pipe';


@NgModule({
  imports: [
    CommonModule,
    BrowserModule
  ],
  declarations: [
    UnderlineDirective,
    LoopDirective,
    PhonePipe
  ],
  exports: [
    UnderlineDirective,
    LoopDirective,
    PhonePipe
  ],
  providers: [],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
  ]
})
export class SharedModule {
}