import {Component, Input, OnInit} from '@angular/core';
import {IReservation} from '@interfaces/reservation.interface';

@Component({
  selector: 'app-reservation-info',
  templateUrl: './reservation-info.component.html',
  styleUrls: ['./reservation-info.component.sass']
})
export class ReservationInfoComponent implements OnInit {
  @Input() isTotal = false;
  @Input() reservation: IReservation;
  @Input() amount = 250;

  constructor() {
  }

  ngOnInit() {
  }

}
