import { Component, OnInit,Input } from '@angular/core';
import {Menu} from '../../models/menu.model';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  @Input() menu: Menu = {
    id: '',
    price: 0,
    name: ''
  };

  constructor() { }

  ngOnInit(): void {
  }

}
