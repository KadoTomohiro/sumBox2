import {Component, Input} from '@angular/core';
import {SumBoxTemplate} from './sum-box-template';
import {range} from '../../utility/range';

@Component({
  selector: 'sb-candidate-summary',
  templateUrl: './sum-box.component.html',
  styleUrls: ['./sum-box.component.css']
})
export class CandidateSummaryComponent implements SumBoxTemplate{

  @Input() summary: number[] = [];

  numbers: number[] = range(1, 9);

  selected(num: number): boolean {
    return this.summary.includes(num);
  };

  disabled(num: number): boolean {
    return !this.selected(num)
  }



}
