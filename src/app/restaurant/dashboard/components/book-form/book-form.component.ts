import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Observable} from 'rxjs';
import {IRestaurantTable, RestaurantTableStatusEnum} from '@interfaces/restaurant-table.interface';
import {map, take} from 'rxjs/operators';
import * as moment from 'moment';
import {ReservationService} from '@app/_services/reservation/reservation.service';
import {untilDestroyed} from 'ngx-take-until-destroy';
import {MomentHelperService} from '@app/_services/moment-helper/moment-helper.service';
import {reservationDuration} from '@app/mokcs/tables';
import {IReservation} from '@interfaces/reservation.interface';
import {DEFAULT_GUESTS_NUMBER} from '@app/constants/reservation-form';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.sass']
})
export class BookFormComponent implements OnInit, OnDestroy {
  @Input() type: 'CREATE' | 'EDIT' = 'CREATE';
  @Input() reservation: IReservation;

  @Output() success = new EventEmitter();

  form: FormGroup;
  daysLength = 14;
  timeOptions = [];
  days = [];
  queryDaysMonth = moment();

  reservationDuration = reservationDuration;

  tables$: Observable<IRestaurantTable[]> = this.reservationS.tables$;

  constructor(private fb: FormBuilder,
              private reservationS: ReservationService,
              private momentHelper: MomentHelperService) {
  }

  ngOnInit() {
    if (this.type === 'EDIT' && this.reservation) {
      this.initEditForm();
    } else {
      this.initCreateForm();
    }

    this.formSubscriptions();

    this.getDays();
  }

  getReservationTime(data) {
    this.reservationS
      .getReservationTime(data.dayString)
      .pipe(take(1), untilDestroyed(this))
      .subscribe((time: any) => {
        this.timeOptions = time.items;
        this.getTables();
      });
  }

  formSubscriptions() {
    this.form.controls.date.valueChanges
      .pipe(untilDestroyed(this))
      .subscribe(this.getReservationTime.bind(this));

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

  initCreateForm() {
    this.form = this.fb.group({
      date: [new Date(), [Validators.required]],
      guests: [DEFAULT_GUESTS_NUMBER, [Validators.required, Validators.pattern(/[0-9]+/)]],
      time: [null, [Validators.required]],
      table: [null, [Validators.required]],
      duration: [2],
      name: [null, [Validators.required]],
      phone: [null, [Validators.required]],
      wishes: []
    });
  }

  initEditForm() {
    this.form = this.fb.group({
      date: [{value: this.reservation.duration.date_start}, [Validators.required]],
      guests: [this.reservation.num_guests, [Validators.required, Validators.pattern(/[0-9]+/)]],
      time: [{value: this.reservation.duration.date_start}, [Validators.required]],
      table: [{deposit: this.reservation.deposit, ...this.reservation.table}, [Validators.required]],
      duration: [moment.duration(this.reservation.duration.value).asHours()],
      name: [this.reservation.client.name, [Validators.required]],
      phone: [this.reservation.client.phone, [Validators.required]],
      wishes: [this.reservation.client.comment]
    });

    this.getReservationTime({dayString: moment(this.reservation.duration.date_start).format('YYYY-MM-DD')});
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
          if (this.type === 'CREATE') {
            this.form.patchValue({date: this.days[0]});
          }
          if (this.days.length < this.daysLength) {
            this.queryDaysMonth.add(1, 'months');
            this.getDays();
          }
        }
      );
  }

  submit(e: Event) {
    e.preventDefault();

    if (!this.form.valid) {
      return;
    }

    const formData = this.form.value;
    const data: any = {
      table_id: formData.table.id,
      timecode: formData.time.value,
      num_guests: formData.guests,
      client: {
        name: formData.name,
        phone: formData.phone,
        comment: formData.wishes,
      }
    };

    if (this.type === 'EDIT') {
      data.id = this.reservation.id;
      data.date_start = formData.time.value;
      data.date_end = moment(formData.time.value).add(formData.duration, 'hours');
    }

    this.reservationS[this.type === 'CREATE' ? 'makeReservation' : 'editReservation'](data)
      .pipe(untilDestroyed(this))
      .subscribe(() => {
        this.success.emit();
      });
  }

  ngOnDestroy() {
  }

}
