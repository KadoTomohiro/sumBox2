import {sum} from "../utility/sum";
import { SumBoxQueryParameter } from "./sum-box-query-parameter";

/** SumBox class
 * description: 1~9の重複しない任意の組み合わせのセットを表すクラス。
 * */
export class SumBox {

  /** シード値の最大値 */
  static readonly MAX_SEED = 0b111111111;
  /** シード値の最小値 */
  static readonly MIN_SEED = 0b000000000;

  private readonly _units: number[];
  /**
   * @description 1~9の重複しない任意の組み合わせのセット。
   */
  get units(): number[] {
    return Array.from(this._units);
  }

  /**
   * @discription unitsの合計値
   */
  get total(): number {
    return sum(this._units);
  }

  /**
   * @description unitsの要素数
   */
  get length(): number {
    return this._units.length;
  }

  private _selected: boolean = true;
  /**
   * @description 選択状態
   */
  get selected(): boolean {
    return this._selected;
  }

  /**
   * @param seed{number} 0b000000000~0b111111111の9bitの数値
   */
  constructor(public readonly seed: number) {
    if (!this.verifySeed(seed)) {
      throw new Error(`${seed} is invalid seed value`);
    }

    this._units = this.generateUnits(seed);
  }

  /** *
   * @description 選択状態を切り替える
   */
  toggleSelected(): void {
    this._selected = !this._selected;
  }

  /**
   * @description クエリ条件に一致するかの判定
   */
  match(query: SumBoxQueryParameter): boolean {
    return this.matchByTotal(query)
      && this.matchByLength(query)
      && this.matchByIncludes(query)
      && this.matchByExcludes(query);
  }


  /**
   * シード値から1~9の重複しない任意の組み合わせのセットを生成する
   * @param seed{number} 0b000000000~0b111111111の9bitの数値
   */
  private generateUnits(seed: number): number[] {
    const bits = seed.toString(2)
                              .padStart(9, '0')
                              .split('');
    return bits.map((bit, index) => {
      return bit === '1' ? index + 1 : 0;
    }).filter(unit => unit !== 0);
  }

  /**
   * @description シード値が0b000000000~0b111111111の9bitの数値であるかを検証する
   * @param seed
   */
  private verifySeed(seed: number): boolean {
    return seed >= SumBox.MIN_SEED && seed <= SumBox.MAX_SEED;
  }

  private matchByTotal(query: SumBoxQueryParameter): boolean {
    return query.total === undefined || query.total === this.total;
  }

  private matchByLength(query: SumBoxQueryParameter) {
    return query.length === undefined || query.length === this.length;
  }

  private matchByIncludes(query: SumBoxQueryParameter) {
    return query.includes === undefined || query.includes.every(include => this.units.includes(include));
  }

  private matchByExcludes(query: SumBoxQueryParameter) {
    return query.excludes === undefined || query.excludes.every(exclude => !this.units.includes(exclude));
  }
}