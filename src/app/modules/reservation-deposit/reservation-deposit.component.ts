import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-reservation-deposit',
  templateUrl: './reservation-deposit.component.html',
  styleUrls: ['./reservation-deposit.component.sass']
})
export class ReservationDepositComponent implements OnInit {
  @Input() amount = 250;

  constructor() {
  }

  ngOnInit() {
  }

}
