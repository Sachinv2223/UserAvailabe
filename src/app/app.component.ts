import { UserService } from './services/user.service';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

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

  @ViewChild('paragraph', { static: true })
  pargraphEl!: ElementRef;

  pusers: { name: string; status: string; }[] = [];

  ngOnInit() {
    this.pusers = this.userService.users; //call by refernce
    console.log("Inside ngOnInit of parent class")
    this.pargraphEl.nativeElement.innerHTML = "This paragraph is edited in ngOnInit() of parent class";
    this.pargraphEl.nativeElement.style.margin = '20px';
    console.log(this.pargraphEl);
  }



}
