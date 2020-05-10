import { NgModule } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  exports: [
    MatSidenavModule,
    MatListModule,
    MatIconModule
  ]
})
export class MaterialModule {}
