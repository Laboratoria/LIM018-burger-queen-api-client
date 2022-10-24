import { ExpressionType } from '@angular/compiler';
import { Component, OnInit, Type } from '@angular/core';
import { Product } from '../../models/products.model';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})

// export class homeComponent{
//   name : "Stefani";
// }
export class homeComponent implements OnInit {
  name = 'Stefani';
  myOrder: Product[] = []; // se pone privado para proteger la accecibilidad
  total = 0;
  products: Product[] = [];
  filteredProducts: Product[] = [];
  token: String = '';

  // para mostrar y ocultar con el boton
  mostrar: Boolean = false;



  constructor(private productsService: ProductsService) {
    this.myOrder = this.productsService.getmyOrder();
  }

  //para manejar peticiones asincronas
  ngOnInit(): void {
    // this.productsService.getAllProducts().subscribe((data) => {
    //   console.log(data[0].type);
    //   this.products = data;
    // });
  }

  // para filtrar por type breakfast
  viewBreakfast = () => {
    if (this.mostrar) {
      this.mostrar = false;
    } else {
      this.productsService.getAllProducts().subscribe((data) => {
      this.filteredProducts = data.filter((element) => {
         return element.type === 'breakfast';
      });
      this.products = this.filteredProducts;
    });
     this.mostrar = true;
    }
  };
  // para ver por cena
  viewLunch = () => {
    if (this.mostrar) {
      this.mostrar = false;
    } else {
    this.productsService.getAllProducts().subscribe((data) => {
      this.filteredProducts = data.filter((e) => {
        return e.type === 'lunch';
      });
      this.products = this.filteredProducts;
    });
    this.mostrar = true;
    }
  };

  //para agregar los productos y contabilizarlos y calcular el totoal del precio
  onAddToOrder(product: Product) {
    this.productsService.addProduct(product);
    this.total = this.productsService.getTotal();
  }
  // para poder cambiar el nombreee
  changeName(event: Event) {
    console.log(event);
    const element = event.target as HTMLInputElement;
    this.name = element.value;
  }
}
