import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReservationInfoComponent} from './reservation-info.component';
import {RestaurantItemModule} from "@app/modules/restaurant-item/restaurant-item.module";
import {WordsEndingsModule} from '@app/pipes/words-endings/words-endings.module';
import {DateSelectorModule} from '@app/ui/date-selector/date-selector.module';
import {MomentModule} from 'ngx-moment';


@NgModule({
  declarations: [ReservationInfoComponent],
  exports: [
    ReservationInfoComponent
  ],
  imports: [
    CommonModule,
    RestaurantItemModule,
    WordsEndingsModule,
    DateSelectorModule,
    MomentModule
  ]
})
export class ReservationInfoModule {
}
