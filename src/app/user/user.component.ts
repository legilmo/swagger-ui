import { Component, OnInit } from '@angular/core';
import { UserService, User } from '../user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  users:User[];
   
  constructor(
    private userService:UserService

  ) { }

  ngOnInit() {
    this.userService.list().subscribe(
     response =>this.handleSuccessfulResponse(response),
    );
  }

handleSuccessfulResponse(response)
{
    this.users=response;
}

deleteUser(user: User): void {
  this.userService.deleteUser(user)
    .subscribe( data => {
      this.users = this.users.filter(u => u !== user);
    })
};


}