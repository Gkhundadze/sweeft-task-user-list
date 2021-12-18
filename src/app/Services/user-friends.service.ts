import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';


@Injectable({
  providedIn: 'root'
})
export class UserFriendsService {

  constructor(private http:HttpClient) { }
  getUserFriends(userId:number, page:number, pageSize:number):Observable<any>{
    return this.http.get(environment.BaseUrl + '/' + userId + '/' + 'friends/'+ page + '/' + pageSize)
  }
}
