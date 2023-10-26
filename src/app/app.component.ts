import { Component } from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {SumBoxQueryParameter} from './sum-box/sum-box-query-parameter';

@Component({
  selector: 'sb-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sumBox2';
  form: FormGroup = this.fb.group<SumBoxQueryForm>({
    total: this.fb.nonNullable.control<number | undefined>(undefined),
    length: this.fb.nonNullable.control<number | undefined>(undefined),
    includes: this.fb.nonNullable.control<number[] | undefined>(undefined),
    excludes: this.fb.nonNullable.control<number[] | undefined>(undefined),
  });

  constructor(private fb: FormBuilder) {
  }
  reset() {
    this.form.reset();
  }
}

type SumBoxQueryForm = {
  [ key in keyof SumBoxQueryParameter]: FormControl<SumBoxQueryParameter[key]>
}
