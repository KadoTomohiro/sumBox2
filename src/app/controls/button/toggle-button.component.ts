import {Component, Input} from '@angular/core';
import {Button} from './button';

@Component({
  selector: 'sb-toggle-button',
  templateUrl: './button.component.html',
  styleUrls: [
    './button.component.css',
    './toggle-button.component.css'
  ]
})
export class ToggleButtonComponent implements Button{
  classes  = {
    selected: false,
    disabled: false,
  };
  @Input()
  get disabled(): boolean {
    return this.classes.disabled;
  }
  set disabled(value: boolean) {
    this.classes.disabled = value;
  }

  @Input()
  get selected() {
    return this.classes.selected;
  }
  set selected(value: boolean) {
    this.classes.selected= value;
  }
}
