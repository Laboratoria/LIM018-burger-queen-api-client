import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.scss']
})
export class CabeceraComponent implements OnInit {

  name: string = 'KrustyBurger'

  constructor() { }

  ngOnInit(): void {
  }

}
