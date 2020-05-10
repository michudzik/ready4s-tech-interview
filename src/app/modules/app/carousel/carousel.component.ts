import { Component } from '@angular/core';
import { Exchange } from 'src/app/core/types';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html'
})
export class CarouselComponent {
  items: Exchange[] = [
    { fromCurrency: 'EUR', toCurrency: 'PLN' },
    { fromCurrency: 'USD', toCurrency: 'GBP' },
    { fromCurrency: 'CAD', toCurrency: 'CHF' }
  ];
}
