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
  product: any={
    id: "",
    name: "",
    image: "",
    price: 0,
    type: "",
    dateEntry: ""
  }
  products: any = [{}]


  
   order: any={
    "userId": "",
    "client":"" ,
    "products": [],
    "status": "",
    "dateEntry": ""
  }
   orders: any=[{}];
   listaproductos: any=[];
   ind: any;
   iind:any;
   
  constructor(private pedidoService:PedidoService

  ) { }

  ngOnInit(): void {
    this.pedidoService.getallOrder().subscribe((data) =>{ 
      this.orders=data;
      })
   
      this.pedidoService.getAllProducts().subscribe((dta) =>{
        this.products=dta;
        this.iind=this.products.map((y:any)=>{return y.name})
        
        for (let i = 0; i < this.orders.length; i++) {
           if(this.orders[i].products){
            this.orders[i].products.map((x:any)=>{
              x.detalle=this.iind[(x.productId-1)];
              return x
    
            })
           }
         
          
        }
       
        console.log(this.orders)

        
      })



  }

}
