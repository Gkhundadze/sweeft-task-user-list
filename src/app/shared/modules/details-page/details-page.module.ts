import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailsPageRoutingModule } from './details-page-routing.module';
import { DetailsComponent } from '../../components/details/details.component';



@NgModule({
  declarations: [
    DetailsComponent
  ],
  imports: [
    CommonModule,
    DetailsPageRoutingModule
  ]
})
export class DetailsPageModule { }
