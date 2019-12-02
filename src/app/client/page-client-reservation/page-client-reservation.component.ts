import {AfterViewInit, Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import * as moment from 'moment';
import {Router} from '@angular/router';
import {ReservationService} from '@app/_services/reservation/reservation.service';
import {untilDestroyed} from 'ngx-take-until-destroy';
import {map, take} from 'rxjs/operators';
import {MomentHelperService} from '@app/_services/moment-helper/moment-helper.service';
import {BehaviorSubject, Observable} from 'rxjs';
import {IRestaurantTable, RestaurantTableStatusEnum} from '@interfaces/restaurant-table.interface';
import {WebStorage} from 'ngx-webstorage/lib/core/interfaces/webStorage';
import {LocalStorageService, SessionStorageService} from 'ngx-webstorage';
import {DEFAULT_GUESTS_NUMBER} from '@app/constants/reservation-form';

@Component({
  selector: 'app-page-client-reservation',
  templateUrl: './page-client-reservation.component.html',
  styleUrls: ['./page-client-reservation.component.sass']
})
export class PageClientReservationComponent implements OnInit, AfterViewInit, OnDestroy {
  form: FormGroup;
  daysLength = 14;
  timeOptions = [];
  days = [];
  queryDaysMonth = moment();

  tables$: Observable<IRestaurantTable[]> = this.reservationS.tables$
    .pipe(map((items: IRestaurantTable[]) => items.filter(item => item.status !== RestaurantTableStatusEnum.BLOCKED)));

  constructor(private fb: FormBuilder,
              private router: Router,
              private momentHelper: MomentHelperService,
              private reservationS: ReservationService,
              private sessionStorage: SessionStorageService) {
  }

  ngOnInit() {
    const sessionForm = this.sessionStorage.retrieve('client:reservation:form');
    this.form = this.fb.group({
      table: [{value: sessionForm ? sessionForm.table : null, disabled: true}, [Validators.required]],
      guests: [sessionForm ? sessionForm.guests : DEFAULT_GUESTS_NUMBER, [Validators.required]],
      date: [{value: sessionForm ? sessionForm.date : moment().toISOString()}, Validators.required],
      time: [sessionForm ? sessionForm.time : null, [Validators.required]],
      wishes: [sessionForm ? sessionForm.wishes : null]
    });

    this.getDays();

    this.form.controls.date.valueChanges
      .pipe(untilDestroyed(this))
      .subscribe(data => {
          this.reservationS
            .getReservationTime(data.dayString)
            .pipe(take(1))
            .subscribe((time: any) => {
              this.timeOptions = time.items;
              this.getTables();
            });
        }
      );

    this.form.controls
      .time
      .valueChanges
      .pipe(untilDestroyed(this))
      .subscribe((e) => {
        this.form.controls.table[!e ? 'disable' : 'enable']();
        setTimeout(() => this.getTables(), 0);
      });

    this.form.controls
      .guests
      .valueChanges
      .pipe(untilDestroyed(this))
      .subscribe((e) => {
        setTimeout(() => this.getTables(), 0);
      });
  }

  getTables() {
    let timecode = moment(this.form.value.date.value).format('YYYY-MM-DD');
    if (this.form.value.time) {
      timecode = this.form.value.time.value;
    }
    this.reservationS.getReservationTables({timecode, num_guests: this.form.value.guests})
      .pipe(untilDestroyed(this))
      .subscribe();
  }

  getDays() {
    this.reservationS.getReservationDays(this.queryDaysMonth.format('YYYY-MM'))
      .pipe(
        take(1),
        untilDestroyed(this)
      )
      .subscribe(
        (days: any) => {
          this.days = this.momentHelper.cutFromToday([...this.days, ...days.items] as any, this.daysLength);
          this.form.patchValue({date: this.days[0]});
          if (this.days.length < this.daysLength) {
            this.queryDaysMonth.add(1, 'months');
            this.getDays();
          }
        }
      );
  }

  submit(e: Event) {
    e.preventDefault();

    if (this.form.invalid) {
      return;
    }

    this.sessionStorage.store('client:reservation:form', {
      ...this.sessionStorage.retrieve('client:reservation:form'),
      ...this.form.value
    });
    this.router.navigateByUrl('/contacts');
  }

  ngAfterViewInit() {
  }

  ngOnDestroy() {
  }
}
