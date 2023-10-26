import {Component, ContentChild, ElementRef, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'sb-numeric-button',
  templateUrl: './numeric-button.component.html',
  styleUrls: ['./numeric-button.component.css']
})
export class NumericButtonComponent{
  @Input() public value: number = 0;
  @Input() public disabled: boolean = false;
  @Input() public selected: boolean = false;
  @Output() toggle = new EventEmitter<number>();

  @ContentChild('button') button: ElementRef<HTMLButtonElement> | undefined;


  constructor() { }

  onClick() {
    this.toggle.emit(this.value);
  }
}
