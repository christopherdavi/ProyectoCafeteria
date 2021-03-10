import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Productos } from '../class/productos';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  URL1 = "http://127.0.0.1:8000/api/categoria";
  ApiService() {
    throw new Error('Method not implemented.');
  }

  constructor(private httpClient: HttpClient) { }
  getData() {
    return this.httpClient.get('http://127.0.0.1:8000/api/productos')
  }
  getProductoById(id: string) {
    return this.httpClient.get(`http://127.0.0.1:8000/api/productos/${id}`)
  } 
  insertData(data: Productos) {
    return this.httpClient.post('http://127.0.0.1:8000/api/productos', data)
  }
  deleteData(id: string) {
    return this.httpClient.delete(`http://127.0.0.1:8000/api/productos/${id}`)

  }
  updateProductosData(id: string, data: Productos) {
    return this.httpClient.put(`http://127.0.0.1:8000/api/productos/${id}`, data);
  }
  getCategorias(){
    return this.httpClient.get(this.URL1)
  }
  
}