import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ServiceWorkerModule } from '@angular/service-worker';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { homeComponent } from './components/Home/home.component';
import { CabeceraComponent } from './components/cabecera/cabecera.component';
import { ProductComponent } from './components/product/product.component';
import { ContadorComponent } from './components/contador/contador.component';
import { PedidoComponent } from './components/pedido/pedido.component';
import { LoginComponent } from './components/login/login.component';
import { PedidosMeseroComponent } from './components/pedidos-mesero/pedidos-mesero.component';
import { TokenInterceptor } from './interceptors/token.interceptor';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { IngresoComponent } from './pages/ingreso/ingreso.component';
import { PedidosComponent } from './pages/pedidos/pedidos.component';
import { OrdenesComponent } from './pages/ordenes/ordenes.component';


// const appRoutes:Routes =[
//   // {path:'', component:LoginComponent},
//   // {path:'home', component:homeComponent}
// ];

@NgModule({
  declarations: [
    AppComponent,
    homeComponent,
    CabeceraComponent,
    ProductComponent,
    ContadorComponent,
    PedidoComponent,
    LoginComponent,
    PedidosMeseroComponent,
    NotFoundComponent,
    IngresoComponent,
    PedidosComponent,
    OrdenesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    // RouterModule.forRoot(appRoutes),
    AppRoutingModule,
    HttpClientModule,

    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
