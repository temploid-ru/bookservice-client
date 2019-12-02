import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RestaurantPlanComponent} from './restaurant-plan.component';
import {KonvaModule} from 'ng2-konva';
import {TablesSelectorComponent} from './tables-selector/tables-selector.component';
import {CanvasMapComponent} from './canvas-map/canvas-map.component';
import {PopupTableSettingsComponent} from './_popups/popup-table-settings/popup-table-settings.component';
import {MatDialogModule} from '@angular/material';
import {PopupTableSettingsModule} from './_popups/popup-table-settings/popup-table-settings.module';
import {RestaurantPlanRouting} from './restaurant-plan.routing';

@NgModule({
  declarations: [
    RestaurantPlanComponent,
    TablesSelectorComponent,
    CanvasMapComponent
  ],
  exports: [
    RestaurantPlanComponent
  ],
  imports: [
    CommonModule,
    KonvaModule,
    MatDialogModule,
    PopupTableSettingsModule,
    RestaurantPlanRouting
  ],
  entryComponents: [
    PopupTableSettingsComponent
  ]
})
export class RestaurantPlanModule {
}
