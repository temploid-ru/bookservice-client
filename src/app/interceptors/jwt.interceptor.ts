import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {SessionService} from '@app/_services/session/session.service';

@Injectable({providedIn: 'root'})
export class JwtInterceptor implements HttpInterceptor {

  constructor(private sessionS: SessionService) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (!request.body.token) {
      request = request.clone({
        body: {
          ...request.body,
          token: this.sessionS.session$.getValue().token || null
        }
      });
    }

    return next.handle(request);
  }
}
