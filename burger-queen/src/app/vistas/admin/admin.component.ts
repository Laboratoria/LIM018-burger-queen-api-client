import { Component, OnInit, ElementRef, ViewChild, VERSION } from '@angular/core';
import { PedidoService } from 'src/app/servicios/api/pedido.service';
import { Product } from 'src/app/modelos/product.interface';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  products: Product[] = [];
  users: any =[]
  orders:any=[]

  
 

  constructor(private pedidoService: PedidoService) { }

  ngOnInit(): void {

  }
  mostrarProductos(){
    this.pedidoService.getAllProducts()
      .subscribe(data => {
        this.products = data;
        console.log(this.products)
      });
  }
  mostrarUsuarios(){
    this.orders=[]
    this.products=[]
    this.pedidoService.getAllUsers()
    .subscribe(data => {
      this.users = data;
      console.log(this.users)
    });
  }
  mostrarOrdenes(){
    this.products=[]
    this.users=[]
    this.pedidoService.getallOrder()
    .subscribe(data => {
      this.orders = data;
      console.log(this.orders)

    });
   
  }
  deleteU(id:any){
    this.pedidoService.deleteUser(id).subscribe((data) => console.log("borrado"))

    const indexbyId = this.users.findIndex((x: any) => id === x._id);
    this.users.splice(indexbyId, 1);
    console.log(this.users)

  }

}
