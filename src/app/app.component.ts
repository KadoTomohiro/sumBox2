import { Component } from '@angular/core';
import {FormControl} from "@angular/forms";

@Component({
  selector: 'sb-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sumBox2';
  button: FormControl = new FormControl(false);
}
