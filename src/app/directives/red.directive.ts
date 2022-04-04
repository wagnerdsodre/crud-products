import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[dRed]'
})
export class RedDirective {

  constructor(private el: ElementRef) {
    el.nativeElement.style.color="red"
   }

}
