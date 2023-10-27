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

}

