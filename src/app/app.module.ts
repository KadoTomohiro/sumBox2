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
import { ClusterComponent } from './layout-primitive/cluster/cluster.component';
import { ShortSizeDirective } from './controls/tenkey/short-size.directive';
import { QueryFormComponent } from './contents/candidator/query-form/query-form.component';
import { CandidatorComponent } from './contents/candidator/candidator.component';
import { ResultsComponent } from './contents/candidator/results/results.component';
import { StockerComponent } from './contents/stocker/stocker.component';
import { StockComponent } from './controls/stock/stock.component';


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
    ClusterComponent,
    ShortSizeDirective,
    QueryFormComponent,
    CandidatorComponent,
    ResultsComponent,
    StockerComponent,
    StockComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
