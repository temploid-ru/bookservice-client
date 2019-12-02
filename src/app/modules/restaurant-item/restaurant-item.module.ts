import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RestaurantItemComponent} from '@app/modules/restaurant-item/restaurant-item.component';


@NgModule({
  declarations: [RestaurantItemComponent],
  exports: [RestaurantItemComponent],
  imports: [
    CommonModule
  ]
})
export class RestaurantItemModule {
}
