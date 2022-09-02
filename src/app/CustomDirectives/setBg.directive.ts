import { Directive, ElementRef, OnInit } from "@angular/core";

@Directive({
    selector: '[setBg]'
})
export class setBgDirective implements OnInit {
    constructor(private element: ElementRef) { }
    ngOnInit(): void {

        this.element.nativeElement.style.backgroundColor = '#c8e6c9';

    }


}