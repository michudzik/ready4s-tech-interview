import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';

import { ChartsModule } from '../charts.module';
import { HistoryRoutingModule } from './history-routing.module';
import { HistoryComponent } from './history.component';
import { ChartComponent } from './chart/chart.component';


@NgModule({
  declarations: [
    HistoryComponent,
    ChartComponent
  ],
  providers: [
    DatePipe
  ],
  imports: [
    CommonModule,
    HistoryRoutingModule,
    ChartsModule
  ]
})
export class HistoryModule { }
