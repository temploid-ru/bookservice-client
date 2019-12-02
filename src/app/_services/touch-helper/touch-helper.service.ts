import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TouchHelperService {

  constructor() {
  }

  getDistance(p1, p2) {
    return Math.sqrt(Math.pow(p2.x - p1.x, 2) + Math.pow(p2.y - p1.y, 2));
  }

}
