import {Component, forwardRef, Input} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';
import {TenkeyTemplate} from './tenkey-template';
import {generateBaseNumbers} from '../../sum-box/generate-base-numbers';

@Component({
  selector: 'sb-mulch-tenkey',
  templateUrl: './tenkey.component.html',
  styleUrls: ['./tenkey.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => MulchTenkeyComponent),
      multi: true
    }
  ]
})
export class MulchTenkeyComponent implements ControlValueAccessor, TenkeyTemplate{
  baseNumbers: number[];
  selectedNumbers: number[] | undefined;
  onChange: any = () => {};
  onTouched: any = () => {};

  @Input() max: number = 9;
  @Input() width: number = 3;

  constructor() {
    this.baseNumbers = generateBaseNumbers();
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn
  }

  writeValue(numbers: number[] | undefined): void {
    this.selectedNumbers = numbers;
  }

  isSelected(value: number): boolean {
    return this.selectedNumbers?.includes(value) ?? false;
  }

  onToggle(value: number): void {
    this.selectedNumbers = this.getSelectedNumbers(value);
    this.changeValue();
  }

  reset() {
    this.selectedNumbers = undefined;
    this.changeValue()
  }

  private getSelectedNumbers(value: number) {
    if (!this.selectedNumbers) this.selectedNumbers = [];
    return this.isSelected(value) ?
      this.selectedNumbers.filter(n => n !== value) :
      [...this.selectedNumbers, value].sort();
  }

  private changeValue() {
    this.onChange(this.selectedNumbers);
    this.onTouched();
  }

}
