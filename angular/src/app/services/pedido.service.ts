import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.prod';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {

  _Api= environment.urlAPI;
  constructor(private http:HttpClient) { }

  allPedidos():Observable<any>{
    let header= new HttpHeaders()
    .set('Type-contet', 'application/json')
    return this.http.get(`${this._Api}/pedidos`, {
      headers:header
    });
  }

  addPedidos(pedidos:any): Observable<any>{
    return this.http.post(`${this._Api}/pedidos/create`,pedidos);
  }

  deletePedidos(id:string): Observable<any>{
    return this.http.delete(`${this._Api}/pedidos/${id}`);
  }

  getOnlyPedido(id:string): Observable<any>{
    return this.http.get(`${this._Api}/pedidos/${id}`);
  }

  updatePedidos(id:string, data:any): Observable<any>{
    return this.http.put(`${this._Api}/pedidos/${id}`,data);
  }

  //Datos
  getAllDetalle(): Observable<any>{
    return this.http.get(`${this._Api}/detalles`);
  }

  getAllUsers():Observable<any>{
    return this.http.get(`${this._Api}/users`);
  }

}
