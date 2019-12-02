import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReservationDepositComponent } from './reservation-deposit.component';



@NgModule({
  declarations: [ReservationDepositComponent],
  exports: [
    ReservationDepositComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ReservationDepositModule { }
