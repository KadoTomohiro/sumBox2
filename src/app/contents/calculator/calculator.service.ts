import { Injectable } from '@angular/core';
import {BehaviorSubject, map, Observable} from "rxjs";
import {sum} from "../../utility/sum";

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {

  private operandsSubject: BehaviorSubject<number[]> = new BehaviorSubject<number[]>([]);
  operands$: Observable<number[]>;
  total$: Observable<number>

  constructor() {
    this.operands$ = this.operandsSubject.asObservable();
    this.total$ = this.operands$.pipe(map(sum));
  }

  add(value: number) {
    const values = this.operandsSubject.value;
    values.push(value);
    this.operandsSubject.next(values);
  }

  remove(index: number) {
    const values = this.operandsSubject.value;
    values.splice(index, 1);
    this.operandsSubject.next(values);
  }

  reset() {
    this.operandsSubject.next([]);
  }
}
