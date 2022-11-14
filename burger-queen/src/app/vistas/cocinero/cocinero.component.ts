import { Component, OnInit } from '@angular/core';
import { PedidoService } from 'src/app/servicios/api/pedido.service';

@Component({
  selector: 'app-cocinero',
  templateUrl: './cocinero.component.html',
  styleUrls: ['./cocinero.component.css']
})
export class CocineroComponent implements OnInit {

  product: any = {
    id: "",
    name: "",
    image: "",
    price: 0,
    type: "",
    dateEntry: ""
  }
  products: any = [{}]



  order: any = {
    "_id": "",
    "userId": "",
    "client": "",
    "products": [],
    "status": "",
    "dateEntry": ""
  }
  orders: any = [{}];
  listaproductos: any = [];
 
  upOrd: any = {};
  //isShowDiv: any




  constructor(private pedidoService: PedidoService) { }

  ngOnInit(): void {
    this.pedidoService.getallOrder().subscribe((data) => {
      this.orders = data;
      console.log(this.orders)
      // 
      //console.log(this.ind)
      // console.log(this.products)
    })

    
    
    

    // this.pedidoService.getAllProducts().subscribe((dta) => {
    //   this.products = dta;
    //   this.iind = this.products.map((y: any) => { return y.name })
    //   //console.log(this.iind,this.ind)




    // if(this.orders.some((elem:any) => elem.products.productId == this.products.id)){
    //   this.orders.products.map((m:any) =>{
    //     return m.products.map((x:any)=>{
    //       x.detalle=this.products[(x.productId-1)];

    //       return x;
    //     })
    //   })
    // }

    // for (let i = 0; i < this.orders.length; i++) {
    //   if (this.orders[i].products) {
    //     this.orders[i].products.map((x: any) => {
    //       x.detalle = this.iind[(x.productId - 1)];
    //       return x

    //     })
    //   }


    // }

    //console.log(this.newp)
    // for (let i = 0; i < this.newp.length; i++) {
    //   for (let j = 0; j < this.newp[i].length; j++) {
    //    const a =this.newp[i][j];
    //     this.newp2.push(a)
    //   }

    // }
    //console.log(this.newp2);
    // this.papu=this.newp2.map((s:any)=>{
    //   const obj:any={};
    //   obj.detalle=this.iind[parseInt(s)-1];
    //   return obj;
    // })

    //this.nwpapu=this.papu.map((o:any)=>{return o.detalle});

    // this.orders.map((s:any)=>{
    //   const obj:any={};
    //   obj.detalle=this.iind[parseInt(s)-1];
    //   return this.orders[obj];
    // })




    //})


  }
  statusChange(e: any, id: any) {
    const valor = e.target.value;
    console.log(valor, id, this.orders);

    const ordbyId=this.orders.filter((or:any)=>{return or._id==id})
   

     ordbyId.map((x:any)=>{return x.status =valor})

    console.log(ordbyId[0])


    // const pro=ordbyId.map((y:any)=>{
    //   return y.products
    // })

    // const mappro=ordbyId.map((pro: any)=>{
    //    pro.products.map((p:any)=>{
    //     p.product.map((x:any)=>{
    //        pro.products= x.id
    //     })
      
    //    })
    // })

    //const mapprodu=mappro.map((p: any)=>{return p.id})

    //console.log(mappro, pro);
    //console.log(mapprodu);
    

    // pro.map((x:any)=>{
    //   const ob:any={};
    //   ob.qty=x.qty
      
    //   return ob

    // })
    // console.log(pro)
    

    

    this.pedidoService.updateOrder(id, ordbyId[0])
    .subscribe(data => {
      console.log("update", data)
    })


 





  }

  deleteOrd(id: any) {
    console.log(id)
    this.pedidoService.deleteOrder(id).subscribe((data) => console.log("borrado"))

    const indexbyId = this.orders.findIndex((x: any) => id === x._id);
    this.orders.splice(indexbyId, 1);
    console.log(this.orders)

  }
  //showBtnStatus(id:any){
   
    // this.isShowDiv[0]= !this.isShowDiv[0];  
    // console.log(this.isShowDiv);
    // this.isShowDiv=new Array(this.orders.length).fill(false)
    // console.log(this.isShowDiv);
    // const indexbyId = this.orders.findIndex((x: any) => id === x._id);

    //  this.isShowDiv[indexbyId]= !this.isShowDiv[indexbyId]; 

    
  //}

}
