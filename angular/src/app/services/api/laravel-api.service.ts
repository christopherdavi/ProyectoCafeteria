import { Injectable } from '@angular/core';
import {ListaProducto} from '../../models/listaproductos.interface';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { ListaPedido } from '../../models/listapedidos.interface';

const baseURLProductos = "http://127.0.0.1:8000/api/productos";
const baseURLPedidos = "http://127.0.0.1:8000/api/pedidos";

@Injectable({
  providedIn: 'root'
})

export class LaravelApiService {

  constructor( private http:HttpClient) { }

  getAllProduts():Observable<ListaProducto[]>{
  	return this.http.get<ListaProducto[]>(baseURLProductos)
  }

  getAllPedidos():Observable<ListaPedido[]>{
  	return this.http.get<ListaPedido[]>(baseURLPedidos)
  }
}
