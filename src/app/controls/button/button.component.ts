import { Component } from '@angular/core';
import {Button} from './button';

@Component({
  selector: 'sb-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements Button{
  classes = {};

}
