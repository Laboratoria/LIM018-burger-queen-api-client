import { Product } from './../../modelos/product.interface';
import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private myOrder: Product[] = [];


  HttpClient: any;

  constructor() { }

  addProduct(product: Product){
    this.myOrder.push(product);
  }

  getOrder(){
    return this.myOrder
  }


}
