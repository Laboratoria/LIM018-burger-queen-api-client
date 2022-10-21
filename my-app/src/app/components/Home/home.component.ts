import { ExpressionType } from '@angular/compiler';
import { Component, OnInit, Type } from '@angular/core';
import {Product} from '../../models/products.model';
import { ProductsService } from '../../services/products.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

// export class homeComponent{
//   name : "Stefani";
// }
export class homeComponent implements OnInit {
  name = "Stefani";
  myorder: Product[] = []; // se pone privado para proteger la accecibilidad
  total = 0;
  product: Product[] =[];
  filterProduct: Product[] =[]
  //
  token = '';

 // para mostrar y ocultar con el boton
  mostrar : Boolean = false;

  mostrarOcultar(){
    if(this.mostrar){
      this.mostrar= false;
    }else {
      this.mostrar= true;
    }
  }

  constructor(
    private productsService : ProductsService,
    ) {
    this.myorder = this.productsService.getmyOrder();
  }

//para manejar peticiones asincronas
  ngOnInit(): void {

  //   this.productsService.getAllProducts()
  //   .subscribe(data=>{
  //     console.log(data[0].type)
  //     this.product=  data
  //   })
  }
// para filtrar por type breakfast
  viewBreakfast = () =>{
    this.productsService.getAllProducts()
    .subscribe(data => {
      console.log(data)
      this.filterProduct= data.filter( e =>{
        console.log(e)
        const breakfast = e.type === "breakfast"
        console.log(breakfast)
      });
    });
  }
// para ver por cena
viewLunch = () => {
  this.productsService.getAllProducts()
  .subscribe(data =>{
    this.filterProduct = data.filter( e =>{
      const prueba = e.type == "lunch";
    })
  })
}

//para agregar los productos y contabilizarlos y calcular el totoal del precio
  onAddToOrder(product: Product){
    this.productsService.addProduct(product);
    this.total = this.productsService.getTotal();
  }
// para poder cambiar el nombreee
  changeName(event:Event){
    console.log(event)
    const element = event.target as HTMLInputElement
    this.name = element.value
  }

}
