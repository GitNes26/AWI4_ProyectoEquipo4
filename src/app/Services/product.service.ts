import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { Product } from '../Models/product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  apiURL = environment.apiURL

  constructor(private http:HttpClient) { }

  add(product:Product): Observable<any>{
    return this.http.post(`${this.apiURL}api/products`, product)
  }

  update(product:Product): Observable<any>{
    return this.http.put(`${this.apiURL}api/products`, product)
  }

  delete(id:number|string): Observable<any>{
    return this.http.delete(`${this.apiURL}api/products/` + id)
  }

  show() {
    return this.http.get(`${this.apiURL}api/products`)
  }
}
