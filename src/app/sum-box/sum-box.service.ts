import { Injectable } from '@angular/core';
import {SumBoxSet} from "./sum-box-set";
import {SumBox} from "./sum-box";
import {range} from "../utility/range";

@Injectable({
  providedIn: 'root'
})
export class SumBoxService {
  private sumBoxSets: SumBoxSet;

  constructor() {
    // 全パターンのSumBoxSetを生成する
    this.sumBoxSets = this.generateAllSumBoxSets();
  }



  private generateAllSumBoxSets(): SumBoxSet {
    const seeds: number[] = range(SumBox.MIN_SEED, SumBox.MAX_SEED);
    return new SumBoxSet(seeds);
  }
}
