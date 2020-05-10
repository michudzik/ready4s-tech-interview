import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent {
  fromCurrency: string = 'EUR';
  toCurrency: string = 'PLN';
}
