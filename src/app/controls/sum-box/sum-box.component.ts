import {Component, Input} from '@angular/core';
import {SumBox} from '../../sum-box/sum-box';
import {SumBoxTemplate} from './sum-box-template';

@Component({
  selector: 'sb-sum-box',
  templateUrl: './sum-box.component.html',
  styleUrls: ['./sum-box.component.css']
})
export class SumBoxComponent implements SumBoxTemplate{
  @Input() sumBox: SumBox | undefined;
  @Input() attentionNumber: number | null = null;

  get numbers(): number[] {
    return this.sumBox?.units ?? [];
  }

  selected(_: number): boolean {
    return this.sumBox?.selected ?? false;
  }

  disabled(_: number): boolean {
    return !this.selected(_);
  }

  attention(num: number): boolean {
    return this.attentionNumber === num;
  }

  onClick(_: number): void {}
}
