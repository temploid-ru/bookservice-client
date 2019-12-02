import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ClientPlanComponent} from './client-plan.component';
import {ClientMapComponent} from './client-map/client-map.component';
import {MatDialogModule} from '@angular/material';

@NgModule({
  declarations: [
    ClientPlanComponent,
    ClientMapComponent,
  ],
  imports: [
    CommonModule,
    MatDialogModule,
  ],
  exports: [
    ClientPlanComponent
  ],
  entryComponents: [
    ClientPlanComponent
  ]
})
export class ClientPlanModule {
}
