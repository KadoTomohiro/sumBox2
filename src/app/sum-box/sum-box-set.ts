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
   * @description 選択状態のSumBoxの配列
   */
  public get selectedSumBoxes(): SumBox[] {
    return this._sumBoxes.filter(sumBox => sumBox.selected);
  }

  /**
   * @description 選択状態のSumBoxのもつ重複のない数字の配列
   */
  public get selectedNumbersSummary(): number[] {
    const numbers = this.selectedSumBoxes.map(sumBox => sumBox.units);
    const flattenNumbers = numbers.flat();
    const set = new Set<number>(flattenNumbers);
    return Array.from(set).sort((a, b) => a - b);
  }

  /**
   *
   * @param seeds {number[]} シード値の配列
   */
  constructor(public readonly seeds: number[] = []) {
    this._sumBoxes = this.generateSumBoxes(seeds);
  }

  /**
   * シード値をキーとしてSumBoxをフィルタリングする。フィルタリング結果は新しいSumBoxSetとして返す。
   * @param query {SumBoxQueryParameter} フィルタリング条件
   */
  public filter(query: SumBoxQueryParameter): SumBoxSet {
    const filteredSumBoxes = this._sumBoxes.filter(sumBox => sumBox.match(query))
    const seeds = filteredSumBoxes.map(sumBox => {
      return sumBox.seed;
    });
    return new SumBoxSet(seeds);
  }

  /**
   * シード値をキーとしてSumBoxを取得する
   * @param seed {number} シード値
   * */
  public getSumBox(seed: number): SumBox | undefined {
    return this._sumBoxes.find(sumBox => sumBox.seed === seed);
  }

  /**
   * シード値をキーとして選択状態を切り替える
   * @param seed
   * @private
   */
  public toggleSelected(seed: number): void {
    const sumBox = this.getSumBox(seed);
    if (sumBox) {
      sumBox.toggleSelected();
    }
  }

  private generateSumBoxes(seeds: number[]) {
    return seeds.map(seed => new SumBox(seed));
  }
}
