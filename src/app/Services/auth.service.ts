import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../Models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiURL = environment.apiURL

  constructor(private http:HttpClient) { }

  register(user:User): Observable<any>{
    return this.http.post(`${this.apiURL}register`, user)
  }

  login(user:User): Observable<any>{
    return this.http.post(`${this.apiURL}login`, user)
  }
}