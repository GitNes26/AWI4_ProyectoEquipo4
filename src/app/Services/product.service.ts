import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { Product } from '../Models/product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  apiURL = environment.apiURL
  header = new HttpHeaders({'Type-content': 'aplication/json', 'Authorization': 'Bearer '+localStorage.getItem('myToken')})

  constructor(private http:HttpClient) {
    console.log('Servicio producto')
    this.header.append('Authorization', 'Bearer '+ localStorage.getItem('myToken'));
    console.log(this.header)
   }

  add(product:Product): Observable<any>{
    return this.http.post(`${this.apiURL}api/products`, product, {headers: this.header})
  }

  update(product:Product): Observable<any>{
    return this.http.put(`${this.apiURL}api/products/`+product.id, product, {headers: this.header})
  }

  delete(id:number|string): Observable<any>{
    return this.http.delete(`${this.apiURL}api/products/` + id, {headers: this.header})
  }

  show() {
    return this.http.get(`${this.apiURL}api/products`, {headers: this.header})
  }
}
