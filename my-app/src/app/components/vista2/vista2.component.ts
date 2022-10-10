import { Component, OnInit } from '@angular/core';
import {Menu} from '../../models/menu.model'

@Component({
  selector: 'app-vista2',
  templateUrl: './vista2.component.html',
  styleUrls: ['./vista2.component.scss']
})
export class Vista2Component implements OnInit {

  menu: Menu[] =[
    {
      id: '1',
      name:'Producto1',
      price: 10
    },
    {
      id: '2',
      name:'Producto2',
      price: 20
    },
    {
      id: '3',
      name:'Producto3',
      price: 30
    },
    {
      id: '4',
      name:'Producto4',
      price: 40
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
