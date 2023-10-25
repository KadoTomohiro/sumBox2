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
  classes: { selected: boolean }  = {
    selected: false
  };

  @Input()
  get selected() {
    return this.classes.selected;
  }
  set selected(value: boolean) {
    this.classes.selected= value;
  }
}
