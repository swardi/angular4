import { Component, OnInit } from '@angular/core';
import {UserService, User} from '../user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
})

export class UserListComponent implements OnInit {
  private users: User[];

  constructor(private userService: UserService) { 
    console.log("cons");
    this.list();
  }

  ngOnInit() {

  }


  list(){
      this.userService.list().subscribe(response=>{
      this.users = response.json();
    },error=>{
      console.log(error);
    });
  }
}


