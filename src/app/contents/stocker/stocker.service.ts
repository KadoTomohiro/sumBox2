import { Injectable } from '@angular/core';
import {BehaviorSubject, filter, map} from "rxjs";
import {Stock} from "../../controls/stock/stock";
import {QueryFormService} from "../candidator/query-form/query-form.service";
import {CandidatorService} from "../candidator/candidator.service";
import {combineLatest} from "rxjs";
import {SumBoxSet} from "../../sum-box/sum-box-set";

@Injectable({
  providedIn: 'root'
})
export class StockerService {

  /**
   * ストック状態を保持するSubject
   */
  private stockSubject: BehaviorSubject<Stock[] | null> = new BehaviorSubject<Stock[] | null>(null)
  /**
   * ストック状態を表すストリーム
   */
  public stocks$ = this.stockSubject.asObservable();

  /**
   * ストック対象にアクセスするSubject
   */
  private stockTargetSubject: BehaviorSubject<Stock | null> = new BehaviorSubject<Stock | null>(null)

  constructor(
    private candidatorService: CandidatorService,
    private queryFormService: QueryFormService,
  ) {
    this.startStockMonitoring();
  }

  private startStockMonitoring() {
    // sumBoxのcandidateとqueryFormのqueryを組み合わせてストック状態を監視する
    combineLatest([
      this.candidatorService.candidateSumBoxSets$.pipe(filter((candidate): candidate is SumBoxSet => candidate !== null)),
      this.queryFormService.queryParameter$
    ]).pipe(
      map(([candidates, query]) => {
          return {candidates, query}
        }
      )).subscribe(this.stockTargetSubject)
  }

  /**
   * 現在の候補、クエリ条件をストックする
   */
  stock() {
    const stock = this.stockTargetSubject.value;
    if (stock) {
      const stocks = this.stockSubject.value || [];
      stocks.push(stock);
      this.stockSubject.next(stocks);
    }
  }

  /**
   * ストックを削除する
   */
  removeStock(index: number) {
    const stocks = this.stockSubject.value || [];
    stocks.splice(index, 1);
    this.stockSubject.next(stocks);
  }

  /**
   * 選択されたストックで候補とクエリパラメータを上書きする
   */
  selectStock(stock: Stock) {
    this.candidatorService.updateCandidateSumBoxSets(stock.candidates);
    this.queryFormService.update(stock.query);
  }
}
