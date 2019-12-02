import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AuthRouting} from './auth.routing';
import {PageLoginComponent} from './page-login/page-login.component';
import {PageRegistrationComponent} from './page-registration/page-registration.component';
import {ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    PageLoginComponent,
    PageRegistrationComponent
  ],
  imports: [
    CommonModule,
    AuthRouting,
    ReactiveFormsModule
  ]
})
export class AuthModule {
}
