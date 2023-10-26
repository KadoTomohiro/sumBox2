import {
  AfterContentInit,
  Component,
  ElementRef,
  Input,
  OnChanges,
  Renderer2,
  SimpleChanges, ViewChild
} from '@angular/core';
import {Scale} from "../primitives";

@Component({
  selector: 'sb-stack',
  templateUrl: './stack.component.html',
  styleUrls: ['./stack.component.css']
})
export class StackComponent implements OnChanges, AfterContentInit{
  @Input()
  public gapScale: Scale = 's0';

  @ViewChild('container', {static: true})
  container: ElementRef | undefined;

  constructor(
    private renderer: Renderer2
  ) { }

  ngAfterContentInit(): void {
    this.setGapScale()
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.setGapScale()
  }

  setGapScale() {
    if (this.container) {
      this.renderer.setStyle(this.container.nativeElement, 'gap', `var(--${this.gapScale})`);
    }
  }
}
