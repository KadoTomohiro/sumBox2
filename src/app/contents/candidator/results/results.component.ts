import { Component } from '@angular/core';
import {filter, map, Observable} from 'rxjs';
import {CandidatorService} from '../candidator.service';
import {SumBox} from '../../../sum-box/sum-box';
import {SumBoxSet} from "../../../sum-box/sum-box-set";

@Component({
  selector: 'sb-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent {
  summary$: Observable<number[] | null> = this.candidatorService.summary$;
  candidates$: Observable<SumBox[]>;
  attentions$: Observable<number | null> = this.candidatorService.attentions$;

    constructor(
        private candidatorService: CandidatorService
    ) {
      this.candidates$ = this.candidatorService.candidateSumBoxSets$.pipe(
        filter((candidate): candidate is SumBoxSet => candidate !== null),
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
