import { PedidosEnviadosService } from './../../servicios/api/pedidos-enviados.service';
import { ListaDePedidosService } from './../../servicios/api/lista-de-pedidos.service';
import { Component, OnInit, Input} from '@angular/core';


@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  @Input() formCli: any={};
  PedidosEnviadosService: any;


  constructor(
    private listadePedidos: ListaDePedidosService,
    private enviarorden: PedidosEnviadosService
    ) { }
  public listaPedidos: Array<any> = [];
  public arrsubTotal:any=[];
  public total: any=0;
  public orderobj: Object={};
  




  ngOnInit(): void {

    this.listadePedidos.disparadorDePedidos.subscribe(data => {
      //console.log("reciebiendo data....",data);
      // this.listaPedidos.push(data)
      if (this.listaPedidos.some((elem) => elem.data.id == data.data.id)) {
        this.listaPedidos = this.listaPedidos.map((item) => {
          if (item.data.id == data.data.id) {
            item.cant += 1;
          
            return item;
          }
          return item;
        })
      }else{
        this.listaPedidos.push({...data, cant: 1})
        

      }

      if(this.listaPedidos.some((elem) => elem.data.id == data.data.id)){
        this.listaPedidos=this.listaPedidos.map((x) =>{
          if(x.data.id == data.data.id){
            x.subTotal=x.cant*x.data.price;
           
            return x;
          }
          return x;

        })
      }else{
        this.listaPedidos.push({...data, subTotal: data.data.price})
        

        
      }
      
      this.arrsubTotal=this.listaPedidos.map((obj) => { return obj.subTotal})

      //console.log(this.arrsubTotal)
       
      this.total=this.arrsubTotal.reduce((a: any,b: any) => { return a+b})
      
      
      this.orderobj={
        "userId": "mesero",
        "client": this.formCli.client,
        "products": this.listaPedidos.map((x)=>{return x.data.id}),
        "products[].qty": this.listaPedidos.map((x)=> {return x.cant}),
        "products[].product":this.listaPedidos.map((x)=>{return x.data})
      }
     // console.log(this.orderobj);



      
    })
    

  }
  enviarOrden(orderobj:any){
    this.enviarorden.tomarOrden.emit({
      data:this.orderobj
    })

    console.log(this.orderobj);
  }

  delete(id:any){
    //console.log("borrar este producto");
   // console.log(this.listaPedidos);
    
    // const iddelete=this.listaPedidos.findIndex((x)=>{return x.data.id==x.data.id});
    // console.log(iddelete)
    const eliminar = this.listaPedidos.findIndex(p => id === p.data.id); 

    
    //console.log(eliminar)
    this.listaPedidos.splice(eliminar,1);

    this.arrsubTotal=this.listaPedidos.map((obj) => { return obj.subTotal})

     // console.log(this.arrsubTotal)
    if(this.arrsubTotal.length >0){
      this.total=this.arrsubTotal.reduce((a: any,b: any) => { return a+b})
    }
     else{
      this.total=0;
     }

      


  
    }
}

