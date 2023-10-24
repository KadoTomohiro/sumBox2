import {SumBox} from "./sum-box";
import {SumBoxQueryParameter} from "./sum-box-query-parameter";

/**
 * SumBoxSet class
 * @class SumBoxSet
 *
 * @description SumBoxのセットを表すクラス
 */
export class SumBoxSet {

  private readonly _sumBoxes: SumBox[] = [];

  public get sumBoxes(): SumBox[] {
    return Array.from(this._sumBoxes);
  }



  /**
   *
   * @param seeds {number[]} 0b000000000~0b111111111の9bitの数値の配列
   */
  constructor(public readonly seeds: number[] = []) {
    this._sumBoxes = this.generateSumBoxes(seeds);
  }

  public filter(query: SumBoxQueryParameter): SumBoxSet {
    const filteredSumBoxes = this._sumBoxes.filter(sumBox => {
      return this.filterByTotal(query, sumBox)
        && this.filterByLength(query, sumBox)
        && this.filterByIncludes(query, sumBox)
        && this.filterByExcludes(query, sumBox);
    });

    return new SumBoxSet(filteredSumBoxes.map(sumBox => sumBox.seed));
  }

  private generateSumBoxes(seeds: number[]) {
    return seeds.map(seed => new SumBox(seed));
  }

  private filterByTotal(query: SumBoxQueryParameter, sumBox: SumBox) {
    return query.total === undefined || query.total === sumBox.total;
  }

  private filterByLength(query: SumBoxQueryParameter, sumBox: SumBox) {
    return query.length === undefined || query.length === sumBox.length;
  }

  private filterByIncludes(query: SumBoxQueryParameter, sumBox: SumBox) {
    return query.includes === undefined || query.includes.every(number => sumBox.units.includes(number));
  }

  private filterByExcludes(query: SumBoxQueryParameter, sumBox: SumBox) {
    return query.excludes === undefined || query.excludes.every(number => !sumBox.units.includes(number));
  }
}
