import { HeaderComponent } from './vistas/header/header.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './plantilla/footer/footer.component';
import { LoginComponent } from './vistas/login/login.component';
import { NuevoComponent } from './vistas/nuevo/nuevo.component';
//import { ModelosComponent } from './modelos/modelos.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { CocineroComponent } from './vistas/cocinero/cocinero.component';
import { AdministradorComponent } from './vistas/administrador/administrador.component';
import { MeseroComponent} from './vistas/mesero/mesero.component';
import { ProductsComponent } from './vistas/products/products.component';

import { OrdmeseroComponent } from './vistas/ordmesero/ordmesero.component';
import { OrderComponent } from './vistas/order/order.component';
import { PedidosComponent } from './vistas/pedidos/pedidos.component';



@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    routingComponents,
    LoginComponent,
    NuevoComponent,
   // ModelosComponent,
    CocineroComponent,
    AdministradorComponent,
    MeseroComponent,
    ProductsComponent,
    OrdmeseroComponent,
    OrderComponent,
    PedidosComponent,
    HeaderComponent


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule, 
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
