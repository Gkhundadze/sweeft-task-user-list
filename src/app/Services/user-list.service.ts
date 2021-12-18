import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
@Injectable({
  providedIn: 'root'
})
export class UserListService {

  constructor(private http:HttpClient) { }
  getUsers(page:number, pageSize:number):Observable<any>{
    return this.http.get(environment.BaseUrl + '/' + page + '/' + pageSize)
  }
}
