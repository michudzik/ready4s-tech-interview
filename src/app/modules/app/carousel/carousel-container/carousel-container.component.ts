import { Component, Input, OnInit, ContentChildren, ViewChildren, ElementRef, QueryList } from '@angular/core';
import { CarouselItemDirective } from './carousel-item.directive';

@Component({
  selector: 'app-carousel-container',
  templateUrl: './carousel-container.component.html',
  styleUrls: ['./carousel-container.component.scss']
})
export class CarouselContainerComponent implements OnInit {
  @Input() slideDisplayTime: number = 4000;
  @ContentChildren(CarouselItemDirective) carouselItems: QueryList<CarouselItemDirective>;

  intervalId = null;
  currentSlide: number = 0;

  ngOnInit(): void {
    this.initializeInterval();
  }

  next(): void {
    this.currentSlide = (this.currentSlide + 1) % this.carouselItems.length;
  }

  onNext(): void {
    this.next();
    this.resetInterval();
  }

  onPrevious(): void {
    const previousSlide = this.currentSlide - 1;
    this.currentSlide = previousSlide > 0 ? previousSlide : this.carouselItems.length - 1;
    this.resetInterval();
  }

  initializeInterval(): void {
    this.intervalId = setInterval(() => this.next(), this.slideDisplayTime);
  }

  resetInterval(): void {
    clearInterval(this.intervalId);
    this.initializeInterval();
  }
}
