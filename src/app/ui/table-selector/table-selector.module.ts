import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TableSelectorComponent} from '@app/ui/table-selector/table-selector.component';
import {ClientPlanModule} from '@app/client-plan/client-plan.module';
import {MatSelectModule} from '@angular/material';


@NgModule({
  declarations: [TableSelectorComponent],
  exports: [TableSelectorComponent],
  imports: [
    CommonModule,
    ClientPlanModule,
    MatSelectModule
  ]
})
export class TableSelectorModule {
}
