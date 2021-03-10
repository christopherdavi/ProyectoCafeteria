import { Component, OnInit } from '@angular/core';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Categoria } from '../../class/categoria';
import { DataCategoriaService } from '../../services/data-categoria.service';


@Component({
  selector: 'app-users',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent implements OnInit {
  categoria:any;
  categorias= new Categoria();
  constructor( private dataService:DataCategoriaService) { }

  ngOnInit(): void {
    this.getCategoriaData()
    
  }
getCategoriaData(){
  this.dataService.getData().subscribe(res=>{
   this.categoria=res});
}
addData(){
  this.dataService.addData(this.categorias).subscribe(res=>{ 
    this.getCategoriaData();
  }) 
}

deleteData(id:string){
  this.dataService.deleteData(id).subscribe(res=>{
    this.getCategoriaData();
  console.log(res) ;
     
  })
  this.getCategoriaData();
 }
}
