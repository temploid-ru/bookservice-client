import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UiGroupSelectorComponent} from './ui-group-selector.component';


@NgModule({
  declarations: [UiGroupSelectorComponent],
  exports: [UiGroupSelectorComponent],
  imports: [
    CommonModule
  ]
})
export class UiGroupSelectorModule {
}
