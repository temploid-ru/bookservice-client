import {NgModule} from '@angular/core';
import {WordsEndingsPipe} from '@app/pipes/words-endings/words-endings.pipe';

@NgModule({
  declarations: [WordsEndingsPipe],
  exports: [WordsEndingsPipe]
})
export class WordsEndingsModule {
}
