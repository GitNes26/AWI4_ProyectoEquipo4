import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { Comment } from '../Models/Comment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  apiURL = environment.apiURL

  constructor(private http:HttpClient) { }

  add(comment:Comment): Observable<any>{
    return this.http.post(`${this.apiURL}api/comments`, comment)
  }

  update(comment:Comment): Observable<any>{
    return this.http.put(`${this.apiURL}api/comments`, comment)
  }

  delete(id:number|string): Observable<any>{
    return this.http.delete(`${this.apiURL}api/comments/` + id)
  }

  show(id:number|string): Observable<any>{
    return this.http.get(`${this.apiURL}api/comments` + id)
  }
}
