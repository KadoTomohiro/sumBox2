import { Component } from '@angular/core';
import {SumBoxService} from '../../sum-box/sum-box.service';
import {Stock} from '../../controls/stock/stock';
import {QueryFormService} from '../candidator/query-form/query-form.service';
import {BehaviorSubject, combineLatest, map, Observable} from 'rxjs';

@Component({
  selector: 'sb-stocker',
  templateUrl: './stocker.component.html',
  styleUrls: ['./stocker.component.css']
})
export class StockerComponent {

  stocks: Stock[] = []
  stock$: Observable<Stock>;
  stockSubject: BehaviorSubject<Stock | null> = new BehaviorSubject<Stock | null>(null)

  constructor(
      private sumBoxService: SumBoxService,
      private queryFormService: QueryFormService
  ) {
    this.stock$ = combineLatest([
      this.sumBoxService.candidateSumBoxSets$,
      this.queryFormService.queryParameter$
    ]).pipe(
        map(([candidates, query]) => {
          return {candidates, query}
        })
    )
    this.stock$.subscribe(this.stockSubject)
  }

  onStockClick() {

  }

  onSelect(stock: Stock) {

  }

  onRemove() {

  }
}
