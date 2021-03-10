import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'
import { DataService } from '../../services/data.service';
import { Productos } from '../../class/productos';
@Component({
  selector: 'app-users-edit',
  templateUrl: './productos-edit.component.html',
  styleUrls: ['./productos-edit.component.css']
})
export class ProductosEditComponent implements OnInit {
id:any;
data:any;
productoss=new Productos
constructor(private route:ActivatedRoute ,private dataService:DataService) { }

  ngOnInit(): void {
   this.id=this.route.snapshot.params.id;
   this.getData(); 
   console.log(this.id);
  }

  getData(){
this.dataService.getProductoById(this.id).subscribe(res=>{
  this.data=res;
  this.productoss=this.data;
})
  } 
  
updateProductos(){
 this.dataService.updateProductosData(this.id,this.productoss).subscribe(resp=>{console.log(resp)})
}
}
