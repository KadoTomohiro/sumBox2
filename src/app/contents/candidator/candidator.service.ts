import { Injectable } from '@angular/core';
import {SumBoxSet} from "../../sum-box/sum-box-set";
import {SumBox} from "../../sum-box/sum-box";
import {range} from "../../utility/range";
import {BehaviorSubject, Observable, map} from 'rxjs';
import {SumBoxQueryParameter} from '../../sum-box/sum-box-query-parameter';

@Injectable({
  providedIn: 'root'
})
export class CandidatorService {
  private readonly allSumBoxSets: SumBoxSet;

  private _candidateSumBoxSetsSource: BehaviorSubject<SumBoxSet | null> = new BehaviorSubject<SumBoxSet | null>(null);
  /** 候補のSumBoxSetの最新の状態を表すストリーム */
  public candidateSumBoxSets$: Observable<SumBoxSet | null>;
  public summary$: Observable<number[] | null>;

  public attentionSource = new BehaviorSubject<number | null>(null);
  public attentions$: Observable<number | null> = this.attentionSource.asObservable();

  public commons$: Observable<number[]>;

  constructor() {
    // 全パターンのSumBoxSetを生成する
    this.allSumBoxSets = this.generateAllSumBoxSets();
    this.candidateSumBoxSets$ = this._candidateSumBoxSetsSource.asObservable();
    this.summary$ = this.candidateSumBoxSets$.pipe(
      map(sumBoxSets => sumBoxSets?.selectedDistinctUnits ?? null)
    );

    this.commons$ = this.candidateSumBoxSets$.pipe(
      map(sumBoxSets => sumBoxSets?.getCommonUnits() ?? [])
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
    const candidate = this.getCurrentCandidate() ?? this.generateAllSumBoxSets();
    candidate.toggleSelected(sumBox);


    this.updateCandidateSumBoxSets(candidate);
  }

  /**
   * 新しい候補のSumBoxSetを配信する
   */
  public updateCandidateSumBoxSets(sumBoxSet: SumBoxSet): void {
    this._candidateSumBoxSetsSource.next(sumBoxSet);
  }

  /**
   * 候補のSumBoxSetを取得する
   * @private
   */
  private getCurrentCandidate() {
    return this._candidateSumBoxSetsSource.getValue();
  }

  /**
   * 注目対象を変更する
   * @param num 注目対象の数字
   */
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

}
