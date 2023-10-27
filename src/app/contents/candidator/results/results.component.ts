import { Component } from '@angular/core';
import {map, Observable} from 'rxjs';
import {SumBoxService} from '../../../sum-box/sum-box.service';
import {SumBox} from '../../../sum-box/sum-box';

@Component({
  selector: 'sb-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent {
  summary$: Observable<number[]> = this.sumBoxService.summary$;
  candidates$: Observable<SumBox[]>;
  attentions$: Observable<number | null> = this.sumBoxService.attentions$;

    constructor(
        private sumBoxService: SumBoxService
    ) {
      this.candidates$ = this.sumBoxService.candidateSumBoxSets$.pipe(
          map(sumBoxSets => sumBoxSets.sumBoxes)
      );
    }

  toggleCandidateSelect(sumBox: SumBox) {
    this.sumBoxService.toggleSumBoxSelected(sumBox);
  }

  onSelect(num: number) {
    this.sumBoxService.changeAttention(num);
  }
}
