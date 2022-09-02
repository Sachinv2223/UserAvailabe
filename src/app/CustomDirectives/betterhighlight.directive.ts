import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBetterhighlight]'
})
export class BetterhighlightDirective implements OnInit {

  constructor(private el: ElementRef, private renderer: Renderer2) {
  }

  ngOnInit(): void {

    this.bgColor = this.defaultColor;
    this.renderer.setStyle(this.el.nativeElement, 'transitionDuration', '0.5s');
    this.renderer.setStyle(this.el.nativeElement, 'transitionProperty', 'all');
    // console.log(this.el);

  }

  @Input()
  defaultColor!: string;
  @Input('appBetterhighlight')
  highlightColor!: string;

  @HostBinding('style.backgroundColor')
  bgColor: string = this.defaultColor;

  @HostBinding('style.border')
  brd: string = 'none';

  @HostListener('mouseenter')
  mouseEnter() {
    this.bgColor = this.highlightColor;
    this.brd = '2px solid red'
  }

  @HostListener('mouseleave')
  mouseLeave() {
    this.bgColor = this.defaultColor;
    this.brd = 'none';
  }

}
