import {Component, forwardRef} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';
import {generateBaseNumbers} from '../../sum-box/generate-base-numbers';
import {TenkeyTemplate} from './tenkey-template';

@Component({
  selector: 'sb-tenkey',
  templateUrl: './tenkey.component.html',
  styleUrls: ['./tenkey.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TenkeyComponent),
      multi: true
    }
  ]
})
export class TenkeyComponent implements ControlValueAccessor, TenkeyTemplate {

  baseNumbers: number[]
  selectedNumber: number | undefined;
  onChange: any = () => {};
  onTouched: any = () => {};

  constructor() {
    this.baseNumbers = generateBaseNumbers();
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  writeValue(selected: number): void {
    this.selectedNumber = selected;
  }

  onToggle(value: number) {
    this.selectedNumber = value;
    this.changeValue()
  }

  isSelected(value: number) {
    return this.selectedNumber === value;
  }

  reset() {
    this.selectedNumber = undefined;
    this.changeValue();
  }

  private changeValue() {
    this.onChange(this.selectedNumber);
    this.onTouched();
  }
}
