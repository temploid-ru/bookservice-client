import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {ReservationService} from '@app/_services/reservation/reservation.service';
import {ActivatedRoute} from '@angular/router';
import {untilDestroyed} from 'ngx-take-until-destroy';
import {IReservation} from '@interfaces/reservation.interface';

@Component({
  selector: 'app-page-client-total',
  templateUrl: './page-client-total.component.html',
  styleUrls: ['./page-client-total.component.sass']
})
export class PageClientTotalComponent implements OnInit, OnDestroy {
  @Input() type: 'SMS' | 'CALL' = 'SMS';

  reservation: IReservation;

  constructor(private reservationS: ReservationService,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.reservationS.getReservationDetails(this.activatedRoute.snapshot.params.id)
      .pipe(untilDestroyed(this))
      .subscribe((res: any) => this.reservation = res.result);
  }

  ngOnDestroy() {
  }

}
