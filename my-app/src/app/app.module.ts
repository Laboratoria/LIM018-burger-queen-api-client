import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { Vista2Component } from './components/vista2/vista2.component';
import { CabeceraComponent } from './components/cabecera/cabecera.component';
import { MenuComponent } from './components/menu/menu.component';
import { ContadorComponent } from './components/contador/contador.component';
import { PedidoComponent } from './components/pedido/pedido.component';
import { LoginComponent } from './components/login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { PedidosMeseroComponent } from './components/pedidos-mesero/pedidos-mesero.component';

const appRoutes:Routes =[
  {path:'', component:LoginComponent},
  {path:'pedido', component:PedidosMeseroComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    Vista2Component,
    CabeceraComponent,
    MenuComponent,
    ContadorComponent,
    PedidoComponent,
    LoginComponent,
    PedidosMeseroComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
