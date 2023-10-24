import { Injectable } from '@angular/core';
import {SumBoxSet} from "./sum-box-set";
import {SumBox} from "./sum-box";
import {range} from "../utility/range";
import {BehaviorSubject, Observable} from 'rxjs';
import {SumBoxQueryParameter} from './sum-box-query-parameter';

@Injectable({
  providedIn: 'root'
})
export class SumBoxService {
  private allSumBoxSets: SumBoxSet;

  private _candidateSumBoxSetsSource: BehaviorSubject<SumBoxSet>;
  /** 候補のSumBoxSetの最新の状態を表すストリーム */
  public candidateSumBoxSets$: Observable<SumBoxSet>
  constructor() {
    // 全パターンのSumBoxSetを生成する
    this.allSumBoxSets = this.generateAllSumBoxSets();
    this._candidateSumBoxSetsSource = new BehaviorSubject<SumBoxSet>(this.allSumBoxSets);
    this.candidateSumBoxSets$ = this._candidateSumBoxSetsSource.asObservable();
  }

  /**
   * クエリパラメータを受け取り、SumBoxSetをフィルタリングする
   */
  public filterSumBoxSets(query: SumBoxQueryParameter): void {
    const filteredSumBoxSets = this.allSumBoxSets.filter(query);
    this.updateCandidateSumBoxSets(filteredSumBoxSets);
  }

  /**
   * シード値をキーとしてSumBoxの選択状態を変更する
   */
  public toggleSumBoxSelected(seed: number): void {
    const candidate = this._candidateSumBoxSetsSource.getValue()
    candidate.toggleSelected(seed)

    this.updateCandidateSumBoxSets(candidate);
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
