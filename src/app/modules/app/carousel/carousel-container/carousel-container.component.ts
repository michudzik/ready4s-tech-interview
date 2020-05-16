import { Component, Input, OnInit, ContentChildren, QueryList } from '@angular/core';
import { CarouselItemDirective } from './carousel-item.directive';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-carousel-container',
  templateUrl: './carousel-container.component.html',
  styleUrls: ['./carousel-container.component.scss']
})
export class CarouselContainerComponent implements OnInit {
  @Input() slideDisplayTime: number = 4000;
  @ContentChildren(CarouselItemDirective) carouselItems: QueryList<CarouselItemDirective>;

  intervalSubscription: Subscription;
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
    this.intervalSubscription = interval(this.slideDisplayTime).subscribe(() => this.next());
  }

  resetInterval(): void {
    this.intervalSubscription.unsubscribe();
    this.initializeInterval();
  }
}
