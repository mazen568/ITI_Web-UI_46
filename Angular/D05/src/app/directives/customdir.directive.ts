import { Directive, ElementRef, HostListener,Input } from '@angular/core';

@Directive({
  selector: '[appCustomdir]'
})
export class CustomdirDirective {

  @Input() c:string='';

  constructor(private el:ElementRef) { 
     console.log(el);
    this.el.nativeElement.style.color="red";

    
  }

  @HostListener('mouseover') onMouseOver() {
    this.el.nativeElement.style.color="green";
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.el.nativeElement.style.color=this.c;
  }

}
