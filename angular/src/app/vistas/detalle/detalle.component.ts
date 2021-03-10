import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import { DetalleService } from '../../services/detalle.service';
import {ToastrService} from 'ngx-toastr';
@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {
  
  detalles: Array<any>=[];
  productos: Array<any>=[];
  categorias: Array<any>=[];

  constructor(private detalleService:DetalleService,
     private toastr:ToastrService,private router: Router,
     ) { }

  traerDetalles(){
    this.detalleService.allDetalles().subscribe(res=>{
      this.detalles=res.data
      // console.log(res.data)
    },
    err => {
      this.toastr.warning('Intentalo más tarde', 'SERVIDOR', {
        positionClass: 'toast-bottom-left'
      })
    })
  }
  traerCategorias(){
    this.detalleService.getAllCategorias().subscribe(res=>{
      this.categorias=res.data;
      console.log(this.categorias);
    },
    err => {
      this.toastr.warning('Intentalo más tarde', 'SERVIDOR', {
        positionClass: 'toast-bottom-left'
      })
    })
  }

  eliminarDetalle(id:string){
    this.detalleService.deleteDetalle(id).subscribe(res=>{
      this.toastr.error('Eliminado exitosamente', 'DETALLE', {
        positionClass: 'toast-bottom-left'
      })
      this.traerDetalles();
    },
      err => {
        this.toastr.warning('Intentalo más tarde', 'DETALLES ERROR', {
          positionClass: 'toast-bottom-left'
        })
      })
  }


  traerProductos(){
    this.detalleService.getAllProductos().subscribe(res=>{
      this.productos = res.data;
      //console.log(res.data)
    })
  }
  

  ngOnInit(): void {
    this.traerProductos();
    this.traerDetalles();
    this.traerCategorias();
  }

  //Obtener clic
  
  clickeado:boolean=false;
  mostrar:string='';
  
  pedidos={
    status:'',
    user_id:localStorage.getItem("user_id"),
    producto_id:0,
    cantidad:0

  };
  lista:any=[];
  pedidosBorrados:string='';
  cantidad:any=[];
  textoDeInput: number = 1;
   
  //color del card
  flag = false;


  carrito(valor:number,unidad:number){    
   this.pedidos={
    producto_id:valor,
    cantidad:unidad,
    user_id:localStorage.getItem("user_id"),
    status:'Agregado'
   };
   this.cantidad.push(this.pedidos);
  console.log(this.cantidad)
   this.toastr.success('Se ha agregado el producto', 'Producto', {
    positionClass: 'toast-bottom-left'
  })
  console.log('Lista de productos'+this.lista)
  }

  borrarElemento(arr:any,item:any){
    var i = arr.indexOf( item );
    arr.splice( i, 1 );
    console.log(this.pedidos)
    if(this.pedidos===undefined && this.cantidad[0]===undefined){
      this.toastr.error('No hay productos en el carrito', 'Producto', {
        positionClass: 'toast-bottom-left'
      })
    }else{
      this.toastr.warning('Se quitado el producto del carrito', 'Producto', {
        positionClass: 'toast-bottom-left'
      })
    }
    
  }
  
  
  PostearPedido(){
    if(this.cantidad.length===0){
      this.toastr.error('No hay productos en el carrito', 'Producto', {
        positionClass: 'toast-bottom-left'
      })
    }else{
      for (let index = 0; index < this.cantidad.length; index++) {
        const element = this.cantidad[index];
        const list:any={
          producto_id:element.producto_id,
          cantidad:element.cantidad,
          user_id:element.user_id,
          status:element.status
        }
        
        //console.log(element)
        console.log(list)
        this.detalleService.addDetalle(list).subscribe((res)=>{
          console.log(res)
        } ,
        err => {
        this.toastr.warning('Intentalo más tarde', 'SERVIDOR', {
          positionClass: 'toast-bottom-left'
        })
        this.router.navigate(['carrito'])
      })}
      this.toastr.success('Se ha realizado con éxito su pedido', 'Pedido', {
        positionClass: 'toast-bottom-left'
      })

    }
    
 
  }

}
