import { Component, OnInit } from '@angular/core';
import { UserService, User } from '../user.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {

  id        : string;
  
  user: User;

  constructor(
    private userService: UserService,
    private route: ActivatedRoute
  ) { 

    this.id = this.route.snapshot.params['id'];

  }

  ngOnInit() {
    
    this.userService.getById(this.id).subscribe(
      response =>this.handleSuccessfulResponse(response),
     );
  
  }

  handleSuccessfulResponse(response)
  {
    console.log(response);
    this.user=response;
  }

  public updateUser(user): void {
    this.userService.updateUser(this.user)
        .subscribe( data => {
          alert("user updated successfully.");
        });

  };

  ngOnSubmit(value: User) {
    this.user.firstName = value.firstName;
    this.user.lastName  = value.lastName;
    this.userService.updateUser(this.user)
        .subscribe( data => {
          alert("user updated successfully.");
        });
  }  

}