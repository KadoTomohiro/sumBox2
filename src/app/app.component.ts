import {Component} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {SumBoxQueryParameter} from './sum-box/sum-box-query-parameter';
import {FormType} from './utility/types';
import {SumBoxService} from './sum-box/sum-box.service';
import {map, Observable} from 'rxjs';
import {SumBox} from './sum-box/sum-box';

@Component({
  selector: 'sb-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sumBox2';
  form: FormGroup = this.fb.nonNullable.group<FormType<SumBoxQueryParameter>>({
    total: this.fb.nonNullable.control<number | undefined>({value: undefined, disabled: false}),
    size: this.fb.nonNullable.control<number | undefined>({value: undefined, disabled: false}),
    includes: this.fb.nonNullable.control<number[] | undefined>({value: undefined, disabled: false}),
    excludes: this.fb.nonNullable.control<number[] | undefined>({value: undefined, disabled: false}),
    either: this.fb.nonNullable.control<number[] | undefined>({value: undefined, disabled: false}),
  });

  result$ = this.sumBoxService.candidateSumBoxSets$
  candidates$: Observable<SumBox[]>;
  summary$: Observable<number[]> = this.sumBoxService.summary$;

  constructor(
    private fb: FormBuilder,
    private sumBoxService: SumBoxService
  ) {
    this.form.valueChanges.subscribe(value => {
      if (this.form.valid) {
        this.sumBoxService.filterSumBoxSets(value);
      }
    })

    this.candidates$ = this.sumBoxService.candidateSumBoxSets$.pipe(
      map(sumBoxSets => sumBoxSets.sumBoxes)
    );
  }
  reset() {
    this.form.reset();
  }

  toggleCandidateSelect(sumBox: SumBox) {
    console.log(sumBox)
    this.sumBoxService.toggleSumBoxSelected(sumBox);
  }
}

