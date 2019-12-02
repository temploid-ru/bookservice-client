import {Component, forwardRef, OnDestroy, OnInit} from '@angular/core';
import {NG_VALUE_ACCESSOR} from "@angular/forms";
import {Subject} from "rxjs";
import {untilDestroyed} from "ngx-take-until-destroy";
import {WordsEndingsHelper} from "@app/helpers/words-enging-helper/words-endings.helper";

@Component({
  // tslint:disable-next-line
  selector: 'ui-guests-selector',
  templateUrl: './guests-selector.component.html',
  styleUrls: ['./guests-selector.component.sass'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => GuestsSelectorComponent),
      multi: true
    }
  ]
})
export class GuestsSelectorComponent implements OnInit, OnDestroy {
  changes$ = new Subject<number>();
  touches$ = new Subject<void>();

  state: number = 1;
  ending: string;

  constructor(private _wordsH: WordsEndingsHelper) {
  }

  ngOnInit() {
  }

  registerOnTouched(fn: any) {
    this.touches$
      .pipe(untilDestroyed(this))
      .subscribe(fn);
  }

  registerOnChange(fn: any) {
    this.changes$
      .pipe(untilDestroyed(this))
      .subscribe(fn);
  }

  writeValue(rawValue: number) {
    this.state = rawValue;
    this.ending = this._wordsH.getEnding(this.state, ['гость', 'гостя', 'гостей']);
    this.changes$.next(rawValue);
  }

  updateValue(value: number) {
    if (value === this.state) return;
    this.writeValue(value);
  }

  increase(e: MouseEvent | TouchEvent) {
    e.preventDefault();

    this.updateValue(this.state + 1);
  }

  decrease(e: MouseEvent | TouchEvent) {
    e.preventDefault();

    this.state <= 1 ? this.updateValue(1) : this.updateValue(this.state - 1);
  }

  ngOnDestroy() {
  }

}
