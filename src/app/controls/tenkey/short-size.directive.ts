import {Directive, HostBinding} from '@angular/core';

@Directive({
  selector: 'sb-tenkey[shortSize], sb-mulch-tenkey[shortSize]'
})
export class ShortSizeDirective {

  @HostBinding('style.max-width') maxWidth = 'calc(var(--s4) * 3 + var(--s-5) * 2)';
  // max-width: ;
  constructor() { }

}
