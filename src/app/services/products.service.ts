import { Injectable } from '@angular/core';
import {ServiceRequester} from './service.requester';

@Injectable()
export class ProductsService {

  constructor(public requester: ServiceRequester) {
    this.authToken = localStorage.getItem('auth_token');
  }
  url = 'products';
  authToken = null;

  getAll() {
    return this.requester.httpGet(this.url)
      .then(products => {
        return products;
      });
  }
}
