import{ NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NotFoundComponent } from './pages/not-found/not-found.component';
import { IngresoComponent } from './pages/ingreso/ingreso.component';
import { PedidosComponent } from './pages/pedidos/pedidos.component';
import { OrdenesComponent } from './pages/ordenes/ordenes.component';

import {AuthGuard} from './guards/auth.guard'

const routes: Routes =[
  {
    path:'',
    redirectTo: '/ingreso',
    pathMatch:'full'
  },
  {
    path:'ingreso',
    component: IngresoComponent
  },
  {
    path:'pedidos',
    canActivate:[AuthGuard],
    component:PedidosComponent
  },
  {
    path:'ordenes',
    component:OrdenesComponent
  },
  {
    path:'404',
    component:NotFoundComponent
  },
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
