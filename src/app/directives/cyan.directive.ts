import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[Color-Cyan]'
})
export class CyanDirective {

  constructor(private el:ElementRef) {
    el.nativeElement.style.color='#424242';
    el.nativeElement.style.background = "#33EEFF";
   }

}
