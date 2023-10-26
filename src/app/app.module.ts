import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NumericButtonComponent } from './controls/numeric-button/numeric-button.component';
import {ReactiveFormsModule} from "@angular/forms";
import { ButtonComponent } from './controls/button/button.component';
import { ToggleButtonComponent } from './controls/button/toggle-button.component';
import { TenkeyComponent } from './controls/tenkey/tenkey.component';
import { TenkyLayoutComponent } from './controls/tenkey/tenky-layout/tenky-layout.component';
import { StackComponent } from './layout-primitive/stack/stack.component';
import { MulchTenkeyComponent } from './controls/tenkey/mulch-tenkey.component';
import { NumberSetComponent } from './controls/number-set/number-set.component';
import { SumBoxComponent } from './controls/sum-box/sum-box.component';
import { CandidateSummaryComponent } from './controls/sum-box/candidate-summary.component';
import { CenterComponent } from './layout-primitive/center/center.component';
import { LabelComponent } from './controls/label/label.component';


@NgModule({
  declarations: [
    AppComponent,
    NumericButtonComponent,
    ButtonComponent,
    ToggleButtonComponent,
    TenkeyComponent,
    TenkyLayoutComponent,
    StackComponent,
    MulchTenkeyComponent,
    NumberSetComponent,
    SumBoxComponent,
    CandidateSummaryComponent,
    CenterComponent,
    LabelComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
