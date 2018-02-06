import { Component, OnInit } from '@angular/core';
import {ProductsService} from '../../../services/products.service';
import {MatDialog} from '@angular/material';
import {OrderDialogComponent} from '../dialog/order.component';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: any = [];

  constructor(private productsService: ProductsService,
              public dialog: MatDialog) { }

  ngOnInit() {
    this.productsService.getAll()
      .then(res => {
        this.products = res;
      });
  }

  addOrder(productName, id) {
    const dialogRef = this.dialog.open(OrderDialogComponent, {
      width: '250px',
      data: { name: productName, product_id: id }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('off');
    });
  }
}
