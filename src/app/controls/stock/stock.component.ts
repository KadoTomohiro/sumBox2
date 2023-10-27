import {Component, EventEmitter, Input, Output} from '@angular/core';
import {SumBox} from '../../sum-box/sum-box';
import {SumBoxQueryParameter} from '../../sum-box/sum-box-query-parameter';
import {SumBoxSet} from '../../sum-box/sum-box-set';
import {Stock} from './stock';

@Component({
  selector: 'sb-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css']
})
export class StockComponent {
  @Input() stock!: Stock;

  @Output() select: EventEmitter<Stock> =new EventEmitter<Stock>();
  @Output() remove: EventEmitter<Stock> =new EventEmitter<Stock>();

  get query(): SumBoxQueryParameter {
    return this.stock.query;
  }

  get candidates(): SumBoxSet {
    return this.stock.candidates;
  }
  onClick() {
    this.select.emit(this.stock);
  }

  onRemoveClick() {
    this.remove.emit(this.stock);
  }
}
