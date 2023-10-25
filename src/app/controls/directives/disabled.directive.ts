import {Directive, ElementRef, Input, OnChanges, Renderer2} from '@angular/core';

@Directive({
  selector: '[sbDisabled]'
})
export class DisabledDirective implements OnChanges{

  @Input() sbDisabled: boolean = false

  constructor(
    private renderer: Renderer2,
    private elementRef: ElementRef
  ) { }

  ngOnChanges() {
    if(this.sbDisabled) {
      this.disable()
    } else {
      this.enable()
    }
  }

  private disable() {
    this.renderer.addClass(this.elementRef.nativeElement, 'disabled')
  }

  private enable() {
    this.renderer.removeClass(this.elementRef.nativeElement, 'disabled')
  }
}
