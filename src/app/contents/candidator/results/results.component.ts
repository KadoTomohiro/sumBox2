import { Component } from '@angular/core';
import {map, Observable} from 'rxjs';
import {CandidatorService} from '../candidator.service';
import {SumBox} from '../../../sum-box/sum-box';

@Component({
  selector: 'sb-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent {
  summary$: Observable<number[]> = this.candidatorService.summary$;
  candidates$: Observable<SumBox[]>;
  attentions$: Observable<number | null> = this.candidatorService.attentions$;

    constructor(
        private candidatorService: CandidatorService
    ) {
      this.candidates$ = this.candidatorService.candidateSumBoxSets$.pipe(
          map(sumBoxSets => sumBoxSets.sumBoxes)
      );
    }

  toggleCandidateSelect(sumBox: SumBox) {
    this.candidatorService.toggleSumBoxSelected(sumBox);
  }

  onSelect(num: number) {
    this.candidatorService.changeAttention(num);
  }
}
