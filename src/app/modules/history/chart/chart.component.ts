import { Component, OnInit, Input } from '@angular/core';
import { map } from 'rxjs/operators';

import { ExchangeRateService } from 'src/app/core/services/exchange-rate.service';
import { SeriesData, Series } from 'src/app/core/types';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html'
})
export class ChartComponent implements OnInit {
  @Input() startDate: string;
  @Input() endDate: string;
  @Input() baseCurrency: string;
  @Input() rateCurrency: string;
  @Input() resolution: number[];

  legend: boolean = true;
  showLabels: boolean = true;
  animations: boolean = true;
  xAxis: boolean = true;
  yAxis: boolean = true;
  showYAxisLabel: boolean = true;
  showXAxisLabel: boolean = true;
  xAxisLabel: string = 'Date';
  yAxisLabel: string = 'Exchange Rate';
  timeline: boolean = true;
  yScaleMin: number;
  yScaleMax: number;
  chartData: Series[] = [];

  constructor(
    private exchangeRateService: ExchangeRateService,
  ) { }

  ngOnInit(): void {
    this.fetchExchangeRateHistory();
    this.yAxisLabel = this.yAxisLabel + `(${this.baseCurrency} - ${this.rateCurrency})`;
  }

  private fetchExchangeRateHistory(): void {
    this.exchangeRateService.getExchangeRateHistory(this.startDate, this.endDate, this.baseCurrency, this.rateCurrency).pipe(
      map(response => {
        const parsedData: SeriesData[] = Object.keys(response).sort().map(date => ({ name: date, value: response[date][this.rateCurrency] }));
        this.yScaleMax = Math.max(...parsedData.map(series => series.value));
        this.yScaleMin = Math.min(...parsedData.map(series => series.value));

        return parsedData;
      })
    ).subscribe((seriesData: SeriesData[]) => {
      this.chartData = [{
        name: `${this.baseCurrency} - ${this.rateCurrency}`,
        series: seriesData
      }]
    })
  }
}
