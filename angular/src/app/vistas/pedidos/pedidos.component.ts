import { Component, OnInit } from '@angular/core';
import {LaravelApiService} from '../../services/api/laravel-api.service';
import { ListaPedido } from '../../models/listapedidos.interface';
import {FormGroup, FormControl, Validators} from '@angular/forms'

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css']
})
export class PedidosComponent implements OnInit {

  pedidoForm = new FormGroup({
    fecha: new FormControl(new Date().getDay()),
    orden: new FormControl('', Validators.required),
    total: new FormControl('')
  })
  pedidos:ListaPedido[]=[];  
  listadoCarrito: number[]=[]

  constructor(private api:LaravelApiService) { }
  
  ngOnInit(): void {
  	this.api.getAllPedidos().subscribe((data) => {
      this.pedidos = data;
      console.log(this.pedidos);
  		
  		})
  }
  agregarCarrito(){
    
  }
  quitarCarrito(){

  }

}
