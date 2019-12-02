import {Component, forwardRef, Input, OnDestroy, OnInit} from '@angular/core';
import {NG_VALUE_ACCESSOR} from '@angular/forms';
import {Subject} from 'rxjs';
import {untilDestroyed} from 'ngx-take-until-destroy';
import {IUiGroupSelectorItem} from '@app/ui/ui-group-selector/meta';

@Component({
  // tslint:disable-next-line
  selector: 'ui-group-selector',
  templateUrl: './ui-group-selector.component.html',
  styleUrls: ['./ui-group-selector.component.sass'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => UiGroupSelectorComponent),
      multi: true
    }
  ]
})
export class UiGroupSelectorComponent implements OnInit, OnDestroy {
  @Input() options: IUiGroupSelectorItem[];
  @Input() size: 'small' | 'default' = 'default';

  touches$ = new Subject();
  changes$ = new Subject();

  state: any;

  constructor() {
  }

  ngOnInit() {
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

  writeValue(rawValue) {
    this.state = rawValue;
    this.changes$.next(rawValue);
  }

  updateValue(val) {
    this.writeValue(val);
  }

  ngOnDestroy() {
  }

}
