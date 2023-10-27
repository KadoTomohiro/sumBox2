import { Component } from '@angular/core';
import {Stock} from '../../controls/stock/stock';
import { Observable} from 'rxjs';
import {StockerService} from "./stocker.service";

@Component({
  selector: 'sb-stocker',
  templateUrl: './stocker.component.html',
  styleUrls: ['./stocker.component.css']
})
export class StockerComponent {

  stocks$: Observable<Stock[] | null> = this.stockerService.stocks$

  constructor(
      private stockerService: StockerService
  ) {
  }

  onStockClick() {
    this.stockerService.stock();
  }

  onSelect(stock: Stock) {
    this.stockerService.selectStock(stock);
  }

  onRemove(index: number) {
    this.stockerService.removeStock(index);
  }
}
