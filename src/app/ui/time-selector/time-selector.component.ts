import {Component, forwardRef, Input, OnDestroy, OnInit} from '@angular/core';
import {NG_VALUE_ACCESSOR} from '@angular/forms';
import {Subject} from 'rxjs';
import {untilDestroyed} from 'ngx-take-until-destroy';

@Component({
  // tslint:disable-next-line
  selector: 'ui-time-selector',
  templateUrl: './time-selector.component.html',
  styleUrls: ['./time-selector.component.sass'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TimeSelectorComponent),
      multi: true
    }
  ]
})
export class TimeSelectorComponent implements OnInit, OnDestroy {
  @Input() options: any[] = [];
  @Input() title: string;
  @Input() titleField = 'title';

  changes$ = new Subject<any>();
  touches$ = new Subject<any>();

  state;

  constructor() {
  }

  ngOnInit() {
  }

  writeValue(rawValue: any) {
    this.state = rawValue;
    this.changes$.next(rawValue);
  }

  updateValue(val) {
    if (val === this.state || val.disabled) {
      return;
    }
    this.writeValue(val);
  }

  registerOnChange(fn) {
    this.changes$
      .pipe(untilDestroyed(this))
      .subscribe(fn);
  }

  registerOnTouched(fn) {
    this.touches$
      .pipe(untilDestroyed(this))
      .subscribe(fn);
  }

  ngOnDestroy() {
  }

}
