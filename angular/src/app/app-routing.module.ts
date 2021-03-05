import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PedidosComponent } from './vistas/pedidos/pedidos.component';
import { LoginComponent } from './vistas/login/login.component';
import { ProductosComponent } from './vistas/productos/productos.component';

const routes: Routes = [
  {path:'',redirectTo:'login', pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {path:'pedidos',component:PedidosComponent},
  {path: 'productos', component:ProductosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[LoginComponent,PedidosComponent,ProductosComponent]
