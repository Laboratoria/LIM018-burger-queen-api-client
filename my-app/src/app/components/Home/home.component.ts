import { Component, OnInit } from '@angular/core';
import {Product} from '../../models/products.model'
import { ProductsService } from '../../services/products.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class homeComponent implements OnInit {

  product: Product[] =[
    {
      "id": "1",
      "name": "Café americano",
      "price": 5,
      "image": "",
      "type": "breakfast",
      "dateEntry": ""
    },
    {
      "id": "2",
      "name": "Café con leche",
      "price": 7,
      "image": "",
      "type": "breakfast",
      "dateEntry": ""
    }
  ]

  constructor( private ProductsService : ProductsService) { }

  ngOnInit(): void {
    this.ProductsService.getAllProducts()
    .subscribe(data=>{
      console.log( data)
    })
  }

}
