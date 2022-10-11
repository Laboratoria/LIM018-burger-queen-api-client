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
      name:'Café americano',
      price:5,
      image:'',
      type:'',
      dateEntry:''
    },
    {
      id: '2',
      name:'Café con leche',
      price: 7,
      image:'',
      type:'',
      dateEntry:''
    },
    {
      id: '3',
      name:'Sandwich de jamón y queso',
      price: 10,
      image:'',
      type:'',
      dateEntry:''
    },
    {
      id: '4',
      name:'Jugo de frutas natural',
      price: 7,
      image:'',
      type:'',
      dateEntry:''
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
