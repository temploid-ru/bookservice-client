import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ClientComponent} from './client.component';
import {PageClientReservationComponent} from './page-client-reservation/page-client-reservation.component';
import {PageClientContactsComponent} from './page-client-contacts/page-client-contacts.component';
import {PageClientTotalComponent} from './page-client-total/page-client-total.component';
import {ClientRouting} from '@app/client/client.routing';
import {RestaurantItemModule} from '@app/modules/restaurant-item/restaurant-item.module';
import {GuestsSelectorModule} from '@app/ui/guests-selector/guests-selector.module';
import {DateSelectorModule} from '@app/ui/date-selector/date-selector.module';
import {TimeSelectorModule} from '@app/ui/time-selector/time-selector.module';
import {TableSelectorModule} from '@app/ui/table-selector/table-selector.module';
import {MatDialogModule} from '@angular/material';
import {ReactiveFormsModule} from '@angular/forms';
import {TextareaModule} from '@app/ui/textarea/textarea.module';
import {ClientHeaderModule} from '@app/shared/client-header/client-header.module';
import {UiGroupSelectorModule} from '@app/ui/ui-group-selector/ui-group-selector.module';
import {PageClientConfirmComponent} from './page-client-confirm/page-client-confirm.component';
import {ReservationInfoModule} from '@app/modules/reservation-info/reservation-info.module';
import {NgxMaskModule} from 'ngx-mask';
import {ReservationDepositModule} from '@app/modules/reservation-deposit/reservation-deposit.module';


@NgModule({
  declarations: [
    ClientComponent,
    PageClientReservationComponent,
    PageClientContactsComponent,
    PageClientTotalComponent,
    PageClientConfirmComponent
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    ClientRouting,
    RestaurantItemModule,
    GuestsSelectorModule,
    DateSelectorModule,
    TimeSelectorModule,
    TableSelectorModule,
    TextareaModule,
    ReactiveFormsModule,
    ClientHeaderModule,
    UiGroupSelectorModule,
    ReservationInfoModule,
    NgxMaskModule.forRoot(),
    ReservationDepositModule
  ]
})
export class ClientModule {
}
