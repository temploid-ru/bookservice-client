import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TimeSelectorComponent} from './time-selector.component';


@NgModule({
  declarations: [TimeSelectorComponent],
  exports: [TimeSelectorComponent],
  imports: [
    CommonModule
  ]
})
export class TimeSelectorModule {
}
