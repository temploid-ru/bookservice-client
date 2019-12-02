import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PopupRestaurantAddReservationComponent} from './popup-restaurant-add-reservation.component';
import {ReactiveFormsModule} from '@angular/forms';
import {MatDatepickerModule, MatDialogModule, MatFormFieldModule, MatInputModule, MatSelectModule} from '@angular/material';
import {GuestsSelectorModule} from '@app/ui/guests-selector/guests-selector.module';
import {TableSelectorModule} from '@app/ui/table-selector/table-selector.module';


@NgModule({
  declarations: [PopupRestaurantAddReservationComponent],
  entryComponents: [PopupRestaurantAddReservationComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatDatepickerModule,
    MatInputModule,
    MatDialogModule,
    GuestsSelectorModule,
    TableSelectorModule
  ]
})
export class PopupRestaurantAddReservationModule {
}
