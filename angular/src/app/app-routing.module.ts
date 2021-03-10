import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PedidosComponent } from './vistas/pedidos/pedidos.component';
import { LoginComponent } from './vistas/login/login.component';
import { DetalleComponent } from './vistas/detalle/detalle.component';
import { RegistrarseComponent } from './vistas/registrarse/registrarse.component';
import { PerfilComponent } from './vistas/perfil/perfil.component';
import { CarritoComponent } from './vistas/carrito/carrito.component';
import { HomeComponent } from './vistas/home/home.component';

const routes: Routes = [
  {path:'',redirectTo:'home', pathMatch:'full'},

  //Home
  {path:'home',component:HomeComponent}, 

  //Login
  {path:'login',component:LoginComponent},

  //Registrarse
  {path:'registrarse',component:RegistrarseComponent},

  //Perfil
  {path:'perfil',component:PerfilComponent},

  //Pedidos
  {path:'pedidos',component:PedidosComponent},


  //Detalle
  {path: 'detalle', component:DetalleComponent},

  //Detalle
  {path: 'carrito', component:CarritoComponent},

  // { path: '**', redirectTo: 'home', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[LoginComponent,PedidosComponent,DetalleComponent,CarritoComponent]
