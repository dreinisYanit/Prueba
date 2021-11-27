import { Inject, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  base:string;
  constructor(private http:HttpClient, @Inject('BASE_URL') base:string) { this.base = base; }

  get():Observable<any>{
    return this.http.get<any>('https://rickandmortyapi.com/api/character/');
  }

  getNext(next:string):Observable<any>{
    return this.http.get<any>(next);
  }

}
