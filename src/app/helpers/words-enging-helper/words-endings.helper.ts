import {Injectable} from "@angular/core";

@Injectable({providedIn: 'root'})
export class WordsEndingsHelper {
  constructor() {
  }

  getEnding(number: number, text: string[], cases: number[] = [2, 0, 1, 1, 1, 2]) {
    return text[(number % 100 > 4 && number % 100 < 20) ? 2 : cases[(number % 10 < 5) ? number % 10 : 5]];
  }

}
