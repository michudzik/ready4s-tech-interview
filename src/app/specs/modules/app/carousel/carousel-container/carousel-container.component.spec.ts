import { Component } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselContainerComponent } from 'src/app/modules/app/carousel/carousel-container/carousel-container.component';
import { CarouselItemDirective } from 'src/app/modules/app/carousel/carousel-container/carousel-item.directive';

describe('CarouselContainerComponent', () => {
  let component: CarouselContainerComponent;
  let fixture: ComponentFixture<CarouselContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CarouselContainerComponent]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarouselContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe('Basic', () => {
    it('creates', () => {
      expect(component).toBeTruthy();
    });
  })

  describe('Attributes', () => {
    describe('Init', () => {
      it('sets currentSlide to 0', () => {
        expect(component.currentSlide).toEqual(0);
      });

      it('sets default slideDisplayTime', () => {
        expect(component.slideDisplayTime).toEqual(4000);
      });

      it('does not contain any carouselItems', () => {
        expect(component.carouselItems.length).toEqual(0);
      });
    });
  });

  describe('Methods', () => {
    describe('#ngOnInit', () => {
      it('initializes the timer', () => {
        spyOn(component, 'initializeInterval');
        component.ngOnInit();
        expect(component.initializeInterval).toHaveBeenCalled();
      })
    });

    describe('#initializeInterval', () => {
      it('sets interval', () => {
        spyOn(global, 'setInterval');
        component.initializeInterval();
        expect(setInterval).toHaveBeenCalled();
      });
    });

    describe('#resetInterval', () => {
      it('clears the interval', () => {
        spyOn(global, 'clearInterval');
        component.resetInterval();
        expect(clearInterval).toHaveBeenCalled();
      });

      it('resets the interval timer', () => {
        spyOn(component, 'initializeInterval');
        component.resetInterval();
        expect(component.initializeInterval).toHaveBeenCalled();
      });
    });

    describe('#onNext', () => {
      it('changes carousel item', () => {
        spyOn(component, 'next');
        component.onNext();
        expect(component.next).toHaveBeenCalled();
      });

      it('resets the timer', () => {
        spyOn(component, 'resetInterval');
        component.onNext();
        expect(component.resetInterval).toHaveBeenCalled();
      });
    });

    describe('#onPrevious', () => {
      it('resets the timer', () => {
        spyOn(component, 'resetInterval');
        component.onPrevious();
        expect(component.resetInterval).toHaveBeenCalled();
      });
    });
  });
});

 @Component({
  selector: 'test-component',
  template: `<app-carousel-container>
      <div *appCarouselItem></div>
      <div *appCarouselItem></div>
  </app-carousel-container>`,
})
class TestWrapperComponent {}

describe('CarouselContainerComponent with children', () => {
  let component: CarouselContainerComponent;
  let fixture: ComponentFixture<TestWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        CarouselContainerComponent,
        CarouselItemDirective,
        TestWrapperComponent,
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestWrapperComponent);
    component = fixture.debugElement.children[0].componentInstance;
  });

  describe('Methods', () => {
    describe('#onPrevious', () => {
      describe('when currentSlide is equal to 0', () => {
        it('changes valye to the highest one', () => {
          fixture.detectChanges();
          expect(component.currentSlide).toEqual(0);
          component.onPrevious();
          expect(component.currentSlide).toEqual(1);
        });
      });

      describe('when currentSlide is > 0', () => {
        it('changes currentSlide value by -1', () => {
          fixture.detectChanges();
          // There are 2 items at the beginning
          component.onPrevious();
          expect(component.currentSlide).toEqual(1);
        });
      });
    });

    describe('#next', () => {
      it('changes currentSlide value', () => {
        fixture.detectChanges();
        expect(component.currentSlide).toEqual(0);
        component.next();
        expect(component.currentSlide).toEqual(1);
      });
    });
  });
});
