import {Injectable} from '@angular/core';

@Injectable({providedIn: 'root'})
export class TimeHelper {
  getTimeFromMinutes(minutes: number): string {
    const hours = Math.floor(minutes / 60).toString();
    let min = minutes % 60;
    return `${hours}:${min < 10 ? '0' + min : min}`;
  }
}
