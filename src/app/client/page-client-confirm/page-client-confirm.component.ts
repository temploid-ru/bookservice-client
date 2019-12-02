import {Component, OnDestroy, OnInit} from '@angular/core';
import {ReservationService} from '@app/_services/reservation/reservation.service';
import {IReservation} from '@interfaces/reservation.interface';
import {SessionStorageService} from 'ngx-webstorage';
import {Router} from '@angular/router';
import {untilDestroyed} from 'ngx-take-until-destroy';
import * as moment from 'moment';

@Component({
  selector: 'app-page-client-confirm',
  templateUrl: './page-client-confirm.component.html',
  styleUrls: ['./page-client-confirm.component.sass']
})
export class PageClientConfirmComponent implements OnInit, OnDestroy {
  reservation: IReservation;

  constructor(private reservationS: ReservationService,
              private sessionStore: SessionStorageService,
              private router: Router) {
  }

  ngOnInit() {
    const reservationSession = this.sessionStore.retrieve('client:reservation:form');
    if (reservationSession) {
      this.reservation = {
        num_guests: reservationSession.guests,
        client: {
          name: reservationSession.name,
          phone: reservationSession.phone,
          comment: reservationSession.wishes
        },
        table_id: reservationSession.table.id,
        table_number: reservationSession.table.number,
        date_start: reservationSession.time.value,
        deposit: reservationSession.table.deposit
      };
    } else {
      this.router.navigateByUrl('/');
    }
  }

  makeReservation() {
    this.reservationS.makeReservation({
      table_id: this.reservation.table_id,
      timecode: moment(this.reservation.date_start).format('YYYY-MM-DDTHH:mm:ss'),
      num_guests: this.reservation.num_guests,
      client: {
        ...this.reservation.client
      }
    }).pipe(untilDestroyed(this))
      .subscribe(console.log);
  }

  ngOnDestroy() {
  }

}
