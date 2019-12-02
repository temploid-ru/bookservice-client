import {Component, OnDestroy, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material';
import {IReservation} from '@interfaces/reservation.interface';
import {FormBuilder, FormGroup} from '@angular/forms';
import * as moment from 'moment';
import {untilDestroyed} from 'ngx-take-until-destroy';
import {ReservationService} from '@app/_services/reservation/reservation.service';
import {take} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {IRestaurantTable} from '@interfaces/restaurant-table.interface';
import {Router} from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass']
})
export class DashboardComponent implements OnInit, OnDestroy {
  tables$: Observable<IRestaurantTable[]> = this._reservationS.tables$;
  // tableTime$
  form: FormGroup;

  timelineHeaderItems = [];

  constructor(private _matDialog: MatDialog,
              private _reservationS: ReservationService,
              private _fb: FormBuilder,
              private _router: Router) {
  }

  ngOnInit() {
    this.form = this._fb.group({
      date: [new Date().toISOString()]
    });

    this.getReservationTime();

    this.getTables(this.form.value.date);

    this.form.controls.date.valueChanges
      .pipe(untilDestroyed(this))
      .subscribe((date) => {
        this.getReservationTime(date);
        this.getTables(date);
      });
  }

  getTables(date) {
    this._reservationS.getReservationTables({timecode: moment(date).format('YYYY-MM-DD')})
      .pipe(
        untilDestroyed(this),
        take(1)
      )
      .subscribe();
  }

  getReservationTime(date?: string) {
    this._reservationS.getReservationTime(moment(date || this.form.value.date).format('YYYY-MM-DD'))
      .pipe(untilDestroyed(this))
      .subscribe((items: any) => this.timelineHeaderItems = items.items.filter(item => item.title.indexOf(':00') !== -1));
  }

  onTableSelect(reservation: IReservation) {
    this._router.navigateByUrl('/admin/edit/' + reservation.id);
  }

  changePickerDay(state: number) {
    this.form.patchValue({date: moment(this.form.value.date).add(state, 'days').toISOString()});
  }

  ngOnDestroy() {
  }

}
