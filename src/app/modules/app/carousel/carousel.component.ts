import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
  @Input() slideDisplayTime: number = 4000;
  intervalId;

  currentSlide: number = 0;

  // TODO: Refactor to use ng-content and children
  items: Object[] = [
    { fromCurrency: 'EUR', toCurrency: 'PLN' },
    { fromCurrency: 'USD', toCurrency: 'GBP' },
    { fromCurrency: 'CAD', toCurrency: 'CHF' }
  ]

  ngOnInit(): void {
    this.initializeInterval();
  }

  nextSlide(): void {
    this.currentSlide = (this.currentSlide + 1) % this.items.length;
  }

  onNext(): void {
    this.nextSlide();
    this.resetInterval();
  }

  onPrevious(): void {
    const previousSlide = this.currentSlide - 1;
    this.currentSlide = previousSlide > 0 ? previousSlide : this.items.length - 1;
    this.resetInterval();
  }

  private initializeInterval(): void {
    this.intervalId = setInterval(() => this.nextSlide(), this.slideDisplayTime);
  }

  private resetInterval(): void {
    clearInterval(this.intervalId);
    this.initializeInterval();
  }
}
