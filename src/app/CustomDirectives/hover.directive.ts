import { Directive, ElementRef, HostListener, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHover]'
})
export class HoverDirective implements OnInit {

  constructor(private element: ElementRef, private renderer: Renderer2) { }

  ngOnInit(): void {
    this.renderer.setStyle(this.element.nativeElement, 'transitionDuration', '2s');
    this.renderer.setStyle(this.element.nativeElement, 'transitionProperty', 'all');
  }

  @HostListener('mouseenter')
  onMouseHover() {
    this.renderer.setStyle(this.element.nativeElement, 'width', '120%');
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.renderer.setStyle(this.element.nativeElement, 'width', '100%');
  }
}
