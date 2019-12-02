import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ReservationService} from '@app/_services/reservation/reservation.service';
import {untilDestroyed} from 'ngx-take-until-destroy';
import {IReservation} from '@interfaces/reservation.interface';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.sass']
})
export class BookDetailsComponent implements OnInit, OnDestroy {
  reservation: IReservation;

  constructor(private _activatedRoute: ActivatedRoute,
              private _reservationS: ReservationService) {
  }

  ngOnInit() {
    this._reservationS.getReservationDetails(this._activatedRoute.snapshot.params.id)
      .pipe(untilDestroyed(this))
      .subscribe((res: { result: IReservation }) => this.reservation = res.result);
  }

  ngOnDestroy() {
  }

}
