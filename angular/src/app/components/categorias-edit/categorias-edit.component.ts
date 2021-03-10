import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'
import { DataCategoriaService } from '../../services/data-categoria.service';
import { Categoria } from '../../class/categoria';

@Component({
  selector: 'app-users-edit',
  templateUrl: './categorias-edit.component.html',
  styleUrls: ['./categorias-edit.component.css']
})
export class CategoriasEditComponent implements OnInit {
id:any;
data:any;
categorias=new Categoria
constructor(private route:ActivatedRoute ,private dataService:DataCategoriaService) { }

  ngOnInit(): void {
   this.id=this.route.snapshot.params.id;
   this.getData(); 
   console.log(this.id);
  }

  getData(){
this.dataService.getCategoriaById(this.id).subscribe(res=>{
  this.data=res;
  this.categorias=this.data;
})
  } 
  
updateCategorias(){
 this.dataService.updateCategoriasData(this.id,this.categorias).subscribe(resp=>{console.log(resp)})
}
}