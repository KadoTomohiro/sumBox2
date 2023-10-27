import { Injectable } from '@angular/core';
import {SumBoxSet} from "./sum-box-set";
import {SumBox} from "./sum-box";
import {range} from "../utility/range";
import {BehaviorSubject, Observable, map} from 'rxjs';
import {SumBoxQueryParameter} from './sum-box-query-parameter';

@Injectable({
  providedIn: 'root'
})
export class SumBoxService {
  private readonly allSumBoxSets: SumBoxSet;

  private _candidateSumBoxSetsSource: BehaviorSubject<SumBoxSet>;
  /** 候補のSumBoxSetの最新の状態を表すストリーム */
  public candidateSumBoxSets$: Observable<SumBoxSet>;
  public summary$: Observable<number[]>;

  public attentionSource = new BehaviorSubject<number | null>(null);
  public attentions$: Observable<number | null> = this.attentionSource.asObservable();
  constructor() {
    // 全パターンのSumBoxSetを生成する
    this.allSumBoxSets = this.generateAllSumBoxSets();
    this._candidateSumBoxSetsSource = new BehaviorSubject<SumBoxSet>(this.allSumBoxSets);
    this.candidateSumBoxSets$ = this._candidateSumBoxSetsSource.asObservable();
    this.summary$ = this.candidateSumBoxSets$.pipe(
      map(sumBoxSets => sumBoxSets.selectedDistinctUnits)
    );
  }

  /**
   * クエリパラメータを受け取り、SumBoxSetをフィルタリングする
   */
  public filterSumBoxSets(query: SumBoxQueryParameter): void {
    const filteredSumBoxSets = this.allSumBoxSets.filter(query);
    this.updateCandidateSumBoxSets(filteredSumBoxSets);
  }

  /**
   * SumBoxの選択状態を変更する
   */
  public toggleSumBoxSelected(sumBox: SumBox): void {
    const candidate = this._candidateSumBoxSetsSource.getValue()
    candidate.toggleSelected(sumBox);


    this.updateCandidateSumBoxSets(candidate);
  }

  public changeAttention(num: number) {
    const next = this.attentionSource.getValue() === num ? null : num;
    this.attentionSource.next(next);
  }

  /**
   * 全パターンのSumBoxSetを生成する
   * @private
   */
  private generateAllSumBoxSets(): SumBoxSet {
    const seeds: number[] = range(SumBox.MIN_SEED, SumBox.MAX_SEED);
    return new SumBoxSet(seeds);
  }

  /**
   * 新しい候補のSumBoxSetを配信する
   */
  public updateCandidateSumBoxSets(sumBoxSet: SumBoxSet): void {
    this._candidateSumBoxSetsSource.next(sumBoxSet);
  }

}
