import { range } from './range';

describe('Range', () => {
  it('should create an instance', () => {
    expect(range).toBeTruthy();
  });

  it('should return an array of numbers from start to end, inclusive', () => {
    expect(range(1, 3)).toEqual([1, 2, 3]);
  });
});
