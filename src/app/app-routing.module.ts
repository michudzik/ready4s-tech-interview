import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './modules/app/dashboard/dashboard.component';
import { CarouselComponent } from './modules/app/carousel/carousel.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'carousel',
    component: CarouselComponent
  },
  {
    path: 'history',
    loadChildren: () => import('./modules/history/history.module').then(m => m.HistoryModule)
  },
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
