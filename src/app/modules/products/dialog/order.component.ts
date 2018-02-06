import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-order-dialog',
  templateUrl: './order.component.html',
  styleUrls: ['../index/products.component.css']
})
export class OrderDialogComponent {
  products: any = [];

  constructor(public dialogRef: MatDialogRef<OrderDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public product: any) { }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
