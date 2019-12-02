import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {PageClientReservationComponent} from '@app/client/page-client-reservation/page-client-reservation.component';
import {PageClientContactsComponent} from '@app/client/page-client-contacts/page-client-contacts.component';
import {PageClientTotalComponent} from '@app/client/page-client-total/page-client-total.component';
import {PageClientConfirmComponent} from '@app/client/page-client-confirm/page-client-confirm.component';


const routes: Routes = [
  {path: '', component: PageClientReservationComponent},
  {path: 'contacts', component: PageClientContactsComponent},
  {path: 'confirm', component: PageClientConfirmComponent},
  {path: 'total/:id', component: PageClientTotalComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRouting {
}
