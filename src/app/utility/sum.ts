/** sum function
 * 数値の配列の合計を返す
 * */
export function sum(numbers: number[]): number {
  return numbers.reduce((sum, number) => sum + number, 0);
}
