import {sum} from "../utility/sum";

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
}
