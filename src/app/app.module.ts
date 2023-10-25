import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NumericButtonComponent } from './controls/numeric-button/numeric-button.component';
import {ReactiveFormsModule} from "@angular/forms";
import { ButtonComponent } from './controls/button/button.component';
import { SelectedDirective } from './controls/directives/selected.directive';
import { DisabledDirective } from './controls/directives/disabled.directive';
import { ToggleButtonComponent } from './controls/button/toggle-button.component';


@NgModule({
  declarations: [
    AppComponent,
    NumericButtonComponent,
    ButtonComponent,
    SelectedDirective,
    DisabledDirective,
    ToggleButtonComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
