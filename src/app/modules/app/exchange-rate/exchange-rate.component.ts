import { Component, Input, OnInit } from '@angular/core';
import { ExchangeRateService } from 'src/app/core/services/exchange-rate.service';

@Component({
  selector: 'app-exchange-rate',
  templateUrl: './exchange-rate.component.html',
})
export class ExchangeRateComponent implements OnInit {
  @Input() fromCurrency: string;
  @Input() toCurrency: string;

  toCurrencyValue: number;

  ready: boolean = false;

  constructor(
    private exchangeRateService: ExchangeRateService
  ) {}

  ngOnInit(): void {
    this.fetchExchangeRate();
  }

  private fetchExchangeRate(): void {
    this.exchangeRateService.getExchangeRate(
      this.fromCurrency, this.toCurrency
    ).subscribe((value: number) => {
      this.toCurrencyValue = value;
      this.ready = true;
    })
  }
}
