import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MenuComponent } from './core/menu/menu.component';
import { FooterComponent } from './core/footer/footer.component';
import { ExchangeRateComponent } from './modules/app/exchange-rate/exchange-rate.component';
import { DashboardComponent } from './modules/app/dashboard/dashboard.component';
import { CarouselComponent } from './modules/app/carousel/carousel.component';
import { CarouselContainerComponent } from './modules/app/carousel/carousel-container/carousel-container.component';

import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './modules/material.module';
import { CarouselItemDirective } from './modules/app/carousel/carousel-container/carousel-item.directive';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FooterComponent,
    ExchangeRateComponent,
    DashboardComponent,
    CarouselComponent,
    CarouselContainerComponent,
    CarouselItemDirective,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
