import { SumBoxSet } from './sum-box-set';

describe('SumBoxSet', () => {
    it('should create an instance', () => {
        expect(new SumBoxSet()).toBeTruthy();
    });

    describe('getCommonUnits', () => {
        it('should return the common units', () => {
            const set = new SumBoxSet([
                0b0000001111,  // [1, 2, 3]
                0b0000001110,  // [2, 3, 4]
                0b0000011100,  // [3, 4, 5]
            ]);
            expect(set.getCommonUnits()).toEqual([3, 4]);
        });
    });
});
