import {Component, forwardRef, Input} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';
import {TenkeyTemplate} from './tenkey-template';
import {range} from '../../utility/range';

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

  baseNumbers: number[] = [];
  selectedNumber: number | undefined;
  onChange: any = () => {};
  onTouched: any = () => {};

  @Input() max: number = 9;

  @Input() width: number = 3;

  constructor() {
  }

  ngOnInit(): void {
    this.baseNumbers = range(1, this.max);

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
