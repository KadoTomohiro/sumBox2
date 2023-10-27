import { Component } from '@angular/core';
import {CandidatorService} from '../candidator/candidator.service';
import {Stock} from '../../controls/stock/stock';
import {QueryFormService} from '../candidator/query-form/query-form.service';
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
      private sumBoxService: CandidatorService,
      private queryFormService: QueryFormService,
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
