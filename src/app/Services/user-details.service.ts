import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class UserDetailsService {
  constructor(private http:HttpClient) { }
  getUserDetails(id:number):Observable<any>{
    return this.http.get(environment.BaseUrl + '/' + id)
  }
}
