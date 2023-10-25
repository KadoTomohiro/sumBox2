/**
 * 配列を重複のない新しい配列にして返す
 */
export function distinguish<T>(array: T[]): T[] {
  return Array.from(new Set(array));
}
