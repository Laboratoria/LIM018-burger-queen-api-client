
import { PedidosComponent } from './vistas/pedidos/pedidos.component';
import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdministradorComponent } from './vistas/administrador/administrador.component';
import { CocineroComponent } from './vistas/cocinero/cocinero.component';
import { HeaderComponent } from './vistas/header/header.component';
import { LoginComponent } from './vistas/login/login.component';
import { MeseroComponent } from './vistas/mesero/mesero.component';

const routes: Routes = [
  {path:"",redirectTo:'login',pathMatch:'full'},
  {path:'login', component:LoginComponent},
  {path:'mesero', component:MeseroComponent},
  {path:'cocinero', component:CocineroComponent},
  {path:'administrador', component:AdministradorComponent},
  {path:'pedidos',component:PedidosComponent},
  {path:'header',component:HeaderComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents =[LoginComponent, MeseroComponent, CocineroComponent, AdministradorComponent]
