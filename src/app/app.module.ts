import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {AppRouting} from './app.routing';
import {RouterModule} from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AkitaNgDevtools} from '@datorama/akita-ngdevtools';
import {environment} from '@env/environment';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {UiNotificationModule} from '@app/ui/ui-notification/ui-notification.module';
import {KitOverlayModule} from '@ngx-kit/core';
import {ApiUrlInterceptor} from '@app/interceptors/api-url.interceptor';
import {NgxWebstorageModule} from 'ngx-webstorage';
import {JwtInterceptor} from '@app/interceptors/jwt.interceptor';
import {ErrorInterceptor} from '@app/interceptors/error.interceptor';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRouting,
    RouterModule,
    HttpClientModule,
    environment.production ? [] : AkitaNgDevtools.forRoot(),
    UiNotificationModule.forRoot(),
    NgxWebstorageModule.forRoot(),
    KitOverlayModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ApiUrlInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
