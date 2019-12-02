import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DateSelectorComponent} from './date-selector.component';
import {MomentModule} from 'ngx-moment';
import {DateSelectorDayPipe} from "@app/ui/date-selector/date-selector.pipe";


@NgModule({
  declarations: [
    DateSelectorComponent,
    DateSelectorDayPipe
  ],
  exports: [DateSelectorComponent, DateSelectorDayPipe],
  imports: [
    CommonModule,
    MomentModule
  ]
})
export class DateSelectorModule {
}
