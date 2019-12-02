import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {LocalStorageService} from 'ngx-webstorage';
import {Observable, of} from 'rxjs';
import {LoginResponse, SessionService} from '@app/_services/session/session.service';
import * as moment from 'moment';

@Injectable({providedIn: 'root'})
export class SessionResolver implements Resolve<any> {

  constructor(private localStorage: LocalStorageService,
              private sessionS: SessionService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<LoginResponse> {
    const session: LoginResponse = this.localStorage.retrieve('session');

    if (!session || !session.expirationTime || moment(session.expirationTime).isSameOrBefore(moment.now())) {
      return this.sessionS.login();
    }

    if (session && session.token) {
      this.sessionS.session$.next(session);
      return of(session);
    }

    return this.sessionS.login();
  }
}
