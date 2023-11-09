import {sum} from "../utility/sum";
import { SumBoxQueryParameter } from "./sum-box-query-parameter";

/** SumBox class
 * description: 1~9の重複しない任意の組み合わせのセットを表すクラス。
 * */
export class SumBox {

  /** シード値の最大値 */
  static readonly MAX_SEED = 0b111111111;
  /** シード値の最小値 */
  static readonly MIN_SEED = 0b000000001;

  private readonly _units: number[];

  private _selected: boolean = true;

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
  get size(): number {
    return this._units.length;
  }

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

  /**
   * @description クエリ条件に一致するかの判定
   */
  match(query: SumBoxQueryParameter): boolean {
    return this.matchByTotal(query)
      && this.matchBySize(query)
      && this.matchByIncludes(query)
      && this.matchByExcludes(query)
      && this.matchBySome(query)
      && this.matchByOnly(query);
  }

  toggleSelected(): void {
    this._selected = !this._selected;
  }


  /**
   * シード値から1~9の重複しない任意の組み合わせのセットを生成する
   * @param seed{number} 0b000000000~0b111111111の9bitの数値
   */
  private generateUnits(seed: number): number[] {
    const bits = seed.toString(2)
                              .padStart(9, '0')
                              .split('')
                              .reverse();
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

  /**
   * @description クエリのtotalに一致するかを判定する。totalが設定されていない場合、falseを返す。
   * @param query
   * @private
   */
  private matchByTotal(query: SumBoxQueryParameter): boolean {
    return query.total === this.total;
  }

  /**
   * @description クエリのsizeに一致するかを判定する。sizeが設定されていない場合、trueを返す。
   * @param query
   * @private
   */
  private matchBySize(query: SumBoxQueryParameter) {
    const {size} = query;
    return this.isUndefined(size) || size === this.size;
  }

  /**
   * @description クエリのincludesに含まれる数字が全て一致するかを判定する。includesが設定されていない場合、trueを返す。
   * @param query
   * @private
   */
  private matchByIncludes(query: SumBoxQueryParameter) {
    const {includes} = query;
    return this.isUndefined(includes) || includes.every(include => this.units.includes(include));
  }

  /**
   * @description クエリのexcludesに含まれる数字が全て一致しないかを判定する。excludesが設定されていない場合、trueを返す。
   * @param query
   * @private
   */
  private matchByExcludes(query: SumBoxQueryParameter) {
    const {excludes} = query;
    return this.isUndefined(excludes)|| excludes.every(exclude => !this.units.includes(exclude));
  }

  /**
   * @description クエリのsomeに含まれる数字のいずれかに一致するかを判定する。someが設定されていない場合、trueを返す。
   * @param query
   * @private
   */
  private matchBySome(query: SumBoxQueryParameter) {
    const {some} = query;
    return　this.isUndefined(some) || this.isEmpty(some)|| some.some(some => this.units.includes(some));
  }

  /**
   * @description クエリのonlyに含まれる数字のいずれかに一致するかを判定する。onlyが設定されていない場合、trueを返す。
   * @param query
   * @private
   */
  private matchByOnly(query: SumBoxQueryParameter) {
    const {only} = query;
    console.log(only);
    return this.isUndefined(only) || this.isEmpty(only)|| only.filter(only => this.units.includes(only)).length === 1;
  }

  /** クエリがundefinedかを判定する */
  private isUndefined(queryParameter: SumBoxQueryParameter[keyof SumBoxQueryParameter]):queryParameter is undefined {
    return queryParameter === undefined;
  }

  private isEmpty(queryParameter: SumBoxQueryParameter[keyof SumBoxQueryParameter]):queryParameter is [] {
    return Array.isArray(queryParameter) &&  queryParameter.length === 0
  }
}
