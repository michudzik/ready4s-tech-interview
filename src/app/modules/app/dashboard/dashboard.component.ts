import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent {
  // TODO: Manage via query params
  fromCurrency: string = 'EUR';
  toCurrency: string = 'PLN';
}
