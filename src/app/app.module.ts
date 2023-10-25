import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NumericButtonComponent } from './controls/numeric-button/numeric-button.component';
import {ReactiveFormsModule} from "@angular/forms";
import { ButtonComponent } from './controls/button/button.component';

@NgModule({
  declarations: [
    AppComponent,
    NumericButtonComponent,
    ButtonComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
