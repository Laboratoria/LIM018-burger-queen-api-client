import { Injectable, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListaDePedidosService {
@Output() disparadorDePedidos:EventEmitter<any>=new EventEmitter()
  constructor() { }

}
