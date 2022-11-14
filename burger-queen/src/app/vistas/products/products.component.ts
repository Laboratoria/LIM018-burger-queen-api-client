import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/app/modelos/product.interface';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  @Input() product: Product={
    id: "",
    name: "",
    image: "",
    price: 0,
    type: "",
    dateEntry: ""
  }
  @Output() addedProduct = new EventEmitter<Product>();



  constructor() { }



  ngOnInit(): void {
  }
  onAddtoCart(){
    this.addedProduct.emit(this.product)

  }

}
