import {Component, Input} from '@angular/core';
import {SumBox} from '../../sum-box/sum-box';

@Component({
  selector: 'sb-number-set',
  templateUrl: './number-set.component.html',
  styleUrls: ['./number-set.component.css']
})
export class NumberSetComponent {
  @Input() sumBox: SumBox | undefined;
  @Input() disabled: boolean = false;

  get numbers(): number[] {
    return this.sumBox?.units ?? [];
  }
}
