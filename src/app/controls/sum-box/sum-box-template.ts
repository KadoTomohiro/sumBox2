export interface SumBoxTemplate {
  numbers: number[];
  selected: (num: number) => boolean;
  disabled: (num: number) => boolean;
  attention: (num: number) => boolean;
  common: (num: number) => boolean;
  onClick: (num: number) => void;
}
