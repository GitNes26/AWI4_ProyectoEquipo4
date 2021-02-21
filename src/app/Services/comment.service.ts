import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Comment } from '../Models/Comment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  apiURL = environment.apiURL
  header = new HttpHeaders({'Type-content':'aplication/json', 'Authorization':'Bearer '+localStorage.getItem('myToken')})

  constructor(private http:HttpClient) {
    this.header.append('Authorization', 'Bearer '+ localStorage.getItem('myToken'))
   }

  add(comment:Comment): Observable<any>{
    return this.http.post(`${this.apiURL}api/comments`, comment, {headers: this.header})
  }

  update(comment:Comment): Observable<any>{
    return this.http.put(`${this.apiURL}api/comments/`+comment.id, comment, {headers: this.header})
  }

  delete(id:number|string): Observable<any>{
    return this.http.delete(`${this.apiURL}api/comments/` + id, {headers: this.header})
  }

  show() {
    return this.http.get(`${this.apiURL}api/comments`, {headers: this.header})
  }

  showCommentsByProduct(id:number|string): Observable<any> {
    return this.http.get(`${this.apiURL}api/comments/`+ id, {headers: this.header})
  }
}
