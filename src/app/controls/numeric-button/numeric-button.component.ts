import {Component, forwardRef, Input} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms";

@Component({
  selector: 'sb-numeric-button',
  templateUrl: './numeric-button.component.html',
  styleUrls: ['./numeric-button.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => NumericButtonComponent),
      multi: true
    }
  ]
})
export class NumericButtonComponent implements ControlValueAccessor{
  @Input() public numeric: number = 0;
  @Input() public disabled: boolean = true;
  public selected: boolean = false

  onChange: any = () => {};
  onTouched: any = () => {};
  constructor() { }

  public onClick(): void {
    console.log('click')
    this.toggleSelected();
    this.onChange(this.selected);
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  writeValue(select: boolean): void {
    this.selected = select;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }


  private toggleSelected() {
    this.selected = !this.selected;
  }
}
