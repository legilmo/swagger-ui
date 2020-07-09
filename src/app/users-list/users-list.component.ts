import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  users: Array<any>;

  constructor(private userService: UserService) { }

  ngOnInit() {
      this.list();
  }
  list() {
     this.userService.list().subscribe(data => this.users = data);
  }

}
