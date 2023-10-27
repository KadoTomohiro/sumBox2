import { Component } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {FormType} from '../../../utility/types';
import {SumBoxQueryParameter} from '../../../sum-box/sum-box-query-parameter';
import {map, Observable} from 'rxjs';
import {SumBox} from '../../../sum-box/sum-box';
import {SumBoxService} from '../../../sum-box/sum-box.service';
import {QueryFormService} from './query-form.service';

@Component({
  selector: 'sb-query-form',
  templateUrl: './query-form.component.html',
  styleUrls: ['./query-form.component.css']
})
export class QueryFormComponent {
  title = 'sumBox2';
  form: FormGroup = this.queryFormService.form;
  constructor(
      private fb: FormBuilder,
      private sumBoxService: SumBoxService,
      private queryFormService: QueryFormService
  ) {
    this.queryFormService.queryParameter$.subscribe(value => {
      this.sumBoxService.filterSumBoxSets(value);
    })
  }
  reset() {
    this.form.reset();
  }


}
