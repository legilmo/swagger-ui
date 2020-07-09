import { Component, OnInit } from '@angular/core';
import { UserService, User } from '../user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  user: User = new User(0, "","");

  constructor(
    private userService: UserService
  ) { }

  ngOnInit() {
  }

  addUser(value: User): void {
    this.user = value; 
    this.userService.addUser(this.user)
        .subscribe( data => {
          alert("user created successfully.");
        });

  };

}