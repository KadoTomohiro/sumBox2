import { Component } from '@angular/core';

@Component({
  selector: 'sb-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent {
  operands: number[] = [];

  newOperand: number | undefined= undefined;

  get total(): number {
    return this.operands.reduce((a, b) => a + b, 0);
  }

  onEnter() {
    if (!this.newOperand) {
      return;
    }
    this.operands.push(this.newOperand);
    this.newOperand = undefined;
  }

  onRemoveClick(index: number) {
    this.operands.splice(index, 1);
  }

  onResetClick() {
    this.operands = [];
    this.newOperand = undefined;
  }
}
