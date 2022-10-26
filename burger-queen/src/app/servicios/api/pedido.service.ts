import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from 'src/app/modelos/product.interface';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {

  constructor(private http: HttpClient) { }
  getAllProducts(){
    return this.http.get<Product[]>('http://localhost:3000/products', {
      headers: {
        Authorization: "Bearer EsUnSecreto"
      }
    })

  }

  createOrder(data:any){
    return this.http.post<any>('http://localhost:3000/orders', data, {
      headers: {
        Authorization: "Bearer EsUnSecreto"
      }
    })
  }

  getallOrder(){
    return this.http.get<any>('http://localhost:3000/orders',{
      headers: {
        Authorization: "Bearer EsUnSecreto"
      }
    })
  }

}
