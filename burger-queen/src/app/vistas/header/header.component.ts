import { Component, OnInit } from '@angular/core';
import { PedidosEnviadosService } from 'src/app/servicios/api/pedidos-enviados.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(
    private enviarorden: PedidosEnviadosService
  ) { }

  ngOnInit(): void {


}

mostrarOrden(){
  this.enviarorden.tomarOrden.subscribe((data) => {
    console.log("reciebiendo pedido....",data);
    
})
}
signOut(){
  localStorage.clear()
}

}
