import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReservationRoutingModule } from './reservation-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ReservationViewComponent } from './reservation-view/reservation-view.component';


@NgModule({
  declarations: [
    ReservationViewComponent
  ],
  imports: [
    CommonModule,
    ReservationRoutingModule,
    ReactiveFormsModule
  ]
})
export class ReservationModule { }
