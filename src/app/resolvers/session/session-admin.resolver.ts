import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot} from '@angular/router';
import {LocalStorageService} from 'ngx-webstorage';
import {Observable, of} from 'rxjs';
import {LoginResponse, SessionService} from '@app/_services/session/session.service';
import {tap} from 'rxjs/operators';
import * as moment from 'moment';

@Injectable({providedIn: 'root'})
export class SessionAdminResolver implements Resolve<any> {

  constructor(private localStorage: LocalStorageService,
              private sessionS: SessionService,
              private router: Router) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<LoginResponse> {
    const session: LoginResponse = this.localStorage.retrieve('session');
    if (moment(session.expirationTime).isSameOrBefore(moment.now())) {
      this.router.navigateByUrl('/admin/auth');
      return;
    }

    if (session && session.token && !!session.is_admin) {
      this.sessionS.session$.next(session);
      return of(session);
    }

    return this.sessionS.login()
      .pipe(tap(res => {
        if (!res.is_admin) {
          this.router.navigateByUrl('/admin/auth');
        }
      }));
  }
}
