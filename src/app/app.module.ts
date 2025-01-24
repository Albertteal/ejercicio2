import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SeriesCalculatorComponent } from './features/series-calculator/series-calculator.component';
import { ResultDisplayComponent } from './features/result-display/result-display.component';
import { InputFormComponent } from './features/input-form/input-form.component';

@NgModule({
  declarations: [
    AppComponent,
    SeriesCalculatorComponent,
    ResultDisplayComponent,
    InputFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
