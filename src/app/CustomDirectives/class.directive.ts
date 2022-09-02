import { ConditionalExpr } from '@angular/compiler';
import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appClass]'
})
export class ClassDirective {

  constructor(private el: ElementRef, private renderer: Renderer2) {
  }

  @Input('appClass') set display(value: Object) {
    let entries = Object.entries(value);
    // for (let entry of entries) {
    //   if (entry[1]) {
    //     this.renderer.addClass(this.el.nativeElement, entry[0]);
    //   }
    // }
    for (let [className, value] of entries) {
      if (value) {
        this.renderer.addClass(this.el.nativeElement, className);
      }
    }

  }

}
