import { Component, ContentChild, OnInit, ElementRef, AfterContentInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit, AfterContentInit {

  constructor() { }
  ngAfterContentInit(): void {
    console.log("Inside child ngAfterContentInit");
    console.log(this.paraEl);
    this.paraEl.nativeElement.innerHTML = "This paragraph is edited in ngAfterContentInit of child class"
  }

  ngOnInit(): void {
    console.log("Inside child ngOnInit");
    console.log(this.paraEl);
  }

  @ContentChild('paragraph')
  paraEl!: ElementRef;

}
