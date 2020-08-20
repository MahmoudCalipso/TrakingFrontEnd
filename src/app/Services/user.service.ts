import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpParams, HttpClient } from '@angular/common/http';


const API_PATH = 'http://localhost:5000/api/user';
@Injectable({
  providedIn: 'root'
})

export class UserService {

  constructor(private http: HttpClient) { }

  getUsers(): Observable<any>{
    return this.http.get(API_PATH, { responseType: 'json' });
  }
}
