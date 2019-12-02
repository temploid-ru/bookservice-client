import {Pipe, PipeTransform} from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'dateSelectorDay'
})
export class DateSelectorDayPipe implements PipeTransform {
  constructor() {
  }

  transform(value: string): string {
    return moment().isSame(moment(value), 'day')
      ? `Сегодня &bull; `
      : moment().add(1, 'days')
        .isSame(moment(value), 'day')
        ? `Завтра &bull; `
        : '';
  }

}
