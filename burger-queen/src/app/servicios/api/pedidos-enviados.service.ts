import { EventEmitter, Injectable, Output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PedidosEnviadosService {
  @Output() tomarOrden:EventEmitter<any>=new EventEmitter()
  constructor() { }
}
