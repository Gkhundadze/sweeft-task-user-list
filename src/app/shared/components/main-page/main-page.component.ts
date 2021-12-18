import { Component, ElementRef, OnInit } from '@angular/core';
import { UserListService } from 'src/app/Services/user-list.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  public pagination:any = {}
  public userList:any;
  constructor(private users: UserListService) { }

  ngOnInit(): void {
    this.users.getUsers(1,10).subscribe((data) => {
      this.pagination = data.pagination
      this.userList = data.list
      
    })
  }
  nextPage(){
    this.users.getUsers(this.pagination.nextPage,10).subscribe((data) => {
      this.pagination = data.pagination
      this.userList = data.list
    })
    
  }
  previousPage(){
   if(this.pagination.previousPage){
    this.users.getUsers(this.pagination.previousPage,10).subscribe((data) => {
      this.pagination = data.pagination
      this.userList = data.list
    })
   }
   else{
     console.log("error");
     
   }
  }
  firstPage(){
    this.users.getUsers(1,10).subscribe((data) => {
      this.pagination = data.pagination
      this.userList = data.list
      console.log(this.pagination, this.userList);
    })
  }
}
