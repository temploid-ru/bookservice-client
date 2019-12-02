import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {DashboardComponent} from './dashboard.component';
import {BookAddComponent} from '@app/restaurant/dashboard/book-add/book-add.component';
import {BookEditComponent} from '@app/restaurant/dashboard/book-edit/book-edit.component';
import {BookDetailsComponent} from '@app/restaurant/dashboard/book-details/book-details.component';


const routes: Routes = [
  {path: '', component: DashboardComponent},
  {path: 'add', component: BookAddComponent},
  {path: 'edit/:id', component: BookEditComponent},
  {path: 'details/:id', component: BookDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRouting {
}
