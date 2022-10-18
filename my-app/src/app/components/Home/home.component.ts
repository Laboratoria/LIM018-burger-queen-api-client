import { Component, OnInit } from '@angular/core';
import {Product} from '../../models/products.model'
import { ProductsService } from '../../services/products.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class homeComponent implements OnInit {

  myorder: Product[] = []; // se pone privado para proteger la accecibilidad
  total = 0;
  product: Product[] =[]
  //

  mostrar : Boolean = false;
  mostrarOcultar(){
    if(this.mostrar){
      this.mostrar= false;
    }else {
      this.mostrar= true;
    }
  }
  constructor( private productsService : ProductsService) {
    this.myorder = this.productsService.getmyOrder();
  }
//pata manejar peticiones asincronas
  ngOnInit(): void {
    this.productsService.getAllProducts()
    .subscribe(data=>{
      this.product=  data
    })
  }

  onAddToOrder(product: Product){
    this.productsService.addProduct(product);
    this.total = this.productsService.getTotal();
  }
}
