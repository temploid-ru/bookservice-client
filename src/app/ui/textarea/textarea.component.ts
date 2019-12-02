import {Component, forwardRef, OnDestroy, OnInit} from '@angular/core';
import {NG_VALUE_ACCESSOR} from "@angular/forms";
import {Subject} from "rxjs";
import {untilDestroyed} from "ngx-take-until-destroy";
import {debounceTime} from "rxjs/operators";

@Component({
  // tslint:disable-next-line
  selector: 'ui-textarea',
  templateUrl: './textarea.component.html',
  styleUrls: ['./textarea.component.sass'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TextareaComponent),
      multi: true
    }
  ]
})
export class TextareaComponent implements OnInit, OnDestroy {
  state: string;

  changes$ = new Subject();
  touches$ = new Subject();

  constructor() {
  }

  ngOnInit() {
  }

  writeValue(rawValue) {
    this.state = rawValue;
    this.changes$
      .next(rawValue);
  }

  updateValue(val) {
    this.writeValue(val);
  }

  registerOnChange(fn) {
    this.changes$
      .pipe(
        untilDestroyed(this),
        debounceTime(300)
      )
      .subscribe(fn);
  }

  registerOnTouched(fn) {
    this.touches$
      .pipe(untilDestroyed(this))
      .subscribe(fn)
  }

  ngOnDestroy() {
  }
}
