import { Injectable } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {FormType} from '../../../utility/types';
import {SumBoxQueryParameter} from '../../../sum-box/sum-box-query-parameter';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QueryFormService {

  readonly form: FormGroup<FormType<SumBoxQueryParameter>>
  queryParameter$: Observable<SumBoxQueryParameter>

  constructor(
      private fb: FormBuilder,
  ) {
    this.form = this.buildForm();
    this.queryParameter$ = this.form.valueChanges;
  }

  private buildForm(): FormGroup {
    return this.fb.nonNullable.group<FormType<SumBoxQueryParameter>>({
    total: this.fb.nonNullable.control<number | undefined>({value: undefined, disabled: false}),
    size: this.fb.nonNullable.control<number | undefined>({value: undefined, disabled: false}),
    includes: this.fb.nonNullable.control<number[] | undefined>({value: undefined, disabled: false}),
    excludes: this.fb.nonNullable.control<number[] | undefined>({value: undefined, disabled: false}),
    either: this.fb.nonNullable.control<number[] | undefined>({value: undefined, disabled: false}),
  });
  }
}
