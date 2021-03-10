import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import { DetallePedido } from '../../models/detalle-pedido';
import { LaravelApiService } from 'src/app/services/api/laravel-api.service';
@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css']
})
export class PedidosComponent implements OnInit {

  constructor(private activaterouter:ActivatedRoute, private router:Router, private api:LaravelApiService) { }
  pedidoUserPrducto:any=[];
  detallesPedido:DetallePedido[]=[];
  index:number=0;
  subtotal:any=[];
  total:number=0
  ngOnInit(): void {
    let pedidoProductos = localStorage.getItem('user_id') //this.activaterouter.snapshot.paramMap.get('id')
   
    this.api.detallesPedido(pedidoProductos).subscribe(data=>{
      for (let j = 0; j < data.length; j++) {
        if (data[j].status="Agregado") {
          this.detallesPedido = data;   
        }
      }
      for (let index = 0; index < this.detallesPedido.length; index++) {
        if (this.detallesPedido[index].status="Agregado") {
          this.subtotal.push(this.detallesPedido[index].cantidad * this.detallesPedido[index].precio)  
          console.log(this.subtotal)   
        }    
      }
      for (let i = 0; i < this.subtotal.length; i++) {
        let numero = this.subtotal[i];
        this.total += numero; 
        console.log(this.total);       
      }      
      console.log(data);
    })
  }
}
