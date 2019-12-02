import {Component, forwardRef, Input, OnChanges, OnDestroy, OnInit} from '@angular/core';
import * as moment from 'moment';
import {MomentHelperService} from '@app/_services/moment-helper/moment-helper.service';
import {NG_VALUE_ACCESSOR} from '@angular/forms';
import {Subject} from 'rxjs';
import {untilDestroyed} from 'ngx-take-until-destroy';

@Component({
  // tslint:disable-next-line
  selector: 'ui-date-selector',
  templateUrl: './date-selector.component.html',
  styleUrls: ['./date-selector.component.sass'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DateSelectorComponent),
      multi: true
    }
  ]
})
export class DateSelectorComponent implements OnInit, OnDestroy, OnChanges {
  calendar: Array<any> = [];

  touches$ = new Subject<void>();
  changes$ = new Subject<any>();

  state: any;

  @Input() options: { title: string, value: any, disabled: boolean }[] = [];

  constructor(private _momentHelperS: MomentHelperService) {
  }

  ngOnInit() {
    moment.locale('RU');
  }

  registerOnChange(fn: any) {
    this.changes$
      .pipe(untilDestroyed(this))
      .subscribe(fn);
  }

  registerOnTouched(fn: any) {
    this.touches$
      .pipe(untilDestroyed(this))
      .subscribe(fn);
  }

  writeValue(rawValue: any) {
    if (this.state === rawValue) {
      return;
    }
    this.state = {
      ...rawValue,
      dayString: moment(rawValue.value).format('YYYY-MM-DD')
    };
    this.changes$.next(this.state);
  }

  updateValue(value) {
    this.state = {
      ...value,
      dayString: moment(value.value).format('YYYY-MM-DD')
    };
    // this.writeValue(value);
    this.changes$.next(value);
  }

  ngOnDestroy() {
  }

  ngOnChanges(e) {
    if (e.options) {
      this.calendar = this._momentHelperS.generateCalendarArray(e.options.currentValue.map(item => {
        return {
          ...item,
          dayString: moment(item.value).format('YYYY-MM-DD')
        };
      }));
    }
  }
}
