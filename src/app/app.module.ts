import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GraficoComponent } from './components/grafico/grafico.component';

import { NgChartsModule } from 'ng2-charts';
import { Data } from '../data';

@NgModule({
  declarations: [
    AppComponent,
    GraficoComponent
  ],
  imports: [
    BrowserModule,
    NgChartsModule,
  ],
  providers: [
    Data],
  bootstrap: [AppComponent]
})
export class AppModule { }
