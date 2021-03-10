import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Productos } from '../../class/productos';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Categoria } from '../../class/categoria';

@Component({
  selector: 'app-users',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
  productos:any;
  categoria:any;
  productoss= new Productos();
  categorias= new Categoria();
  constructor( private dataService:DataService) { }

  ngOnInit(): void {
    this.getUserData()
    this.dataService.getCategorias().subscribe(res=>{
    this.categoria=res});
  }
getUserData(){
  this.dataService.getData().subscribe(res=>{
   this.productos=res});
}
insertData(){
  this.dataService.insertData(this.productoss).subscribe(res=>{ 
    this.getUserData();
  }) 
}

deleteData(id:string){
  this.dataService.deleteData(id).subscribe(res=>{
    this.getUserData();
  console.log(res) ;
     
  })
  this.getUserData();
 }
}