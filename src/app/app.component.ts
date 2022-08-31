import { UserService } from './services/user.service';
import { AfterContentChecked, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UserService]
})
export class AppComponent implements OnInit {
  title = 'UserAvailabe';

  constructor(private userService: UserService) {
  }

  pusers: { name: string; status: string; }[] = [];

  ngOnInit() {
    this.pusers = this.userService.users;
    console.log("ngOnInit called");
  }

}
