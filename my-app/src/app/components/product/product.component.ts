import { Component, OnInit,Input , Output, EventEmitter} from '@angular/core';
import {Product} from '../../models/products.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  @Input() product: Product = {
    id: '',
    price: 0,
    name: '',
    image:'',
    type:'',
    dateEntry:''
  };
   @Output() addPRoduct = new EventEmitter<Product>()

  constructor() { }

  ngOnInit(): void {
  }

  onAddToCart(){
    this.addPRoduct.emit(this.product)
  }
}


