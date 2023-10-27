import {SumBoxQueryParameter} from '../../sum-box/sum-box-query-parameter';
import {SumBoxSet} from '../../sum-box/sum-box-set';

export interface Stock {
    query: SumBoxQueryParameter;
    candidates: SumBoxSet;
}
