import {Component, OnDestroy, OnInit} from '@angular/core';
import {ReservationService} from '@app/_services/reservation/reservation.service';
import {ActivatedRoute, Router} from '@angular/router';
import {untilDestroyed} from 'ngx-take-until-destroy';
import {IReservation} from '@interfaces/reservation.interface';

@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.sass']
})
export class BookEditComponent implements OnInit, OnDestroy {
  reservation: IReservation;

  constructor(private _reservationS: ReservationService,
              private _activatedRoute: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    this._reservationS.getReservationDetails(this._activatedRoute.snapshot.params.id)
      .pipe(untilDestroyed(this))
      .subscribe((res: { result: IReservation }) => {
        this.reservation = {...res.result};
      });
  }

  ngOnDestroy() {
  }

  onSuccess() {
    this.router.navigateByUrl('/admin');
  }

}
