import {Injectable} from '@angular/core';
import * as moment from 'moment';

@Injectable({providedIn: 'root'})
export class MomentHelperService {
  constructor() {
  }

  generateCalendarArray(dateArray) {
    if (!dateArray || !dateArray.length) {
      return [];
    }

    const startDate = moment.utc(dateArray[0].value);

    const weeks = [];

    let perWeek = [];
    const difference = dateArray.length;

    if (perWeek.length < startDate.weekday()) {
      while (perWeek.length < startDate.weekday()) {
        perWeek.unshift(null);
      }
    }

    for (let i = 0; i < dateArray.length; i++) {
      if (moment.utc(dateArray[i].value).weekday() !== 0) {
        perWeek.push(dateArray[i]);
      } else {
        weeks.push(perWeek);
        perWeek = [];
        perWeek.push(dateArray[i]);
      }

      if (i + 1 === difference || (Math.abs(i - difference) === 0) ||
        (Math.abs(i - difference) === 0 && perWeek.length === 1)) {
        weeks.push(perWeek);
      }
    }
    return weeks;
  }

  cutFromToday(array: [{ title: string, value: number, disabled: boolean }], length: number = 14) {
    array.find((item, index) => {
      if (moment.utc(item.value).isSame(moment.utc(), 'day')) {
        array.splice(0, index - 1);
        array.splice(length);
        return true;
      }
    });

    return array;
  }
}
