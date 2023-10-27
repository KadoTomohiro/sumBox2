import { sliceBySize } from './slice-by-size';

describe('SliceBySize', () => {
  it('should create an instance', () => {
    expect(sliceBySize).toBeTruthy();
  });

    it('should slice an array into chunks of a given size', () => {
        const array = [1, 2, 3, 4, 5, 6, 7, 8];
        const result = sliceBySize(array, 3);
        expect(result).toEqual([[1, 2, 3], [4, 5, 6], [7, 8]]);
    });
});
