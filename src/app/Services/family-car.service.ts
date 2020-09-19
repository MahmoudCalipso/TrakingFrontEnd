import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { TokenService } from './token.service';
import { FamilyCarModule } from '../Models/family-car/family-car.module';

const API_PATH = 'http://localhost:5000/api/FamilyCar';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class FamilyCarService {

  constructor(private http: HttpClient, private router: Router , private token: TokenService ) { }
  addFamilyCar(FamilyCar): Observable<FamilyCarModule>{
    return this.http.post<FamilyCarModule>(API_PATH, FamilyCar );
  }
  getAllFamilyCar(): Observable<FamilyCarModule[]>{
     return this.http.get<FamilyCarModule[]>(API_PATH, {responseType: 'json'});
  }
  getFamilyCarById(id): Observable<FamilyCarModule>{
    return this.http.get<FamilyCarModule>(API_PATH + '/' + id, {responseType: 'json'});
  }
  editeFamilyCar(id): Observable<FamilyCarModule>{
    return this.http.get<FamilyCarModule>(API_PATH + '/' + id, {responseType: 'json'});
  }
  deleteFamilyCar(id): Observable<FamilyCarModule>{
    return this.http.get<FamilyCarModule>(API_PATH + '/' + id, {responseType: 'json'});
  }
}
