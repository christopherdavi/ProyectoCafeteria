import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Categoria } from '../class/categoria';


@Injectable({
  providedIn: 'root'
})
export class DataCategoriaService {

  ApiService() {
    throw new Error('Method not implemented.');
  }

  constructor(private httpClient: HttpClient) { }
  getData() {
    return this.httpClient.get('http://127.0.0.1:8000/api/categoria')
  }
  getCategoriaById(id: string) {
    return this.httpClient.get(`http://127.0.0.1:8000/api/categoria/${id}`)
  } 
  addData(data: Categoria) {
    return this.httpClient.post('http://127.0.0.1:8000/api/categoria/create', data)
  }
  deleteData(id: string) {
    return this.httpClient.delete(`http://127.0.0.1:8000/api/categoria/${id}`)

  }
  updateCategoriasData(id: string, data: Categoria) {
    return this.httpClient.put(`http://127.0.0.1:8000/api/categoria/${id}`, data);
  }
}