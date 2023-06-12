import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlights]'
})
export class HighlightsDirective {

  @HostListener('mouseenter') onMouseHover(){
    this.element.nativeElement.style.backgroundColor = 'red';
    this.element.nativeElement.style.color = 'blue';
  }

  @HostListener('mouseleave') onMouseLeave(){
    this.element.nativeElement.style.backgroundColor = '';
    this.element.nativeElement.style.color = '';
  }

  constructor(private element: ElementRef) {
  }

}
