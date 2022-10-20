import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http' // modulo para hacer peticiones
import {Product} from '../models/products.model'

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private myorder: Product[] = [];

   constructor(private http: HttpClient) {
    // buscar el token
    // si no encunetro el token fallar
    // private token
   }

   //obteniendo los productos
  addProduct(product: Product){
    this.myorder.push(product)
  }
  // poniendo en privado my order por seguridad, y con esta funcion la llamammos
  getmyOrder(){
    return this.myorder
  }
  // sumando el total de price
  getTotal(){
    return this.myorder.reduce((sum, item) => sum + item.price, 0)
  }
  //conección con la API
  getAllProducts(){
    return this.http.get<Product[]>('http://localhost:3000/products');
    //<Product[]>: le decimos a la api que queremos que nos traiga el contenigo como []
  }
}
