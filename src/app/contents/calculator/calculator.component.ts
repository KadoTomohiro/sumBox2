import {Component, ElementRef, ViewChild} from '@angular/core';
import {CalculatorService} from "./calculator.service";
import {first, Observable} from "rxjs";
import {QueryFormService} from "../candidator/query-form/query-form.service";

@Component({
  selector: 'sb-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent {

  newOperand: number | undefined= undefined;

  operands$: Observable<number[]> = this.caluculatorService.operands$;
  total$: Observable<number> = this.caluculatorService.total$;

  @ViewChild('input') input: ElementRef | undefined;

  constructor(
    private caluculatorService: CalculatorService,
    private queryFormService: QueryFormService
  ) {
  }

  onEnter() {
    if (!this.newOperand) {
      return;
    }
    this.caluculatorService.add(this.newOperand);
    this.newOperand = undefined;
  }

  onRemoveClick(index: number) {
    this.caluculatorService.remove(index);
  }

  onResetClick() {
    this.caluculatorService.reset();
    this.newOperand = undefined;
    this.setFocus();
  }

  onClickQueryTotalSetButton() {
    this.caluculatorService.total$
      .pipe(first())
      .subscribe(total => {
        this.queryFormService.update({total});
      });
    this.setFocus();
  }

  setFocus() {
    if (!this.input) {
      return;
    }
    this.input.nativeElement.focus();
  }
}
