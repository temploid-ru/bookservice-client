import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {PageLoginComponent} from '@app/restaurant/auth/page-login/page-login.component';
import {PageRegistrationComponent} from '@app/restaurant/auth/page-registration/page-registration.component';


const routes: Routes = [
  {path: '', component: PageLoginComponent},
  {path: 'register', component: PageRegistrationComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRouting {
}
