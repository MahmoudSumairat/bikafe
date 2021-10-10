import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WhoWeAreRoutingModule } from './who-we-are-routing.module';
import { WhoWeAreComponent } from './who-we-are.component';


@NgModule({
  declarations: [
    WhoWeAreComponent
  ],
  imports: [
    CommonModule,
    WhoWeAreRoutingModule
  ]
})
export class WhoWeAreModule { }
