import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {LaravelApiService} from '../../services/api/laravel-api.service';

import {ListaProducto} from '../../models/listaproductos.interface'
@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
  
  productos:ListaProducto[]=[];  
  
  
  constructor(private api:LaravelApiService) { }
  
  ngOnInit(): void {
  	this.api.getAllProduts().subscribe((data) => {
      this.productos = data;
      console.log(this.productos);
  		
  		})
  }


}
