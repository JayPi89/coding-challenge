import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Country } from '../models/country.model';

const baseUrl = 'http://localhost:8080/api/countries';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Country[]> {
    return this.http.get<Country[]>(baseUrl);
  }
  
  findByName(name: any): Observable<Country[]> {
    return this.http.get<Country[]>(`${baseUrl}/${name}`);
  }

  create(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }

}