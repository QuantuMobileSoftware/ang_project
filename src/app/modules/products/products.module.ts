import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MaterialModule} from '../shared/material.module';
import {routing} from './products.routing';
import {FormsModule} from '@angular/forms';
import {ProductsComponent} from './index/products.component';
import {OrderDialogComponent} from './dialog/order.component';


@NgModule({
  imports: [
    CommonModule,
    routing,
    MaterialModule,
    FormsModule
  ],
  declarations: [
    ProductsComponent,
    OrderDialogComponent
  ],
  bootstrap: [
    ProductsComponent
  ],
  entryComponents: [
    OrderDialogComponent
  ]
})
export class ProductsModule { }
