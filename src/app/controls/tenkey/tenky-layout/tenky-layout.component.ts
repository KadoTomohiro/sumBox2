import {Component, ElementRef, Input, Renderer2, ViewChild} from '@angular/core';

@Component({
  selector: 'sb-tenky-layout',
  templateUrl: './tenky-layout.component.html',
  styleUrls: ['./tenky-layout.component.css']
})
export class TenkyLayoutComponent {
  @Input() width: number | string = 3;

  @ViewChild('keysContainer', {static: true}) keysContainer: ElementRef | undefined;

  constructor(
    private renderer: Renderer2
  ) {}

  ngOnInit() {
    this.setGridWidth()
  }

  setGridWidth() {
    if (this.keysContainer) {
      // this.renderer.setStyle(this.keysContainer.nativeElement, 'grid-template-columns', `repeat(${this.width}, 1fr)`);
    }
  }
}
