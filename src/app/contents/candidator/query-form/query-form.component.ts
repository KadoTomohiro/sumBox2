import { Component } from '@angular/core';
import {FormGroup} from '@angular/forms';
import {CandidatorService} from '../candidator.service';
import {QueryFormService} from './query-form.service';

@Component({
  selector: 'sb-query-form',
  templateUrl: './query-form.component.html',
  styleUrls: ['./query-form.component.css']
})
export class QueryFormComponent {
  form: FormGroup = this.queryFormService.form;
  constructor(
      private candidatorService: CandidatorService,
      private queryFormService: QueryFormService
  ) {
    this.queryFormService.queryParameter$.subscribe(value => {
      this.candidatorService.filterSumBoxSets(value);
    })
  }
  reset() {
    this.queryFormService.reset()
  }
}
