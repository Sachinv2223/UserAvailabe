import { UserService } from './../services/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  username: string = '';
  status: string = 'active';

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  addUser() {
    this.userService.addNewUser(this.username, this.status);
    console.log("addUser() called");
    console.log(this.userService.users);
  }

}
