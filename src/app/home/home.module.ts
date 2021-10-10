import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home.component';
import { CommonComponentsModule } from '../common/common.module';
import { MainWordComponent } from './main-word/main-word.component';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { FilterComponent } from './filter/filter.component';
import { SearhResultsComponent } from './searh-results/searh-results.component';
import { ModalComponent } from './searh-results/modal/modal.component';

@NgModule({
  declarations: [
    HomeComponent,
    MainWordComponent,
    FilterComponent,
    SearhResultsComponent,
    ModalComponent,
  ],
  imports: [
    CommonModule,
    CommonComponentsModule,
    AngularSvgIconModule.forRoot(),
  ],
  entryComponents: [ModalComponent],
})
export class HomeModule {}
