import { Component, NgIterable, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserDetailsService } from 'src/app/Services/user-details.service';
import { UserFriendsService } from 'src/app/Services/user-friends.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  public pagination:any = {} 
  public friendList:NgIterable<any> = []
  public UserDetails:any = {}
  constructor(
    private userDetailsService:UserDetailsService,
    private userFriendsService:UserFriendsService,
    private route:ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.userDetailsService.getUserDetails(this.route.snapshot.params['id']).subscribe((res) => {
    this.UserDetails = res 
      console.log(this.UserDetails);
    })
    this.userFriendsService.getUserFriends(this.route.snapshot.params['id'],1, 10).subscribe((res) => {
      this.pagination = res.pagination
      this.friendList = res.list
    })
  }
  firstPage(){
    this.userFriendsService.getUserFriends(this.route.snapshot.params['id'],1, 10).subscribe((res) => {
      this.pagination = res.pagination
      this.friendList = res.list
    })
  }
  previousPage(){
    this.userFriendsService.getUserFriends(this.route.snapshot.params['id'],this.pagination.previousPage, 10).subscribe((res) => {
      this.pagination = res.pagination
      this.friendList = res.list 
    })
  }
  nextPage(){
    this.userFriendsService.getUserFriends(this.route.snapshot.params['id'],this.pagination.nextPage, 10).subscribe((res) => {
      this.pagination = res.pagination
      this.friendList = res.list
    })
  }
}
