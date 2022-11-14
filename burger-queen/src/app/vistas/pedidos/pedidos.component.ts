import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/modelos/product.interface';
import { PedidoService } from 'src/app/servicios/api/pedido.service';


@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css']
})
export class PedidosComponent implements OnInit {
  product: any = {
    id: "",
    name: "",
    image: "",
    price: 0,
    type: "",
    dateEntry: ""
  }
  products: any = [{}]



  order: any = {
    "_id": "",
    "userId": "",
    "client": "",
    "products": [],
    "status": "",
    "dateEntry": ""
  }
  orders: any = [{}];
  listaproductos: any = [];
 



  constructor(private pedidoService: PedidoService) { }

  ngOnInit(): void {
    this.pedidoService.getallOrder().subscribe((data) => {
      this.orders = data;
      console.log(this.orders)
    })
    
    // this.pedidoService.getAllProducts().subscribe((dta) => {
    //   this.products = dta;
    //   this.iind = this.products.map((y: any) => { return y.name })

    //   for (let i = 0; i < this.orders.length; i++) {
    //     if (this.orders[i].products) {
    //       this.orders[i].products.map((x: any) => {
    //         x.detalle = this.iind[(x.productId - 1)];
    //         return x
    //       })
    //     }
    //   }
    //   console.log(this.orders);

    // })

  }
  deleteOrd(id:any){
    console.log(id)
    this.pedidoService.deleteOrder(id).subscribe((data)=> console.log("borrado") )

    const indexbyId=this.orders.findIndex((x:any) => id === x._id);
    this.orders.splice(indexbyId,1);
    console.log(this.orders)

  }

}
