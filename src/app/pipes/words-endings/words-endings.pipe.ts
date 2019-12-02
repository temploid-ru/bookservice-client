import {Pipe, PipeTransform} from '@angular/core';
import {WordsEndingsHelper} from '@app/helpers/words-enging-helper/words-endings.helper';

@Pipe({
  name: 'wordsEndings'
})
export class WordsEndingsPipe implements PipeTransform {
  constructor(private wordsH: WordsEndingsHelper) {
  }

  transform(value: any, endings: string[]): any {
    return value + ' ' + this.wordsH.getEnding(value, endings);
  }

}
