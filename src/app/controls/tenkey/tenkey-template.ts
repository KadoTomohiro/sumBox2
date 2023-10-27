export interface TenkeyTemplate {
  baseNumbers: number[][];
  isSelected(value: number): boolean;
  onToggle(value: number): void;
  reset(): void;
  width: number;
}
