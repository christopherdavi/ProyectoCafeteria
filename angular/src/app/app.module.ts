import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './plantillas/footer/footer.component';
import { HeaderComponent } from './plantillas/header/header.component';
import { HomeComponent } from './vistas/home/home.component';
import {ReactiveFormsModule, FormsModule} from '@angular/forms'
import {ToastrModule} from 'ngx-toastr';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material/dialog';

import {HttpClientModule} from '@angular/common/http';
import { DetalleComponent } from './vistas/detalle/detalle.component';
import { LoginComponent } from './vistas/login/login.component';
import { PedidosComponent } from './vistas/pedidos/pedidos.component';
import { RegistrarseComponent } from './vistas/registrarse/registrarse.component';
import { PerfilComponent } from './vistas/perfil/perfil.component';
import { CarritoComponent } from './vistas/carrito/carrito.component';
import { ProductosEditComponent } from './components/productos-edit/productos-edit.component';
import { ProductosComponent } from './components/productos/productos.component';
import { CategoriasComponent } from './components/categorias/categorias.component';
import { CategoriasEditComponent } from './components/categorias-edit/categorias-edit.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'productos', component:ProductosComponent }, 
  { path:'productos/edit/:id',component:ProductosEditComponent},
  {path:'categoria', component:CategoriasComponent},
  { path:'categoria/edit/:id',component:CategoriasEditComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    routingComponents,
    DetalleComponent,
    LoginComponent,
    PedidosComponent,
    ProductosComponent,
    RegistrarseComponent,
    PerfilComponent,
    CarritoComponent,
    ProductosEditComponent,
    CategoriasComponent,
    CategoriasEditComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    MatDialogModule,
    RouterModule.forRoot(routes)
  ],
  exports:[],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
