import {Directive, ElementRef, Input, OnChanges, Renderer2, SimpleChanges} from '@angular/core';

@Directive({
  selector: '[sbSelected]'
})
export class SelectedDirective implements OnChanges{

  @Input() sbSelected: boolean = false
  constructor(
    private renderer: Renderer2,
    private elementRef: ElementRef
  ) { }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes)
    if(changes['sbSelected'].currentValue) {
      this.select()
    } else {
      this.deselect()
    }
  }


  private select() {
    this.renderer.addClass(this.elementRef.nativeElement, 'selected')
  }

  private deselect() {
    this.renderer.removeClass(this.elementRef.nativeElement, 'selected')
  }

}
