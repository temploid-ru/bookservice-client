import {Component, Inject, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialog} from '@angular/material';
import {IRestaurantTable} from '@interfaces/restaurant-table.interface';
import {IReservation} from '@interfaces/reservation.interface';
import {ClientPlanComponent} from '@app/client-plan/client-plan.component';
import {untilDestroyed} from 'ngx-take-until-destroy';
import {reservationDuration, reservationStart} from '@app/mokcs/tables';

@Component({
  selector: 'app-popup-restaurant-add-reservation',
  templateUrl: './popup-restaurant-add-reservation.component.html',
  styleUrls: ['./popup-restaurant-add-reservation.component.sass']
})
export class PopupRestaurantAddReservationComponent implements OnInit, OnDestroy {
  form: FormGroup;

  reservationStart = reservationStart;
  reservationDuration = reservationDuration;

  constructor(private _fb: FormBuilder,
              @Inject(MAT_DIALOG_DATA) public data: {
                tables: IRestaurantTable[],
                reservation: IReservation,
                date: string
              },
              private _matDialog: MatDialog
  ) {
  }

  ngOnInit() {
    this.data.tables.sort((a, b) => a.number - b.number);
    this.initForm();
  }

  initForm() {
    const reservation = this.data.reservation;
    this.form = this._fb.group({
      table: [this.getFormValue(reservation, 'tableId'), [Validators.required]],
      name: [this.getFormValue(reservation, 'name'), [Validators.required]],
      phone: [this.getFormValue(reservation, 'phone'), [Validators.required]],
      guestsCount: [this.getFormValue(reservation, 'guestCount', 1), [Validators.required]],
      timeStart: [this.getFormValue(reservation, 'timeStart'), [Validators.required]],
      duration: [this.getFormValue(reservation, 'timeEnd'), [Validators.required]],
      date: [new Date(this.getFormValue(reservation, 'date', this.data.date)).toISOString(), [Validators.required]]
    });

    this.form.valueChanges.subscribe(console.log);
  }

  getFormValue(object: any, field: string, defaultValue?: any) {
    return object && object[field] ? object[field] : (defaultValue || null);
  }

  submit(e: Event) {
    e.preventDefault();
  }

  openTableMap(e: Event) {
    e.preventDefault();

    this._matDialog.open(ClientPlanComponent, {
      width: '100vw',
      maxWidth: '100vw',
      height: '100vh',
      panelClass: 'dialog-padding-0',
    })
      .beforeClosed()
      .pipe(untilDestroyed(this))
      .subscribe((table: IRestaurantTable) => {
        this.form.patchValue({table: table.id});
      });
  }

  ngOnDestroy() {
  }

}
