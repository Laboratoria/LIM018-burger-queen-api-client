import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from 'src/app/modelos/product.interface';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {

  constructor(private http: HttpClient) { }
  getAllProducts(){
    const tkn=localStorage.getItem('token');
    console.log(tkn);
    
    return this.http.get<Product[]>('http://localhost:3000/products', {
      headers: {
        Authorization: `Bearer ${tkn}`
      }
    })

  }

  createOrder(data:any){
    const tkn=localStorage.getItem('token');
    return this.http.post<any>('http://localhost:3000/orders', data, {
      headers: {
        Authorization: `Bearer ${tkn}`
      }
    })
  }

  getallOrder(){
    const tkn=localStorage.getItem('token');
    return this.http.get<any>('http://localhost:3000/orders',{
      headers: {
        Authorization: `Bearer ${tkn}`
      }
    })
  }

  deleteOrder(id: any){
    const tkn=localStorage.getItem('token');
    return this.http.delete<boolean>('http://localhost:3000/orders/'+id,  {
      headers: {
        Authorization: `Bearer ${tkn}`
      }
    })

  }

  updateOrder(id:any,data:object){    
    const tkn=localStorage.getItem('token');
    return this.http.put<any>('http://localhost:3000/orders/'+id, data,  {
      headers: {
        Authorization: `Bearer ${tkn}`
      }
    })

  }
  getAllUsers(){
    const tkn=localStorage.getItem('token');
    return this.http.get<any>('http://localhost:3000/users', {
      headers: {
        Authorization: `Bearer ${tkn}`
      }
    })


  }
  deleteUser(id: any){
    const tkn=localStorage.getItem('token');
    return this.http.delete<boolean>('http://localhost:3000/users/'+id,  {
      headers: {
        Authorization: `Bearer ${tkn}`
      }
    })

  }


}
