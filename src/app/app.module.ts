import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MenuComponent } from './core/menu/menu.component';
import { FooterComponent } from './core/footer/footer.component';
import { ExchangeRateComponent } from './modules/app/exchange-rate/exchange-rate.component';
import { DashboardComponent } from './modules/app/dashboard/dashboard.component';

import { AppRoutingModule } from './app-routing.module';
import { ChartsModule } from './modules/charts.module';
import { MaterialModule }from './modules/material.module';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FooterComponent,
    ExchangeRateComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NoopAnimationsModule,
    ChartsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
