import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})


export class DetalleService {

  //Api de Laravel
  _Api= environment.urlAPI;
  
  constructor(private http: HttpClient) { }

  allDetalles():Observable<any>{
    return this.http.get(`${this._Api}/detalles`);
  }

  addDetalle(detalle:any):Observable<any>{
    return this.http.post(`${this._Api}/detalle/create`,detalle);
  }

  deleteDetalle(id:string):Observable<any>{
    return this.http.delete(`${this._Api}/detalle/${id}`);
  }

  getOnlyDetalle(id:string): Observable<any>{
    return this.http.get(`${this._Api}/detalle/${id}`);
  }

  updateDetalle(id:string, data:any): Observable<any>{
    return this.http.put(`${this._Api}/detalle/${id}`,data);
  }

  //Traer todo de producto

  getAllProductos(): Observable<any>{
    return this.http.get(`${this._Api}/producto`);
  }

  //Traer las categorias
  getAllCategorias(): Observable<any>{
    return this.http.get(`${this._Api}/categorias`);
  }

}
