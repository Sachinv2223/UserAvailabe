import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appStyle]'
})
export class StyleDirective {

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  @Input('appStyle') set setStyle(obj: Object) {
    let enteries = Object.entries(obj);
    for (const [style, value] of enteries) {
      this.renderer.setStyle(this.el.nativeElement, style, value);
    }
  }

}
