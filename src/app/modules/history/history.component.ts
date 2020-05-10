import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html'
})
export class HistoryComponent implements OnInit {
  // TODO: Manage via query params
  startDate: string = "2010-01-01";
  endDate: Date | string = new Date();
  baseCurrency: string = "EUR";
  rateCurrency: string = "PLN";
  resolution: number[] = [800, 500]

  constructor(
    private datePipe: DatePipe
  ) {}

  ngOnInit(): void {
    this.endDate = this.datePipe.transform(this.endDate, 'yyyy-MM-dd');
  }
}

