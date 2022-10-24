import { Component, OnInit, Input, Output } from '@angular/core';
//import productsSnk from "src/assets/data/appiBurguer.json";
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Product } from 'src/app/modelos/product.interface';
import { ProductsService } from 'src/app/servicios/api/products.service';
import { PedidoService } from 'src/app/servicios/api/pedido.service';
import { ListaDePedidosService } from 'src/app/servicios/api/lista-de-pedidos.service';

@Component({
  selector: 'app-mesero',
  templateUrl: './mesero.component.html',
  styleUrls: ['./mesero.component.css']
})
export class MeseroComponent implements OnInit {

  myOrder: Product[] = [];
  products: Product[] = [];
  clientFormValues: any = {};
  
  clientForm = new FormGroup({
    client: new FormControl("", Validators.required),
    mesa: new FormControl("", Validators.required)
  })


  constructor(
    private productsService: ProductsService,
    private pedidoService: PedidoService,
    private listadePedidos: ListaDePedidosService
  ) {
    this.myOrder = this.productsService.getOrder();
  }

  ngOnInit(): void {


    
  }
  onClient(form: any): any {
    // console.log(form)
    this.clientFormValues = form;
    // console.log(this.clientFormValues.client)

  }

  onAddtoShopping(product: Product) {
    this.productsService.addProduct(product)
    // console.log(product)
    this.listadePedidos.disparadorDePedidos.emit({
      data: product
    })


  }
  mostrarDesayuno(){
    
    this.pedidoService.getAllProducts()
      .subscribe(data => {
        this.products = data.filter(t => { return t.type=="Desayuno"});
      });
    
  }
  mostrarAlmuerzoycena(){
    
    this.pedidoService.getAllProducts()
      .subscribe(data => {
        this.products = data.filter(t => { return t.type=="Almuerzo y cena"});
      });
    
  }

}

