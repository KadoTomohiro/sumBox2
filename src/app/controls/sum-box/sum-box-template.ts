export interface SumBoxTemplate {
  numbers: number[];
  selected: (num: number) => boolean;
  disabled: (num: number) => boolean;
}
