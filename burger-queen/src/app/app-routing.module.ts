
import { PedidosComponent } from './vistas/pedidos/pedidos.component';
import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CocineroComponent } from './vistas/cocinero/cocinero.component';
import { HeaderComponent } from './vistas/header/header.component';
import { LoginComponent } from './vistas/login/login.component';
import { MeseroComponent } from './vistas/mesero/mesero.component';
import {AdminComponent} from './vistas/admin/admin.component';

const routes: Routes = [
  {path:"",redirectTo:'login',pathMatch:'full'},
  {path:'login', component:LoginComponent},
  {path:'mesero', component:MeseroComponent},
  {path:'cocinero', component:CocineroComponent},
  {path:'pedidos',component:PedidosComponent},
  {path:'header',component:HeaderComponent},
  {path:'admin',component:AdminComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents =[LoginComponent, MeseroComponent, CocineroComponent]
