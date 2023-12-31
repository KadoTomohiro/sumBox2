import {Component, EventEmitter, Input, Output} from '@angular/core';
import {SumBoxTemplate} from './sum-box-template';
import {range} from '../../utility/range';

@Component({
  selector: 'sb-candidate-summary',
  templateUrl: './sum-box.component.html',
  styleUrls: ['./sum-box.component.css']
})
export class CandidateSummaryComponent implements SumBoxTemplate{

  @Input() summary: number[] | null = [];
  @Input() attentionNumber: number | null = null;
  @Input() commons: number[] = [];

  @Output() select: EventEmitter<number> = new EventEmitter<number>();

  numbers: number[] = range(1, 9);

  selected(num: number): boolean {
    return this.summary?.includes(num) ?? false;
  };

  disabled(num: number): boolean {
    return !this.selected(num)
  }

  attention(num: number): boolean {
    return this.attentionNumber === num;
  }

  common(num: number): boolean {
    return this.commons.includes(num);
  }

  onClick(num: number): void {
    this.select.emit(num);
  }



}
