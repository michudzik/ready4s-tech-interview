import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { pluck } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ExchangeRateService {
  baseUrl: string = 'https://api.exchangeratesapi.io';

  constructor(
    private http: HttpClient
  ) {}

  getExchangeRate(baseCurrency: string, rateCurrency: string): Observable<number> {
    return this.http.get(this.exchangeRateUrl() + this.baseQueryParams(baseCurrency, rateCurrency)).pipe(
      pluck('rates', rateCurrency)
    );
  }

  getExchangeRateHistory(startDate: string, endDate: string, baseCurrency: string, rateCurrency: string) {
    return this.http.get<number>(
      this.exchangeRateHistoryUrl() +
      this.baseQueryParams(baseCurrency, rateCurrency) +
      `&start_at=${startDate}&end_at=${endDate}`
    ).pipe(
      pluck('rates')
    );
  }

  private exchangeRateUrl(): string {
    return this.baseUrl + '/latest';
  }

  private exchangeRateHistoryUrl(): string {
    return this.baseUrl + '/history';
  }

  private baseQueryParams(from: string, to: string): string {
    return `?base=${from}&symbols=${to}`;
  }
}
