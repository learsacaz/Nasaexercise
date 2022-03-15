import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NasaService {

  constructor(private http:HttpClient) { }
  getApod(): Observable<any>{
    return this.http.get<any>(`${environment.url}${environment.apikey}`)
  } 

  
}
