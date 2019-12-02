import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {GuestsSelectorComponent} from '@app/ui/guests-selector/guests-selector.component';


@NgModule({
  declarations: [GuestsSelectorComponent],
  exports: [GuestsSelectorComponent],
  imports: [
    CommonModule
  ]
})
export class GuestsSelectorModule {
}
