import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NumericButtonComponent } from './controls/numeric-button/numeric-button.component';
import {ReactiveFormsModule} from "@angular/forms";
import { ButtonComponent } from './controls/button/button.component';
import { SelectedDirective } from './controls/directives/selected.directive';
import { DisabledDirective } from './controls/directives/disabled.directive';
import { ToggleButtonComponent } from './controls/button/toggle-button.component';
import { TenkeyComponent } from './controls/tenkey/tenkey.component';
import { TenkyLayoutComponent } from './controls/tenkey/tenky-layout/tenky-layout.component';
import { StackComponent } from './layout-primitive/stack/stack.component';


@NgModule({
  declarations: [
    AppComponent,
    NumericButtonComponent,
    ButtonComponent,
    SelectedDirective,
    DisabledDirective,
    ToggleButtonComponent,
    TenkeyComponent,
    TenkyLayoutComponent,
    StackComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
